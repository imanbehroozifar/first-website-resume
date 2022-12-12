import styled from "styled-components";
import { MoveToTop } from "./Animatons";

export const Container = styled.div`
max-width: 1140px;
margin: 0 auto;
direction: rtl;
` 
export const Row = styled.div`
display: grid;
grid-template-areas: 'col1 col2';
grid-gap: 10px;
width: 100%;
height: 650px;
grid-template-columns: minmax(auto,1fr);
white-space: normal;

@media screen and (max-width:768px) {

    grid-template-areas: 'col1 col1' 'col2 col2';
height: 100%;
}  
`
export const Column1 = styled.div`
padding: 1rem;
grid-area:col2;


`
export const Column2 = styled.div`
padding: 1rem;
grid-area:col1;

`


export const Box = styled.div`
max-width: 550px;
height:100%;
direction: rtl;
margin: 0 auto;
`
//SocialMedia

export const SocialMediaWrap = styled.div`
 display: flex;
 justify-content:${({justify}) => justify ?'flex-start':'center'} ;
 align-items: center;
 margin-left: -1.2rem;

 animation: ${MoveToTop} 1s ease-in-out .75s;
animation-fill-mode: backwards;
 `
export const SocialMediaIcon = styled.a`
 font-size: 24px;
 margin-left: 20px;
 padding: 5px;
 cursor: pointer;
 color:  #c7960e;
 
 &:hover{

   transition: 0.2s ease-in-out;
   color: #f4b504;

 }
 `
 //box h2

 export const ContainerH2 = styled.div`
text-align: center;
margin-bottom: 60px;

`
export const H2 = styled.h2`
font-size: 32px;
font-weight: 400;
color: #f4b504;
`
// TextBox

export const TextBox = styled.div`
text-align: center;
`
export const Text = styled.p`
font-size: 16px;
margin-bottom:40px ;

`