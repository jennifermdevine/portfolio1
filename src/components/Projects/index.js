import React from "react";
import { Container, Wrapper, Title, Desc, ToggleGroup, ToggleButton, Divider } from "./style";

const Projects = () => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container>
            <Wrapper>
                <Title>Projects</Title>
                <Desc>These are my most recent projects to date.</Desc>
                <ToggleGroup>
                    {toggle === "all" ? (
                        <ToggleButton active value="all">ALL</ToggleButton>
                    ) : (
                        <ToggleButton value="all">ALL</ToggleButton>
                    )}
                    
                    <Divider />
                    
                    <Divider />
                    <ToggleButton>MOCK WEBSITES</ToggleButton>
                </ToggleGroup>
            </Wrapper>
        </Container>
    )
}

export default Projects;