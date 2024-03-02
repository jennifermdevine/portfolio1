import React from 'react';
import { Card, Image, Details, Title, Date, Description, Avatar } from './ProjectCardStyle';

const ProjectCard = ({project}) => {
    return (
        <Card>
            <Image src={project.image} />
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
        </Card>
    )
};

export default ProjectCard;