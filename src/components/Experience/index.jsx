import React from "react";
import { Container, Wrapper, Title, Desc, TimelineSection } from './style';
import ExperienceCard from "../Cards/ExperienceCard";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector  from "@mui/lab/TimelineConnector";
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import JumpToTop from "../JumpToTop";
import { experiences } from "../../data/constants";


const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>My experience in the workforce may be limited but provided invaluable experience that will help me in my future roles.</Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" sx={{color:'white'}} />
                                        {index !== experiences.length && (<TimelineConnector />)}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
                <JumpToTop />
            </Wrapper>
        </Container>
    )
}

export default Experience;