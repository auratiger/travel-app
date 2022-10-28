import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './fonts.css';

const GlobalStyles = createGlobalStyle`

   :root {
     --primary: #fb8f1d;
     --background: #FFFFFF;
     --primary-text: #202336;
     --secondary-text: #B8BECD;
     --transition: 0.3s all ease;
   }

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
