import React, { FC } from "react"
import styled from 'styled-components';
import { graphql, HeadFC } from "gatsby"
import { App, Footer, Navbar } from "@common"
import { BREAKPOINTS, COLORS, PADDING } from "@constants";
import { FeaturedDestinations, GuideSection, Hero, InfoSection, TestimonialSection, TrendingStoriesSection } from "@homepage";

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
   ],
   stories: [
      {
         image: "../images/stories/image1.png",
         title: "The many benefits of taking a healing holiday",
         text: "Helaing holidays’ are on the rise tohelp maximise your health and happines...",
      },
      {
         image: "../images/stories/image2.png",
         title: "The best Kyoto restaurant to try Japanese food",
         text: "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...",
      },
      {
         image: "../images/stories/image3.png",
         title: "Skip Chichen Itza and head to this remote Yucatan",
         text: "It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...",
      },
      {
         image: "../images/stories/image4.png",
         title: "Surf’s up at these beginner spots around the world",
         text: "If learning to surf has in on your to- do list for a while, the good news is: it’s never too late...",
      },
   ]
}

const IndexPage: FC<any> = ({ data: { javascriptFrontmatter: { frontmatter: { destinations, stories } } } }) => {

   return (
      <App>
         <Navbar />
         <LandingPage>
            <Hero />
            <InfoSection />
            <FeaturedDestinations destinations={destinations} />
            <GuideSection />
            <TestimonialSection />
            <TrendingStoriesSection stories={stories} />
         </LandingPage>
         <Footer />
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
        },
        stories {
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
   padding: 0px ${PADDING.mainInline};
   scroll-snap-type: y mandatory;
   background-color: ${COLORS.background};

   @media screen and ${BREAKPOINTS.lg} {
      padding: 0px ${PADDING.lg};
   }

   @media screen and ${BREAKPOINTS.sm} {
      padding: 0px ${PADDING.lg};
   }
`;

export const Head: HeadFC = () => <title>Home Page</title>
