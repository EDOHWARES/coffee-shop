import React from 'react';
import './hero.css';

import heroImg from '../../assets/images/hero-img.png';
import cup from '../../assets/images/Cup1.png';

const Hero = () => {
  return (
    <section className='static w-full top-0 z-[-1] min-h-screen mb-10 mx-auto max-w-[1440px]'>
        <div className='pl-[34px] text-[#DABB9E] flex flex-col md:flex-row justify-between w-full max-w-[1440px] mx-auto'>
            <div className=' flex flex-col gap-7 w-full md:w-1/2 pt-8'>
                <h1 className='hero-hd-txt text-[112px] text-[#221518]'>Ectasy Coffee</h1>
                <p className='text-[24px]'>
                    Today's good mood is sponsored by coffee, <br />
                    Search for your coffee now.
                </p>
                <div className='flex items-center gap-4'>
                    <button className='py-[36px] px-[12px] bg-[#221518] rounded-[49px] border border-[##DABB9E] w-[187px] h-[55px] flex items-center justify-center hover:bg-[#DABB9E] hover:text-[#221518] duration-500'>Shop Now</button>
                    <button className='py-[36px] px-[12px] bg-[#DABB9E] rounded-[49px] border border-[##DABB9E] w-[187px] h-[55px] flex items-center justify-center text-[#221518] hover:bg-[#221518] hover:text-[#DABB9E] duration-500'>Catalog</button>
                </div>
            </div>

            <div className='lightener'></div>

            <div className='md:absolute top-0 right-0 '>
                <div className='md:absolute bg-[#7C573C] h-full w-[48%] z-[-1] right-0'></div>
                <div className='w-full md:w-[266px] h-[147px] absolute bottom-0 rounded-t-[2.5rem] flex items-center p-3 shadow-teal-50'>
                    <div className='w-[90%]'>
                        <img src={cup} alt="coffee-cup" className='h-full w-full object-cover' />
                    </div>
                </div>
                <img src={heroImg} alt="hero-img " className='h-[40rem]' />
            </div>
        </div>
    </section>
  )
}

export default Hero