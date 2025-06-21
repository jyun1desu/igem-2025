import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import './index.css'
import App from './App.jsx'
import theme from './theme.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ChakraProvider value={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
  ,
)
