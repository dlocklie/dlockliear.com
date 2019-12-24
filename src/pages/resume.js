import React from "react";
import Layout from "../components/layout";
import Header from "../components/header/header";
import ResumeHeader from '../components/resume/resume-header';
import ResumeTechSkills from '../components/resume/resume-tech-skills';
import ResumeApplications from '../components/resume/resume-applications';
import ResumeExperience from '../components/resume/resume-experience';
import ResumeEducation from '../components/resume/resume-education';
import Paper from '@material-ui/core/Paper';


const Resume = () => (
  <>
    <Header></Header>
    <br />
    <Layout>
      <Paper>
        <ResumeHeader></ResumeHeader>
        <ResumeTechSkills></ResumeTechSkills>
        <ResumeApplications></ResumeApplications>
        <ResumeExperience></ResumeExperience>
        <ResumeEducation></ResumeEducation>
      </Paper>
    </Layout>
  </>
  
)

export default Resume;