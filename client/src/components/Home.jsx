import React from 'react';
import Profile from './Profile';
import Education from './Education';
import Experience from './Experience';
import About from './About';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar/>

      <div className="container w-full h-auto bg-white mx-auto mt-[8rem] md:mt-[10rem] rounded-[6px] p-4 flex flex-col md:flex-row items-center md:items-start gap-4">
        
        {/* Profile Section */}
        <div className=" profile w-full h-auto mx-auto md:w-[30%] shadow flex justify-center md:justify-start items-center p-4">
          <Profile className="mx-auto"/>
        </div>

        {/* Content Section */}
        <div className="content w-full h-auto md:w-[70%] bg-[#dbeafe] rounded-[8px] p-4 mt-4 md:mt-0">
          <About/>

          {/* Education Section */}
          <div className="education">
            <p className='text-xl p-4 shadow'>
              Education
            </p>
          </div>
          <Education/>
          <Education/>

          {/* Experience Section */}
          <div className="experience">
            <p className='text-xl p-4 shadow'>
              Experience
            </p>
          </div>
          <Experience/>
          <Experience/>

        </div>
      </div>
    </>
  );
};

export default Home;
