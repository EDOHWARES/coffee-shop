import React from 'react';
import popMenuImg from '../../assets/images/Popularmenu Img.png';
import LeftPopMenu from './LeftPopMenu';
import RightPopMenu from './RightPopMenu';
import arrowDown from '../../assets/icons/arrow-down.png';

import bean5 from '../../assets/images/bean5.png';
import bean6 from '../../assets/images/bean6.png';
import bean7 from '../../assets/images/bean7.png';
import bean8 from '../../assets/images/bean8.png';

import './popMenu.css';

const PopMenu = () => {
  return (
    <section className={`w-full mb-[8rem] p-[34px] mx-auto relative`}>
        <img src={bean5} alt="bean5" className='absolute top-[4rem] left-[20%]' />
        <img src={bean7} alt="bean 7" className='absolute bottom-0 right-[10rem]' />
        <img src={bean8} alt="bean8" className='absolute bottom-[-10rem] right-0' />
        <h1 className='dancing-script mb-10 text-[54px] text-[#F8E4BE] text-center'>Popular Menu</h1>
        <div className='max-w-[1440px] flex items-center justify-center h-fit mx-auto relative' >
            <LeftPopMenu />
            <img src={popMenuImg} alt="popular menu image" />
            <RightPopMenu />
            <div className='lightener'></div>
            <img src={bean6} alt="bean6" className='absolute top-0 left-[-5rem]' />
        </div>

        <div className='float-end flex gap-4 text-[36px] text-[#F8E4BE] mt-4 cursor-pointer'>
          <p>Our Menu</p>
          <img src={arrowDown} alt="arrow down" className='object-contain' />
        </div>
    </section>
  )
}

export default PopMenu