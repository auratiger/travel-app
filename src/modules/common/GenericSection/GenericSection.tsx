import { PADDING } from "@constants";
import styled from "styled-components";

const GenericSection = styled.section`
   position: relative;
   z-index: 10;

   flex: 1;
   display: flex;
   align-items: center;
   justify-content: space-between;

   width: 100%;

   padding: ${PADDING.sectionBlock} 0px;

   scroll-snap-align: start;
`

export default GenericSection;
