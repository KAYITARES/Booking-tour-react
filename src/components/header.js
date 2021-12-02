import React,{useState} from 'react';
import "./header.css";
import logo from "../assets/img/images.png";
import {Modal,Form,Input,Button} from "antd";
import {useNavigate} from "react-router-dom";

const Header=()=>{
    const[visible,setVisible]=useState(false);
    

    const onFinish=(values)=>{
        console.log(values);
        localStorage.setItem("userLogedIn",true);
        navigate("/dash/newtour")
    }
    const navigate=useNavigate();
    return(
        <>
        <Modal 
        visible={visible} 
        width="40%"
        onOk={()=>setVisible(false)}
        onCancel={()=>setVisible(false)}
        
        >
            <h1>Signin Form</h1>
            <Form onFinish={onFinish} >
                <Form.Item label="email" name="email" rules={[{required:"true" ,type:"email"}]}> 
                <Input type="email"/>

                </Form.Item>
                <Form.Item label="password" name="password" rules={[{required:true}]}> 
                <Input type="password"/>

                </Form.Item>
                <Button htmlType="submit" onClick={()=>{
                   

                }}>
                    
                    
                    Login</Button>
            </Form>


            </Modal>
        <div className="header">
            <nav>
                <div className="logo">
                    <img src={logo}/>

                </div>
                <div className="nav-link">

            
                <ul>
                <li><a href="/tour">Tour</a></li>
                    <li><a href="#" onClick={()=>setVisible(true)}>SignIn</a></li>
                    <li><a href="/signUp">SignUp</a></li>
                    <li><a href="/contact">Contact-US</a></li> 
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/about">AboutUS</a></li>
                    <li><a href="/home">Home</a></li>
                </ul>
                </div>
            </nav>

        </div>
        </>
    )
}
export default Header;
