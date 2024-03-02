import React from "react";
import { Card, Top, Image, Body, Name, Degree, Date, Description } from './EducationCardStyle';


const EducationCard = ({ edu }) => {
    return  (
        <Card>
            <Top>
                <Image src={edu.img} />
                <Body>
                    <Name>{edu.school}</Name>
                    <Degree>{edu.degree}</Degree>
                    <Date>{edu.date}</Date>
                </Body>
            </Top>
            <Description>
                {edu.desc}
            </Description>
        </Card>
    )
};

export default EducationCard;