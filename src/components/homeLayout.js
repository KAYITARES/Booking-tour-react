import React from "react";
import "./header.css";
import Header from "./header";
import Footer from "./footer";

const HomeLayout=({children})=>{
    return(
        <div className="home-container">
            <Header/>
            <div style={{minHeight:"100vh"}}>
                {children}
                
                
            </div>
            
                
                
          
            <Footer/>

        </div>

    );
    
}
export default HomeLayout;
