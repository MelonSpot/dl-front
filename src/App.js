import React from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MelonSpot } from 'views';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MelonSpot />
    </QueryClientProvider>
  );
}

export default App;
