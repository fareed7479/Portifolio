import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About 
            </p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Mahmmed Fareed, nice to meet you.</p>
            <p className='text-lg font-normal mt-4 text-gray-400'>
            As a B.Tech student in Computer Science, I am passionate about developing innovative software solutions that enhance everyday life. I specialize in building applications and systems that cater to individuals, small businesses, and large enterprises, continuously learning and applying new technologies.
          </p>

          </div>
          <div>
            <p className='text-2xl font-semibold pb-2 border-b-2 border-gray-500'>Education</p>
            <ul className='mt-4 space-y-4'>
              <li>
                <p className='text-lg font-bold'>2022 - Current | B.Tech - Computer Science & Engineering</p>
                <p className='text-gray-400'>Sasi Institute of Technology & Engineering - JNTUK</p>
                <p className='text-gray-400'>CGPA: 8.3</p>
              </li>
              <li>
                <p className='text-lg font-bold'>2020 - 2022 | Intermediate</p>
                <p className='text-gray-400'>Sasi Junior College - BIEAP</p>
                <p className='text-gray-400'>Percentage: 89%</p>
              </li>
              <li>
                <p className='text-lg font-bold'>2019 - 2020 | 10th (SSC)</p>
                <p className='text-gray-400'>Geetanjali E.M. School - SSC</p>
                <p className='text-gray-400'>Percentage: 99%</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
