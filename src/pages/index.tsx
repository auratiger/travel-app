import React from "react"
import styled from 'styled-components';
import type { HeadFC } from "gatsby"
import { App, Navbar } from "@common"
import { BREAKPOINTS, COLORS } from "@constants";
import { Hero, InfoSection } from "@homepage";

const IndexPage = () => {
   return (
      <App>
         <Navbar />
         <LandingPage>
            <Hero />
            <InfoSection />
         </LandingPage>
      </App>
   )
}

export default IndexPage


const LandingPage = styled.main`
   width: 100%;
   padding: 0px 190px;
   scroll-snap-type: y mandatory;
   background-color: ${COLORS.background};

   @media screen and ${BREAKPOINTS.lg} {
      padding: 0px 20px;
   }

   @media screen and ${BREAKPOINTS.sm} {
      padding: 0px 20px;
   }
`;

export const Head: HeadFC = () => <title>Home Page</title>
