import React, { useState ,useEffect} from 'react';
import Final1 from '../../assets/final1.png'
import Final2 from '../../assets/final2.png'
import Final3 from '../../assets/final3.png'


  const featuredImage = [
    Final1,
    Final2,
    Final3,
];

let count = 0;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    startSlider();

  },[]);
  const startSlider = () => {
    setInterval(() => {
      handleOnNextCLick();

    }, 5000);
  };
  
  const handleOnNextCLick = () => {
    count=(count+1) % featuredImage.length;
    setCurrentIndex(count);};
  const handleOnPrevCLick = () => {
    const imageLength= featuredImage.length;
    count=(currentIndex+ imageLength-1)% imageLength;
    setCurrentIndex(count);

  };
  
    return(  
    <div className='w-full h-full select-none relative pt-16 md:pt-24'>
    <div className='aspect-w-16 aspect-h-9'>
    <img src={featuredImage[currentIndex]} alt=""/>
    </div>

    <div class="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
    <button onClick={handleOnPrevCLick} class="text-black bg-white p-3 rounded-full bg-opacity-50 hover:bg-[#30333a] hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clip-rule="evenodd" />
            </svg>
          </button >
          <button onClick={handleOnNextCLick} class="text-black bg-white p-3 rounded-full bg-opacity-50 hover:bg-[#30333a] hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
    </div>
);
}
