import React from "react"
import type { HeadFC } from "gatsby"
import { App } from "@common"

const IndexPage = () => {
   return (
      <App>
         <main>hello</main>
      </App>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
