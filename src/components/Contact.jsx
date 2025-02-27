import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" 
            className='flex flex-col max-w-[600px] w-full bg-[#112240] p-8 rounded-lg shadow-lg shadow-[#112240]/50'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 transition-all duration-300 hover:border-[#64ffda]'>
            Contact
          </p>
          <p className='text-gray-400 py-4'>// Submit the form below or shoot me an email - 
            <span className='text-pink-600'> fareed.shaik@sasi.ac.in</span>
          </p>
        </div>

        {/* Name Input */}
        <input 
          className='bg-[#ccd6f6] p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all duration-300' 
          type="text" placeholder='Name' name='name' required />

        {/* Email Input */}
        <input 
          className='my-4 p-2 bg-[#ccd6f6] rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all duration-300' 
          type="email" placeholder='Email' name='email' required />

        {/* Message Input */}
        <textarea 
          className='bg-[#ccd6f6] p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all duration-300' 
          name="message" rows="6" placeholder='Message' required></textarea>

        {/* Submit Button */}
        <button 
          className='text-white border-2 border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md 
                     bg-gradient-to-r from-pink-600 to-purple-500 hover:from-purple-500 hover:to-pink-600 
                     hover:border-[#64ffda] hover:scale-105 transition-all duration-500 ease-in-out'>
          Let's Collaborate
        </button>
      </form>
    </div>
  )
}

export default Contact;
