import React,{useState} from 'react';
import forest from '../assets/img/forest.jpeg';
import {Drawer} from "antd";
import "antd/dist/antd.css";
import SingleTour from './singleTour'; 

 


import './about.css';

const Tours=({tour})=>{
    const [drawerVisible,setDrawerVisible]=useState(false);
    const handleClickDrwawerVisible=()=>{
        setDrawerVisible(true);
    }
    const closeDrawerVisible=()=>{
        setDrawerVisible(false);
    }
    return(
        <>
        <Drawer title={tour.title} placement="left" visible={drawerVisible} width={730} onClose={()=>closeDrawerVisible()}>
            <SingleTour tour={tour}/>
        </Drawer>
        <div className="all-card">
        <div className="tour-card" >
                <div className="tour-img">
                <img src={tour.images[0]} />
                </div>
                <div className="tour-detail">
                    <h3>{tour.title}</h3>
                    <p class="description-tour">{tour.description}</p>
                    <div className="sub-tour-details">
                        <div className="left">
                        <p><strong>Seat</strong>: {tour.seats}</p>
                    <p><strong>Sheduled Date</strong>: {tour.dateScheduled}</p>

                        </div>
                        <div className="right">
                            <p><strong>Due Date:</strong>{tour.dueDate}</p>
                            <p><strong>available:</strong>{tour.available}</p>
                        </div>
                   

                    </div>
                    
                    <a href="#" onClick={()=>handleClickDrwawerVisible()}>Read more....</a>
                </div>
                
                

            </div> 
        </div>
        {/* <div className="tour-container"> */}
           
            {/* <div className="main-tour-container">
            <div className="tour-card">
                <div className="tour-img">
                <img src={tour.images[0]} />
                </div>
                <div className="tour-detail">
                    <h3 onClick={()=>handleClickDrwawerVisible()}>{tour.title}</h3>
                    <p class="description-tour">{tour.description}</p>
                    <div className="sub-tour-details">
                        <div className="left">
                        <p><strong>Seat</strong>: {tour.seats}</p>
                    <p><strong>Sheduled Date</strong>: {tour.dateScheduled}</p>

                        </div>
                        <div className="right">
                            <p><strong>Due Date:</strong>{tour.dueDate}</p>
                            <p><strong>available:</strong>{tour.available}</p>
                        </div>
                   

                    </div>
                    
                    <a href="#">Read more....</a>
                </div>
                
                

            </div>

        </div> */}
            {/* </div> */}
            
        </>

    )
}
export default Tours;