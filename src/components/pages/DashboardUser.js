import React, { useState } from 'react';

import High from '../../assets/high.jpg'
import Dashb from '../../assets/dashb.png'
import DashboardComU from "./DashboardComU";

function DashboardUser() {
  return (

    <div className=' md:grid grid-cols-5 w-full h-full '>


      <DashboardComU />


      {/* Edit Form Starts Here */}
      <div className='col-span-4'>

        <div className='relative w-full h-[900px] bg-black/70'>
          <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
          <div className='flex justify-center items-center h-full'>

            {/* Form */}
            <form className='max-w-[650px] w-full mx-auto bg-white  pt-4 pl-[105px] p-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg'>
              <h2 className='text-4xl text-[#000000]  font-bold text-center py-8'>Your Profile</h2>

              <div className='grid grid-cols-4 mb-4'>
                <p className='text-[#000000] font-bold pt-[8px]'>First Name:</p>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>First Name:</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <p className='text-[#000000] font-bold pt-[8px]'>Last Name:</p>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>First Name:</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <p className='text-[#000000] font-bold pt-[8px]'>Email:</p>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>First Name:</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <div className='text-[#000000] font-bold  pt-[8px]'>Phone Number:</div>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>First Name:</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <p className='text-[#000000] font-bold  pt-[8px]'>Location:</p>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>First Name:</p>

              </div>
            </form>
          </div>

        </div>
        {/* <EditInfoForm/> */}

      </div>
    </div >






  );

}

export default DashboardUser;
