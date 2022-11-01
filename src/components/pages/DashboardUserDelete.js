import React, { useState } from 'react';

import High from '../../assets/high.jpg'

import DashboardComU from "./DashboardComU";

function DashboardDelete() {
    return (
        <div className=' md:grid grid-cols-5 w-full h-full '>


      <DashboardComU />


      {/* Edit Form Starts Here */}
      <div className='col-span-4'>

        <div className='relative w-full h-[900px] bg-black/80'>
          <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
          <div className='flex justify-center items-center h-full'>

            {/* Form */}
            <form className='max-w-[650px] w-full mx-auto bg-white  pt-4  p-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg'>
              <h2 className='text-2xl text-[#000000]  font-bold text-center py-8'>Are You Sure You Want To Delete Your Profile?</h2>

              <div className='grid grid-cols-2 mb-4 '>
              <button className='w-25 py-3 mx-20 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
                  Yes
                </button>
                <button className='w-25 py-3 mx-20 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
                  No
                </button>
              </div>
            </form>
          </div>

        </div>
     
      </div>
    </div >

            );

}

            export default DashboardDelete;
