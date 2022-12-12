import styled from 'styled-components'
import {MdArrowForward} from 'react-icons/md'
import { MoveToTop } from '../../Animatons'
import img from '../../Images/wave-bg.svg'
export const HeaderContainer = styled.div`

background:#F4F6F8;

`


export const ToplLine = styled.p`
padding-top:90px ;
font-size: 20px;
line-height: 16px;
margin-bottom: 26px;


`    
export const Heading = styled.h1`
margin-bottom: 28px;
font-size: 40px;
display: inline-block;
background-image:linear-gradient(to right, #f4b504, #010101);
-webkit-background-clip: text;
color: transparent;
@media screen and (max-width:940px) {
    font-size: 32px;
}
`
export const SubTitle = styled.p`
font-size: 20px;
margin-bottom: 30px;



animation: ${MoveToTop} 1s ease-in-out .5s;
animation-fill-mode: backwards;
`

export const BtnWrap = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: flex-start;

`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 2px;
font-size: 16px;
transform: rotate(180deg);
margin-right:5px;

`

export const Img = styled.img`
width: 100%;
margin:0 0 30px 0;
padding-right:0 ;

`
export const DivWaveBG = styled.div`
    display: block;
    height: 220px;
    width: 100%;
    min-width: 480px;
    transform-origin: center top;
    background-image: url(${img});
    background-position: center center;
    background-repeat: no-repeat;
    margin-top:-5px;
`
