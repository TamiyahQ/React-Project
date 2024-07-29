import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Home/HeroSection";
import Clients from "./components/Home/Clients";
import Community from "./components/Home/Community";
import Unlock from "./components/Body/Unlock";
import Achievements from "./components/Body/Achievements";
import Calender from "./components/Body/Calender";
import Customers from "./components/Body/Customers";
import CommunityUpdates from "./components/Body/CommunityUpdates";
import Frame from "./components/Footer/Frame";
import Footer from "./components/Footer/Footer";
import About from "./components/Header/About";
import Contact from "./components/Header/Contact";
import Service from "./components/Header/Service";
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
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
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
  );
}

export default App;

