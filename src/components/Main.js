import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import HomePage from "./pages/HomePage";
import LogInUser from "./pages/LogInUser";
import LogInMistiri from "./pages/LogInMistiri";
import RegisterUser from "./pages/RegisterUser";
import RegisterMistiri from "./pages/RegisterMistiri";

import HireMeForm from "./pages/HireMeForm";
import EditInfoForm from "./pages/EditInfoForm";
import RateMeForm from "./pages/RateMeForm";
import Footer from "./pages/Footer";

import Plumber from "./pages/Plumber";
import Painter from "./pages/Painter";



function Main() {

  const painter ="Painter";
  const plumber ="Painter";
  return (
    <Router>
      <div >
        <Navbar />
        {/* calling Navbar for every page. the component below this navbar will only be changed when we change the pages! */}
        <main >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/loginuser" element={<LogInUser />} />
            <Route path="/loginmistiri" element={<LogInMistiri />} />
            <Route   path="/mistiris/Plumber" element={<Plumber/>}/>
            <Route   path="/mistiris/Painter" element={<Painter/>}/>
            <Route path="/registeruser" element={<RegisterUser />} />
            <Route path="/registermistiri" element={<RegisterMistiri />} />
            <Route path="/hiremeform" element={<HireMeForm />} />
            <Route path="/editinfoform" element={<EditInfoForm />} />
            <Route path="/ratemeform" element={<RateMeForm />} />
           


            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default Main;
