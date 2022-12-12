import React from 'react'
import styled from 'styled-components'
import { Rotate } from '../Animatons'
const NotFound = () => {
  return (
      <Div>
          <PTagTop>
              404
          </PTagTop>
          <PTagBottom>
             (: وای!! آدرسی که وارد کردی درست نیست لطفا آدرسو درست وارد کن
          </PTagBottom>
      </Div>
  )
}

export default NotFound

const Div = styled.div`
width: 100%;
height: 840px;
background-image:linear-gradient(to right bottom,#f4b504 ,#f4b344);
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const PTagTop = styled.p`
    font-family: cursive;
    font-size: 200px;
    font-weight: 600;
    color: aliceblue;
    animation: ${Rotate} infinite 1s ease-in-out ;
`
const PTagBottom = styled.p`
font-size: 28px;
color: aliceblue;
`