import React from 'react';
import infoIcon from '../../assets/icons/info.png';
import addToCartBtn from '../../assets/icons/add-to-cart.png';

const RecommendCard = ({image, text1, text2}) => {
  return (
    <div className='bg-[#54372A] relative w-[367px] h-[398px] rounded-[35px] flex flex-col items-center'>
        <div>
            <img src={image} alt={image} />
        </div>
        <div className='h-[69px] bg-[#6E554A] w-full rounded-b-[35px] px-[1rem] text-white flex items-center justify-center gap-[1rem]'>
            <p className='text-[22px] font-bold'>{text1}</p>
            <div className='w-[1px] h-[1rem] bg-white'></div>
            <p className='text-[16px]'>{text2}</p>
        </div>
        
        <img className='absolute left-[1rem] top-[1rem]' src={infoIcon} alt={'info-icon'} />
        <img className='absolute bottom-[5rem] right-[1rem]' src={addToCartBtn} alt={'add-to-cart-btn'} />
    </div>
  )
}

export default RecommendCard