import React from "react";
import { AiFillStar } from "react-icons/ai";

import styled from "styled-components";
import { BREAKPOINTS, COLORS, FONTS, PADDING } from "@constants";
import TestimonialPicture from "./TestimonialPicture";
import { Title } from "@common";

const TestimonialSection = () => {
   return (
      <TestimonialSectionWrapper>
         <div className="left">
            <Title>Testimonials</Title>

            <Stars>
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
            </Stars>

            <p className="text">
               “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
               ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis
               nec”
            </p>

            <h2 className="name">Edward Newgate</h2>
            <h3 className="role">Founder Circle</h3>
         </div>
         <TestimonialPicture />
      </TestimonialSectionWrapper>
   );
}


const TestimonialSectionWrapper = styled.section`
   width: 100%;
   padding: ${PADDING.sectionBlock} 0px;
   scroll-snap-align: start;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;

   .left {
      width: 60ch;
   }

   .left h1 {
      font-size: ${FONTS[600]};
      font-family: "Playfair Display", serif;
      padding-bottom: 35px;
   }

   .text {
      font-size: ${FONTS[400]};
      margin-bottom: 50px;
   }

   .name {
      font-size: ${FONTS[400]};
      font-weight: bold;
   }

   .role {
      font-size: ${FONTS[100]};
      color: ${COLORS.secondaryText};
   }


   @media screen and ${BREAKPOINTS.lg} {
      .left {
         width: 50%;
      }
   }

   @media screen and ${BREAKPOINTS.sm} {
      flex-direction: column;
      padding: ${PADDING.lg} 0px;

      .left {
         width: 100%;
      }

      .left h1 {
         padding-bottom: 60px;
      }

   }
`

const Stars = styled.div`
   display: flex;
   color: ${COLORS.accent};
   font-size: ${FONTS[500]};
   gap: 10px;
`

export default TestimonialSection;
