import React from 'react';

const Navbar = () => {
  return (
    <>
      <header
        className="fixed inset-x-0 top-0 w-[80vw] mx-auto mt-5 border border-gray-200 py-4 shadow-lg backdrop-blur-lg rounded-[8px]">
        <div className="px-6">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <span className="text-2xl font-extrabold text-blue-500 tracking-wide hover:text-gray-200 transition-all duration-300">Alex Kiprono</span>
              </a>
            </div>
            <div className="flex items-center justify-end gap-6">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-3 py-2 text-lg font-medium text-blue-500 transition-all duration-300 hover:bg-white/20 hover:text-gray-100"
                href="/projects"
              >
                Projects
              </a>
              <a
                className="inline-block rounded-lg px-3 py-2 text-lg font-medium text-blue-500 transition-all duration-300 hover:bg-white/20 hover:text-gray-100"
                href="/blogs"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
