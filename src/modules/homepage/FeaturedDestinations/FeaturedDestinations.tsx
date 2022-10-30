import React, { FC } from "react";

import { BsChevronRight } from "react-icons/bs";

import { Destination, Title } from "@common";
import { BREAKPOINTS, COLORS, FONTS } from "@constants";

import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";

export interface FeaturedDestinationsProps {
   destinations: Array<any>;
}

const FeaturedDestinations: FC<FeaturedDestinationsProps> = ({ destinations }) => {
   return (
      <FeaturedDestinationsWrapper>
         <header>
            <Title>Featured destinations</Title>
            <Link>
               View All <BsChevronRight />
            </Link>
         </header>

         <div className="cards">
            {
               destinations.map((dest, index) => {
                  return <Destination image={getImage(dest.image)} alt={dest.title} title={dest.title} text={dest.text} delay={0.1 * index} />
               })
            }
         </div>
      </FeaturedDestinationsWrapper>
   );
}

const FeaturedDestinationsWrapper = styled.section`

   width: 100%;
   padding: 120px 0px;
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
         gap: 20px;
         align-items: center;
         justify-content: center;
      }
   }
`

const Link = styled.a`
  color: ${COLORS.primary};
  display: flex;
  align-items: center;
  font-size: ${FONTS[200]};
  font-weight: 1000;

  &:hover {
    cursor: pointer;
    font-weight: 800;
  }

`;

export default FeaturedDestinations;
