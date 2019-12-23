import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import ResumeHeader from '../components/resume/resume-header';
import ResumeTechSkills from '../components/resume/resume-tech-skills';
import ResumeApplications from '../components/resume/resume-applications';
import ResumeExperience from '../components/resume/resume-experience';
import ResumeEducation from '../components/resume/resume-education';


const Resume = () => (
  <>
    <Header />
    <br />
    <Layout>
      <ResumeHeader></ResumeHeader>
      <br/>
      <ResumeTechSkills></ResumeTechSkills>
      <br />
      <ResumeApplications></ResumeApplications>
      <br />
      <ResumeExperience></ResumeExperience>
      <br />
      <ResumeEducation></ResumeEducation>
      
    </Layout>
  </>
  
)

export default Resume;