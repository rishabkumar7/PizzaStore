import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
