import React, { useState }  from 'react';
import Carpenter1 from '../../assets/carpenter1.svg'
import Engineer from '../../assets/engineer.svg'
import Mechanics from '../../assets/mechanics.svg'
import Painter from '../../assets/painter.svg'
import Plumber from '../../assets/plumber.svg'
import Technician from '../../assets/technician.svg'
import HireMeForm from "./HireMeForm";





export default function OurServices() {


    return (


        <div id='Our Services' className='md:h-full flex-items-center text-grey-600 bg-grey-[#30333a] '>
           

            <div className='container px-0 py-14 mx-auto'>
                <div className='text-center mb-12 -mt-2'>
                    <div className='text-2xl md:text-5xl text-[#30333a] font-bold' >
                        Our Services</div>
                </div>


                <div className='flex flex-wrap '>


                    <a className='' href='HireMeForm'>

                        <div className='w-[470px] h-50 p-6 m-5 bg-white border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg hover:bg-[#565b68] hover:text-white transistion duration-300 ease-in'>
                            <div className='h-full  overflow-hidden '>
                                <div className='flex justify-center '>
                                    <img src={Carpenter1} alt="image" className='lg:h-10 md:h-48 w-10 ' />
                                </div>

                                <div className=' text-center'>
                                    <h1 className='text-2xl font-semi-bold mb-3'> Carpenter</h1>
                                    <h2 className='leading-relaxed mb-3'>Carpenters construct, erect, install, and repair structures and fixtures made from wood and other materials.</h2>

                                </div>
                            </div>
                        </div>
                    </a>

                    <a className='' href="Plumber">
                        <div className='w-[470px] h-50 p-6 m-5 bg-white border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg hover:bg-[#565b68] hover:text-white transistion duration-300 ease-in'>
                            <div className='h-full  overflow-hidden '>
                                <div className='flex justify-center '>
                                    <img src={Engineer} alt="image" className='lg:h-10 md:h-48 w-10 ' />
                                </div>

                                <div className=' text-center'>
                                    <h1 className='text-2xl font-semi-bold mb-3'> Engineer</h1>
                                    <h2 className='leading-relaxed mb-3'>Civil engineers ensure safe construction, operation and maintenance of your house.</h2>

                                </div>
                            </div>
                        </div>
                    </a>

                    <div>
                        <div className='w-[470px] h-50 p-6 m-5 bg-white border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg hover:bg-[#565b68] hover:text-white transistion duration-300 ease-in'>
                            <div className='h-full  overflow-hidden '>
                                <div className='flex justify-center '>
                                    <img src={Plumber} alt="image" className='lg:h-10 md:h-48 w-10 ' />
                                </div>

                                <div className=' text-center'>
                                    <h1 className='text-2xl font-semi-bold mb-3'> Plumber</h1>
                                    <h2 className='leading-relaxed mb-3'>A plumber is a person whose job is to connect and repair things such as water and drainage pipes, baths, and toilets.</h2>

                                </div>
                            </div>
                        </div>
                    </div>

                    <a className='' href="LogInMistiri">
                        <div className='w-[470px] h-50 p-6 m-5 bg-white border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg hover:bg-[#565b68] hover:text-white transistion duration-300 ease-in'>
                            <div className='h-full  overflow-hidden '>
                                <div className='flex justify-center '>
                                    <img src={Mechanics} alt="image" className='lg:h-10 md:h-48 w-10 ' />
                                </div>

                                <div className=' text-center'>
                                    <h1 className='text-2xl font-semi-bold mb-3'> Mechanics</h1>
                                    <h2 className='leading-relaxed mb-3'>An auto mechanic performs maintenance, repairs, and inspections vehicles. They work on engines, drive belts, transmissions, and electronic systems.</h2>

                                </div>
                            </div>
                        </div>
                    </a>

                    <a className='' href="LogInMistiri">
                        <div className='w-[470px] h-50 p-6 m-5 bg-white border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg hover:bg-[#565b68] hover:text-white transistion duration-300 ease-in'>
                            <div className='h-full  overflow-hidden '>
                                <div className='flex justify-center '>
                                    <img src={Technician} alt="image" className='lg:h-10 md:h-48 w-10 ' />
                                </div>

                                <div className=' text-center'>
                                    <h1 className='text-2xl font-semi-bold mb-3'> Technician</h1>
                                    <h2 className='leading-relaxed mb-3'>Professional technican will provide tech support and services such as computer repair, TV mounting and smart home setup</h2>

                                </div>
                            </div>
                        </div>
                    </a>

                    <a className='' href="LogInMistiri">
                        <div className='w-[470px] h-56 p-6 m-5 bg-white border-2 shadow-2xl cursor-pointer border-grey-100 boarder-opacity-60 rounded-lg hover:bg-[#565b68] hover:text-white transistion duration-300 ease-in'>
                            <div className='h-full  overflow-hidden '>
                                <div className='flex justify-center '>
                                    <img src={Painter} alt="image" className='lg:h-10 md:h-48 w-10 ' />
                                </div>

                                <div className=' text-center'>
                                    <h1 className='text-2xl font-semi-bold mb-3'> Painter</h1>
                                    <h2 className='leading-relaxed mb-3'>Painting the interior of your home is an endeavor that requires a great deal of time.</h2>

                                </div>
                            </div>
                        </div>
                    </a>



                </div>
            </div>
            
        </div>




    );
}
