import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { BlogProvider } from "./context/BlogContext";
import { ProjectProvider } from "./context/ProjectContext"; 
import { EducationProvider } from "./context/EducationContext"; 
import { ExperienceProvider } from "./context/ExperienceContext";

import Home from "./components/Home";
import Login from "./components/Login";
import Projects from "./components/Project/Projects";
import Blog from "./components/Blog/Blog"; 
import BlogDetails from "./components/Blog/BlogDetails"; 


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <EducationProvider>
          <ExperienceProvider>
            <ProjectProvider>
              <BlogProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="blogpost/:id" element={<BlogDetails />} />
                </Routes>
              </BlogProvider>
            </ProjectProvider>
          </ExperienceProvider>
        </EducationProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
