import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "../views/home";
import About from "../views/aboutUs";
import Gallery from "../views/gallery";
import Signin from "../views/signIn";
import Signup from "../views/signUp";
import Contact from "../views/contact";
import Tour from "../views/tour";
import NewTourView from "../views/dashboard/newTour";
import DashLayout from "../components/dashboardLayout";
import AllLayout from "../views/dashboard/allTours";
import AllTour from "../views/dashboard/allTours";

const isUserLogedIn=localStorage.getItem("userLogedIn")
const Index = () => {

  const currentUrl=useLocation().pathname;
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        {/* <Route exact path="/signIn" element={<Signin />}></Route> */}
        <Route exact path="/signUp" element={<Signup />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/tour" element={<Tour />}></Route>
      </Routes>
      {
        isUserLogedIn && currentUrl.includes("/dash") ?(
          <DashLayout>
          <Routes>
      <Route exact path="/dash/newtour" element={<NewTourView />}></Route>
      <Route exact path="/dash/alltour" element={<AllTour/>}></Route>
      </Routes>
      </DashLayout>
        ):(
          <></>
        )
      }

     
    </>
  );
};
export default Index;
