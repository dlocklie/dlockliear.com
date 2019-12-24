import React from 'react';
import './resume-education.css';
import Container from '@material-ui/core/Container';

export default function ResumeEducation() {
  return (
    <Container>
     <h3>EDUCATION</h3>
      <div></div>
      <div style={{display: `flex`}}>
        <p>
          <span className="font-bold">
          Hack Reactor |
          </span>
          Advanced Software Engineering Immersive Program
        </p>
        <p>2019</p>
      </div>
        <div style={{display: `flex`}}>
          <p>
            <span className="font-bold">
              Kennesaw State University |
            </span>
            Mechanical Engineering
          </p>
          <p>2014 - 2017</p>
        </div>
    </Container>
  )
}