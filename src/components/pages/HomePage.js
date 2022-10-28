import React, { useState } from 'react';
import Slider from "./Slider";
import OurServices from "./OurServices";

import AboutImg from '../../assets/AboutImg.jpg'
import Craftsmen from '../../assets/craftsmen.png'
import Phone from '../../assets/phone.svg'
import Clock from '../../assets/clock.svg'
import Email from '../../assets/email.svg'






function HomePage() {
  return (

    <div class=' w-full h-full bg-gray-200'>
      {/* Linking to slider.js  */}
      <Slider />
      {/* Linking to ourservices.js  */}
      <OurServices />




      {/* new div */}
      <div className='w-full h-full  ' >

        {/* div for Why Hamro Mistiri */}
        <div id="#AboutUs" className=' bg-[#30333a] h-full w-full p-[40px] md:px-[200px] text-white border-b-[9px] border-[#ffffff] '>
          <div className=' p-5  font-bold border-l-[10px] md:border-l-[30px] border-[#f39818]  italic'>
            <svg aria-hidden="true" class="mx-auto  w-12 h-12 text-gray-400 dark:text-[#f39818]q" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
            <div className='text-2xl md:text-[30px] text-center pb-4'>
              Why Hamro Mistiri ?</div>
            <div className='md:text-[20px]'>
              During this pandemic, many lost their job and those who were working abroad were forced to return to their country, this created increase in the unemployment rate. We a team of three members called 'Three Motivated Minds' decided to help those people who have skills but no employment opportunities. We create this web application so that people having some skills in plumbing, painting, etc. can find a way to earn their leaving by marketing their skills on our website. We believe in bringing smiles to the faces of those people who weren't able to even think about it.

            </div>
          </div>
        </div>

        {/* div for About Us */}
        <div className=' md:grid grid-cols-5 ' id="#AboutUs">
          <div className='col-span-2 grow bg-white'>
            <img className='hover:hue-rotate-15 ' src={AboutImg} alt="/" />

          </div>
          <div className='col-span-3 bg-gray-200 text-bg-[#30333a] p-[45px] text-[15px]'>

            <div className='text-2xl font-bold md:text-[30px] text-center italic pb-6 underline decoration-[#f9bb65] underline-offset-8 hover:text-[33px] '>
              About Us</div>
            <div className=' '>

              <div className='pb-5 first-letter:float-left first-letter:mr-4 first-letter:text-5xl  first-letter:text-bg-[#30333a]first-letter:font-bold hover:italic'>
                The home services system is in high demand as it is incredibly useful for everybody in this busy schedule lifestyle. ​‘Hamro Mistiri’ is a web application that will let users search for home services online . The services include Plumber, Mechanics, Electrician, Technician, etc. ​It will provide freelancing opportunities for service providers. ​Home Service Providers and customers are only two users of our system. The home service providers are required to register to this website mentioning their roles. The users who are in need of services can browse the services provided and check the review of service providers. ​This web application will be beneficial to the individual especially for the ones who are relocating from one area to a different area.</div>
              <div className='indent-8 hover:italic'>
                In a world which is filled with technical and digital advancement, it is sad to see that we ​people are still used to the old non-effective and traditional ways of finding the service ​providers. ​Whenever we are in need of a service we contact the service providers that we already know and that limits us to the only option. The main problem is that we don’t have any other service providers besides them and we have no choices or ways to get to them.​So to solve this very problem we are building a web application that allows the users to get a vast possible availability of those service providers through our web application.
              </div>
            </div>
          </div>
        </div>




        {/* div for Become a part of Hamro Mistiri Family Today! */}
        <div className=' md:grid grid-cols-5  md:h-[450px] w-full bg-[#f59c20] border-y-[7px] border-[#ffffff]'>

          <div className='md:py-[150px] py-16 md:text-right col-span-3 md:pl-[90px] text-xl text-center '>
            <div className='text-2xl  md:text-[30px]  md:pb-4 font-bold '>
              Become a part of Hamro Mistiri Family Today!</div>
            Get updated about latest news, offers and lots of other exiciting things. You are just a few minutes away from being part of something great. Don't miss this opportunity.
            <div className='text-center pl-[40px] pt-5'>
              <a href=""> <button className='bg-slate-900 text-white p-[5px] px-5 rounded-3xl hover:bg-[#30333a]'>Join Us </button></a>
            </div>

          </div>
          <div className='col-span-2 sm:pl-28 md:p-[50px]  '>

            <img className=' hover:hue-rotate-15 h-[250px]' src={Craftsmen} alt="/" />

          </div>
        </div>
{/* div for Contact us */}
        <div className=' md:grid grid-cols-2 bg-white md:h-[500px] w-full '>
          <div className='p-10 pb-1 md:p-24'>
            <div className='text-2xl font-bold md:text-[35px] text-center italic pb-6 md:hover:text-[37px] hover:text-[27px] '>
              Contact Us</div>
            <div className='  text-black m-20 mt-2'>
              <div className=' md:grid grid-cols-4 py-4'>
                <img className=' pl-16 hover:hue-rotate-15 ' src={Phone} alt="/" />
                <div className='col-span-3'>Call us:
                  <div>(+971) 9860123456</div>
                </div>
              </div>
              <div className=' md:grid grid-cols-4'>
                <img className=' pl-16 hover:hue-rotate-15 ' src={Email} alt="/" />
                Email
                support@sabaikomistiri.com
              </div>
              <div className=' md:grid grid-cols-4 py-4'>
                <img className=' pl-16 hover:hue-rotate-15 ' src={Clock} alt="/" />
                <div className='col-span-3'>
                  <div>Working Hours:</div>
                  Sun-Fri (10:00am-5:00pm)</div>
              </div>

            </div>
          </div>
          <div className='h-full w-full '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3531.2479267161866!2d85.336958!3d27.740498!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19462d22bdff%3A0xf8bc1fa59ce305!2sNarayan%20Gopal%20Chowk%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1666223766524!5m2!1sen!2snp" width="785" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

{/* About us,quicklinks and follow us Secction */}
        <div className=''>


          <div className=' md:grid grid-cols-3 bg-[#31333a]  md:h-[330px] w-full  px-[250px] pt-[70px] text-white text-center '>
            <div className='pb-12'>
              <div className='text-xl font-bold pb-3'> About Us<hr className='border-[#f79f24] m-5 ' /> </div>
              <div class="list-none leading-loose">
                <li>The home services system is in high demand</li>
                <li> as it is incredibly useful...</li>
                <a href="LogInUser"><button className='transition ease-in-out delay-150 border-none bg-transparent text-[#ffc676] hover:text-[#c4770d] hover:cursor-pointer mr-4 px-5 py-1 '>Read More...</button></a>


              </div>

            </div>
            <div className='pb-12'>
              <div className='text-xl font-bold pb-3'> QuickLinks<hr className='border-[#f79f24] m-5 ' /> </div>
              <ul class="list-none leading-loose  ">
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Home</li></a>
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Services</li></a>
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Become A Professional</li></a>
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Contact Us</li></a>

              </ul>

            </div>
            <div className='pb-12'>
              <div className='text-xl font-bold pb-3'> Follow Us<hr className='border-[#f79f24] m-5 ' /> </div>
              <ul class="list-none leading-loose  ">
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Facebook</li></a>
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Instagram</li></a>
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Twitter</li></a>
                <a href="LogInUser"><li className='hover:text-[#c4770d] '>Google</li></a>

              </ul>

            </div>
          </div>
        </div>




      </div>













    </div>



  );

}

export default HomePage;
