import React from 'react';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mt-5 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300 transform hover:scale-110 cursor-pointer">

      <a href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      </a>

    </div>
      <div className="text mb-5 mt-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Projects I've made trying to put <br /> my dent in the universe.
        </h1>
        <span className='text-base sm:text-lg md:text-xl'>
          I've been trying to learn more about dentistry to improve my <br />
          dental hygiene and overall health. Here are some of the projects I've been working on.
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
  ].map((image, index) => (
    <a
      key={index}
      href="#"
      className="relative block overflow-hidden rounded-lg border border-gray-300 p-4 sm:p-6 lg:p-8 transition-transform duration-300 hover:scale-105 hover:border-blue-400 hover:border-2 hover:shadow-lg"
    >
      <img
        alt=""
        src={image}
        className="h-48 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-56 md:h-64 lg:h-72"
      />

      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          Project Title
        </h3>
        <p className="mt-1 text-sm text-gray-600">Description</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Demo</dt>
          <dd className="text-xs text-gray-500">https://alexkiprono.vercel.app</dd>
        </div>
      </dl>
    </a>
  ))}
</div>

    </div>
  );
};

export default Projects;
