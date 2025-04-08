import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {NotificationProvider} from './Components/NotificationContext';

createRoot(document.getElementById('root')!).render(
  <NotificationProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NotificationProvider>
);
