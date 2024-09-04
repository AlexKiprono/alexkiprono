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
        <br className='mb-4'/>
        <button type="button" className="text-blue-700 my-5 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">+ Add Project</button>
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

      <div className="mt-4 flex flex-row justify-between">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
          Project Title
        </h3>
        <ul>
          <li className='flex gap-1'>
            {/* <!-- Edit Button --> */}
            <p className='hover:bg-blue-400 hover:scale-105 hover:shadow-lg cursor-pointer p-2 rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600 hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </p>

            {/* <!-- Delete Button --> */}
            <p className='hover:bg-red-400 hover:scale-105 hover:shadow-lg cursor-pointer p-2 rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-600 hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </p>
          </li>
        </ul>
      </div>
      <div className="description">
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
