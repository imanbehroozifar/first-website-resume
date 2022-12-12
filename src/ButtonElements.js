import styled from 'styled-components'
import { Link } from 'react-scroll'
import { MoveToTop } from './Animatons'; 
export const Button = styled(Link)`

border-radius: 50px;
padding:16px 24px ;
background:#f4b504;
white-space:nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: #212519;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
transition: all .2s ease-in-out;
z-index: 2;
animation: ${MoveToTop} 1s ease-in-out 1s ;
animation-fill-mode: backwards;
animation-timing-function:2s;
&:hover{
    transition: all .2s ease-in-out;
    transform:translateX(-10px);
}
 

`;