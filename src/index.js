import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Sources from "./Components/Sources";
import Bounce from "./Components/Modules/bounce"
import Datastructures from "./Components/Modules/datastructures"
import CompSciII from "./Components/Modules/CompSciII"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="code" element={<Sources />}/>
      <Route path="about" element={<About />} />
      <Route path="datastructures" element={<Datastructures/>} />
      <Route path="bounce" element={<Bounce/>} />
      <Route path="CompSciII" element={<CompSciII/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
