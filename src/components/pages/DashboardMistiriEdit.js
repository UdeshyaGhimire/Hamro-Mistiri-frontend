import React, { useState } from 'react';

import High from '../../assets/high.jpg'
import Dashb from '../../assets/dashb.png'
import DashboardComM from "./DashboardComM";

function DashboardMistirEdit() {
    return (
        <div>
            <div className=' md:grid grid-cols-5 w-full h-full '>


                <DashboardComM />


                {/* Edit Form Starts Here */}
                <div className='col-span-4'>

                    <div className='relative w-full h-[1150px] bg-black/70'>
                        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={High} alt="/" />
                        <div className='flex justify-center items-center h-full'>
                            {/* Form */}

                            <form className='max-w-[800px] w-full mx-auto bg-white p-[35px] pt-2 pl-[65px] border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg'>
                                <h2 className='text-4xl text-[#000000]  font-bold text-center py-8'>Edit Mistiri Profile</h2>

                                <div className='grid grid-cols-2 mb-4 bg-white '>
                                    <div className='text-[#000000] font-bold pt-[8px] text-right'>Availability:
                                    </div>

                                    <div className='text-base w-[155px] bg-gray-100 relative text-left p-1 ml-3 pl-3'>
                                        <select name='availability'>
                                            <option value="available">Available</option>
                                            <option value="notavailable">Not Available</option>
                                        </select>
                                    </div>

                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>First Name:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2  ' placeholder="First Name" type="text" />
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>Last Name:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder="Last Name" type="text" />
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>Email:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder="Email" type="email" />
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>Password:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder="Password" type="password" />
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <div className='text-[#000000] font-bold  pt-[8px]'>Phone Number:</div>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder="Phone Number" type="number" />
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold  pt-[8px]'>Location:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder="Location" type="text" />
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold  pt-[8px]'>Pan Number:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder="Pan Number" type="number" />
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>Service:</p>

                                    <div className='col-span-2 w-[510px] text-base border relative bg-gray-100 p-2 text-left'>
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
                                        <div className='border relative bg-gray-100 p-2 w-[510px]'>

                                            <div className='text-base columns-2 w-[510px]'>
                                                <p><input type="radio" name="employstat" value="self" /> Self </p>
                                                <input type="radio" name="employstat" value="company" /> Company
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>Documents:</p>
                                    <div className='col-span-2 w-[510px] border relative bg-gray-100 p-2 '>
                                        <input className=' ' placeholder="Documents" type="file" />
                                    </div>
                                </div>

                                <div className='grid grid-cols-4 mb-4'>
                                    <p className='text-[#000000] font-bold pt-[8px]'>About You:</p>
                                    <input className='col-span-2 w-[510px] border relative bg-gray-100 p-2 ' placeholder="About You" type="text" />
                                </div>

                                <button className='w-full py-3 mt-5 text-xl font-bold bg-[#eb9216] hover:bg-[#fcb858] relative text-white capitalize hover:uppercase'>
                                    Save
                                </button>
                                {/* Link to mistiri login */}





                            </form>
                        </div>

                    </div>


                </div>

            </div>
        </div >



  


            );

}

export default DashboardMistirEdit;
