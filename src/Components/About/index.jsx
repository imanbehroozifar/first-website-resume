import {  useState } from "react";
import { Box, Column1, Column2, Container, Row } from "../../DuplicateCode";
import { AboutContainer, Cl1, Cl2, Img, KeyName, PersonWrapper, Property, SubTitle, ToplLine,AnimateDiv } from "./AboutElements";

const About = () => {
    const [scrollY , setScrollY] = useState(false) 

    const ChangeNav = () => {
        if (window.scrollY >= 500){
            setScrollY(true)
        } 
    }
   
        window.addEventListener('scroll', ChangeNav)     

    return ( 
       <AboutContainer id='about'>
            <Container>
                    <Row>
                        <Column1>
                        <Box>
                            
                            <AnimateDiv scrollY={scrollY}>
                                
                                 <ToplLine>سلام من ایمان بهروزی فر هستم</ToplLine>
                                <SubTitle>عاشق دنیای تکنولوژی برنامه نویسی و زبان پرقدرت جاوااسکریپت کتابخانه ها و فریم ورک های جذابش.در تلاش برای فراگیری فرانت اند و در ادامه اپلیکیشن موبایل </SubTitle>
                                <PersonWrapper>
                            
                                    <Cl1>
                                        <KeyName>سن:</KeyName>
                                         <KeyName>ایمیل:</KeyName>
                                        <KeyName>شماره:</KeyName>
                    
                                        
                                    </Cl1>
                                    <Cl2>
                                        <Property>22</Property>
                                        <Property>i.behroozifar78@gmail</Property>
                                        <Property>09031599486</Property>
                                      

                                    </Cl2>
                                </PersonWrapper> 

                            </AnimateDiv>   
                            
                        </Box>
                        
                    </Column1>
                    <Column2>
                            <Box>
                            <Img scrollY={scrollY}  src={require('../../Images/iman.jpg')} />
                            </Box>
                    </Column2>
                    </Row>
            </Container>
       </AboutContainer>
                   
                        
                         
                            
     );
}
 
export default About;