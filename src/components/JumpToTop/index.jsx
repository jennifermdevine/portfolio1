import React from 'react';
import styled from 'styled-components';
import { FaAngleUp } from "react-icons/fa6";

export const JumpButton = styled.div` 
  cursor: pointer;
  color: white;
`

class JumpToTop extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <JumpButton onClick={this.scrollToTop}><FaAngleUp />to top</JumpButton>
    );
  }
}

export default JumpToTop;