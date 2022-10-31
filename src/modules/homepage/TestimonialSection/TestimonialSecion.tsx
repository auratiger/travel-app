import React from "react";
import { AiFillStar } from "react-icons/ai";

import styled from "styled-components";
import { BREAKPOINTS, COLORS, FONTS, PADDING } from "@constants";
import TestimonialPicture from "./TestimonialPicture";
import { GenericSection, Title } from "@common";

import { CircleIcon } from "@assets";

const TestimonialSection = () => {
   return (
      <TestimonialSectionWrapper>
         <div className="left-container">
            <Title>Testimonials</Title>

            <div>
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
            </div>

            <div>
               <h2 className="name">Edward Newgate</h2>
               <h3 className="role">Founder Circle</h3>
            </div>
         </div>
         <TestimonialPicture />

         <CircleIcon id="circle1" />
      </TestimonialSectionWrapper>
   );
}


const TestimonialSectionWrapper = styled(GenericSection)`
   gap: 10px;

   .left-container {
      width: 60ch;
      display: grid;
      gap: 1rem;
   }

   .left-container h1 {
      font-size: ${FONTS[600]};
      font-family: "Playfair Display", serif;
   }

   .text {
      font-size: ${FONTS[400]};
      margin-bottom: 20px;
   }

   .name {
      font-size: ${FONTS[400]};
      font-weight: bold;
   }

   .role {
      font-size: ${FONTS[100]};
      color: ${COLORS.secondaryText};
   }

   #circle1 {
      left: -5%;
      top: 45%;
      zoom: 0.5;
   }

   @media screen and ${BREAKPOINTS.lg} {
      .left-container {
         width: 50%;
      }
   }

   @media screen and ${BREAKPOINTS.sm} {
      flex-direction: column;
      padding: ${PADDING.lg} 0px;

      .left-container {
         width: 100%;
      }

   }
`

const Stars = styled.div`
   display: flex;
   color: ${COLORS.accent};
   font-size: ${FONTS[500]};
   gap: 0.8rem;
`

export default TestimonialSection;
