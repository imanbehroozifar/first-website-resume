import React from 'react';
import { BlogLink } from './MobileElements';
import { CloseIcon, Icon, MobileContainer, MobileLink, MobileUl } from './MobileElements';


const Mobile = ({ isOpen, toggle }) => {
    return (
            <MobileContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon />
                </Icon>
                <MobileUl>
                    <MobileLink to='about' onClick={toggle}>درباره من</MobileLink>
                    <MobileLink to='services'onClick={toggle}> خدمات</MobileLink>
                    <MobileLink to='skill'onClick={toggle}> مهارت</MobileLink>
                <MobileLink to='portfilo' onClick={toggle}> نمونه کار</MobileLink>
                   <BlogLink to='/blog'>
                                بلاگ
                            </BlogLink>
                    <MobileLink to='contact'onClick={toggle}> تماس با من</MobileLink>
                </MobileUl>
            </MobileContainer>
        );
    }

 
export default Mobile;