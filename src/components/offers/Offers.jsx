import React from 'react';
import packet from '../../assets/images/packet.png';
import bean3 from '../../assets/images/bean3.png';

import './offers.css';

const Offers = () => {
  return (
    <section id='offers' className='p-[34px] mb-[8rem] relative'>
        <img src={bean3} alt="bean3" className='absolute bottom-[-12rem] left-0' />
        <div className='shadow relative flex items-center mx-auto justify-between max-w-[1440px] rounded-[4rem] h-[378px] bg-[#54372A] text-[#F8E4BE] py-10 pl-10 pr-0'>
            <div className='w-2/3 flex flex-col justify-around h-full items-start '>
                <h2 className='text-3xl'>Up To <span className='text-5xl'>50%</span> off</h2>
                <p className='text-[18px] text-white'>
                    All Our Cafe, We Take Pride in Providing Our Customers With The Best 
                    Coffee Around. Our Carefully-Selected Coffees Come From Some Of The 
                    Most Renowned Coffee Growing Regions In The World, Ensuring That...
                </p>
                <button className='border border-[#F8E4BE] rounded-[49px] py-[1rem] px-[2rem] text-[24px] bg-[#5b4033]'>Shop Now</button>
            </div>
            <div>
                <img src={packet} alt="packet" />
            </div>
            <h1 className='dancing-script absolute top-[-3.3rem] left-[6rem] text-[54px] '>Offer</h1>
        </div>
    </section>
  )
}

export default Offers