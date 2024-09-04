import React, { createContext, useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [auth_token, setAuth_token] = useState(() => localStorage.getItem("access_token") || null);

  const server_url = "http://127.0.0.1:5000";

  // LOGIN USER
  const login = async (email, password) => {
    try {
      const response = await fetch(`${server_url}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();
      if (res.access_token) {
        console.log(res.access_token);
        
        setAuth_token(res.access_token);
        localStorage.setItem("access_token", res.access_token);
        toast.success("Logged in Successfully!");
        navigate("/");
      } else {
        toast.error(res.error || "An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  // LOGOUT USER
  const logout = () => {
    localStorage.removeItem("access_token");
    setAuth_token(null);
    setCurrentUser(null);
    navigate("/login");
    toast.success("Logged out successfully!");
  };

  useEffect(() => {
    if (auth_token) {
      const fetchCurrentUser = async () => {
        try {
          const response = await fetch(`${server_url}/current_user`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${auth_token}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          if (data.email) {
            setCurrentUser(data);
          } else {
            localStorage.removeItem("access_token");
            setCurrentUser(null);
            setAuth_token(null);
            navigate("/login");
          }
        } catch (error) {
          localStorage.removeItem("access_token");
          setCurrentUser(null);
          setAuth_token(null);
          navigate("/login");
          toast.error("An error occurred: " + error.message);
        }
      };

      fetchCurrentUser();
    }
  }, [auth_token, navigate, server_url]);

  const contextData = {
    auth_token,
    currentUser,
    setCurrentUser,
    login,
    logout
  };

  return (
    <UserContext.Provider value={contextData}>
      {children}
    </UserContext.Provider>
  );
};
