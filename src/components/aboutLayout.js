import React from "react";
import "./header.css";
import Header from "./header";
import Footer from "./footer";

const About=({children})=>{
    return(
        <div className="home-container">
            <Header/>
            <div style={{minHeight:"170vh"}}>
                {children}
                
                
            </div>
            
                
                
          
            <Footer/>

        </div>

    );
    
}
export default About;
