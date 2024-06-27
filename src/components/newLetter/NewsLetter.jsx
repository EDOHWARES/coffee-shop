import React from 'react';
import notification from '../../assets/icons/notification.png';

import bean11 from '../../assets/images/bean11.png';
import bean12 from '../../assets/images/bean12.png';
import bean13 from '../../assets/images/bean12.png';

const NewsLetter = () => {
  return (
    <section className='bg-[#54372A] relative w-full mb-[8rem] max-w-[1440px] mx-auto'>
        
        <img src={bean11} alt="bean11" className='absolute top-[-4rem] left-0' />
        <img src={bean13} alt="bean13" className='absolute bottom-[-5rem] right-0' />

        <div className='flex flex-col items-center justify-center p-[34px] gap-[3rem]'>
            <p className='text-[#F8E4BE] text-[21px]'>Subscribe To Our NewsLetter, Discounts And Promotions</p>
            <div className='flex items-center gap-[1rem] px-[1rem] bg-white w-[540px] h-[54px] rounded-[12px]'>
                <img src={notification} alt="notification" />
                <input type="email" name="" id="" placeholder='Your Email Address' className='bg-transparent outline-none border-none text-[#9D8781] placeholder:text-[#9d8781]' />
            </div>
            <button className='border border-[#F8E4BE] rounded-[49px] py-[.5rem] px-[1.5rem] text-[24px] bg-[#5b4033] text-[#F8E4BE] w-fit'>Subscribe</button>
        </div>
    </section>
  )
}

export default NewsLetter