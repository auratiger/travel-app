import React, { FC } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { BREAKPOINTS, COLORS, TRANSITIONS, Z_INDICES } from "@constants";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface DestinationProps {
   image: IGatsbyImageData;
   alt: string;
   title: string;
   text: string;
   delay: number;
}

const Destination: FC<DestinationProps> = ({ image, alt, title, text, delay }) => {
   return (
      <Container>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ delay: delay }}
            variants={{
               visible: { opacity: 1, x: 0 },
               hidden: { opacity: 0, x: -200 },
            }}
         >
            <GatsbyImage
               image={image}
               alt={alt}
               style={{ borderRadius: "10px" }}
            />

            <Overlay>
               <H1>{title}</H1>
               <P>{text}</P>
            </Overlay>
         </motion.div>
      </Container>
   );
}

const Container = styled.div`
   width: 25%;
   transition: ${TRANSITIONS.sm}
   cursor: pointer;

   @media screen and ${BREAKPOINTS.sm} {
      width: 100%;
   }

   border-radius: 20px;
`;

const Overlay = styled.div`
   width: 50%;

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-end;

   padding: 10px;
   border-radius: 0px 10px 0px 0px;

   position: relative;
   bottom: 60px;
   left: 0px;

   z-index: ${Z_INDICES.hero};
   background: ${COLORS.background};
`;

const H1 = styled.h1`
   font-size: 1.1rem;
   font-weight: bold;
   color: ${COLORS.primaryText};
`;

const P = styled.p`
   font-size: 1.1rem;
   color: ${COLORS.secondaryText};
`;

export default Destination;
