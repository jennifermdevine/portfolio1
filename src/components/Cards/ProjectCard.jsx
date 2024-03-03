import React from 'react';
import { Card, Image, Details, Title, Date, Description } from './ProjectCardStyle';
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({project}) => {
    return (
        <Card>
            <Image src={project.image} />
            <Details>
                <Title><a href={project.github} target="_blank"><FaGithub /></a>  •  {project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description} • <a href={project.webapp} target="_blank"><CgWebsite /></a> </Description>
                
            </Details>
        </Card>
    )
};

export default ProjectCard;