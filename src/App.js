import './App.css';
import React from "react";
import NavbarModule from "./Components/Navbar";
import { Link } from "react-router-dom";
import Home from "./Components/Home"
// React-Bootstrap functionality
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <main>
      <NavbarModule />
      <Home />
    </main>
  );
}

export default App;
