import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from "./components/Header/Navbar";
import About from "./components/Header/About";
import Contact from "./components/Header/Contact";
import Service from "./components/Header/Service";

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

