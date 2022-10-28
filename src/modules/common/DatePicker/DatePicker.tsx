import { COLORS } from "@constants";
import React from "react";
import styled from "styled-components";

const DatePicker = () => {
   return (
      <Container>
         <input type="date" style={{ width: "100%", border: "none" }} />
      </Container>
   );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  border: 1px solid ${COLORS.secondaryText};
  border-radius: 6px;
  cursor: pointer;
`;

export default DatePicker; 
