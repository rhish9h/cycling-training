import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Plan from './pages/plan/Plan';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/plan' element={<Plan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
