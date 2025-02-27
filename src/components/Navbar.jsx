import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
//import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        {/* Placeholder for Logo */}
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex space-x-6'>
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li key={item} className='relative group'>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className='text-gray-300 group-hover:text-white transition-colors duration-300 cursor-pointer'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300'></span>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li key={item} className='py-6 text-4xl relative group'>
            <Link
              onClick={handleClick}
              to={item}
              smooth={true}
              duration={500}
              className='text-gray-300 group-hover:text-white transition-colors duration-300 cursor-pointer'
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300'></span>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/mahmmed-fareed-shaik-18b916280/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/fareed7479'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/resume.pdf'
              download="Fareed's Resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
