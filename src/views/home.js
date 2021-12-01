import React from "react";
import "./home.css";
import HomeLayout from "../components/homeLayout";
import logo from "../assets/img/undraw_travel_plans_li01.png";

const Home=()=>{
    return(
            <HomeLayout>
                <div className="main-home" style={{height:"100vh"}}>
                <h1>Rwanda Booking Tours</h1>
                <div className="card">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam fugiat iusto nihil hic eveniet provident eligendi dolore vero cupiditate asperiores deserunt, debitis assumenda totam ab modi, molestias cumque tempora voluptatibus.</p>
                    

                </div>
                
                </div>
                <div className="tour-section-container" id="garelly">
        <div className="line-section">
            <div className="line-one"></div>
            <div className="line-two"></div>
            <div className="line-three"></div>
        </div>
        <div className="main-tour-section">
        <div className="left-section">
                <h2>Book Your Tour Now!!!</h2>
                <div className="label">
                    <label for="category">Tour Category: <br/></label><br/>
                    <select name="category" id="category">
                        <option value="forest">Forest</option>
                        <option value="lake">Lake</option>
                        <option value="river">River</option>
                        <option value="park">Park</option>
                    </select><br/><br/><br/>
                    <label for="location">Tour Location: <br/></label><br/>
                    <select name="location" id="location">
                        <option value="musanze">Musanze</option>
                        <option value="kayonza">Kayonza</option>
                        <option value="nyanza">Nyanza</option>
                        <option value="rubavu">Rubavu</option>
                    </select>

                </div><br/><br/><br/>
                <button type="submit">
                    <a href=""> Book Now!</a>
                   </button>

         
            </div>

            <div class="right-section">
                <img src={logo} alt=""/>

            </div>


        </div>
        </div>
            </HomeLayout>

       

    );
    
}
export default Home;
