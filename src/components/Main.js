import React from "react";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import HomePage from "./pages/HomePage";
import Service from "./pages/Service";
import Plumber from "./pages/Plumber";

function Main() {
  return (
    <Router>
    <div >
        <Navbar/>  
        {/* calling Navbar for every page. the component below this navbar will only be changed when we change the pages! */}
          <main >
              <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route   path="/service" element={<Service/>}/>
              <Route   path="/plumber" element={<Plumber/>}/>
              <Route path="*" element={<NotFound/>}/>
              </Routes> 
          </main>
    </div>
    </Router>
  );
}

export default Main;
