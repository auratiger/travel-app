import { COLORS, TRANSITIONS } from "@constants";
import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
   outlined: boolean;
   width: string;
   text: string;
}

const Button: FC<ButtonProps> = ({ outlined, width, text }) => {
   const Button = styled.button`
    width: ${width};

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 10px;
    outline: none;

    font-weight: bolder;
    font-size: 1rem;

    padding: 5px 10px;
    transition: ${TRANSITIONS.md}

    ${outlined
         ? css`
          border: 1px solid ${COLORS.primary};
          border: 1px solid ${COLORS.primary};
          color: ${COLORS.primary};
          background: ${COLORS.background};
        `
         : css`
          color: ${COLORS.background};
          color: ${COLORS.background};
          background: ${COLORS.primary};
        `}

    &:hover {
      ${outlined
         ? css`
            background: ${COLORS.primary};
            color: ${COLORS.background};
            cursor: pointer;
          `
         : css`
            box-shadow: 0px 0px 10px 2px ${COLORS.primary};
            cursor: pointer;
          `}
    }
  `;

   return <Button>{text}</Button>;
}

export default Button;
