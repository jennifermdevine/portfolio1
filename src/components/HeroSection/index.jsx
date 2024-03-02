import React from "react";
import HeroBgAnimation from './HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Image, HeroRightContainer, HeroInnerContainer, Title, TextLoop, Span, SubTitle, ResumeButtonContainer, ResumeButton } from './style';
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import pfp from "./assets/pfp.png";

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am <br/>{Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}></Typewriter>
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButtonContainer>
                            <ResumeButton href={Bio.resume} target="_blank">Resume</ResumeButton>
                        </ResumeButtonContainer>
                    </HeroLeftContainer>
                    <HeroRightContainer><Image src={pfp} alt="a headshot of Jennifer Devine"/></HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero;