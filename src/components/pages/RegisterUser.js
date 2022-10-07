import React from 'react';
import LogInImg from '../../assets/login.jpg'

function RegisterUser() {
  return (


    <div className='relative w-full h-[900px] bg-zinc-900/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={LogInImg} alt="/" />
      <div className='flex justify-center items-center h-full'>

        <form className='max-w-[600px] w-full mx-auto bg-white p-9 pt-2'>
          <h2 className='text-4xl text-[#30333a]  font-bold text-center py-4'>User Registration</h2>
          {/* 
          <div>
            <p></p>
          </div> */}

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="First Name" type="text" />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Last Name" type="text" />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Username" type="text" />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Email" type="email" />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Password" type="password" />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Phone Number" type="number" />
          </div>

          <div className='flex flex-col mb-4'>
            <input className='border relative bg-gray-100 p-2 ' placeholder="Location" type="text" />
          </div>

       
          
        
          <button className='w-full py-3 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
            Register
          </button>

          <p className='text-lg text-center mt-8'>Want to Register as a <a className='text-xl font-bold relative text-black hover:text-[#fcb858] underline hover:decoration-solid  capitalize hover:uppercase' href="RegisterMistiri">Mistiri</a> instead?</p>



        </form>
      </div>

    </div>
  );
}



export default RegisterUser;







