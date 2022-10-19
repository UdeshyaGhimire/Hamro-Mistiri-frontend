import React from 'react';
import { useState } from 'react';
import HireImg from '../../assets/hire.jpg'
import RateImg from '../../assets/RateImg.jpg'
import Painter from "./Painter";



function RateMe() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <Painter />



      <div className='fixed inset-0 bg-clack bg-opacity-30 bg-zinc-800/60 backdrop-blur-sm flex justify-center items-center'>

        <div className='rounded-xl border-[5px] border-[#484949] mt-[165px]  grid grid-cols-1 md:grid-cols-2 bg-white m-auto h-[550px] shadow-lg  shadow-gray-200 sm:max-w-[900px]  '>
        <div className=' flex w-full h-[540px] hidden md:block'>
            <img className='inline w-full h-full' src={RateImg} alt="/" />
          </div>

          <div className='p-4  '>
            {/* to close form */}
            <a className='flex justify-end text-2xl font-bold text-gray-400 ' href='/'><button className='  '></button>X</a>

            {/* Form starts here */}
            <form className='pt-[55px]'>

              <h2 className='text-4xl font-bold text-center pt-0 py-8 hover:text-[#f09e2a] '>Please Leave Us A Review!</h2>

              <div className='flex  flex-col mb-4 '>
                <div className='border relative bg-gray-100 p-2 text-left rounded-md'>
                  Rating:

                  
                  {/* <div className='text-base '>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div> */}
                </div>
              </div> 
              <textarea class=" form-control block w-full px-3  py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-grey-900 focus:outline-none"  id="ShortReview" rows="3" placeholder="Short Review" maxLength={100}></textarea>
              <div className='flex flex-col'>
                <button className='w-full py-3 mt-8 bg-[#666668] hover:bg-[#26282e] relative text-white hover:bold'>
                  Submit
                </button>
              </div>
             


            </form>

          </div>
        
        </div>
      </div>
    </div>





  );
}
export default RateMe;


