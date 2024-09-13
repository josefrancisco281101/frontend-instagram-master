// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RegisterContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </RegisterContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
  // </StrictMode>
);
