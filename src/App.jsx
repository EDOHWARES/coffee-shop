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
import PopMenu from './components/menu/PopMenu';

function App() {


  return (
    <>
      <section className='relative max-w-[1440px] mx-auto'>
        <Header />
        <Hero />
        <About />
        <Services />
        <Offers />
        <ReserveTable />
        <Recommended />
        <PopMenu />
      </section>
    </>
  )
}

export default App
