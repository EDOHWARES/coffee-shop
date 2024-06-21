import React from 'react';
import RecommendCard from './RecommendCard';

import arabicaImg from '../../assets/images/abrica.png';
import houseBlendImg from '../../assets/images/house-blend.png';
import robustaImg from '../../assets/images/robusta.png';

const Recommended = () => {
  return (
    <section className='w-full mb-[8rem] p-[34px]'>
        <h1 className='dancing-script mb-10 text-[54px] text-[#F8E4BE] text-center'>Recommended</h1>
        <div className='max-w-[1440px] mx-auto flex items-center justify-between'>
            <RecommendCard 
                image={arabicaImg}
                text1={'Arabica'}
                text2={'Dark Roast'}
            />
            <RecommendCard 
                image={houseBlendImg}
                text1={'House Blend'}
                text2={'Dark Roast'}
            />
            <RecommendCard 
                image={robustaImg}
                text1={'Robusta'}
                text2={'Dark Roast'}
            />
        </div>
    </section>
  )
}

export default Recommended