import React from "react";
import { Card, Top, Logo, Body, Role, Duration, Company, Description, Skills, ItemWrapper, Skill } from './ExpCardStyle';


const ExperienceCard = ({ experience }) => {
    return  (
        <Card>
            <Top>
                <Logo src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Duration>{experience.date}</Duration>
                </Body>
            </Top>
            <Description>{experience.desc}</Description>
            {experience?.skills && 
            <>
            <br/>
            <Skills>
                <b>Skills:</b>
                <ItemWrapper>
                    {experience.skills.map((skill) => (
                        <Skill> • {skill}</Skill>
                    ))}
                </ItemWrapper>
            </Skills>
            </>
            }
        </Card>
    )
};

export default ExperienceCard;