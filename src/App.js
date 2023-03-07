import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginModal from "./components/LoginModal/LoginModal";
import MobileNavigation from "./components/Navbar/MobileNavigation/MobileNavigation";
import Signup from "./components/NewUser/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <>
              <MobileNavigation />
              <LoginModal />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
