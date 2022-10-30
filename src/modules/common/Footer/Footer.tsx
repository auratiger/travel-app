import React from "react";

import {
   BsTwitter,
   BsFacebook,
   BsInstagram,
   BsLinkedin,
   BsYoutube,
} from "react-icons/bs";

import Logo from "@assets/logo.svg";
import { BREAKPOINTS, COLORS, SHADOWS } from "@constants";
import { FooterSubTitle, FooterTitle } from "@common";

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
               <FooterTitle>Destinations</FooterTitle>
               <FooterSubTitle>Africa</FooterSubTitle>
               <FooterSubTitle>Antartica</FooterSubTitle>
               <FooterSubTitle>Asia</FooterSubTitle>
               <FooterSubTitle>Europe</FooterSubTitle>
               <FooterSubTitle>America</FooterSubTitle>
            </section>
            <section>
               <FooterTitle>Shop</FooterTitle>
               <FooterSubTitle>Destination Guides</FooterSubTitle>
               <FooterSubTitle>Pictorial & Gifts</FooterSubTitle>
               <FooterSubTitle>Special Offers</FooterSubTitle>
               <FooterSubTitle>Delivery Times</FooterSubTitle>
               <FooterSubTitle>FAQs</FooterSubTitle>
            </section>
            <section>
               <FooterTitle>Interests</FooterTitle>
               <FooterSubTitle>Adventure Travel</FooterSubTitle>
               <FooterSubTitle>Art And Culture</FooterSubTitle>
               <FooterSubTitle>Wildlife And Nature</FooterSubTitle>
               <FooterSubTitle>Family Holidays</FooterSubTitle>
               <FooterSubTitle>Food And Drink</FooterSubTitle>
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
      padding-block: 2rem;
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

const P = styled.p`
   font-size: 1.2rem;
   color: ${COLORS.grayLight};
`;

export default Footer;
