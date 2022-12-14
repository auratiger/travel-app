import React from "react";
import { Button, DatePicker, GenericSection, HeroTitle, SelectionMenu, SubTitle } from "@common";

import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { BREAKPOINTS } from "@constants";

import { PlusIcon, CircleIcon } from "@assets";

const Hero = () => {
   return (
      <HeroWrapper>
         <section className="left-container">
            <HeroTitle>Explore and Travel</HeroTitle>
            <SubTitle>Holiday finder</SubTitle>

            <div className="picker-form">

               <SelectionMenu
                  title="Location"
                  items={[
                     "placeholder location",
                     "placeholder location",
                     "placeholder location",
                     "placeholder location",
                     "placeholder location",
                     "placeholder location",
                     "placeholder location",
                  ]}
               />

               <SelectionMenu
                  title="Activity"
                  items={[
                     "placeholder activity",
                     "placeholder activity",
                     "placeholder activity",
                     "placeholder activity",
                     "placeholder activity",
                  ]}
               />

               <SelectionMenu title="Grade" items={["1", "2", "3", "4", "5"]} />

               <DatePicker />

               <Button outlined={false} text="Explore" width="180px" />
            </div>
         </section>

         <section className="right-container">
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
               <StaticImage id={'travel-image'} src={'../../../images/Thousand-01_1.png'} alt="picture" placeholder="none" />
            </motion.div>
         </section>

         <CircleIcon id="circle1" />
         <CircleIcon id="circle2" />
         <PlusIcon id="plus1" />
      </HeroWrapper>
   );
}

const HeroWrapper = styled(GenericSection)`
   gap: 4rem;

   section {
      flex-grow: 1;
   }

   .right-container {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .picker-form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 2rem;
      width: 100%;
      padding-bottom: 50px;
   }

   #circle1 {
      top: 40%;
      left: -5%;
   }

   #circle2 {
      bottom: 10%;
      left: 50%;
      zoom: 0.6;
   }

   #plus1 {
      top: 15%;
      left: 40%;
      rotate: -25deg;
   }

   @media screen and ${BREAKPOINTS.xl} {
      .right-container {
         min-width: 450px;
      }

   }

   @media screen and ${BREAKPOINTS.sm} {
       flex-direction: column-reverse;
       gap: 1rem;

      .left-container {
         width: 100%;
      }

      .picker-form {
         grid-template-columns: 1fr;
         width: 100%;
      }
   }
`

export default Hero;
