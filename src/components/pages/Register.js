import React from 'react';
import LogInImg from '../../assets/login.jpg'

function Register() {
  return (

    <div className='relative w-full h-screen bg-zinc-900/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={LogInImg} alt="/" />
      <div className='flex justify-center items-center h-full'>

        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>Register</h2>
          <div>
            <p></p>

          </div>
          <div className='flex flex-col mb-4'>

            <input className='border relative bg-gray-100 p-2 ' placeholder="Name" type="text" />


          </div>
          <div className='flex flex-col mb-4'>

            <input className='border relative bg-gray-100 p-2 ' placeholder="Username" type="text" />


          </div>
          <div className='flex flex-col'>

            <input className='border relative bg-gray-100 p-2 ' placeholder="Password" type="password" />
          </div>
          <button className='w-full py-3 mt-8 bg-[#eb9216] hover:bg-[#fcb858] relative text-white'>
            Register
          </button>
         
          <p className='text-center mt-8'>Already have an account? <a href="Register">Log In.</a></p>
          
          




        </form>
      </div>

 








    </div>
  );
}

export default Register;
