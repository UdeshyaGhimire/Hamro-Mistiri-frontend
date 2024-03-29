import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handelLogOut = (event) => {
    localStorage.clear();
    window.location.href = "/loginuser";
  };


  return (
    <div className=' w-screen h-[55px] z-10 bg-[#30333a] fixed drop-shadow-lg'>
      <div className='hidden md:flex pr-4'>
        {/* Top first row of navbar containing login and register */}
        {localStorage.getItem("userId")
          ? <div className=' px-2 flex flex-row-reverse items-center w-full h-full'>
            {localStorage.getItem("role") === "Mistiri" ?
            <>
            <Link to={`/dashboardmistiri/${localStorage.getItem("userId")}`}>
              <a ><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-3 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300 hover:text-[#3d414a] '>{localStorage.getItem("name")}</button></a>
              </Link>
            </>:<></>}


            {localStorage.getItem("role") === "Customer" ?
            <>
            <Link to={`/dashboarduser/${localStorage.getItem("userId")}`}>
              <a ><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-3 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300 hover:text-[#3d414a] '>{localStorage.getItem("name")}</button></a>
              </Link>
            </>:<></>}


            {localStorage.getItem("role") === "admin" ?
            <>
            <Link to={`/dashboardadmin`}>
              <a ><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-3 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300 hover:text-[#3d414a] '>{localStorage.getItem("name")}</button></a>
              </Link>
            </>:<></>}



            

            <div className='text-[#fea72b] mr-4'>/</div>


            <a><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-4 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300 hover:text-[#3d414a] ' onClick={handelLogOut}>Log Out</button></a>
          </div>
          :
          <div className=' px-2 flex flex-row-reverse items-center w-full h-full align-right'>

            <a href="/RegisterUser"><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-3 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300 hover:text-[#3d414a] '>Register</button></a>

            <div className='text-[#fea72b] mr-4'>/</div>

            <a href="LogInUser"><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#fea72b] mr-4 px-5 py-1 hover:-translate-y-1 hover:scale-110 hover:bg-[#fea72b] shadow hover:shadow-[#fea72b] duration-300 hover:text-[#3d414a] '>Log In</button></a>

          </div>
        }


      </div>
      {/* Second row of navbar  */}
      <div className=' w-screen h-[65px] z-10 bg-[#3d414a] fixed drop-shadow-lg'>
        <div className=' px-2 flex justify-between items-center w-full h-full'>

          <a href='/'> <h1 className=' place-content-start font-bold text-[#3d414a] bg-[#fea72b] text-lg md:text-3xl sm:flex-shrink-0  mr-4 -ml-2 pl-7 pr-7 pt-3 pb-3 '>Hamro Mistiri</h1></a>

          <div className=' flex items-center pr-80 mr-20'>
            <ul className='font-semibold text-white hidden md:flex  '>
              <a href='/'><li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'> Home</li> </a>
              <AnchorLink offset='100' href='/#Services'> <li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'>Our Services</li></AnchorLink>
              <AnchorLink offset='170' href='/#JoinUs'> <li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'>Become a Professional</li></AnchorLink>
              <AnchorLink offset='-150' href='/#AboutUs'>  <li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'>About Us</li></AnchorLink>
              <AnchorLink activeClass="active" hashSpy={true} offset='130' href='/#ContactUs'>  <li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'>Contact Us</li></AnchorLink>
              {localStorage.getItem("role") === "Mistiri" ?
                <Link to={`/dashboardmistiri/${localStorage.getItem("userId")}`}>  <a activeClass="active" hashSpy={true} offset='130' >  <li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'>Dashboard</li></a></Link>
                : <></>
              }

              {localStorage.getItem("role") === "Customer" ?
                <Link to={`/dashboarduser/${localStorage.getItem("userId")}`}>  <a activeClass="active" hashSpy={true} offset='130' >  <li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'>Dashboard</li></a></Link>
                : <></>
              }

              {localStorage.getItem("role") === "admin" ?
                <Link to={`/dashboardadmin`}>  <a activeClass="active" hashSpy={true} offset='130' >  <li className='hover:text-[#f9bb65] hover:cursor-pointer p-4'>Dashboard</li></a></Link>
                : <></>
              }

            </ul>
          </div>

          {/* Responsive Navbar */}

          <div className='md:hidden ' onClick={handleClick} >
            {nav ? <XIcon className='text-white w-5' /> : <MenuIcon className='text-white w-5 ' />}


          </div>

        </div>

        <ul className={!nav ? 'hidden' : 'absolute text-white bg-zinc-800 w-full px-8 text-center'}>

          <a href="/"><li className='border-b-2 border-zinc-300 w-full hover:text-[#f9bb65] hover:cursor-pointer p-4 '>Home</li></a>
          <AnchorLink offset='100' href='/#Services'> <li className='border-b-2 border-zinc-300 w-full hover:text-[#f9bb65] hover:cursor-pointer p-4'>Our Services</li></AnchorLink>
          <AnchorLink offset='170' href='/#JoinUs'><li className='border-b-2 border-zinc-300 w-full hover:text-[#f9bb65] hover:cursor-pointer p-4'>Become a Professional</li></AnchorLink>
          <AnchorLink offset='-150' href='/#AboutUs'> <li className='border-b-2 border-zinc-300 w-full hover:text-[#f9bb65] hover:cursor-pointer p-4'>About Us</li></AnchorLink>
          <AnchorLink activeClass="active" hashSpy={true} offset='130' href='/#ContactUs'><li className='border-b-2 border-zinc-300 w-full hover:text-[#f9bb65] hover:cursor-pointer p-4'>Contact Us</li></AnchorLink>
          <div className='flex flex-col my-4'>
            <a href="LogInUser"><button className='border-b-2 border-zinc-300 w-full bg-transparent px-8 py-3 mb-4  hover:text-[#3d414a]  hover:bg-[#fea72b] hover:border-[#fea72b]'>Log In</button></a>
            <a href="RegisterUser"><button className=' w-full px-8 py-3  hover:text-[#3d414a]  hover:bg-[#fea72b] hover:border-[#fea72b]'>Register</button></a>
          </div>
        </ul>






      </div >


    </div>

  );
}

export default Navbar;