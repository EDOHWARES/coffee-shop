import { useState } from 'react'
import './App.css';

// components
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { About } from './components/about/About';
import Services from './components/services/Services';
import Offers from './components/offers/Offers';
import ReserveTable from './components/reserveTable/ReserveTable';
import Recommended from './components/recommended/Recommended';

function App() {


  return (
    <>
      <section>
        <Header />
        <Hero />
        <About />
        <Services />
        <Offers />
        <ReserveTable />
        <Recommended />
      </section>
    </>
  )
}

export default App
