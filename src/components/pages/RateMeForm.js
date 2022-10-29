import React from 'react';
import { useState } from 'react';

import RateImg from '../../assets/RateImg.jpg'
import Painter from './services/Painter';
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

function RateMe() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


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


              <div className='grid grid-cols-4  mb-4 border relative bg-gray-100 p-2 text-left rounded-md'>
                Rating:
                <div className='col-span-2 ' >
                  <div className='flex'>
                    {stars.map((_, index) => {
                      return (
                        <FaStar key={index} size={24} onClick={() => handleClick(index + 1)} onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10, cursor: "pointer"
                          }}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
              <textarea class="mt-[30px] form-control block w-full px-3  py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-grey-900 focus:outline-none" id="ShortReview" rows="3" placeholder="Short Review" maxLength={100}></textarea>
              <div className='flex flex-col'>
                <button className='w-full py-3 mt-[40px] bg-[#666668] hover:bg-[#26282e] relative text-white hover:bold'>
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


