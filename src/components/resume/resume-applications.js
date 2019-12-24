import React from 'react';
import './resume-applications.css';
import Container from '@material-ui/core/Container';

export default function ResumeApplications() {
  return (
    <Container>
      <h3>SOFTWARE ENGINEERING APPLICATIONS</h3>
      <div className="horz-line"></div>
      <h4>XCC (Cross Site Consolidated Checkout)</h4>
      <p>Angular 8, Nest.js, TypeScript, RxJs, Nx, Angular Material</p>
      <p className="app-desc">Developed a dynamic signup and checkout application to support over a hundred unique products</p>
      <ul>
        <li>Integrated Stripe.js with XCC-UI (front-end) to create stylized secured inputs that also initialize payment intents (dynamic payment flows) and process payments on XCC-API (back-end). Utilized stripe’s support of multiple collection methods including credit/debit cards, Apple pay and Google pay.</li>
        <li>Responsible for building primary components of XCC including: course selection, user sign up, up-sells, delivery method selection,  payment processing and trustmarks.</li>
        <li>Utilized Angular’s Reactive forms to create intuitive user experiences with custom validation methods.</li>
      </ul>
      <h4>Ripl.Today</h4>
      <p>React, Node.js, PostgreSQL, Express, Material-UI, AWS EC2, Font Awesome</p> 
      <p className="app-desc">Launched a service for users who want to contribute to helping make the world a better place</p>
      <ul>
        <li>Implemented Git Feature Branch Workflow and Agile methodology with a team of 12 developers</li>
        <li>Tailored Material-UI components and leveraged grid to adapt screen size and orientation across layouts</li>
        <li>Designed seamless and intuitive navigation component which conditionally renders dynamic content</li>
      </ul>
    </Container>
  )
}