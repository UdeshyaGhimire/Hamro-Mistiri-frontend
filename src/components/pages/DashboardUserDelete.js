import React, { useState } from 'react';
import High from '../../assets/high.jpg'
import DashboardComU from "./DashboardComU";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DashboardUserDelete() {

  const params = useParams();
  const userId = params.id;

  const handleYesClick = () => {
    const url1 = `http://localhost:8080/deleteCustomer/${userId}`;
    axios.delete(url1)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));  
  };

  const handleNoClick = () => {
    window.location("/");
  };

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
              <button className='w-25 py-3 mx-20 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase' onClick={handleYesClick}>
                  Yes
                </button>
                <button className='w-25 py-3 mx-20 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase' onClick={handleNoClick}>
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

            export default DashboardUserDelete;
