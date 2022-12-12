import React from 'react'
import { Link} from 'react-router-dom'
import { Box, Column1, Column2, Row } from '../../DuplicateCode'
import { BlogContainer, BlogWrapper, Figcaption, Heading, Img, ImgWrap, SubTitle, TextWrapper } from './WebLogElements';
const BlogPage = ({ img, description, heading, id }) => {
  return (
    <BlogContainer>
      <Link style={{ textDecoration: 'none' }} to={`/blog/${id}`}>
              <BlogWrapper>
            <Row> 
               <Column1>
              <Box>
                <TextWrapper id={id} >
                              <Heading>{heading}</Heading>
                              <SubTitle>{description}</SubTitle>
                  </TextWrapper>
              </Box>
            </Column1>
            <Column2>
              <Box>
                <ImgWrap>
               <Img src={img} alt={id} />
                </ImgWrap>
              </Box> 
              </Column2>
          </Row>
          </BlogWrapper>
          </Link>
      <Figcaption>بزن بریم!</Figcaption>
        </BlogContainer>
  )
}

export default BlogPage