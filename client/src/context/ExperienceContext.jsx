import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ExperienceContext = createContext();

export const ExperienceProvider = ({ children }) => {
  const navigate = useNavigate();

  const [experience, setExperience] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [auth_token, setAuth_token] = useState(() => localStorage.getItem("access_token") || null);

  const server_url = "http://127.0.0.1:5000";

  const add_experience = async (company,location,start_date,end_date,title,responsibilities,skills) => {
    try {
      // Ensure the required fields are provided and valid
      if (!company || !location || !start_date || !end_date || !title || !responsibilities || !skills) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/add_experience`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ company,location,start_date,end_date,title,responsibilities,skills })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to add experience";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("experience added successfully!");
      
      // Navigate to the blog page
      navigate("/");
    } catch (error) {
      // Notify failure
      toast.error("Failed to add experience: " + error.message);
    }
  };

  const update_experience = async (id, company,location,start_date,end_date,title,responsibilities,skills) => {
    try {
      // Ensure the required fields are provided and valid
      if (!company || !location || !start_date || !end_date || !title || !responsibilities || !skills) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/update_experience/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ company,location,start_date,end_date,title,responsibilities,skills })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to update experience";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("experience updated successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to update experience: " + error.message);
    }
  };

  const get_experience = async () => {
    try {
      const response = await fetch(`${server_url}/get_experience`, {
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to get experience";
        throw new Error(errorMessage);
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Set the experience state
      setExperience(data);
    } catch (error) {
      // Notify failure
      toast.error("Failed to get experience: " + error.message);
      // Clear the experience state
      setExperience([]);
    }
  };

  const delete_experience = async (id) => {
    try {
      const response = await fetch(`${server_url}/delete_experience/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to delete experience";
        throw new Error(errorMessage);
      }

      // Notify success
      toast.success("experience deleted successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to delete experience: " + error.message);
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
    add_experience,
    get_experience,
    update_experience,
    delete_experience,
    fetchCurrentUser
  };

  return (
    <ExperienceContext.Provider value={contextData}>
      {children}
    </ExperienceContext.Provider>
  );
};
