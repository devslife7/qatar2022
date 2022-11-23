import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from '../assets/FooterElements'

export default function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Marcos Velasco
            </SocialLogo>
            <WebsiteRights>
              Copyright © {new Date().getFullYear()} Marcos Velasco. All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.linkedin.com/in/marcos-velasco-1b07a7189/'
                target='_blank'
                arial-label='LinkedIn'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/devslife7' target='_blank' arial-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.facebook.com/marcos.velasco.5/'
                target='_blank'
                arial-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/markuz1457'
                target='_blank'
                arial-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.youtube.com/channel/UCBmRRBM8cmE29ZGba51Sbzw'
                target='_blank'
                arial-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              {/* <SocialIconLink href='https://twitter.com/Markuz113' target='_blank' arial-label='Twitter'>
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}
