import React from 'react'
import Header from './component/Header'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
   </>
  )
}

export default App
