import React from "react";
import "./home.css";
import HomeLayout from "../components/homeLayout";
import allToursData from "../assets/constants/tours.json";
import Garl from "../components/gall";

const Gallery=()=>{
    return(
        <div className="home-container">
            <HomeLayout>
                <div className="main-home" style={{minHeight:"284vh"}}>
                <h1>Gallery</h1>
                </div>
                <div className="about-card">
                <h2>Our Gallery</h2>
                {
           allToursData.map((data)=>(
           
           <Garl tour={data}/>))
       }
     
                </div>
            </HomeLayout>

        </div>

    );
    
}
export default Gallery;