import React from 'react';
import High from '../../assets/high.jpg';
import DashboardComA from './DashboardComA';



function DashboardAdmin() {

  return (
    <div className=' md:grid grid-cols-5 w-full h-full '>


      <DashboardComA />


      {/* Edit Form Starts Here */}
      <div className='col-span-4'>

        <div className='relative w-full h-[900px] bg-black/70'>
          <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
          <div className='flex justify-center items-center h-full'>

            {/* Form */}
            <form className='max-w-[650px] w-full mx-auto bg-white  pt-4 pl-[105px] p-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg'>
              <h2 className='text-4xl text-[#000000]  font-bold text-center py-8'>Welcome to admin's dashboard</h2>
            </form>
          </div>

        </div>
        {/* <EditInfoForm/> */}

      </div>
    </div >






  );

}

export default DashboardAdmin;
