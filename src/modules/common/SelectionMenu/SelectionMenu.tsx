import { COLORS, FONTS, PADDING, TRANSITIONS, Z_INDICES } from "@constants";
import React, { useState, useRef, FC } from "react";
import { BsChevronDown } from "react-icons/bs";

import styled from "styled-components";

export interface SelectionMenuProps {
   title: string;
   items: Array<any>;
}

const SelectionMenu: FC<SelectionMenuProps> = ({ title, items }) => {
   const [opened, setOpened] = useState<boolean>(false);
   const container = useRef(null);

   return (
      <Container
         onClick={() => {
            setOpened((prev) => !prev);
         }}
         ref={container}
      >
         <div
            style={{
               display: "flex",
               width: "100%",
               justifyContent: "space-between",
            }}
         >
            <Placeholder>{title}</Placeholder>
            <BsChevronDown />
         </div>

         {opened && (
            <Ul style={{ width: container.current.offsetWidth }}>
               {items.map((item, index) => (
                  <Li key={index}>{item}</Li>
               ))}
            </Ul>
         )}
      </Container>
   );
}

const Container = styled.div`
  padding: ${PADDING.md} ${PADDING.lg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLORS.secondaryText};
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`;

const Placeholder = styled.p`
  font-size: ${FONTS[100]};
  font-weight: bold;
`;

const Ul = styled.ul`
  position: absolute;
  z-index: ${Z_INDICES.hero};

  list-style: none;
  margin-top: 20px;
  padding: ${PADDING.md} ${PADDING.lg};
  border: 1px solid ${COLORS.secondaryText};
  border-radius: 0px 0px 20px 20px;
  background: ${COLORS.background};
`;
const Li = styled.li`
  border-bottom: 1px solid ${COLORS.secondaryText};
  transition: ${TRANSITIONS.sm};
  padding: ${PADDING.md};
  &:hover {
    background-color: ${COLORS.secondaryText};
  }
`;

export default SelectionMenu;
