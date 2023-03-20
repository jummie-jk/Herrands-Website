import React from "react";
import { Link } from "react-router-dom";
import pic from "./images/delivery-man1.png";
function ContactUs(){


    return(
            <div className="herrands--container">
                <div className="image-container">
                      <img src={pic} alt="Free up your time" className="herrand-img" ></img>
                     
                </div>
                <div className="contact-box">
                    <div className="herrands-btn">
                        <Link to="/onsite" className="btn btn--blue btn--animated">On Site </Link>
                        <Link to="/virtual" className="btn btn--white btn--animated">Virtual</Link>
                    </div>
                    <div className="herrands-form-text">
                        <p>In too much of a hurry to fill out a form? </p>
                    </div>
                    <div className="herrands-contact-text">
                        <p>Give us a call 📞<br></br>+234 704 418 4306 </p>
                        <p>Send us an email 📩 <br></br> send@herrands.com</p>
                    </div>
                </div>
            </div>
    )
}
export default ContactUs;