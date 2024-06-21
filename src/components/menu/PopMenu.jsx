import React from 'react';
import popMenuImg from '../../assets/images/Popularmenu Img.png';
import LeftPopMenu from './LeftPopMenu';
import RightPopMenu from './RightPopMenu';
import arrowDown from '../../assets/icons/arrow-down.png';
import './popMenu.css';

const PopMenu = () => {
  return (
    <section className={`w-full mb-[8rem] p-[34px] mx-auto`}>
        <h1 className='dancing-script mb-10 text-[54px] text-[#F8E4BE] text-center'>Popular Menu</h1>
        <div className='max-w-[1440px] flex items-center justify-center h-fit mx-auto relative' >
            <LeftPopMenu />
            <img src={popMenuImg} alt="popular menu image" />
            <RightPopMenu />
            <div className='lightener'></div>
        </div>

        <div className='float-end flex gap-4 text-[36px] text-[#F8E4BE] mt-4 cursor-pointer'>
          <p>Our Menu</p>
          <img src={arrowDown} alt="arrow down" className='object-contain' />
        </div>
    </section>
  )
}

export default PopMenu