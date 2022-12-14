import React from "react";

import { Button, GenericSection, Title } from "@common";
import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { BREAKPOINTS, FONTS } from "@constants";

import { PlusIcon, CircleIcon } from "@assets";

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
               <StaticImage id={'info-image'} src={'../../../images/Thousand-02_1.png'} alt="picture" width={824} placeholder="none" />
            </div>
         </motion.div>
         <div className="right-container">
            <Title>A new way to explore the world </Title>
            <P>
               For decades travellers have reached for Lonely Planet books when
               looking to plan and execute their perfect trip, but now, they can
               also let Lonely Planet Experiences lead the way
            </P>
            <Button outlined={false} text="Learn More" width="160px" />
         </div>

         <CircleIcon id="circle1" />
         <PlusIcon id="plus1" />
         <PlusIcon id="plus2" />
      </InfoSectionWrapper>
   );
}

const InfoSectionWrapper = styled(GenericSection)`
   gap: 4rem;

   .right-container {
      width: 60ch;
      display: grid;
      gap: 1rem;
   }

   #circle1 {
      bottom: 20%;
      right: 5%;
   }

   #plus1 {
      top: 15%;
      right: 30%;
   }

   @media screen and ${BREAKPOINTS.lg} {
      #info-image {
         width: 400px;
      }

      gap: 3rem;

      .right-container {
         width: 50%;
      }
   }

   @media screen and ${BREAKPOINTS.sm} {
      flex-direction: column-reverse;

      .right-container {
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

const P = styled.p`
  font-size: ${FONTS[200]};
  margin-bottom: 20px;
`;

export default InfoSection;
