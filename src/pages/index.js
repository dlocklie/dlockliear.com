import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Header from "../components/header"

const IndexPage = () => (
  <>
    <Header />
    <Hero />
    <Layout>
      <SEO title="Home" />
    </Layout>
  </>
) 

export default IndexPage
