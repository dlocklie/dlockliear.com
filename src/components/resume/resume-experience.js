import React from 'react';
import './resume-experience.css';
import Container from '@material-ui/core/Container';

export default function ResumeExperience() {
  return (
    <Container>
      <h3>Professional Experience</h3>

      <h4>Associate Software Engineer</h4>
      <div className="flex-container">
        <p>Aceable inc.</p>
        <p>2019 - Present</p>
      </div>
      <p className="job-desc">Responsible for accelerating platform consolidation efforts and meeting sprint goals as a member of the Development Team through sprint planning, daily scrum, sprint reviews, and sprint retrospectives</p>
      <ul>
        <li>Developed a dynamic checkout application with customizable features to support  courses in all 50 states</li>
        <li>Consistently over-delivered by always meeting sprint goals and deadlines for platform consolidation set by the Product Owner</li>
        <li>Worked with the Scrum Master and development team on backlog grooming and pointing tickets</li>
      </ul>

      <h4>Design and Sales Consultant</h4>
      <div className="flex-container">
        <p>My Cabinet Factory</p>
        <p>2016 - 2018</p>
      </div>
      <p className="job-desc">Led customer meetings to determine needs and generated appropriate solutions</p>
      <ul>
        <li>Generated sales leads through cold calling, referrals, and email communication</li>
        <li>Wrote estimates, designed layouts, collected payment, and managed fabrication/installation</li>
        <li>Coordinated the design and construction of the new company website</li>
        <li>Assembled modular CAD part catalog and initiated automated fabrication processes</li>
      </ul>

    </Container>
  )
}