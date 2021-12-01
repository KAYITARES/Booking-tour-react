import React,{useState}from 'react';
import AboutLayout from '../components/aboutLayout';
import allToursData from "../assets/constants/tours.json";
import TourCard from "../components/tourCard";
 



const Tour=()=>{
   
    
    return(
       
      
            <AboutLayout>
            <div className="main-home" style={{minHeight:"350vh"}}>
                <h1>Explore our Tours</h1>
            </div>
            <div className="about-card">
                <h2>Our Tours</h2>
       
       
       {
           allToursData.map((data)=>(<TourCard tour={data}/>))
       }
     
     </div>
       
       

</AboutLayout>


    
        
    )

}
export default Tour;