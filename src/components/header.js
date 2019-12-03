import React from "react"
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
  
    {/* <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/resume">RESUME</NavLink>
    </nav> */}


  </header>
)


export default Header
