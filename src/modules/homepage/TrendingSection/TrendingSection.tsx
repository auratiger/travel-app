import React, { FC } from "react";

import { BsChevronRight } from "react-icons/bs";

import { BREAKPOINTS, COLORS, FONTS, PADDING } from "@constants";
import { Story, Title } from "@common";
import { getImage } from "gatsby-plugin-image";

import styled from "styled-components";

export interface TrendingStoriesSectionProps {
   stories: Array<any>;
}

const TrendingStoriesSection: FC<TrendingStoriesSectionProps> = ({ stories }) => {

   return (
      <TrendingStoriesSectionWrapper>
         <header>
            <Title>Trending stories</Title>
            <Right>
               View All <BsChevronRight />
            </Right>
         </header>
         <div className="cards">
            {
               stories.map((story, index) => {
                  return <Story image={getImage(story.image)} alt={story.title} title={story.title} text={story.text} delay={0.1 * index} />
               })
            }
         </div>
      </TrendingStoriesSectionWrapper>
   );
}

const TrendingStoriesSectionWrapper = styled.section`
   width: 100%;
   padding: ${PADDING.sectionBlock} 0px;
   scroll-snap-align: start;

   header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
   }

   .cards {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 40px;
   }

   @media screen and ${BREAKPOINTS.sm} {
      .cards {
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 20px;
      }
   }
`

const Right = styled.div`
   display: flex;
   align-items: center;

   color: ${COLORS.primary};
   font-size: ${FONTS[200]};
   font-weight: 1000;

   &:hover {
      cursor: pointer;
      font-weight: 800;
   }
`;

export default TrendingStoriesSection;
