import React, { useState } from 'react';
import Profile from './Profile';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import About from './About';
import Navbar from './Navbar';
import AddEducation from './Education/AddEducation';

const Home = () => {


  return (
    <>
      <Navbar />

      <div className="container w-full h-auto bg-white mx-auto mt-[8rem] md:mt-[10rem] rounded-[6px] p-4 flex flex-col md:flex-row items-center md:items-start gap-4">
        
        {/* Profile Section */}
        <div className="profile w-full h-auto mx-auto md:w-[30%] shadow flex justify-center md:justify-start items-center p-4">
          <Profile className="mx-auto" />
        </div>

        {/* Content Section */}
        <div className="content w-full h-auto md:w-[70%] bg-[#dbeafe] rounded-[8px] p-4 mt-4 md:mt-0">
          <About />

          {/* Education Section */}
          <div className="education mb-8">
            <p className="text-xl font-semibold p-4 bg-gray-100 rounded-t-lg shadow-md">Education</p>
            <AddEducation/>
          </div>
          <Education />
          <Education />

          {/* Experience Section */}
          <div className="experience mb-8">
            <p className="text-xl font-semibold p-4 bg-gray-100 rounded-t-lg shadow-md">Experience</p>
            <button
              type="button"
              className="text-blue-700 my-5 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
            >
              + Add Experience
            </button>
            <Experience />
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
