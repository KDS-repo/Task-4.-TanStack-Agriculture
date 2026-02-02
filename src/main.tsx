import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import { QueryProvider } from './QueryProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>
)