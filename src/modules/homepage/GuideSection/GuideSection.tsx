import React from "react";
import { Button } from "@common";

import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { BREAKPOINTS } from "@constants";


const GuideSection = () => {
   return (
      <GuideSectionWrapper>
         <div className="right">
            <Title>Guides by Thousand Sunny </Title>
            <div>
               <P>
                  Packed with tips and advice from our on-the-ground experts, our city
                  guides app (iOS and Android) is the ultimate resource before and
                  during a trip.
               </P>
               <Button outlined={false} text="Download" width="160px" />
            </div>
         </div>

         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            variants={{
               visible: { opacity: 1, scale: 1 },
               hidden: { opacity: 0, scale: 0.5 },
            }}
         >
            <div className="left">
               <StaticImage id={'guide-image'} src={'../../../images/Thousand-03.png'} alt="picture" width={670 * 1.4} />
            </div>
         </motion.div>
      </GuideSectionWrapper>
   );
}

const GuideSectionWrapper = styled.section`
   width: 100%;
   padding: 100px 0px;

   display: flex;
   flex: 1;
   align-items: center;
   justify-content: space-between;
   gap: 100px;

   scroll-snap-align: start;

   #guide-image {
      width: 100%;
   }

   @media screen and ${BREAKPOINTS.lg} {
      #guide-image {
         width: 400px;
      }

      gap: 50px;

      .left{
         width: 50%;
      }
   }

   @media screen and ${BREAKPOINTS.sm} {
      flex-direction: column-reverse;

      .right {
         width: 100%;
      }

      .left {
         width: 100%;
      }

      #guide-image {
         width: 300px;
      }
}
`

const Title = styled.h2`
  font-size: 2.2rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  width: 45ch;
`;

export default GuideSection;
