import React, { Component } from 'react';
import { FooterContainer, FooterWrapper,FooterTitle,FooterSubTitle} from './FooterElements';
import {FaFacebook,FaYoutube,FaInstagram,FaTwitter} from 'react-icons/fa'
import { SocialMediaIcon, SocialMediaWrap } from '../../DuplicateCode';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <FooterContainer>
                <FooterWrapper>
                    <FooterTitle>
                        ایمان بهروزی فر
                    </FooterTitle>
                    <FooterSubTitle>
                        توسعه دهنده وب و برنامه نویس اپلیکیشن موبایل
                    </FooterSubTitle>
                  
                    <SocialMediaWrap>
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
                    
                </FooterWrapper>
            </FooterContainer>
        );
    }
}
 
export default Footer;