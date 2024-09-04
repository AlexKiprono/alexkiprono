import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const navigate = useNavigate();

  const [project, setProject] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [auth_token, setAuth_token] = useState(() => localStorage.getItem("access_token") || null);

  const server_url = "http://127.0.0.1:5000";

  const add_project = async (title,image,url,description,technologies) => {
    try {
      if (!title || !image || !url || !description || !technologies) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/add_project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ title,image,url,description,technologies })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to add project";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("project added successfully!");
      
      // Navigate to the blog page
      navigate("/projects");
    } catch (error) {
      // Notify failure
      toast.error("Failed to add project: " + error.message);
    }
  };

  const update_project = async (id, title,image,url,description,technologies) => {
    try {
      // Ensure the required fields are provided and valid
      if (!title || !image || !url || !description || !technologies) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/update_project/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ title,image,url,description,technologies })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to update project";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("project updated successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to update project: " + error.message);
    }
  };

  const get_project = async () => {
    try {
      const response = await fetch(`${server_url}/get_project`, {
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to get project";
        throw new Error(errorMessage);
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Set the project state
      setProject(data);
    } catch (error) {
      // Notify failure
      toast.error("Failed to get project: " + error.message);
      // Clear the project state
      setProject([]);
    }
  };

  const delete_project = async (id) => {
    try {
      const response = await fetch(`${server_url}/delete_project/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to delete project";
        throw new Error(errorMessage);
      }

      // Notify success
      toast.success("project deleted successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to delete project: " + error.message);
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
    add_project,
    get_project,
    update_project,
    delete_project,
    fetchCurrentUser
  };

  return (
    <ProjectContext.Provider value={contextData}>
      {children}
    </ProjectContext.Provider>
  );
};
