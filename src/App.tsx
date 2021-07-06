import React from "react";
import MainLayout from './components/mainLayout/MainLayout'
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App(){
  return (
    <BrowserRouter>
      <MainLayout/ >
    </BrowserRouter>
  )
}

export default App;