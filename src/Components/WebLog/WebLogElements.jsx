import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {RiArrowLeftSLine} from 'react-icons/ri'
export const WebLogContainer = styled.div`

`
export const Figcaption = styled.figcaption`
position: absolute;
top: 95%;
left:50%;
transform: translate(-50% ,-50%);
transition: all .8s ease-in-out;
opacity: 0;
font-size:26px;
text-align: center;
`
export const BackBtn = styled(Link)`

background-color: #fff;
height: 80px;
width: 80px;
position: fixed;
top: 96px;
left: 90px;
border-radius: 50%;
z-index: 2000;
-webkit-box-shadow: 0 1rem 3rem rgba(0,0,0,0.1);
box-shadow: 0 1rem 3rem rgba(0,0,0,0.1);
text-align: center;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
&:hover{
    left: 80px;
} 
`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-end;
padding: 15px;

@media screen and (max-width:1100px){
    display:none;
}
`

export const Arrow = styled(RiArrowLeftSLine)`
font-size: 30px;
color: #000;
`
export const BlogContainer = styled.div`
max-width: 1140px;
margin:0 auto;
padding-top: 50px;
position: relative;
&:hover Figcaption {
        opacity: 1;
        transform: translate(-50%, -150%);
      
    }
`
export const BlogWrapper = styled.div`
    padding: 30px;
    grid-gap: 10px;
    margin: 20px;
   background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(185,185,185,1) 100%);
    border-radius: 20px 20px 0 0;
    box-shadow: 5px 0 5px 5px 4px 0 rgb(0 0 0 / 15%);
    height: auto; 
    transition: all 0.2s ease-in-out;
    
    &:hover{
  filter: blur(0.5px) brightness(99%);
    }
    
`
export const Item1 = styled.div`

`
export const ImgWrap = styled.div`
min-width:360px;
height: 100%;
`
export const Img = styled.img`
width: 100%;
margin:0 0 30px 0;
padding-right:0 ;
`
export const Item2 = styled.div`

`
export const TextWrapper = styled.div`
max-width: 500px;
padding-top:0;
padding-bottom:60px;
color:#000000cc;
`

export const Heading = styled.h2`
text-transform: uppercase;
margin-bottom: 24px;
margin-top:90px ;
font-size: 48px;
line-height: 1.1;
font-weight: 700;
color: #f4b504;
@media screen and(max-width:480px) {
    font-size: 32px;
    margin-top: 0;
}

`

export const SubTitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px

`
