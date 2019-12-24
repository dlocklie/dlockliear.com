import React from 'react';
import './resume-experience.css';
import Container from '@material-ui/core/Container';

export default function ResumeExperience() {
  return (
    <Container>
       <h3>PROFESSIONAL EXPERIENCE</h3>
      <div></div>
      <br />
      <div style={{display: `flex`}}>
        <p>
          <span className="font-bold">
            Associate Software Engineer |
          </span>
          Aceable inc.
        </p>
        <p>2019 - Present</p>
      </div>
      <p>Responsible for accelerating platform consolidation efforts and meeting sprint goals as a member of the Development Team through sprint planning, daily scrum, sprint reviews, and sprint retrospectives</p>
      <ul>
        <li>Developed a dynamic checkout application with customizable features to support  courses in all 50 states</li>
        <li>Consistently over-delivered by always meeting sprint goals and deadlines for platform consolidation set by the Product Owner</li>
        <li>Worked with the Scrum Master and development team on backlog grooming and pointing tickets</li>
      </ul>
      <br />
      <div style={{display: `flex`}}>
        <p>
          <span className="font-bold">
            Design and Sales Consultant |
          </span>
          My Cabinet Factory
        </p>
        <p>2016 - 2018</p>
      </div>
      <p>Led customer meetings to determine needs and generated appropriate solutions</p>
      <ul>
        <li>Generated sales leads through cold calling, referrals, and email communication</li>
        <li>Wrote estimates, designed layouts, collected payment, and managed fabrication/installation</li>
        <li>Coordinated the design and construction of the new company website</li>
        <li>Assembled modular CAD part catalog and initiated automated fabrication processes</li>
      </ul>
    </Container>
  )
}