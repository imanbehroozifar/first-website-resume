

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../ButtonElements'
import { Box, Column1, Column2, Container, Row, SocialMediaIcon, SocialMediaWrap } from '../../DuplicateCode';
import {DivWaveBG, ArrowForward, BtnWrap, HeaderContainer, Heading,Img,SubTitle, ToplLine} from './HeaderElements';
const Header = () => {
     
    
    return ( 
        <>
        <HeaderContainer>
                   <Container>
                        <Row>
                         <Column2>
                            <Box>
                                <ToplLine>سلام!</ToplLine>
                                    <Heading>
                                        من ایمان بهروزی فر هستم
                                    </Heading>
                                <SubTitle>توسعه دهنده وب و برنامه نویس اپلیکیشن موبایل</SubTitle>
                                <SocialMediaWrap justify>
                                    <SocialMediaIcon>
                                        <FaFacebook />
                                    </SocialMediaIcon>
                                    <SocialMediaIcon>
                                        <FaYoutube />
                                    </SocialMediaIcon>
                                    <SocialMediaIcon>
                                        <FaInstagram />
                                    </SocialMediaIcon>
                                    <SocialMediaIcon>
                                        <FaTwitter/>
                                    </SocialMediaIcon>
                                </SocialMediaWrap>
                                <BtnWrap>
                                  <Button to='contact' smooth duration={500} spy offse={-80}>ارتباط با من<ArrowForward /> </Button>
                                </BtnWrap>
                            </Box>
                         </Column2>
                        <Column1>
                            <Box>
                                <Img  src={require('../../Images/hello3.svg').default }/>
                            </Box>
                        </Column1>
                        </Row>
                    </Container>
                   
                </HeaderContainer>
                <DivWaveBG></DivWaveBG>
          </>
     );
}
 
export default Header;
