import React, { useState } from 'react';

import High from '../../assets/high.jpg'
import { useParams } from 'react-router-dom';
import DashboardComU from "./DashboardComU";
import axios from 'axios';

function DashboardUser() {

  const params = useParams();
  const userId = params.id;


  const [userDetail, setUserDetail] = React.useState([]);


  React.useEffect(() => {
    console.log("hello inside useeEffect");
    const url1 = `http://localhost:8080/customerDashboard/${userId}`;
    axios.get(url1)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data);
        setUserDetail(res.data);

      })
      .catch(err => console.log(err));
  }, []);


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
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>{userDetail.firstName}</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <p className='text-[#000000] font-bold pt-[8px]'>Last Name:</p>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>{userDetail.lastName}</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <p className='text-[#000000] font-bold pt-[8px]'>Email:</p>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>{userDetail.email}</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <div className='text-[#000000] font-bold  pt-[8px]'>Phone Number:</div>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>{userDetail.phoneNo}</p>

              </div>

              <div className='grid grid-cols-4 mb-4'>
                <p className='text-[#000000] font-bold  pt-[8px]'>Location:</p>
                <p className='col-span-2 text-[#000000] font-bold pl-2 pt-[8px]'>{userDetail.location}</p>

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
