import React from "react";
import "../components/about.css";
import HomeLayout from "../components/homeLayout";

const Contact=()=>{
    return(
        <div className="home-container">
        <HomeLayout>
            <div className="main-home" style={{minHeight:"180vh"}}>
            <h1>Contact-US</h1>
            <div className="about-card">
                    <h2>Contact-Us</h2>
                    <div className="row">
                        <div className="col-one">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.550661020312!2d30.074454413858525!3d-1.9318372985915613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6af921f1347%3A0x807f3d177233c34f!2sKG%20549%20St%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sci!4v1637565956011!5m2!1sen!2sci"></iframe>
                            </div>
                    <div className='contactForm'>
                           <form>
                               <h2>Send Message</h2>
                               <div className='inputBox'>
                                   <input type='text' name='' required='required'/>
                                   <span>Full Name</span>
                               </div>
                               <div className='inputBox'>
                                <input type='email' name='' required='required'/>
                                <span>Email</span>
                            </div>
            
                            <div className='inputBox'>
                                <textarea required='required'></textarea>
                                <span>Type your Message...</span>
                            </div>
            
                            <div className='inputBox'>
                                <input type='submit' name='' value='Send'/>
                               
                            </div>
                           </form>
                       </div>
                    
            </div>
            </div>
            </div>
        </HomeLayout>

        </div>

    );
    
}
export default Contact;