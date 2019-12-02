import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const TextBox = styled('div')`
  margin: 1rem 1rem 1rem 1rem;

  h1 {
    text-align: center;
  }

  h3 {
    text-align: center;
  }

  p {
    margin: 0 0 0 0;
  }

  li {
    margin: 0 0 0 0;
  }

  .horz-line {
    
  }

  .font-bold {
    font-weight: bold;
  }

  .header-container {
    text-align: center;
  }
`

const Resume = () => (
  <Layout>
    <TextBox>
    <div className="header-container">
      <h1>DREW LOCKLIEAR</h1>
      <p>Full Stack Software Engineer</p>
      <p>512-661-6676  |  dlockliear@gmail.com  | Austin, Texas</p>
      <p>github.com/dlocklie && github.com/dlockliear |  linkedin.com/in/dlocklie/</p>
    </div>
    <br />
    
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

    <h3>SOFTWARE ENGINEERING APPLICATIONS</h3>
    <div className="horz-line"></div>
    <p>
      <span className="font-bold">
        XCC (Cross Site Consolidated Checkout) | 
      </span>
      Angular 8, Nest.js, TypeScript, RxJs, Nx, Material Design
    </p>
    <p>Developed a dynamic signup and checkout application with shared customizable components to be used across www.idrivesafely.com, www.driversed.com and www.aceable.com</p>
    <ul>
      <li>Integrated Stripe.js with XCC-UI (front-end) to create stylized secured inputs that also initialize payment intents (dynamic payment flows) and process payments on XCC-API (back-end). Utilized stripe’s support of multiple collection methods including credit/debit cards, Apple pay and Google pay.</li>
      <li>Responsible for building primary components of XCC including: course selection, user sign up, up-sells, delivery method selection,  payment processing and trustmarks.</li>
      <li>Utilized Angular’s Reactive forms to create intuitive user experiences with custom validation methods.</li>
    </ul>
    <br />

    <p>
      <span className="font-bold">
        Ripl.Today |
      </span>
       React, Node.js, PostgreSQL, Express, Material-UI, AWS EC2, Font Awesome
    </p>
    <p>Launched a service for users who want to contribute to helping make the world a better place</p>
    <ul>
      <li>Implemented Git Feature Branch Workflow and Agile methodology with a team of 12 developers</li>
      <li>Tailored Material-UI components and leveraged grid to adapt screen size and orientation across layouts</li>
      <li>Designed seamless and intuitive navigation component which conditionally renders dynamic content</li>
    </ul>

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
    </TextBox>
  </Layout>
  
)

export default Resume;