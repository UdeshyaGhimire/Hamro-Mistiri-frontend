import React from 'react';
import MistiriImg from '../../assets/mistiri.jpg'
import LogInImg from '../../assets/login.jpg'

export default function AboutUs() {
  return (



    <div className='w-full h-full flex bg-zinc-900/80'>
      <img className='absolute w-full h-[650px] object-cover mix-blend-overlay' src={LogInImg} alt="/" />


      <div className='grid grid-cols-1 md:grid-cols-2 bg-white m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]  '>
      <div className=' flex w-full h-[550px] hidden md:block'>
          <img className='inline w-full h-full' src={MistiriImg} alt="/" />
        </div>
          <div className='p-4 flex flex-col justify-around '>

            <div >
              <h2 className='text-4xl font-bold text-center py-4'>Losf In</h2>



            </div>

          </div>
        </div>
      </div>
      






      );
}





