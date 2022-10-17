import React, { useEffect, useState } from 'react'
import HireImg from '../../assets/hire.jpg'

 


const Popup = props => {
   
  return (
    <div className='fixed inset-0 bg-clack bg-opacity-30 backdrop-blur-sm flex justify-center items-center'> 
    
    <div className='rounded-xl border-[5px] border-[#484949] mt-[165px]  grid grid-cols-1 md:grid-cols-2 bg-white m-auto h-[550px] shadow-lg  shadow-gray-200 sm:max-w-[900px]  '>
      <div className=' flex w-full h-[540px] hidden md:block'>
        <img className='inline w-full h-full' src={HireImg} alt="/" />
      </div>
      <div className='p-4 flex flex-col justify-around '>

        <form ><span className="close-icon" onClick={props.handleClose}>x</span>

      

        <h2 className='text-4xl font-bold text-center pt-0 py-4'>Hirfe Me</h2>
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
        <button className='w-full py-3 mt-8 bg-[#666668] hover:bg-[#26282e] relative text-white hover:bold'>
          Sign In
        </button>
       </div>
       <div className=' text-center mt-8'>
        <p className='text-lg text-center mt-8'>Want to Log In as a <a className='text-xl font-bold relative text-black hover:text-[#fcb858] underline hover:decoration-solid  capitalize hover:uppercase' href="LogInUser">User</a> instead?</p>

        </div>


        </form>
        
      </div>
    </div>
</div>
    


  );
};
 
export default Popup;