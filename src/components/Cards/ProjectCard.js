import React from 'react';
import { projects } from '../../data/constants';
import { Card, Image, Tags, Details, Members } from './ProjectCardStyle';

const ProjectCard = ({project}) => {
    return (
        <Card>
            <Image src={project.image} />
            <Tags></Tags>
            <Details></Details>
            <Members></Members>
        </Card>
    )
};

export default ProjectCard;