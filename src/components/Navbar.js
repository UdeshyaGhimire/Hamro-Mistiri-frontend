import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className=' w-screen h-[55px] z-10 bg-[#30333a] fixed drop-shadow-lg'>
      <div className='hidden md:flex pr-4'>
        <div className=' px-2 flex flex-row-reverse items-center w-full h-full'>
         
        <a href="Register"><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-3 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300'>Register</button></a>
          
          <div className='text-[#fea72b] mr-4'>/</div> 

           <a href="LogIn"><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-4 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300'>Log In</button></a>

        </div>
      </div>
      <div className=' w-screen h-[65px] z-10 bg-[#3d414a] fixed drop-shadow-lg'>
        <div className=' px-2 flex justify-between items-center w-full h-full'>
        
            <h1 className=' place-content-start font-bold text-[#3d414a] bg-[#fea72b] text-3xl sm:flex-shrink-0  mr-4 -ml-2 pl-7 pr-7 pt-3 pb-3 '>Hamro Mistiri</h1>
       
          <div className=' flex items-center pr-80 mr-20'>
            <ul className='font-semibold text-white hidden md:flex'>
              <a href="HomepPage"><li> Home</li> </a>
              <li>Our Services</li>
              <li>Become a Professional</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='md:hidden ' onClick={handleClick} >
            {nav ? <XIcon className='text-white w-5' /> : <MenuIcon className='text-white w-5 ' />}


          </div>

        </div>
        <ul className={!nav ? 'hidden' : 'absolute text-white bg-zinc-800 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li className='border-b-2 border-zinc-300 w-full'>Our Services</li>
          <li className='border-b-2 border-zinc-300 w-full'>Become a Professional</li>
          <li className='border-b-2 border-zinc-300 w-full'>About Us</li>
          <li className='border-b-2 border-zinc-300 w-full'>Contact Us</li>
          <div className='flex flex-col my-4'>
          <a href="LogIn"><button className='border-b-2 border-zinc-300 w-full bg-transparent px-8 py-3 mb-4'>Log In</button></a>
          <a href="Register"><button className=' px-8 py-3'>Register</button></a>
          </div>
        </ul>






      </div >
     
    
      </div>
      
      );
}

      export default Navbar;