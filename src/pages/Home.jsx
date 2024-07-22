import React from "react";
import "./home.scss";
import imageTwo from "../images/management.png";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      transform: "scale(1)",
      from: { transform: "scale(0.5)" },
      config: { duration: 1000 },
   });
   const fadeInH1 = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 1000 },
   });

   const fadeInP = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 500, // Add delay for staggered effect
      config: { duration: 1000 },
   });
   const fadef6 = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 1200, // Add delay for staggered effect
      config: { duration: 1000 },
   });
   const fadef5 = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 1400, // Add delay for staggered effect
      config: { duration: 1000 },
   });
   const fadeInButtons = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: 1000, // Add delay for staggered effect
      config: { duration: 1000 },
   });

   const navigate  = useNavigate();

   return (
      <div className="home__section">
         <animated.div style={fadeIn} className="image__section">
            <img src={imageTwo} alt="Home" className="home__image" />
         </animated.div>
         <div className="user__section">
            <animated.h1 style={fadeInH1} className="welcome-message">
               Welcome to User Management Website
            </animated.h1>
            <animated.p style={fadeInP}>
               This is a simple website created using React.js to manage the user Details{" "}
            </animated.p>
            <div className="info-div">
               <animated.div style={fadeInP} className="main-div">
                  <animated.h5 style={fadef6} className='heading1'>Abhishek Kumar</animated.h5>
                  <animated.p style={fadef5} className='heading'>Email: abhishek.kumar@gmail.com</animated.p>
                  <animated.p style={fadef5} className='heading'>User Status: Active or inactive</animated.p>
                  <animated.p style={fadef5} className='heading'>Creation Date: 24-July-2024</animated.p>
               </animated.div>
               <animated.div style={fadeInP} className="secondary-div">
                  <animated.h5 style={fadef6} className='heading1'>Gupta Kumar</animated.h5>
                  <animated.p style={fadef5} className='heading'>Email: abhishek.kumar@gmail.com</animated.p>
                  <animated.p style={fadef5} className='heading'>User Status: Active or inactive</animated.p>
                  <animated.p style={fadef5} className='heading'>Creation Date: 24-July-2024</animated.p>
               </animated.div> 
            </div>
            <div className="info-div">
            <animated.button style={fadeInButtons} className="main-button" onClick={() => navigate('/add')}>
               Create new user
            </animated.button>
            <animated.button style={fadeInButtons} className="secondary-button" onClick={() => navigate("/list")}>
               List User Data
            </animated.button>
            </div>
         </div>
      </div>
   );
}
