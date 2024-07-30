import HeroSection from "./Main/HeroSection";
import Clients from "./Main/Clients";
import Community from "./Main/Community";
import Unlock from "./Body/Unlock";
import Achievements from "./Body/Achievements";
import Calender from "./Body/Calender";
import Customers from "./Body/Customers";
import CommunityUpdates from "./Body/CommunityUpdates";
import Frame from "./Footer/Frame";
import Footer from "./Footer/Footer";
import React, { useState } from 'react';

const Home = () => {

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleAlert = () => {
      alert(`Your email: ${email} has been registered and we will keep you updated on the latest news!`);
    };

  return (
    <>
      <HeroSection register={() => alert('Register now!')} />
      <Clients />
      <Community />
      <Unlock history={() => alert("Check out the about the company's achievements!")} />
      <Achievements />
      <Calender learn={() => alert("Learn more about our company's events")} />
      <Customers />
      <CommunityUpdates />
      <Frame demo={() => alert('Get a demo on our Official Youtube Channel.')} />
      <Footer 
        email={email}
        onEmailChange={handleEmailChange}
        onAlert={handleAlert}
      />
    </>
  )
}

export default Home
