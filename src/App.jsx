import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Inicio />
      <Servicios />
      <Footer />
    </div>
  );
}

export default App;
