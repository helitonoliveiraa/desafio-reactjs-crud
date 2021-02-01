import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyle from './styles/global';
import * as themes from './styles/themes';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  </>
);

export default App;
