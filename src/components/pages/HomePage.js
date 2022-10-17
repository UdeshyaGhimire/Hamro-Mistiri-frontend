import React, { useState } from 'react';
import Slider from "./Slider";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";

import MistiriImg from '../../assets/mistiri.jpg'
import LogInImg from '../../assets/login.jpg'





function HomePage() {
  return (
   
    <div class=' w-full h-full bg-gray-200'>
      {/* Linking to slider.js  */}
   <Slider />
   <OurServices />
   <AboutUs />

   








   
   <footer class="foott" id="about"> 
        
        <p class="bg-[#31333a]  text-white text-center ">
            CopyRight &copy; 2022 -Hamro Mistiri -All Rights Reserved
        </p>
    </footer>



    </div>
  


  );

}

export default HomePage;
