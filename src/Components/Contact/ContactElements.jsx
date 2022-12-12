import styled, { css } from "styled-components";
import { MoveToLeft, MoveToRight } from "../../Animatons";

export const ContactContainer = styled.div`
background: #fff;
display: grid;
margin-bottom: 30px;

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
export const Headh5 = styled.h5`
font-size:20px;
margin-bottom: 16px;
-webkit-background-clip: text;
color:transparent;
display: inline-block;
background-image:linear-gradient(to right, #f4b504, #010101);
margin-top:10rem ;
@media screen  and (max-width: 768px) {

    margin-top: 0;
    
}
`
export const Tagp = styled.p`
font-size:16px;
margin-bottom: 16px;
`
export const FormWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #f4f6f8;
direction: ltr;
width: 440px;
border-radius: 30px;
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
export const TagForm = styled.form`
display: flex;
flex-direction: column;
padding: 2rem;
direction: rtl;
`
export const Section = styled.div`
margin-bottom: 15px;
height:100%;
`

export const Label = styled.label`
font-size: 16px;
font-weight: 300;
display: block;
margin-bottom:10px;
margin-right:5px;
`

export const Input = styled.input`
width:400px;
height: 35px;
border: 1px solid #eee;
border-radius:7px ;
padding: 6px 12px;
outline: none;
`

export const Textarea = styled.textarea`
width: 400px;
max-width:430px;
max-height: 110px;
height: 109px;
border: 1px solid #eee;
border-radius:7px ;
padding: 6px 12px;
outline: none;
`
export const Btn = styled.button`
width: 80px;
height: 40px;
background: #f4b504;
border:1px solid #f6e05e;
border-radius: 40px;


`