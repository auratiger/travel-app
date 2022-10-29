import React from "react";
import { AiFillStar } from "react-icons/ai";

import styled from "styled-components";
import { BREAKPOINTS, COLORS } from "@constants";
import TestimonialPicture from "./TestimonialPicture";

const TestimonialSection = () => {
   return (
      <TestimonialSectionWrapper>
         <div className="left">
            <h1>Testimonials</h1>

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
   padding: 120px 0px;
   scroll-snap-align: start;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;

   .left {
      width: 60ch;
   }

   .left h1 {
      font-size: 2.2rem;
      font-family: "Playfair Display", serif;
      padding-bottom: 35px;
   }

   .text {
      font-size: 1.4rem;
      margin-bottom: 50px;
   }

   .name {
      font-size: 1.4rem;
      font-weight: bold;
   }

   .role {
      font-size: 1rem;
      color: ${COLORS.secondaryText};
   }


   @media screen and ${BREAKPOINTS.lg} {
      .left {
         width: 50%;
      }
   }

   @media screen and ${BREAKPOINTS.sm} {
      flex-direction: column;
      padding: 20px 0px;

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
   font-size: 1.6rem;
   gap: 10px;
`

export default TestimonialSection;
