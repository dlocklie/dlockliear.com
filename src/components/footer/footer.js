import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.css";

const Footer = () => (
  <footer
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p className="copyright-year">
        © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </div>
  </footer>
)

export default Footer