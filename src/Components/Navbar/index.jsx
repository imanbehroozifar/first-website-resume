import { BlogLink, MobileIcon, Nav, NavbarContainer, NavLi, NavLinks, NavLogo, NavUl } from "./NavbarElements";
import { FaBars} from 'react-icons/fa'
import {useEffect, useState} from 'react'
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
const Navbar = ({ toggle }) => {
    const [scrollNav , setScrollNav] = useState(false) 

    const ChangeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

 
    useEffect(() => {
   
        window.addEventListener('scroll', ChangeNav)     
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return ( 
        <>
        <Nav  scrollNav={scrollNav}>
            
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} >Logo</NavLogo>
                <MobileIcon onClick={toggle} ><FaBars /></MobileIcon>
                    <NavUl>
                        <NavLi>
                            <NavLinks to='contact'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}>
                                تماس با من
                            </NavLinks>
                        </NavLi>
                        <NavLi>
                            <BlogLink to='/blog'>
                                بلاگ
                            </BlogLink>
                        </NavLi>
                        <NavLi>
                            <NavLinks to='portfolio'
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}>
                                نمونه کار
                            </NavLinks>
                        </NavLi>
                         
                        <NavLi>
                            <NavLinks to='skills'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}>
                                مهارت
                            </NavLinks>
                        </NavLi>
                        
                        <NavLi>
                            <NavLinks to='services'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500} >
                                خدمات
                            </NavLinks>
                        </NavLi>
                        <NavLi>
                            <NavLinks to='about'
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}>
                                درباره من
                            </NavLinks>
                        </NavLi>
                                              
                </NavUl>
             
            </NavbarContainer>
        </Nav>  
        </>
    );
}
 
export default Navbar;
