import React, {useRef} from 'react';

import ReviewCard from './ReviewCard';
import tim from '../../assets/images/tim.png';
import man2 from '../../assets/images/man2.jpeg';
import man3 from '../../assets/images/man3.jpeg';
import man4 from '../../assets/images/man4.jpeg';

import reviewBg from '../../assets/images/review-bg.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '@ant-design/react-slick';

import './customerReviews.css';


const CustomerReviews = () => {

    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true,
                }
            }
        ]
      };

  return (
    <section className='w-full mb-[8rem] mx-auto p-[34px]'>
        <div className='relative'>
        <h1 className='dancing-script-reserve absolute top-[-1rem] text-[54px] text-[#F8E4BE] z-50'>Customer Reviews</h1>
        <Slider ref={sliderRef} {...settings} style={{backgroundImage: `url(${reviewBg})`}} className='flex items-center justify-center relative gap-[2rem] max-w-[1440px] mx-auto pt-10 px-10 border-x rounded-[35px]'>
            <ReviewCard 
                img={tim}
                firstName={'Tim'}
                secondName={'Timothy'}
                rating={4}
                review={"I love spending my downtime in a cozy coffee shop, surrounded by sweet aroma of freshly brewed drinks and pastries."}
            />

            <ReviewCard 
                img={man2}
                firstName={'Silas'}
                secondName={'Martins'}
                rating={4}
                review={"This coffee is truly amazing, with a rich flavor that makes my mornings delightful and energizing."}
            />

            <ReviewCard 
                img={man3}
                firstName={'Philip'}
                secondName={'JJ Thompson'}
                rating={4}
                review={"I adore this coffee! Its smooth, robust taste makes every morning brighter and more enjoyable."}
            />

            <ReviewCard 
                img={man4}
                firstName={'Ednut'}
                secondName={'Fortunate'}
                rating={4}
                review={"This coffee is perfect! The balanced flavor and aroma make every cup a wonderful experience."}
            />
        </Slider>
        </div>
    </section>
  )
}

export default CustomerReviews