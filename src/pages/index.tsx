import React, { FC } from "react"
import styled from 'styled-components';
import { graphql, HeadFC } from "gatsby"
import { App, Navbar } from "@common"
import { BREAKPOINTS, COLORS } from "@constants";
import { FeaturedDestinations, GuideSection, Hero, InfoSection, TestimonialSection } from "@homepage";

export const frontmatter = {
   destinations: [
      {
         image: "../images/destinations/Raja-Ampat-Islands.jpg",
         title: "Raja Ampat",
         text: "Indonesia",
      },
      {
         image: "../images/destinations/Fanjingshan-resize.jpg",
         title: "Fanjingshan",
         text: "China",
      },
      {
         image: "../images/destinations/Raja-Ampat-town-resize1.jpg",
         title: "Raja Ampat",
         text: "Indonesia",
      },
      {
         image: "../images/destinations/Lake-Skadar-resize.jpg",
         title: "Skadar",
         text: "Montenegro",
      },
   ]
}

const IndexPage: FC<any> = ({ data: { javascriptFrontmatter: { frontmatter: destinations } } }) => {

   console.log("hello", destinations);

   return (
      <App>
         <Navbar />
         <LandingPage>
            <Hero />
            <InfoSection />
            <FeaturedDestinations destinations={destinations.destinations} />
            <GuideSection />
            <TestimonialSection />
         </LandingPage>
      </App>
   )
}

export const query = graphql`
  query {
    javascriptFrontmatter {
      frontmatter {
        destinations {
          text
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`

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
