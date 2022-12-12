import React, { useState } from 'react';
import { Column1, Column2, Container, ContainerH2, H2, Row } from '../../DuplicateCode';

import { Btn, ContactContainer, FormWrap, Headh5, Input, Label, Section, TagForm, Tagp, Textarea ,AnimateDiv } from './ContactElements';

const Contact = () => {
    const [scrollY , setScrollY] = useState(false) 

    const ChangeNav = () => {
        if (window.scrollY >= 2000){
            setScrollY(true)
        } 
    }
   
        window.addEventListener('scroll', ChangeNav)     

        return (
            <ContactContainer id='contact'>
            
                    <ContainerH2>
                    <H2>تماس با من</H2>
                    </ContainerH2>
                <Container>
                    
                    <Row>
                        <Column1>
                            <AnimateDiv scrollY={scrollY}>
                                <Headh5>بیا صحبت کنیم که چجوری میتونم بهت کمک کنم</Headh5>
                            <Tagp>اگر کار من رو دوست داری و میخوای از خدمات من استفاده کنی فرم رو پر کن </Tagp>
                            <Tagp>یا با استفاده از ایمیل وشمارم با من در تماس باش</Tagp>
                            <Tagp>!به امید دیدار</Tagp>
                            </AnimateDiv>
                        </Column1>
                        <Column2>
                            <FormWrap scrollY={scrollY}>
                                <TagForm action='#' >
                                    <Section>
                                        <Label htmlFor={'name'}>نام و نام خانوادگی</Label>
                                        <Input type={'text'} id={'name'}/>
                                    </Section>
                                    <Section>
                                        <Label htmlFor={'email'}>ایمیل</Label>
                                        <Input type={'email'} id={'email' }/>
                                    </Section>
                                    <Section>
                                        <Label htmlFor={'message'}>پیام</Label>
                                        <Textarea type={'text'} id={'message'}/>
                                    </Section>
                                    <Btn type={'submit'}>ارسال</Btn>
                                </TagForm>
                           </FormWrap>
                        </Column2>
                    </Row>
                </Container>

            </ContactContainer>
        );
    }

 
export default Contact;