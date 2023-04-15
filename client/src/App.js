import React from "react";
import Navbar from "./components/Navbar/Navigation/NavBar";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    const tokenIndex = hash.indexOf("access_token=");
    const token = hash.substring(tokenIndex + 13);
    if (token) {
      localStorage.setItem("accessToken", token);
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
