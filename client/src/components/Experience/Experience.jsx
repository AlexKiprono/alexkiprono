import React from 'react'

const Experience = () => {
  return (
    <div>
      <section className="mb-4 border bg-neutral-100 p-6 rounded-lg max-w-full shadow-lg">
        <div className="mx-auto">
            <div className="card md:flex max-w-2xl items-center">
                    
            <div className="flex-grow text-center md:text-left">
              
            <div className="head flex flex-row justify-between">
              <p className="font-bold text-lg mb-2">
                The Cooperative University of Kenya
                <span className="block text-sm text-gray-500">May 2017 - Dec 2020</span>
              </p>

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
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Nairobi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta necessitatibus iste ducimus facilis obcaecati, maxime dolorum dolor? Porro consectetur delectus aut omnis temporibus. Nemo incidunt blanditiis placeat corrupti saepe!
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-red-200 text-red-800 border border-red-300 px-3 py-1.5 rounded-lg text-sm">
                    Network
                </span>
                <span className="bg-gray-700 text-white border border-gray-600 px-3 py-1.5 rounded-lg text-sm">
                    Cyber Security
                </span>
                <span className="bg-yellow-200 text-yellow-800 border border-yellow-300 px-3 py-1.5 rounded-lg text-sm">
                    Web Development
                </span>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Experience
