import React from "react";
import Headers from "./Headers";
import Contents from "./Contents";
import ContactUs from "./Contact";
function App(){
  return <div>
    <div className="background--img">
     <Headers></Headers>
     <Contents></Contents>
   </div>
   <div>
    <ContactUs></ContactUs>
   </div>
  </div> 
}

export default App;
