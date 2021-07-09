import React from "react";
import MainLayout from './components/mainLayout/MainLayout'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/provider/Provider";
import './App.css';

function App(){
  return (
    <Provider>
      <BrowserRouter>
        <MainLayout/ >
      </BrowserRouter>
    </Provider>
  )
}

export default App;