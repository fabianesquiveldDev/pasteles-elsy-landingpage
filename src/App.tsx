// src/App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import Carrusel from './components/Carrusel';
import Comprar from './components/comprar';
import SobreMi from './components/SobreMi';
import Trabajo from './components/Trabajo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
     <div className="min-h-screen m-0 p-0">
        <Header />
        <main className="pt-[90px]">
          <Hero />
          <Carrusel />
          <Comprar />
          <SobreMi />
          <Trabajo />
        </main>
        <Footer />
    </div>


    



  );
};

export default App;