import React, { useState } from 'react';

import High from '../../assets/high.jpg'
import Dashb from '../../assets/dashb.png'
import DashboardComU from "./DashboardComU";

function DashboardUserEdit() {
    return (
        <div>
      <div className=' md:grid grid-cols-5 w-full h-full '>


        <DashboardComU />


        {/* Edit Form Starts Here */}
        <div className='col-span-4'>

          <div className='relative w-full h-[900px] bg-black/70'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
            <div className='flex justify-center items-center h-full'>
              {/* Form */}

              <form className='max-w-[800px] w-full mx-auto bg-white  pt-4 pl-[65px] p-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg'>
                <h2 className='text-4xl text-[#000000]  font-bold text-center py-8'>Edit User Profile</h2>

                <div className='grid grid-cols-4 mb-4'>
                  <p className='text-[#000000] font-bold pt-[8px]'>First Name:</p>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2  ' placeholder="First Name" type="text" />
                </div>

                <div className='grid grid-cols-4 mb-4'>
                  <p className='text-[#000000] font-bold pt-[8px]'>Last Name:</p>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2 ' placeholder="Last Name" type="text" />
                </div>

                <div className='grid grid-cols-4 mb-4'>
                  <p className='text-[#000000] font-bold pt-[8px]'>Email:</p>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2 ' placeholder="Email" type="email" />
                </div>

                <div className='grid grid-cols-4 mb-4'>
                  <p className='text-[#000000] font-bold pt-[8px]'>Password:</p>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2 ' placeholder="Password" type="password" />
                </div>

                <div className='grid grid-cols-4 mb-4'>
                  <div className='text-[#000000] font-bold  pt-[8px]'>Phone Number:</div>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2 ' placeholder="Phone Number" type="number" />
                </div>

                <div className='grid grid-cols-4 mb-4'>
                  <p className='text-[#000000] font-bold  pt-[8px]'>Location:</p>
                  <input className='col-span-2 w-[502px] border relative bg-gray-100 p-2 ' placeholder="Location" type="text" />
                </div>


                <button className='w-full py-3 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
                  Save
                </button>





              </form>
            </div>

          </div>

        </div>
      </div >



    </div >


            );

}

            export default DashboardUserEdit;
