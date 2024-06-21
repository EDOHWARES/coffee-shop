import React from 'react';
import reserveImg from '../../assets/images/Reserve Img.png';
import name from '../../assets/icons/name.png';
import date from '../../assets/icons/date.png';
import phone from '../../assets/icons/phone.png';
import guest from '../../assets/icons/guest.png';
import time from '../../assets/icons/time.png';
import email from '../../assets/icons/email.png';

import bean4 from '../../assets/images/bean4.png';

import './reserveTable.css';

const ReserveTable = () => {
  return (
    <section className='bg-[#54372A] relative w-full mb-[8rem] max-w-[1440px] mx-auto'>
        <img src={bean4} alt="bean4" className='absolute bottom-[-14rem] right-0' />
        <h1 className='dancing-script-reserve absolute top-[-1rem] text-[54px] text-[#F8E4BE]'>Reserve a Table</h1>
        <div className='flex justify-between items-center p-[34px] mx-auto'>
            <div>
                <img src={reserveImg} alt="Reserve Img" />
            </div>
            <div>
                <form action="" className='flex flex-col gap-[2rem]'>
                    <div className='flex items-center bg-white h-[54px] w-[540px] rounded-[12px] pl-[1rem] gap-[1rem]'>
                        <img 
                            src={date} 
                            alt="date" 
                            className='h-[24px] w-[24px] object-cover'
                            />
                        <input 
                            type="text" 
                            name="reservation-date" 
                            id="reservation-date" 
                            placeholder='Date'
                            onfocus="(this.type='date')"
                            className='bg-transparent outline-none border-none text-[21px] text-[#9D8781] placeholder:text-[#9D8781]'
                            />
                    </div>
                    <div className='flex flex-row items-center justify-between gap-[2rem]'>
                        <div className='w-1/2 flex items-center bg-white h-[54px] rounded-[12px] pl-[1rem] gap-[1rem]'>
                            <img 
                                src={time} 
                                alt="time" 
                                className='h-[24px] w-[24px] object-cover'
                                />
                            <input 
                                type="text" 
                                name="reservation-date" 
                                id="reservation-date" 
                                placeholder='Time'
                                onfocus="(this.type='date')"
                                className='bg-transparent outline-none border-none text-[21px] text-[#9D8781] placeholder:text-[#9D8781]'
                                />
                        </div>
                        <div className='w-1/2 flex items-center bg-white h-[54px] rounded-[12px] pl-[1rem] gap-[1rem] px-[1rem]'>
                            <img 
                                src={guest} 
                                alt="guest" 
                                className='h-[24px] w-[24px] object-cover'
                                />
                            <select name="" id="" className='bg-transparent outline-none w-full text-[#9D8781] text-[21px]'>
                                <option value="" className='bg-transparent outline-none'>Guest</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center bg-white h-[54px] w-[540px] rounded-[12px] pl-[1rem] gap-[1rem]'>
                        <img 
                            src={name} 
                            alt="name" 
                            className='h-[24px] w-[24px] object-cover'
                            />
                        <input 
                            type="text" 
                            name="reservation-date" 
                            id="reservation-date" 
                            placeholder='Your Name'
                            onfocus="(this.type='date')"
                            className='bg-transparent outline-none border-none text-[21px] text-[#9D8781] placeholder:text-[#9D8781]'
                            />
                    </div>
                    <div className='flex items-center bg-white h-[54px] w-[540px] rounded-[12px] pl-[1rem] gap-[1rem]'>
                        <img 
                            src={phone} 
                            alt="phone" 
                            className='h-[24px] w-[24px] object-cover'
                            />
                        <input 
                            type="number" 
                            name="reservation-date" 
                            id="reservation-date" 
                            placeholder='Phone Number'
                            onfocus="(this.type='date')"
                            className='bg-transparent outline-none border-none text-[21px] text-[#9D8781] placeholder:text-[#9D8781]'
                            />
                    </div>
                    <div className='flex flex-row items-center justify-between gap-[2rem]'>
                        <div className='w-1/2 flex items-center bg-white h-[54px] rounded-[12px] pl-[1rem] gap-[1rem]'>
                            <img 
                                src={email} 
                                alt="email" 
                                className='h-[24px] w-[24px] object-cover'
                                />
                            <input 
                                type="email" 
                                name="reservation-date" 
                                id="reservation-date" 
                                placeholder='Email'
                                onfocus="(this.type='date')"
                                className='bg-transparent outline-none border-none text-[21px] text-[#9D8781] placeholder:text-[#9D8781]'
                                />
                        </div>
                        <div className='w-1/2 flex items-center h-[54px]'>
                            <button className='border border-[#F8E4BE] w-full rounded-[49px] py-[.5rem] px-[1rem] text-[24px] bg-[#5b4033] text-[#F8E4BE]'>Reserve</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ReserveTable