import React from 'react';
import './resume-tech-skills.css';
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

export default function ResumeTechSkills() {
  return (
    <Container>
      <h3>Technical Skills</h3>

      <div className="skill-container">
        <h4>Front End</h4>
        <div className="wrap-container">
          <p>Angular 8, </p>
          <p>CSS3, </p>
          <p>HTML5, </p>
          <p>JavaScript, </p>
          <p>React, </p>
          <p>Sass, </p>
          <p>TypeScript</p>
        </div>
      </div>

      <div className="skill-container">
        <h4>Back End</h4>
        <div className="wrap-container">
          <p>Express.js, </p>
          <p>GraphQL, </p>
          <p>Java, </p>
          <p>MariaDB, </p>
          <p>MongoDB, </p>
          <p>MySQL, </p>
          <p>Nest.js, </p>
          <p>Node.js, </p>
          <p>PostgreSQL</p>
        </div>
      </div>

      <div className="skill-container">
        <h4>Testing/Deployment</h4>
        <div className="wrap-container">
          <p>AWS: EC2 / RDS / S3, </p>
          <p>Chai, </p>
          <p>Jest,</p>
          <p>Mocha, </p>
          <p>Netlify</p>
        </div>
      </div>
      
      <div className="skill-container">
        <h4>Developer Tools</h4>
        <div className="wrap-container">
          <p>Agile Methodology, </p>
          <p>Babel, </p>
          <p>Git, </p>
          <p>Jira, </p>
          <p>npm, </p>
          <p>Nx, </p>
          <p>Scrum, </p>
          <p>TDD, </p>
          <p>Webpack</p>
        </div>
      </div>
      
      <div className="skill-container">
        <h4>Libraries</h4>
        <div className="wrap-container">
          <p>Angular Material, </p>
          <p>Bootstrap, </p>
          <p>Font Awesome, </p>
          <p>Material-UI, </p>
          <p>Reactstrap, </p>
          <p>RxJS, </p>
          <p>Stripe</p>
        </div>
      </div>
    </Container>
  )
}