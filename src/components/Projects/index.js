import React, { useState } from "react";
import { Container, Wrapper, Title, Desc, ToggleGroup, ToggleButton, Divider, CardContainer } from "./style";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from '../../data/constants';

const Projects = () => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container>
            <Wrapper>
                <Title>Projects</Title>
                <Desc>These are my most recent projects to date.</Desc>
                <ToggleGroup>
                    {toggle === "all" ? (
                        <ToggleButton active value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                    ) : (
                        <ToggleButton value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                    )}
                    
                    <Divider />
                    {toggle === "milestone projects" ? (
                    <ToggleButton active onClick={() => setToggle("milestone projects")}>MILESTONE PROJECTS</ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("milestone projects")}>MILESTONE PROJECTS</ToggleButton>
                    )}
                    <Divider />
                    {toggle === "mock websites" ? (
                    <ToggleButton active onClick={() => setToggle("mock websites")}>MOCK WEBSITES</ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("mock websites")}>MOCK WEBSITES</ToggleButton>
                    )}
                    <Divider />
                    {toggle === "websites" ? (
                    <ToggleButton active onClick={() => setToggle("websites")}>WEBSITES</ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("websites")}>WEBSITES</ToggleButton>
                    )}
                </ToggleGroup>

                <CardContainer>
                    {toggle === "all" &&
                    projects.map((project) => <ProjectCard project={project} />)}
                    {projects.filter((item) => 
                    item.category == toggle) .map((project) => 
                    (<ProjectCard project={project} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;