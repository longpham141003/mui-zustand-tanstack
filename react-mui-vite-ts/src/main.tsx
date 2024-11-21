import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';  
import theme from './theme/theme.tsx';
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}> 
          <CssBaseline />
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>,
  </QueryClientProvider>
);
