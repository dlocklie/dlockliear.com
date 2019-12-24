import React from 'react';
import './resume-education.css';
import Container from '@material-ui/core/Container';

export default function ResumeEducation() {
  return (
    <Container>
      <h3>Education</h3>

      <div className="edu-container">
        <h4>Hack Reactor</h4>
        <p>Advanced Software Engineering Program</p>
        <p>2019</p>
      </div>

      <div className="edu-container">
        <h4>Kennesaw State University</h4>
        <p>Mechanical Engineering</p>
        <p>2013 - 2017</p>
      </div>
    </Container>
  )
}