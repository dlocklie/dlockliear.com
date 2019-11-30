import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from 'gatsby';

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
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Hey, I'm Drew Lockliear</h1>
        <h3>Your local web developer in Austin, Tx</h3>
      </TextBox>

    </ImageBackground>
  )
};

export default Hero;