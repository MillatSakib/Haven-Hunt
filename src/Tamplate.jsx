import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="flex flex-col min-h-[100vh] justify-between bg-white">
      <Nav> </Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
