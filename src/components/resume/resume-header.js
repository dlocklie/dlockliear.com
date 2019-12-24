import React from 'react';
import './resume-header.css';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default function ResumeHeader() {
  // const classes = useStyles();
  return (
   <Container className="header-container">
     {/* <div className={classes.root}> */}
    <div>
      <h1>Drew Lockliear</h1>
      <p>Software Engineer</p>
    </div>
    <div className="contact-container">
      <p>512-661-6676</p>
      <p>dlockliear@gmail.com </p>
    </div>
    <div className="contact-container">
      <a href="https://github.com/dlocklie" target="_blank">github.com/dlocklie</a>
      <a href="https://linkedin.com/in/dlocklie" target="_blank">linkedin.com/in/dlocklie</a>
    </div>
    <p>Austin, Texas</p>
   </Container>
  )
}

  
