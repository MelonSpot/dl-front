import React from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MelonSpot } from 'views';
import { ThemeProvider } from 'styled-components';

import { theme } from 'utils/style';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MelonSpot />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
