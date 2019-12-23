import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Header from "../components/header/header"

const IndexPage = () => (
  <>
    <Header></Header>
    <Hero />
    <Layout>
      <SEO title="Home" />
    </Layout>
  </>
) 

export default IndexPage
