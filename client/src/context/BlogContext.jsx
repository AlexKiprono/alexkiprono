import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const navigate = useNavigate();

  const [blogposts, setBlogposts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [auth_token, setAuth_token] = useState(() => localStorage.getItem("access_token") || null);

  const server_url = "http://127.0.0.1:5000";

  const add_blogpost = async (title, content, image, date_published) => {
    try {
      // Ensure the required fields are provided and valid
      if (!title || !content || !image || !date_published) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/add_blogpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ title, content, image, date_published })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to add blogpost";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("Blogpost added successfully!");
      
      // Navigate to the blog page
      navigate("/blog");
    } catch (error) {
      // Notify failure
      toast.error("Failed to add blogpost: " + error.message);
    }
  };

  const update_blogpost = async (id, title, content, image, date_published) => {
    try {
      // Ensure the required fields are provided and valid
      if (!id || !title || !content || !image || !date_published) {
        throw new Error("All fields are required.");
      }
  
      const response = await fetch(`${server_url}/update_blogpost/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth_token}`
        },
        body: JSON.stringify({ title, content, image, date_published })
      });
  
      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to update blogpost";
        throw new Error(errorMessage);
      }
  
      // Notify success
      toast.success("Blogpost updated successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to update blogpost: " + error.message);
    }
  };

  const get_blogposts = async () => {
    try {
      const response = await fetch(`${server_url}/get_blogposts`, {
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to get blogposts";
        throw new Error(errorMessage);
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Set the blogposts state
      setBlogposts(data);
    } catch (error) {
      // Notify failure
      toast.error("Failed to get blogposts: " + error.message);
      // Clear the blogposts state
      setBlogposts([]);
    }
  };

  const delete_blogpost = async (id) => {
    try {
      const response = await fetch(`${server_url}/delete_blogpost/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth_token}`
        }
      });

      // Check if the response is OK
      if (!response.ok) {
        // Try to parse the error message from the response body
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to delete blogpost";
        throw new Error(errorMessage);
      }

      // Notify success
      toast.success("Blogpost deleted successfully!");
    } catch (error) {
      // Notify failure
      toast.error("Failed to delete blogpost: " + error.message);
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
    add_blogpost,
    get_blogposts,
    update_blogpost,
    delete_blogpost,
    fetchCurrentUser
  };

  return (
    <BlogContext.Provider value={contextData}>
      {children}
    </BlogContext.Provider>
  );
};
