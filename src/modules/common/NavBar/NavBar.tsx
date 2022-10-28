import React, { useState } from "react";
import Logo from "@src/assets/logo.svg";
import { Button } from "@common";
import { GiHamburgerMenu } from "react-icons/gi";

import styled from 'styled-components';
import { motion } from "framer-motion";
import { BREAKPOINTS, COLORS, TRANSITIONS, Z_INDICES } from "@constants";

const Navbar = () => {
   const [opened, setOpened] = useState<boolean>(false);

   return (
      <NavbarWrapper>
         <div>
            <Logo id="logo" />

            <GiHamburgerMenu
               className="hamburger"
               onClick={() => {
                  setOpened((prev) => !prev);
               }}
            />

            <div className="menu">
               <h3 style={{ color: COLORS.primaryText }}>Home</h3>
               <h3>Destinations</h3>
               <h3>About</h3>
               <h3>Partner</h3>
               <div id="login">
                  <Button outlined={true} width="132px" text="Login" />
               </div>
               <Button outlined={false} width="132px" text="Register" />
            </div>
         </div>

         <div>
            {opened && (
               <motion.div className="menu-mobile" transition={{ duration: 0.2 }} animate={{ y: [-100, 0] }}>

                  <h3 style={{ color: COLORS.primaryText }}>Home</h3>
                  <h3>Destinations</h3>
                  <h3>About</h3>
                  <h3>Partner</h3>{" "}

                  <div id="login">
                     <Button outlined={true} width="132px" text="Login" />
                  </div>

                  <Button outlined={false} width="132px" text="Register" />
               </motion.div>
            )}
         </div>
      </NavbarWrapper>
   );
}

const NavbarWrapper = styled.nav`

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  position: fixed;
  z-index: ${Z_INDICES.header};
  isolation: isolate;

  left: 0px;

  padding: 10px 190px;

  background: ${COLORS.background};
  box-shadow: 0px 0px 12px 0px ${COLORS.black};
  transition: ${TRANSITIONS.sm};

   div {
     display: flex;
     align-items: center;
     justify-content: space-between;
   }

   #login {
     margin-right: 20px;
   }

   #logo:hover {
     cursor: pointer;
   }

   h3 {
     font-size: 1rem;
     color: ${COLORS.secondaryText};
     transition: ${TRANSITIONS.md};
     margin-right: 40px;
   }

   h3:hover {
     cursor: pointer;
     color: ${COLORS.gray};
   }

   .menu {
     display: flex;
     align-items: center;
     gap: 0.6rem;
   }

   .hamburger {
     display: none;
     font-size: 1.2rem;
   }

   @media screen and ${BREAKPOINTS.sm} {
    padding: 10px 20px;

     h3 {
       margin-right: 0px;
     }

     #login {
       margin-right: 0px;
     }

     .menu {
       display: none;
     }

     .menu-mobile {
       width: 100%;
       height: 100%;

       display: flex;
       align-items: center;
       flex-direction: column;
       gap: 0.6rem;
     }

     .hamburger {
       display: block;
     }
   }

`

export default Navbar; 
