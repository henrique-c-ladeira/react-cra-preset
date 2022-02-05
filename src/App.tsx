import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from '~/Routes';
import { theme } from '~/theme';
import GlobalStyle from '~/GlobalStyle';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
