import React from "react";
import Typed from "react-typed"
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
    else{greeting= "Good Night"}

  

    return(
        <div className="headings">
            <div className="branding">
                {/* <img alt="Herrands--logo"> </img> */}
                <p className="herrand--brandname">Herrands</p>
                <p className="herrand--text">. do more with less</p>
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