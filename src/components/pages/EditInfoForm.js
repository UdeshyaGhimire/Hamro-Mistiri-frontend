import React, { useState, useEffect } from 'react';
import High from '../../assets/high.jpg'


function EditInfoForm() {


  return (
    <div className='relative w-full h-[1250px] bg-black/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
      <div className='flex justify-center items-center h-full'>
        {/* Form */}

        <form className='max-w-[700px] w-full mx-auto bg-white p-[30px] pt-2'>
          <h2 className='text-4xl text-[#000000]  font-bold text-center py-8'>Edit Mistiri Registration</h2>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[8px]'>First Name:</p>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2  ' placeholder="First Name" type="text" />
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[8px]'>Last Name:</p>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2 ' placeholder="Last Name" type="text" />
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[8px]'>Email:</p>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2 ' placeholder="Email" type="email" />
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[8px]'>Password:</p>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2 ' placeholder="Password" type="password" />
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <div className='text-[#000000] font-bold  pt-[8px]'>Phone Number:</div>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2 ' placeholder="Phone Number" type="number" />
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold  pt-[8px]'>Location:</p>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2 ' placeholder="Location" type="text" />
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold  pt-[8px]'>Pan Number:</p>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2 ' placeholder="Pan Number" type="number" />
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[8px]'>Service:</p>

            <div className='col-span-2 w-[450px] text-base border relative bg-gray-100 p-2 text-left'>
              <select name='service'>
                <option value="carpenter">Carpenter</option>
                <option value="engineer">Engineer</option>
                <option value="plumber">Plumber</option>
                <option value="plumber">Mechanics</option>
                <option value="plumber">Technician</option>
                <option value="plumber">Painter</option>
              </select>
            </div>

          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[9px]'>Employee Status:</p>

            <div className='flex flex-col mb-4 '>
            <div className='border relative bg-gray-100 p-2 w-[450px]'>
              
              <div className='text-base columns-2 w-[450px]'>
              <p><input type="radio" name="employstat" value="self" /> Self </p>
                <input type="radio" name="employstat" value="company" /> Company
              </div>
            </div>
          </div>
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[8px]'>Documents:</p>
            <div className='col-span-2 w-[450px] border relative bg-gray-100 p-2 '>
              <input className=' ' placeholder="Documents" type="file" />
            </div>
          </div>

          <div className='grid grid-cols-4 mb-4'>
            <p className='text-[#000000] font-bold pt-[8px]'>About You:</p>
            <input className='col-span-2 w-[450px] border relative bg-gray-100 p-2 ' placeholder="About You" type="text" />
          </div>

          <button className='w-full py-3 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
            Save
          </button>
          {/* Link to mistiri login */}

       



        </form>
      </div>

    </div>
   

  );
}






export default EditInfoForm;