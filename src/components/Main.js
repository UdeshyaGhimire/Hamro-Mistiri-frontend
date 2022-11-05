import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import HomePage from "./pages/HomePage";
import LogInUser from "./pages/LogInUser";
import LogInMistiri from "./pages/LogInMistiri";
import RegisterUser from "./pages/RegisterUser";
import RegisterMistiri from "./pages/RegisterMistiri";
import Chat from "./pages/Chat";


import HireMeForm from "./pages/HireMeForm";
import EditInfoForm from "./pages/EditInfoForm";
import RateMeForm from "./pages/RateMeForm";
import Footer from "./pages/Footer";
import DashboardMistiri from "./pages/DashboardMistiri";
import DashboardMistiriEdit from "./pages/DashboardMistiriEdit";
import DashboardMistiriDelete from "./pages/DashboardMistiriDelete";
import DashboardUser from "./pages/DashboardUser";
import DashboardUserEdit from "./pages/DashboardUserEdit";
import DashboardUserDelete from "./pages/DashboardUserDelete";


import Plumber from "./pages/services/Plumber";
import Painter from "./pages/services/Painter";
import Engineer from "./pages/services/Engineer";
import Mechanic from "./pages/services/Mechanic";
import Technician from "./pages/services/Technician";
import Carpenter from "./pages/services/Carpenter";
import Review from "./pages/Review";
import Histroy_mistiri from "./pages/Histroy_mistiri";
import Histroy_user from "./pages/Histroy_user";




function Main() {
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
            <Route path="/mistiris/Plumber" element={<Plumber />} />
            <Route path="/mistiris/Engineer" element={<Engineer />} />
            <Route path="/mistiris/Mechanic" element={<Mechanic />} />
            <Route path="/mistiris/Technician" element={<Technician />} />
            <Route path="/mistiris/Carpenter" element={<Carpenter />} />
            <Route path="/mistiris/Painter" element={<Painter />} />
            <Route path="/registeruser" element={<RegisterUser />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/registermistiri" element={<RegisterMistiri />} />
            <Route path="/editinfoform" element={<EditInfoForm />} />

            {localStorage.getItem("userId") === null ?
              <>
                <Route path="*" element={<NotFound />} />
              </> :
              <>
                <Route path="/hiremeform/:cudId/:id/:cid" element={<HireMeForm />} />

                <Route path="/editinfoform" element={<EditInfoForm />} />
                <Route path="/rateMeform/:id/:cusId" element={<RateMeForm />} />

                <Route path="/Review/:id" element={<Review />} />
                <Route path="/Histroy_mistiri/:id" element={<Histroy_mistiri />} />
                <Route path="/Histroy_user/:id" element={<Histroy_user />} />





                <Route path="/dashboarduser/:id" element={<DashboardUser />} />
                <Route path="/dashboarduseredit/:id" element={<DashboardUserEdit />} />
                <Route path="/dashboarduserdelete/:id" element={<DashboardUserDelete />} />

                <Route path="/dashboardmistiri/:id" element={<DashboardMistiri />} />
                <Route path="/dashboardmistiriedit/:id" element={<DashboardMistiriEdit />} />
                <Route path="/dashboardmistiridelete/:id" element={<DashboardMistiriDelete />} />

              </>
            }

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default Main;
