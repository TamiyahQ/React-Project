import Navbar from "./components/Header/Navbar"
import HeroSection from "./components/Home/HeroSection"
import Clients from "./components/Home/Clients"
import Community from "./components/Home/Community"
import Unlock from "./components/Body/Unlock"
import Achievements from "./components/Body/Achievements"
import Calender from "./components/Body/Calender"
import Customers from "./components/Body/Customers"
import CommunityUpdates from "./components/Body/CommunityUpdates"
import Frame from "./components/Footer/Frame"
import Footer from "./components/Footer/Footer"
import React, { useState } from 'react';



function App() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAlert = () => {
    alert(`Your email: ${email} has been registered and we will keep you updated on the latest news!`);
  };


  return (
    <>
    <Navbar />
    <HeroSection const register={()=>{
      alert('Register now!')
  }} />
    <Clients />
    <Community />
    <Unlock const history={()=>{
      alert("Check out the about the company's achievements!")
  }}/>
    <Achievements />
    <Calender const learn={()=>{
      alert("Learn more about our company's events")
  }}/>
    <Customers />
    <CommunityUpdates />
    <Frame const demo={()=>{
      alert('Get a demo on our Official Youtube Channel.')
  }}/>
    <Footer 
    email={email}
    onEmailChange={handleEmailChange}
    onAlert={handleAlert}
    />
    </>
  )
}

export default App

