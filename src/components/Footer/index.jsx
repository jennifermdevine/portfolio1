import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, Link, SocialMediaIcons, SocialMediaIcon, Copyright } from './style';
import { Bio } from '../../data/constants';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Jennifer Devine</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 Jennifer Devine. Portfolio template heavily inspired by <Link to="https://github.com/rishavchanda/rishavchanda.github.io/tree/master" target="_blank">Rishav Chanda</Link> via <Link to="" target="_blank">these</Link> series of videos.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;