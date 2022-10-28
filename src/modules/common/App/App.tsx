import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './fonts.css';

const GlobalStyles = createGlobalStyle`
   body {
     -ms-overflow-style: none;  /* IE and Edge */
     scrollbar-width: none;  /* Firefox */
   }

   ::-webkit-scrollbar {
     display: none;
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
