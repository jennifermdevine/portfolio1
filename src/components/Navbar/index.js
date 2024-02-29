import React from "react";
import { Nav, NavContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubButton, MobileMenu, MobileLink } from './style';
import LogoImg from "./assets/logo2.png";
import { Bio } from "../../data/constants";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">
                    <a
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            marginBottom: "20",
                            cursor: "pointer",
                        }}>
                        <img src={LogoImg} alt="the initials 'jd' in script" height="75"/>
                    </a>
                        </NavLogo>
                <MobileIcon>
                    <FaBars
                        onClick={()=> {
                            setOpen(!open);
                        }} 
                        />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
                </ButtonContainer>
            </NavContainer>

            {open &&
                <MobileMenu open={open}>
                    <MobileLink
                        href="#about"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        About
                    </MobileLink>
                    <MobileLink
                        href="#skills"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Skills
                    </MobileLink>
                    <MobileLink
                        href="#experience"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Experience
                    </MobileLink>
                    <MobileLink
                        href="#projects"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Projects
                    </MobileLink>
                    <MobileLink
                        href="#education"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        Education
                    </MobileLink>
                    <GithubButton
                        style={{
                            padding: "10px 16px",
                            background: "#854CE6",
                            color: "white",
                            width: "max-content",
                        }}
                        href="/"
                        target="_blank"
                    >
                        Github Profile
                    </GithubButton>
                </MobileMenu>}

        </Nav>
    )
}

export default Navbar;