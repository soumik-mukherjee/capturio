import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Recorder} from "@project/ui-components"


const IndexPage = props => {

  return (
    <Layout>
      <SEO title="Home" />
      <Recorder />
    </Layout>
  )
}

export default IndexPage
