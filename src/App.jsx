import React, { useEffect, useState } from 'react'
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
import Blog from './components/blog/Blog';
import CustomerReviews from './components/customerReview/CustomerReviews';

// preloader
import GridLoader from "react-spinners/GridLoader";


function App() {

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);


  return (
    <>
      {loading ?
        <div className='w-screen h-screen flex items-center justify-center bg-white'>
            <GridLoader
            color={'#54372A'}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>
      :
       <section className='relative max-w-[1440px] mx-auto'>
        <Header />
        <Hero />
        <About />
        <Services />
        <Offers />
        <ReserveTable />
        <Recommended />
        <PopMenu />
        <Blog />
        <CustomerReviews />
      </section>
      }
    </>
  )
}

export default App
