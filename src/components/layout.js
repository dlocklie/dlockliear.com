import React from 'react';
import PropTypes from 'prop-types';
import Footer from "./footer/footer"
import {Helmet} from "react-helmet";
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content= "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
