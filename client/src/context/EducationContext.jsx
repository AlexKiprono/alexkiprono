import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
  const navigate = useNavigate();

  const [education, setEducation] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [auth_token, setAuth_token] = useState(() => localStorage.getItem("access_token") || null);

  const server_url = "http://127.0.0.1:5000";

  const add_education = async (school,location,start_date,end_date,tags) => {
    try {
      // Ensure the required fields are provided and valid
      if (!school || !location || !start_date || !end_date || !tags) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/add_education`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ school,location,start_date,end_date,tags })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to add education";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("education added successfully!");
      
      // Navigate to the blog page
      navigate("/");
    } catch (error) {
      // Notify failure
      toast.error("Failed to add education: " + error.message);
    }
  };

  const update_education = async (id, school,location,start_date,end_date,tags) => {
    try {
      // Ensure the required fields are provided and valid
      if (!id || !school || !location || !start_date || !end_date || !tags) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/update_education/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ school,location,start_date,end_date,tags })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to update education";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("education updated successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to update education: " + error.message);
    }
  };

  const get_education = async () => {
    try {
      const response = await fetch(`${server_url}/get_education`, {
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to get education";
        throw new Error(errorMessage);
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Set the education state
      setEducation(data);
    } catch (error) {
      // Notify failure
      toast.error("Failed to get education: " + error.message);
      // Clear the education state
      setEducation([]);
    }
  };

  const delete_education = async (id) => {
    try {
      const response = await fetch(`${server_url}/delete_education/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to delete education";
        throw new Error(errorMessage);
      }

      // Notify success
      toast.success("education deleted successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to delete education: " + error.message);
    }
  };

  // Assuming you want to fetch the current user
  const fetchCurrentUser = async () => {
    try {
      const response = await fetch(`${server_url}/current_user`, {
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to fetch user";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setCurrentUser(data);
    } catch (error) {
      toast.error("Failed to fetch user: " + error.message);
    }
  };

  // Optionally, you can fetch current user on component mount
  useEffect(() => {
    if (auth_token) {
      fetchCurrentUser();
    }
  }, [auth_token]);

  const contextData = {
    auth_token,
    currentUser,
    setCurrentUser,
    add_education,
    get_education,
    update_education,
    delete_education,
    fetchCurrentUser
  };

  return (
    <EducationContext.Provider value={contextData}>
      {children}
    </EducationContext.Provider>
  );
};
