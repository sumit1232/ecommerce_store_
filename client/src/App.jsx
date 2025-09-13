import React from 'react'
import Header from './component/Header'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Products from './component/Products';

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Header />
      <Products />
      <AppRoutes />
    </BrowserRouter>

   </>
  )
}

export default App
