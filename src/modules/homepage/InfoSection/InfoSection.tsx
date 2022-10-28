import React from "react";

import { Button } from "@common";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { BREAKPOINTS } from "@constants";

const InfoSection = () => {
   return (
      <InfoSectionWrapper>
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
               <StaticImage id={'info-image'} src={'../../../images/thousand-01_1.png'} alt="picture" width={670} />
            </div>
         </motion.div>
         <div className="right">
            <Title>A new way to explore the world </Title>
            <div>
               <P>
                  For decades travellers have reached for Lonely Planet books when
                  looking to plan and execute their perfect trip, but now, they can
                  also let Lonely Planet Experiences lead the way
               </P>
               <Button outlined={false} text="Learn More" width="160px" />
            </div>
         </div>
      </InfoSectionWrapper>
   );
}

const InfoSectionWrapper = styled.section`

   width: 100%;
   padding: 100px 0px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 100px;
   scroll-snap-align: start;

   .right {
      width: 25%;
   }

   @media screen and ${BREAKPOINTS.lg} {
      #info-image {
         width: 400px;
      }

      gap: 50px;

      .right {
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

      #info-image {
         width: 250px;
      }
   }
`

const Title = styled.h1`
  font-size: 2.4rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

export default InfoSection;
