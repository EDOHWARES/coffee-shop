import React from 'react';
import coffeeHead from '../../assets/images/coffee-head.png';
import bean1 from '../../assets/images/bean1.png';

import './about.css';

export const About = () => {
  return (
    <section className='p-[34px] mb-[6rem] relative'>
      <img src={bean1} alt="bean1" className='bean absolute bottom-[-6rem] left-0' />
        <div className='about-container max-w-[1440px] mx-auto bg-[#54372A] rounded-[4rem] relative h-[378px] py-10 pr-10 pl-0 flex items-center justify-end'>

            <img src={coffeeHead} alt="coffee face" className='absolute top-[-4.5rem] left-0' />

            <div className='w-1/2 flex flex-col text-[18px] text-white gap-4'>
                <p className='leading-[218%]'>
                    Ectasy is an Online Coffee Store That Offers the Widest Selection Of
                    Specially Coffees And Teas From Around The World. From Medium- 
                    Dark Roast Single Origin To Flavored Espresso Beans, We Offer A Variety 
                    Of Ethically Sourced Products To Tantalize Any Customer's 
                    Palate. For Those Looking For Unique Brewing Equipment, Ectasy Also Carries 
                    A Full Range Of Quality Espresso Makers, Grinders, Brewers..
                </p>
                <span className='underline self-end cursor-pointer'>More</span>
            </div>
            <h1 className='dancing-script absolute top-[-3.3rem] right-[6rem] text-[54px] text-[#F8E4BE]'>Our Story</h1>
        </div>
    </section>
  )
}
