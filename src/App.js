import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Client from './components/Client';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Service />
      <About />
     <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
