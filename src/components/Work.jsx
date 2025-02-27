import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item, index) => (
            <div
              key={index}
              className="relative shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div overflow-hidden
                        transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Transparent Overlay (Removes Blue Effect) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300"></div>

              {/* Project Details */}
              <div className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-lg
                                transition-all duration-500 ease-in-out transform hover:scale-110 hover:from-purple-500 hover:to-blue-400 hover:shadow-lg hover:shadow-purple-500/50"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-lg
                                transition-all duration-500 ease-in-out transform hover:scale-110 hover:from-blue-500 hover:to-green-400 hover:shadow-lg hover:shadow-green-500/50"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
