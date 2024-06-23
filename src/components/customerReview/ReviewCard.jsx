import React from 'react';
import star from '../../assets/icons/star.png';

import './customerReviews.css';

const ReviewCard = ({img, firstName, secondName, rating, review}) => {
  return (
    <div className='card bg-[#66371D] w-[342px] h-[362px] rounded-t-[15px] flex flex-col items-center justify-center gap-[1rem] p-6'>
        <div className='rounded-full border-t-[.5rem] border-[#f0e3d0]'>
            <img src={img} alt="review" className='rounded-full w-[103px] h-[103px] object-cover object-center' />
        </div>
        <p className='text-[20px] text-[#F0E3D0] flex flex-col items-center'><span>{firstName}</span><span>{secondName}</span></p>
        <div className='flex items-center gap-[1rem] text-[1.5rem] fill-[#F0E3D0]'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
        </div>
        <p className='text-[12px] text-[#F0E3D0] text-center'>{review}</p>
    </div>
  )
}

export default ReviewCard