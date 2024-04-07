import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>Hello World</div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
