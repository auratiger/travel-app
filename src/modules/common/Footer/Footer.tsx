import React from "react";

import {
   BsTwitter,
   BsFacebook,
   BsInstagram,
   BsLinkedin,
   BsYoutube,
} from "react-icons/bs";

import Logo from "@src/assets/logo.svg";
import { BREAKPOINTS, COLORS, SHADOWS } from "@constants";

import styled from "styled-components";

const iconSize: number = 30;
const year: number = new Date().getFullYear();

const Footer = () => {
   return (
      <FooterWrapper>
         <div className="container">
            <section>
               <Logo id="logo" />
               <P>
                  Plan and book your perfect trip with expert advice, travel tips
                  destination information from us
               </P>
               <small>{`©${year} Thousand Sunny. All rights reserved`}</small>
            </section>
            <section>
               <Title>Destinations</Title>
               <SubTitle>Africa</SubTitle>
               <SubTitle>Antartica</SubTitle>
               <SubTitle>Asia</SubTitle>
               <SubTitle>Europe</SubTitle>
               <SubTitle>America</SubTitle>
            </section>
            <section>
               <Title>Shop</Title>
               <SubTitle>Destination Guides</SubTitle>
               <SubTitle>Pictorial & Gifts</SubTitle>
               <SubTitle>Special Offers</SubTitle>
               <SubTitle>Delivery Times</SubTitle>
               <SubTitle>FAQs</SubTitle>
            </section>
            <section>
               <Title>Interests</Title>
               <SubTitle>Adventure Travel</SubTitle>
               <SubTitle>Art And Culture</SubTitle>
               <SubTitle>Wildlife And Nature</SubTitle>
               <SubTitle>Family Holidays</SubTitle>
               <SubTitle>Food And Drink</SubTitle>
            </section>
         </div>
         <div className="icons-container">
            <div className="icons">
               <BsTwitter size={iconSize} />
               <BsFacebook size={iconSize} />
               <BsInstagram size={iconSize} />
               <BsLinkedin size={iconSize} />
               <BsYoutube size={iconSize} />
            </div>
         </div>
      </FooterWrapper>
   );
}

const FooterWrapper = styled.footer`
   width: 100vw;
   position: absolute;
   left: 0px;
   z-index: 1;
   background-color: ${COLORS.background};
   box-shadow: ${SHADOWS.md};

   .container {
      padding-top: 90px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: ${COLORS.background};
      border-bottom: 1px solid ${COLORS.secondaryText};
   }

   #logo {
      margin-bottom: 1rem;
   }

   .container section {
      width: fit-content;
      padding: 20px;
   }

   .icons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 20px 0px;
   }

   .icons{
      display: flex;
      gap: 20px;
      font-size: 2.2rem;
   }

   @media screen and ${BREAKPOINTS.sm} {
      .container {
         flex-direction: column;
      }

      .container section {
         width: 100%;
      }
   }

`

const Title = styled.h1`
   font-size: 1.4rem;
   margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
   font-size: 1.1rem;
   color: ${COLORS.grayLight};
   cursor: pointer;

   &:hover {
      color: ${COLORS.primaryText};
   }
`;

const P = styled.p`
   font-size: 1.2rem;
   color: ${COLORS.grayLight};
`;

export default Footer;
