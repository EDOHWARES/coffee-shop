import React from 'react';
import BlogCard from './BlogCard';

import steamedMilk from '../../assets/icons/steamed-milk.png';
import milk from '../../assets/icons/milk.png';
import espresso from '../../assets/icons/espresso.png';
import blogBg from '../../assets/images/blog-bg.png';

import fiftyPercent from '../../assets/icons/50.png';
import seventyFivePercent from '../../assets/icons/75.png';
import hundredPercent from '../../assets/icons/100.png';

import coffeeTypes from '../../assets/icons/coffee-types.png';

import coffee_bean9 from '../../assets/images/bean9.png';
import coffee_bean10 from '../../assets/images/bean10.png';

const Input = ({text}) => {
    return (
        <div className='flex items-center gap-[.5rem]'>
            <input type="radio" name={text} id={text} />
            <p className='text-[11px] text-black'>{text}</p>
        </div>
    )
}

const Percent = ({percent}) => {
    return (
        <p className='text-[11px] text-[#F8E4BE]'>{percent}</p>
    )
}

const Blog = () => {
  return (
    <section style={{backgroundImage: `url(${blogBg})`}} className='bg-[#54372A] relative w-full mb-[8rem] max-w-[1440px] mx-auto bg-cover bg-no-repeat bg-center'>

            <img src={coffee_bean9} alt="bean9" className='absolute bottom-[-8rem] left-[9rem] z-50' />
            <img src={coffee_bean10} alt="bean10" className='absolute bottom-[-22rem] left-0 z-50' />

        <h1 className='dancing-script-reserve absolute top-[-1rem] text-[54px] text-[#F8E4BE]'>Our Blog</h1>
        <div className='flex justify-between gap-[2rem] items-center p-[34px] mx-auto'>
            <BlogCard 
                title={'How To Make A Great Coffee'}
                img1={steamedMilk}
                img2={milk}
                img3={espresso}
                imgComp1={<Input text={"Steamed Milk"}/>}
                imgComp2={<Input text={"Milk Foam"} />}
                imgComp3={<Input text={"Espresso"} />}
                content={"Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a fresh  press, mug or other vessel. Next, measure out 2 teaspoons of ground coffee per 8 ounces of water. If you're using a french..."}
            />
            <BlogCard 
                title={'Why Does Caffeine Make Us Stay Awake? '}
                content={"Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like..."}
                img1={fiftyPercent}
                img2={seventyFivePercent}
                img3={hundredPercent}
                imgComp1={<Percent percent={'50%'} />}
                imgComp2={<Percent percent='75%' />}
                imgComp3={<Percent percent='100%' />}
            />
            <BlogCard 
                title={'Different Types Of Coffee'}
                content={"Coffee comes in various types, each with unique flavors and preparation methods. Espresso is a concentrated shot of coffee, known for its strong taste. Americano dilutes espresso with hot water. Latte combines espresso with steamed milk, topped..."}
                img1={coffeeTypes}
            />
        </div>
    </section>
  )
}

export default Blog