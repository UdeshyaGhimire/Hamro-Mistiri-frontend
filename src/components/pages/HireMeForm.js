import React from 'react';
import HireImg from '../../assets/hire.jpg'
import Painter from "./Painter";


function HireMeForm() {
  return (
    <div>
      <Painter />



      <div className='fixed inset-0 bg-clack bg-opacity-30 bg-zinc-800/60 backdrop-blur-sm flex justify-center items-center'>

        <div className='rounded-xl border-[5px] border-[#484949] mt-[165px]  grid grid-cols-1 md:grid-cols-2 bg-white m-auto h-[550px] shadow-lg  shadow-gray-200 sm:max-w-[900px]  '>
          <div className=' flex w-full h-[540px] hidden md:block'>
            <img className='inline w-full h-full' src={HireImg} alt="/" />
          </div>
          <div className='p-4  '>
            {/* to close form */}
            <a className='flex justify-end text-2xl font-bold text-gray-400 ' href='/'><button className=''></button>X</a>

            {/* Form starts here */}
            <form className='pt-[65px]'>

              <h2 className='text-4xl font-bold text-center pt-0 py-8 hover:text-[#f09e2a]'>Hire Us!</h2>

              <div className='flex  flex-col mb-4 '>
                <div className='border relative bg-gray-100 p-2 text-left rounded-md'>
                  Service:
                  <div className='text-base '>
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
              </div>

              <textarea class=" form-control block w-full px-3  py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-grey-900 focus:outline-none"  id="ShortDescription" rows="3" placeholder="Short Description" maxLength={100}></textarea>
              <div className='flex flex-col'>
                <button className='w-full py-3 mt-8 bg-[#ffb041] hover:bg-[#f89203] relative text-white hover:bold'>
                  Submit
                </button>
              </div>
             

            </form>

          </div>
        </div>
      </div>
    </div>





  );
}
export default HireMeForm;


