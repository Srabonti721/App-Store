import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />,
      </HelmetProvider>
       <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
