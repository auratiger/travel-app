import React, { FC } from "react";

import { BsChevronRight } from "react-icons/bs";

import { Destination } from "@common";
import { BREAKPOINTS, COLORS } from "@constants";

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

         <div className="destinations">
            {
               destinations.map(dest => {
                  return <Destination image={getImage(dest.image)} alt={dest.title} title={dest.title} text={dest.text} delay={0} />
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

   .destinations {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 40px;
   }

   @media screen and ${BREAKPOINTS.sm} {
      .destinations {
         flex-direction: column;
         gap: 20px;
         align-items: center;
         justify-content: center;
      }
   }
`

const Title = styled.h2`
  font-size: 2.2rem;
  font-family: "Playfair Display", serif;
`;

const Link = styled.a`
  color: ${COLORS.primary};
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 1000;

  &:hover {
    cursor: pointer;
    font-weight: 800;
  }

`;

export default FeaturedDestinations;
