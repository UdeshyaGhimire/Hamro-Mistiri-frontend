import React, { useState } from 'react';

import High from '../../assets/high.jpg'
import Dashb from '../../assets/dashb.png'

function DashboardComM() {
    return (
        <div>
            <div className='col-span-1 h-full grow bg-[#00000098] '>
                <div className='pt-[105px] text-gray-600 h-full pb-9'>
                    <a href="DashboardMistiri">
                        <div className='grid grid-cols-6 m-4 p-2 hover:m-3 hover:text-[18px] h-18 md:hover:h-[80px] font-bold md:text-[17px] text-center  bg-[#30333a] border-[5px] shadow-2xl cursor-pointer border-[#fea72b]  boarder-opacity-60 rounded-sm' >
                            <div className='w-[50px] pt-2 pl-3 ' >
                                <img className='' src={Dashb} alt="/" />

                            </div>

                            <div className=' col-span-4 pl-3 pt-2 text-2xl md:text-[22x] font-bold text-[#fffffe]'>
                                Dashboard
                            </div>

                        </div>
                    </a>
                    <a href="DashboardMistiriEdit">
                        <div className='grid grid-cols-6 m-4 p-2 hover:m-3 hover:text-[16px] bg-white h-18 md:hover:h-[60px] font-bold md:text-[16px] text-center border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-sm hover:bg-gray-200 hover:border-[#2e2e2e]' >
                            <div className='w-[50px] pt-2 pl-3 ' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                            </div>
                            <div className=' col-span-4 pl-[2px] pt-2'>
                               Edit My Mistiri Profile
                            </div>
                        </div>
                    </a>
                    <a href="LogInUser">
                        <div className='grid grid-cols-6 m-4 p-2 hover:m-3 hover:text-[18px] bg-white h-18 md:hover:h-[60px] font-bold md:text-[17px] text-center border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-sm hover:bg-gray-200 hover:border-[#2e2e2e]' >
                            <div className='w-[50px] pt-2 pl-3 ' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                </svg>

                            </div>
                            <div className=' col-span-4 pl-3 pt-2'>
                                Report a Problem
                            </div>
                        </div>
                    </a>
                    <a href="DashboardMistiriDelete">
                        <div className='grid grid-cols-6 m-4 p-2 hover:m-3 hover:text-[18px] bg-white h-18 md:hover:h-[60px] font-bold md:text-[17px] text-center border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-sm hover:bg-gray-200 hover:border-[#2e2e2e]' >
                            <div className='w-[50px] pt-2 pl-3 ' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                </svg>


                            </div>
                            <div className=' col-span-4 pl-3 pt-2'>
                                Delete profile
                            </div>
                        </div>

                    </a>



                </div>






            </div>
        </div>

    );

}

export default DashboardComM;
