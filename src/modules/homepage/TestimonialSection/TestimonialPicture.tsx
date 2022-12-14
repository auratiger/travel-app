import React, { useState } from "react";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import { PlusIcon, CircleIcon } from "@assets";

import { StaticImage } from "gatsby-plugin-image";

import styled from "styled-components";
import { BREAKPOINTS, COLORS, PADDING } from "@constants";

const images = [
   <StaticImage id={'person-image'} src={'../../../images/young-man.jpg'} alt="person" placeholder="none" />,
   <StaticImage id={'person-image'} src={'../../../images/person.png'} alt="person" placeholder="none" />,
   <StaticImage id={'person-image'} src={'../../../images/solo-traveler.jpg'} alt="person" placeholder="none" />,
]

const TestimonialPicture = () => {
   const [activeImage, setActiveImage] = useState<number>(0);

   const nextImage = () => {
      setActiveImage(prev => (prev + 1) % images.length);
   }

   const prevImage = () => {
      setActiveImage(prev => ((prev - 1) + images.length) % images.length);
   }

   return (
      <TestimonialPictureWrapper>
         {images[activeImage]}

         <Controls>
            <button onClick={prevImage}>
               <BsChevronLeft />
            </button>
            <button onClick={nextImage}>
               <BsChevronRight />
            </button>
         </Controls>

         <PlusIcon id="plus" />
         <CircleIcon id="circle" />
      </TestimonialPictureWrapper>
   );
}

const TestimonialPictureWrapper = styled.div`
   position: relative;
   isolation: isolate;
   border-radius: 15px;

   #person-image {
      border-radius: 15px;
   }

   #plus {
      top: -2%;
      right: -4%;
      rotate: 25deg;
      zoom: 1.2;
      z-index: 1;
   }

   #circle {
      left: -4%;
      bottom: -2%;
      z-index: -1;
      zoom: 1;
   }

   @media screen and ${BREAKPOINTS.sm} {
      width: 70%;

      #person-image {
         width: 100%;
      }
   }

`

const Controls = styled.div`
   position: absolute;
   right: 0;
   bottom: 0;

   display: flex;

   padding: ${PADDING.md} ${PADDING.lg};
   background-color: ${COLORS.background};
   border-radius: 15px 0px 0px 0px;

   gap: 10px;

   button {
      border: 2px solid ${COLORS.secondaryText};
      border-radius: 100%;
      background: transparent;
      padding: ${PADDING.md};
      transition: 0.2s ease;
   }

   button:hover,
   button:focus {
      border: 2px solid ${COLORS.primaryText};
      cursor: pointer;
   }
`


export default TestimonialPicture;
