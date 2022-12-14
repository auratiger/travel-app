import React from "react";
import { Button, GenericSection, Title } from "@common";

import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { BREAKPOINTS, FONTS } from "@constants";

import { PlusIcon, CircleIcon } from "@assets";

const GuideSection = () => {
   return (
      <GuideSectionWrapper>
         <div className="right-container">
            <Title>Guides by Thousand Sunny </Title>
            <P>
               Packed with tips and advice from our on-the-ground experts, our city
               guides app (iOS and Android) is the ultimate resource before and
               during a trip.
            </P>
            <Button outlined={false} text="Download" width="160px" />
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
               <StaticImage id={'guide-image'} src={'../../../images/Thousand-03.png'} alt="picture" width={670 * 1.4} placeholder="none" />
            </div>
         </motion.div>

         <PlusIcon id="plus" />
         <CircleIcon id="circle" />
      </GuideSectionWrapper>
   );
}

const GuideSectionWrapper = styled(GenericSection)`
   gap: 100px;

   #guide-image {
      width: 100%;
   }

   .right-container {
      width: 60ch;
      display: grid;
      gap: 1rem;
   }

   #plus {
      bottom: 25%;
      left: 35%;
      zoom: 0.6;
      rotate: 20deg;
   }

   #circle {
      top: 20%;
      left: 5%;
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

      .right-container {
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

const P = styled.p`
  font-size: ${FONTS[200]};
  margin-bottom: 20px;
  width: 45ch;
`;

export default GuideSection;
