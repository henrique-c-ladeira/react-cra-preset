import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes } from '~/Routes';
import { theme } from '~/theme';
import GlobalStyle from '~/GlobalStyle';
import { ErrorBoundary } from '~/components';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
