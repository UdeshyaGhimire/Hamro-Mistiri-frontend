import React, { useState } from 'react';
import LogInImg from '../../assets/login.jpg'


function LogInUser() {
  return (

    <div className='relative w-full h-screen bg-zinc-900/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={LogInImg} alt="/" />
       <div className='flex justify-center items-center h-full'>

        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-4xl font-bold text-center py-4 text-[#30333a]'>User Log In</h2>
          <div>
            <p></p>

          </div>
          <div className='flex flex-col mb-4'>

            <input className='border relative bg-gray-100 p-2 ' placeholder="Username" type="text" />


          </div>
          <div className='flex flex-col'>

            <input className='border relative bg-gray-100 p-2 ' placeholder="Password" type="text" />
          </div>
          <div className='flex flex-col'>
            <button className='w-full py-3 mt-8 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
              Sign In
            </button>
          </div>
          <div className=' text-center mt-8'>
          <p className='text-lg text-center mt-8'>Want to Log In as a <a className='text-xl font-bold relative text-black hover:text-[#fcb858] underline hover:decoration-solid  capitalize hover:uppercase' href="LogInMistiri">Mistiri</a> instead?</p>

          </div>
        </form>

      </div>

    </div>
  );
}

export default LogInUser;
