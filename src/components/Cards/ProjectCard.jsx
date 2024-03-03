import React from 'react';
import { Card, Image, Details, Title, Date, Description } from './ProjectCardStyle';
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({project}) => {
    return (
        <Card>
            <Image src={project.image} />
            <Details>
                <Title>{project.clickable === 'yes' ? (
                <a href={project.github} target="_blank"><FaGithub /></a>
                  ) : (
                    <span></span>
                  )}
                  •  {project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description} • {project.clickable === 'yes' ? (
                <a href={project.github} target="_blank"><CgWebsite /></a>
                  ) : (
                    <span></span>
                  )}
                </Description>
                
            </Details>
        </Card>
    )
};

export default ProjectCard;