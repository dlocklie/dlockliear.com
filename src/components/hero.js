import React from "react";
import styled from "@emotion/styled";

const ImageBackground = styled('div')`
  background-image: url('/images/downtown-austin-river.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 100vh;
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top,  #ddbbffgg 2rem, #ddbbff11);
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: flex-end;
  text-align: center;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 3rem;
  }

  h3 {
    margin-top: 0;
  }

  button {
    background: none;
    width: 8rem;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Hey, I'm Drew Lockliear</h1>
        <h3>Let's build something great together</h3>
        <a href="mailto:dlockliear@gmail.com" target="_blank">
          <button>CONTACT ME</button>
        </a>
      </TextBox>

    </ImageBackground>
  )
};

export default Hero;