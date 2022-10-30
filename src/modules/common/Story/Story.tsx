import React, { FC } from "react";

import { motion } from "framer-motion";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";
import { BREAKPOINTS, COLORS, FONTS, PADDING, TRANSITIONS } from "@constants";
import { ImageTitle } from "../Title/Title";

export interface StoryProps {
   image: IGatsbyImageData;
   alt: string;
   title: string;
   text: string;
   delay: number;
}

const Story: FC<StoryProps> = ({ image, alt, title, text, delay }) => {
   return (
      <StoryWrapper>
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
               id="story-image"
               image={image}
               alt={alt}
            />

            <ImageTitle>{title}</ImageTitle>
            <P>{text}</P>
            <A href="#">Read more</A>
         </motion.div>
      </StoryWrapper>
   );
}

const StoryWrapper = styled.div`
   width: 25%;
   transition: ${TRANSITIONS.sm};
   cursor: pointer;

   @media screen and ${BREAKPOINTS.sm} {
      & {
         width: 100%;
      }
   }

   #story-image {
      border-radius: 10px;
      width: 100%;
      padding-bottom: 1rem;
   }

`;

const P = styled.p`
   font-size: ${FONTS[200]};
   padding: ${PADDING.md} 0px;
   color: ${COLORS.secondaryText};
`;

const A = styled.a`
   font-size: ${FONTS[200]};
   color: ${COLORS.primary};
`;

export default Story;
