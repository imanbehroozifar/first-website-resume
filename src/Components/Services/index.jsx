import React, { useState } from 'react';
import { Container, ContainerH2, H2, Text, TextBox } from '../../DuplicateCode';
import {  BoxIcon, Img,  ServicesContainer, ServicesWrapp, TextImg,AnimateDiv } from './ServicesElements';

const  Services = ()=> {
    
        const [scrollY , setScrollY] = useState(false) 

    const ChangeNav = () => {
        if (window.scrollY >= 1300){
            setScrollY(true)
        } 
    }
   
        window.addEventListener('scroll', ChangeNav)     

     
        return (
            <ServicesContainer id='services'>
            
                <Container>
                    <ContainerH2>
                        <H2>خدمات من</H2>
                    </ContainerH2>
                    <TextBox>
                         <Text>
                        من خدمات مناسب برای وب سایت یا برنامه ارائه می دهم و می توانم با سرعت بالا و زمان مناسب پروژه را تحویل بدهم
                        </Text>
                   </TextBox>
                    <AnimateDiv>
                        <ServicesWrapp scrollY={scrollY}>
                        <BoxIcon>
                            <Img src={require('../../Images/web-design.svg').default} />
                            <TextImg>Web Design</TextImg>
                        </BoxIcon>
                        <BoxIcon>
                              <Img src={require('../../Images/ui-ux.svg').default} />
                            <TextImg>UX/UI</TextImg>
                        </BoxIcon>
                        <BoxIcon>
                             <Img src={require('../../Images/app-development.svg').default} />
                            <TextImg>App Development</TextImg>
                        </BoxIcon>       
                    </ServicesWrapp>
                    </AnimateDiv>
                </Container>

            </ServicesContainer>
        );
    }

 
export default Services;