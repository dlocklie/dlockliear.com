import React from "react"
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 1rem 1rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
`;

const Header = () => (
  <header 
    css={css`

    `}
  > 
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/resume">RESUME</NavLink>
    </nav>
  </header>
)


export default Header
