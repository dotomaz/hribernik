import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  <SEO title="Aleš Hribernik" />

  <div id="sidebar">
      <h1>404</h1>
  </div>
  <div id="main">

    <h1>Ups .... Ta stran ne obstaja!</h1>

  </div>

</Layout >
)

export default NotFoundPage
