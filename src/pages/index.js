import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img
      src="./images/TaoQtrino.png"
      alt="Tao Qtrino"
      style={{
        width: "100%",
      }}
    />
  </Layout>
)

export default IndexPage
