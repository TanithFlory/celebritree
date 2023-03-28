import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginModal from "./components/LoginModal/LoginModal";
import Signup from "./components/NewUser/Signup";
import AccountSettingsWrapper from "./components/AccountsDashboard/AccountSettingsWrapper";
import Navigation from "./components/AccountsDashboard/Navigation";
import Settings from "./components/AccountsDashboard/AccountManagement/Settings/Settings";
import Contributions from "./components/AccountsDashboard/Contributions/Contributions";
import Security from "./components/AccountsDashboard/AccountManagement/Security/Security";
import HelpCentre from "./components/AccountsDashboard/Help/HelpCentre";
import Contact from "./components/Contact/ContactPage";
import ComingSoon from "./components/ComingSoon/ComingSoon";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route
        path="/login"
        element={
          <>
            <LoginModal />
          </>
        }
      />
      <Route
        path="/account"
        element={
          <>
            <AccountSettingsWrapper>
              <Navigation />
              <Outlet />
            </AccountSettingsWrapper>
          </>
        }
      >
        <Route path="/account/settings" element={<Settings />} />
        <Route path="/account/security" element={<Security />} />
        <Route path="/account/contributions" element={<Contributions />} />
        <Route path="/account/help-centre" element={<HelpCentre />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
