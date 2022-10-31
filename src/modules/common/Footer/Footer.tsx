import React from "react";

import {
   BsTwitter,
   BsFacebook,
   BsInstagram,
   BsLinkedin,
   BsYoutube,
} from "react-icons/bs";

import Logo from "@assets/logo.svg";
import { BREAKPOINTS, COLORS, FONTS, PADDING, SHADOWS } from "@constants";
import { FooterTitle } from "@common";

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
               <Link>Africa</Link>
               <Link>Antartica</Link>
               <Link>Asia</Link>
               <Link>Europe</Link>
               <Link>America</Link>
            </section>
            <section>
               <FooterTitle>Shop</FooterTitle>
               <Link>Destination Guides</Link>
               <Link>Pictorial & Gifts</Link>
               <Link>Special Offers</Link>
               <Link>Delivery Times</Link>
               <Link>FAQs</Link>
            </section>
            <section>
               <FooterTitle>Interests</FooterTitle>
               <Link>Adventure Travel</Link>
               <Link>Art And Culture</Link>
               <Link>Wildlife And Nature</Link>
               <Link>Family Holidays</Link>
               <Link>Food And Drink</Link>
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
   width: 100%;
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
      padding: ${PADDING.lg};
   }

   .icons-container {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: ${PADDING.lg} 0px;
   }

   .icons{
      display: flex;
      gap: 20px;
      font-size: ${FONTS[600]};
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
   font-size: ${FONTS[200]};
   color: ${COLORS.secondaryText};
`;

const Link = styled(P)`
   cursor: pointer;

   &:hover {
      color: ${COLORS.primaryText};
   }
`

export default Footer;
