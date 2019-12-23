import React from 'react';
import './resume-tech-skills.css';
import Paper from '@material-ui/core/Paper';

export default function ResumeTechSkills() {
  return (
    <Paper>
       <h3>TECHNICAL SKILLS</h3>
      <div></div>
      <p>
        <span className="font-bold">
          Front End | 
        </span>
        JavaScript (ES5 and ES6), TypeScript, Angular 8, React, HTML5, CSS3, Sass, Redux, Java
      </p>
      <p>
        <span className="font-bold">
          Back End |
        </span>
        Node.js, Nest.js, Express, GraphQL, PostgreSQL, MongoDB, MySQL, MariaDB, RESTful API Development
      </p>
      <p>
        <span className="font-bold">
          Testing/Deployment |     
        </span> 
        Jest, Mocha, Chai, AWS: EC2 / RDS / S3
      </p>
      <p>
        <span className="font-bold">
          Developer Tools |
        </span>  
        Vim, Git, npm, Nx, Webpack, Babel, Agile Methodology, Scrum, TDD
      </p>
      <p>
        <span className="font-bold">
          Libraries |
        </span>
        Stripe, Material Design, Material-UI, Reactstrap, Font Awesome, Bootstrap, Faker.js
      </p>
      <br />
    </Paper>
  )
}