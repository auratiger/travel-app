import { BREAKPOINTS, COLORS } from "@constants";
import styled from "styled-components";

export const HeroTitle = styled.h1`
   font-size: 4.2rem;
   font-weight: 600;
   font-family: "Playfair Display", serif;
   color: ${COLORS.primaryText};
   margin-bottom: 90px;

  @media screen and ${BREAKPOINTS.sm} {
    & {
      margin-bottom: 40px;
    }
  }
`;

export const Title = styled.h2`
   font-size: 2.4rem;
   font-family: "Playfair Display", serif;
   margin-bottom: 20px;
   color: ${COLORS.primaryText};
`;


export const SubTitle = styled.h3`
   font-size: 2.2rem;
   margin-bottom: 35px;
   color: ${COLORS.primaryText};

   @media screen and ${BREAKPOINTS.sm} {
      & {
         margin-bottom: 20px;
      }
   }
`;

export const FooterTitle = styled(Title)`
   font-size: 1.4rem;
   margin-bottom: 1rem;
`;

export const FooterSubTitle = styled.h3`
   font-size: 1.1rem;
   color: ${COLORS.grayLight};
   cursor: pointer;

   &:hover {
      color: ${COLORS.primaryText};
   }
`;

export const ImageTitle = styled(SubTitle)`
   font-size: 1.4rem;
   margin-block: 0.5rem;
`
