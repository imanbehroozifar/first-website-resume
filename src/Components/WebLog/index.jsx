import React from 'react'
import {  Container, ContainerH2, H2, } from '../../DuplicateCode'
import BlogPage from './BlogPage'
import { articleFour, articleOne, articleTree, articleTwo } from './Data'
import { Arrow, BackBtn, BtnWrap, WebLogContainer } from './WebLogElements'


const WebLog = () => {
  return (
      <WebLogContainer>
      <Container>
        <BtnWrap>
                <BackBtn to = '/'><Arrow/></BackBtn>
        </BtnWrap>
        <ContainerH2>
          <H2>وبلاگ</H2>
        </ContainerH2>
        <BlogPage {...articleOne} />
        <BlogPage {...articleTwo} />
        <BlogPage {...articleTree} />
        <BlogPage {...articleFour} />
      </Container>   
    </WebLogContainer>
  )
}

export default WebLog