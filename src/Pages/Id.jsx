import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../DuplicateCode'
import styled from 'styled-components'
import ArticleId from './ArticleId'
import {articleOne,articleTwo,articleTree,articleFour} from './DataId'

const BlogContainer = styled.div`
    background: linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(185,185,185,1) 100%);
    height: 100vh;
`

const Id =()=> {
  let { id } = useParams()
  
    return (
   
    <BlogContainer>
       <Container>
        <ArticleId id={id} {...articleOne} />
          <ArticleId id={id} {...articleTwo} />
          <ArticleId id={id} {...articleTree} />
          <ArticleId id={id} {...articleFour} />
      </Container>
   </BlogContainer>
  )
  }


export default Id
