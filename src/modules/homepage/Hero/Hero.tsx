import React from "react";
import { Button, DatePicker, SelectionMenu } from "@common";

import styled from "styled-components";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { BREAKPOINTS } from "@constants";

const Hero = () => {
   return (
      <HeroWrapper>
         <section className="left">
            <Title>Explore and Travel</Title>

            <div>
               <SubTitle>Holiday finder</SubTitle>

               <div className="grid">

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
               </div>

               <Button outlined={false} text="Explore" width="180px" />
            </div>
         </section>

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
            <section className="right">
               <StaticImage id={'travel-image'} src={'../../../images/thousand-01_1.png'} alt="picture" width={670} />
            </section>
         </motion.div>
      </HeroWrapper>
   );
}

const HeroWrapper = styled.section`
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: space-between;
   gap: 100px;

   width: 100%;
   padding: 120px 0px;
   scroll-snap-align: start;

   .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 30px;
      padding-bottom: 50px;
      width: 120%;
   }

   @media screen and ${BREAKPOINTS.lg} {
       width: 400px;
   }

   @media screen and ${BREAKPOINTS.sm} {
       flex-direction: column-reverse;
       gap: 10px;

      .left{
         width: 100%;
      }

      #travel-image {
         width: 300px;
      }

      .grid {
         grid-template-columns: 1fr;
         width: 100%;
      }
   }
`

const Title = styled.h1`
  font-size: 4rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 90px;

  @media screen and ${BREAKPOINTS.sm} {
    & {
      margin-bottom: 40px;
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 35px;

  @media screen and ${BREAKPOINTS.sm} {
    & {
      margin-bottom: 20px;
    }
  }
`;

export default Hero;
