import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background:${({ scrollNav }) => (scrollNav ? '#fff' : '#f4f6f8')};
   box-shadow:${({ scrollNav }) => (scrollNav ? '0 .125rem .25rem rgba(0,0,0,.075)' : 'none')} ;
   transition: ${({ scrollNav }) => (scrollNav ? 'all .6s ease' : 'all .6s ease')};
   height: ${({ scrollNav }) => (scrollNav ? '75px':'70px')};
position:sticky;
top: 0;
display:flex;
justify-content: center;
align-items: center;
z-index: 1000;
font-size:1rem;
`
export const NavbarContainer = styled.div`

max-width:1100px;
height: 80px;
width:100%;
display: flex;
justify-content:space-between;
padding:1.8rem;
`
export const NavLogo = styled(LinkR)`
text-decoration: none;
font-size:1.3rem;
font-weight:700;
display: flex;
justify-self: flex-end;
align-items:center;
color: #f4b504;

`
export const MobileIcon = styled.div`
display: none;


@media screen and (max-width:768px) {
    display:flex;
    position: absolute;
    top:0;
    right: 0;
    font-size: 1.8rem;
    transform: translate(-100%,60%);
    cursor: pointer;
    align-items: center;
    border: 3px solid rgba(0,0,0,0.8);
    border-radius: 4px;
}
`

export const NavUl = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right:22px;


@media screen and (max-width:768px) {
  display:none ;
}
`
export const NavLi = styled.li`
height:70px;


`

export const NavLinks = styled(LinkS)`

display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
height: 105%;

&:hover{
  color: rgba(0,0,0,0.5);
  border-bottom:3px solid #f4b504;
  }

 ` 
 export const BlogLink = styled(LinkR)`

display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
height: 105%;
color: #000000cc;

&:hover{
  color: rgba(0,0,0,0.5);
  border-bottom:3px solid #f4b504;
  }
  `