import React from "react";
import Typed from "react-typed"
import logo from "./images/logo.svg";
function Headers(){
    const date = new Date();
    const currentTime = date.getHours();
    let greeting;
    console.log(currentTime)

    if(currentTime < 12){
        greeting = "Good Morning"
    }
    else if(currentTime < 18){
        greeting = "Good Afternoon"
    }
    else{greeting= "Good Evening"}

  

    return(
        <div className="headings">
            <div className="branding">
                <img src={logo} alt="A delivery man" className="herrand-logo"></img>
            </div>
            <div className="herrand--greeting">
                <p>
                <Typed
                    strings={
                       [
                        `${greeting}`
                       ]
                    }
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                        />
                </p>
            </div>
        </div>
    )
}

export default Headers;