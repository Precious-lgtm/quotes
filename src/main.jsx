import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider.jsx'
import Routes from './Routes.jsx';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <StrictMode>
      <RouterProvider router={Routes} />
    </StrictMode>
  </ContextProvider>,
)
