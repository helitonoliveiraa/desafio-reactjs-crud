import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from './context/theme';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </AppThemeProvider>
  </>
);

export default App;
