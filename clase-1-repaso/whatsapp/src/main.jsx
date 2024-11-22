import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContactsContextProvider } from './Context/ContactsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactsContextProvider>
      <App />
    </ContactsContextProvider>
  </BrowserRouter>
)
