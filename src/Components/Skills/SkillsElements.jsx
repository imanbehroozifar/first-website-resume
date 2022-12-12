import styled from "styled-components";

export const SkillsContainer = styled.div`
background-color: #fff;


`

export const SkillsRow = styled.div`
background-color:#f4f6f8 ;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 1.5rem;
border-radius: 10px;
margin: 0 20px;
margin-bottom: 50px;

@media screen and (max-width:768px){
    flex-direction: column;
}

`
export const Col = styled.div`
display:flex;
flex: 0 0 auto;
width: 42%;
flex-direction: column;
&:last-child{
    margin-right: 10rem;
}
@media screen and (max-width:768px){
    width: 100%;
    &:last-child{
        margin-right: 0;
    }
}

`
export const ColItem = styled.div`
margin-right: 20px;
padding: 5px;
`
export const SpanBox = styled.div`
display: flex;
justify-content:space-between;
`
export const SpanR = styled.span`

`
export const SpanL = styled.span`

`
export const Progress = styled.div`
display: flex;
height: 1rem;
overflow: hidden;
font-size: .75rem;
background-color: #e9ecef;
border-radius: 10px;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
direction: ltr;
`
export const ProgressDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #f4b504;
`
