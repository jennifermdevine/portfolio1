import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from "./components/Education";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.card_light};;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(207, 227, 252, 1) 0%,
      rgba(201, 250, 10, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(138, 167, 222, 1) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Wrapper2 = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
    38.73deg,
    rgba(207, 227, 252, 1) 0%,
    rgba(201, 250, 10, 0) 40%
  ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 60%,
      rgba(138, 167, 222, 1) 100%
    );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 98% 98%, 0 100%);
    
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
          <Body>
            <Hero/>
            <Wrapper>
              <Skills/>
              <Experience/>
            </Wrapper>
            <Projects />
            <Wrapper2>
              <Education />  
            </Wrapper2>
          </Body>
          <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
