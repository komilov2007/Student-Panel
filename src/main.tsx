import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { CookiesProvider } from 'react-cookie';
import App from './App.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CookiesProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard/*" element={<App />} />
          </Routes>
          <Toaster />
        </QueryClientProvider>
      </Provider>
    </CookiesProvider>
  </BrowserRouter>
);
