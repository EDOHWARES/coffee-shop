import React from 'react';
import './popMenuItem.css';

const PopMenuItem = ({price, item, dir}) => {
  return (
    <div className={`flex flex-col gap-px`}>
        <div className={`dancing-script flex flex-${dir} items-center justify-between`}><span className='text-[#F8E4BE] font-semibold text-[24px]'>${price}</span> <span className='text-[48px] font-semibold text-[#F8E4BE]'>{item}</span></div>

        <div className={`w-[345px] flex flex-${dir} items-center`}>
            <div className='rhombus w-[10%] bg-[#644121]'></div>
            <div className='h-[1px] w-[90%] gradient'></div>
        </div>
    </div>
  )
}

export default PopMenuItem