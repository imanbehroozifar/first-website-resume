import styled, { css } from "styled-components";
import { MoveToTop } from "../../Animatons";

export const ServicesContainer = styled.div`
background: #fff;
`
export const AnimateDiv = styled.div`
height:   300px;
margin-top:5rem;
@media screen and (max-width: 768px){
  height:100%;
  }
`
export const ServicesWrapp = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;

@media screen and (max-width: 768px){
    flex-direction: column;
    height:100%
}
@media screen and (min-width: 768px){
  display:${({scrollY})=>scrollY ? '':'none'};
animation: ${({ scrollY }) => scrollY
    ? css`
       
        ${MoveToTop} 1s ease-out  

        `: ''
};
animation-fill-mode:forwards;
}
`
export const BoxIcon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
margin-bottom:16px;

`
export const Img = styled.img`
margin-bottom: 16px;
width: 96px;
height: 96px;

`

export const TextImg = styled.h5`
font-size:1.25rem;
text-align: center;
`