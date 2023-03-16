import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnSite from "./screen/onsite";
import Virtual from "./screen/virtual";
import Home from "./screen/home";

function App(){
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/virtual" element={<Virtual />}/>
          <Route path="/onsite" element={<OnSite />}/>
        </Routes>
      </BrowserRouter>
  </div> 
}

export default App;
