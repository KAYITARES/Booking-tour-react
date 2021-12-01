import React from "react";
import "../components/about.css";
import AboutLayout from "../components/aboutLayout";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const About=()=>{
    return(
        <div className="home-container">
            <AboutLayout>
                <div className="main-home">
                <h1>Mission and vision</h1>
                </div>
                <div className="about-card" >
                    <h2>Mission and Vision</h2>
                    <div class="row" >
                        <div className="row-one">
                            <div className="title">
                            <FontAwesomeIcon icon={faRocket} style={{fontSize:"50px"}} className="icon"/>
                            <h2>&nbsp;&nbsp;Mission Statement</h2>
                          
                            </div>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugiat iusto nihil hic eveniet provident eligendi dolore vero cupiditate asperiores deserunt.</p>

                        </div>
                        <div className="row-two">
                        <div className="title">
                            <FontAwesomeIcon icon={faEye} style={{fontSize:"40px"}}  className="icon"/>
                            <h2>&nbsp;&nbsp;Vision Statement</h2>
                            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugiat iusto nihil hic eveniet provident eligendi dolore vero cupiditate asperiores deserunt, debitis assumenda totam ab modi, molestias cumque tempora voluptatibus.</p> */}
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugiat iusto nihil hic eveniet provident eligendi dolore vero cupiditate asperiores deserunt.</p>
                       </div>
                    </div>
                    <p className="p-about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugiat iusto nihil hic eveniet provident eligendi dolore vero cupiditate asperiores deserunt, debitis assumenda totam ab modi, molestias cumque tempora voluptatibus.</p>

                </div>
                </AboutLayout>

        </div>

    );
    
}
export default About;