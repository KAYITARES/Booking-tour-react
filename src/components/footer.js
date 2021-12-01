import React from 'react';
import "./header.css";
import logo from "../assets/img/images.png";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer=()=>{
    return(
        <div className="footer">
          <div className="footer-data">
            <div className="first-column">
            <div className="logo">
                   <a href="\home"> <img src={logo} style={{width:"200px"}}/></a>

                </div>
            <p>PO BX 6419, KG 278 St, Kimisange Kigali</p>
            <p><a href="tel:0785627690">+250 785627690</a></p>
            <p>info@gskimisange</p>

            </div>
            <div className="second-column">
            <h5>Quick Menu<hr/></h5>
            <p>About</p>
            <p>Head of Travel’s Welcome</p>
            <p>Calendar</p>
            <p>Accreditations</p>
            <p>Some visited place</p>
            <p>Contact Us</p>

            </div>
            <div className="third-column">
            <h5>Services<hr/></h5>
            <p>Mission Driven Admissions</p>
            <p>Admissions Procedures</p>
            <p>Application for Admission</p>
            <p>Tuition and Fees</p>
            <p>SAT Testing Center</p>
            <p>Accreditations</p>
            </div>
            <div className="fourth-column">
            <h5>Contacts<hr/></h5>
            <p> <FontAwesomeIcon icon={faHome} style={{fontSize:"18px"}}/>&nbsp;&nbsp;&nbsp;Kicukiro, Gikondo 10012, RDA</p>
            <p> <FontAwesomeIcon icon={faEnvelopeOpen} style={{fontSize:"16px"}}/>&nbsp;&nbsp;&nbsp;info@gs_kimisange.com</p>
            <p> <FontAwesomeIcon icon={faPhone} style={{fontSize:"18px"}}/>&nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+250 785627690</a></p>
            <p><FontAwesomeIcon icon={faPrint} style={{fontSize:"18px"}}/>&nbsp;&nbsp;&nbsp;<a href="tel:0785627690">+250 785627690</a></p>

            </div>
          </div>
          <hr className="big-line"/>
          <div className="sub-footer">
          <p>&copy; 2020 Copyright: <a href="">TravelloGO</a></p>
          <div className="footer-icon">
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookSquare}  style={{fontSize:"30px"}}/></a>
            <a href=""><FontAwesomeIcon icon={faTwitterSquare}  style={{fontSize:"30px"}}/></a>
            <a href=""><FontAwesomeIcon icon={faGooglePlusSquare}  style={{fontSize:"30px"}}/></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"30px"}}/></a>
          </div>

          </div>
          
        
             
        </div>
    )

}
export default Footer;