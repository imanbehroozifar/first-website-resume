import styled, { css } from "styled-components";
import { MoveToLeft, MoveToRight } from "../../Animatons";
export const AboutContainer = styled.div`
  
  background-color: #fff;
  
  
  `
export const AnimateDiv = styled.div`

display:${({scrollY})=>scrollY ? '':'none'};
animation: ${({ scrollY }) => scrollY
    ? css`
       
        ${MoveToRight} 1s ease-out  

        `: ''
};
animation-fill-mode:forwards;
`
export const ToplLine = styled.h2`
display: inline-block;
background-image:linear-gradient(to right, #f4b504, #010101);
-webkit-background-clip: text;
color: transparent;
font-size: 24px;
line-height: 16px;
margin-bottom: 26px;
margin-top: 70px;
line-height: normal;

@media screen and (max-width: 880px) {
  margin-top: 0;
}

`    
export const SubTitle = styled.p`
width: 100%;
font-size: 16px;
margin-bottom: 35px;
 
`
export const PersonWrapper = styled.div`
display: grid;
grid-template-areas: 'cl1 cl2';

`
export const Cl1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: cl1;
`
export const Cl2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: cl2;

`
export const KeyName = styled.p`
font-size: 15px;
font-weight: 300;
margin-bottom: 10px;
`
export const Property = styled.p`
font-size: 15px;
margin-bottom: 10px;
font-weight: 300;
`
export const Img = styled.img`
width:100%;
height: auto;
vertical-align: middle;
padding-right:0 ;
border-radius: 20px;
margin-left: 70px;
overflow: hidden;

@media screen and (max-width:960px){
  
  width:360px;
height: 360px;
}
@media screen and (max-width:678px){
  width:100%;
height: auto;
}
@media screen and (min-width:768px) {
 display:${({scrollY})=>scrollY ? '':'none'};
animation: ${({ scrollY }) => scrollY
    ? css`
       
        ${MoveToLeft} 1s ease-out  

        `: ''
};
animation-fill-mode:forwards; 
}
 
`