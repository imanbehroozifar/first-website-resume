import Navbar from "../Components/Navbar";
import { useState } from "react";
import Mobile from "../Components/Mobile";
import Header from "../Components/Header";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Contact from '../Components/Contact'
import Services from '../Components/Services'
import Skills from "../Components/Skills";
import { Outlet } from "react-router-dom";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
 
    return ( 

        <>
            <Mobile  isOpen={ isOpen } toggle={ toggle }/>
            <Navbar  toggle={ toggle }/>
            <Header />
            <About />
            <Services />
            <Skills/>
            <Contact />
            <Footer />
        </>
     );
}
 
export default Home;
