import { useState } from 'react'
import './App.css';

// components
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { About } from './components/about/About';
import Services from './components/services/Services';

function App() {


  return (
    <>
      <section>
        <Header />
        <Hero />
        <About />
        <Services />
      </section>
    </>
  )
}

export default App
