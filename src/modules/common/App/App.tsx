import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './fonts.css';
import { COLORS } from '@constants';

const GlobalStyles = createGlobalStyle`
   body {
     -ms-overflow-style: none;  /* IE and Edge */
     scrollbar-width: none;  /* Firefox */
   }

   p {
      line-height: 1.8;
   }

   ::-webkit-scrollbar {
      width: 10px;
   }

   ::-webkit-scrollbar-thumb {
      background-color: ${COLORS.primary};
      border-radius: 25px;
   }

   ::-webkit-scrollbar-thumb:hover {
      background-color: ${COLORS.accent};
   }

   ::selection {
     background: ${COLORS.primary};
   }
`;

const App = ({ children }) => {
   return (
      <Fragment>
         {children}

         <GlobalStyles />
      </Fragment>
   );
};

export default App;
