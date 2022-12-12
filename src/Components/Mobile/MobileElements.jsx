import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import {Link as LinkR } from 'react-router-dom'
export const MobileContainer = styled.div`
position: fixed;
z-index: 1111;
width: 100%;
height: 100%;
background: #F4F6F8;
display: grid;
align-items: center;
transition: 0.3s ease; 
left: 0;
opacity:${({ isOpen }) => (isOpen ? '100%':'0')};
top:${({ isOpen }) => (isOpen ? '0':'-100%')};
`

export const CloseIcon = styled(FaTimes)`
border-radius: 4px;
border: 3px solid rgba(0,0,0,0.8);
width: 35px;
height: 35px;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
font-size: 2rem;
cursor: pointer; 
outline: none;
right: 1.5rem;
`

export const MobileUl = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows:repeat(5 , 80px);
text-align: center;
justify-content: flex-end;

@media screen and (max-width:480px) {
 grid-template-rows:repeat(5 , 60px);  
}
` 

export const MobileLink = styled(LinkS)`

display: flex;
align-items: center;
justify-content: flex-end;
font-size: 1.2rem;
list-style:none;
transition: all 0.2s ease-in-out;
margin-right: 48px;

&:hover{
    margin-right: 55px;
    font-size: 1.4rem;
    color:#525252;
    transition: all 0.2s ease-in-out;
}


`
export const BlogLink = styled(LinkR)`

display: flex;
align-items: center;
justify-content: flex-end;
font-size: 1.2rem;
text-decoration: none;
color: #000000cc;
transition: all 0.2s ease-in-out;
margin-right: 48px;

&:hover{
    margin-right: 55px;
    font-size: 1.4rem;
    color:#525252;
    transition: all 0.2s ease-in-out;
}


`