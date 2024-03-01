import React from "react";
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage  } from './style';
import { skills } from '../../data/constants';

const Skills = () => {
    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                    Here are the skills that I've been improving over the past 18 months.
                </Desc>
                <SkillsContainer>
                    {skills.map((item) =>(
                        <Skill>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {item.skills.map((skill) => (
                                        <SkillItem>
                                            <SkillImage src={skill.image} />
                                            {skill.name}
                                        </SkillItem>
                                    ))
                                }
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills;