import React from 'react';
import ServiceCard from './ServiceCard';
import './services.css';


//icons
import equipment from '../../assets/icons/equipment.png';
import typeOfCoffee from '../../assets/icons/type-of-coffee.png';
import TakeAWay from '../../assets/icons/take-away.png';
import beansVariant from '../../assets/icons/beans-variant.png';
import pastry from '../../assets/icons/pastry.png';

const Services = () => {
  return (
    <section className='w-full'>
        <div className='p-[34px] text-[#F8E4BE] max-w-[1440px]'>
            <h1 className='services-hd text-[64px] text-center mb-10'>Services</h1>
            <div className='flex items-center justify-between'>
                <ServiceCard 
                    icon={equipment}
                    title={'Equipment'}
                />

                <ServiceCard 
                    icon={typeOfCoffee}
                    title={'Equipment'}
                />

                <ServiceCard 
                    icon={TakeAWay}
                    title={'Equipment'}
                />

                <ServiceCard 
                    icon={beansVariant}
                    title={'Equipment'}
                />

                <ServiceCard 
                    icon={pastry}
                    title={'Equipment'}
                />
            </div>
        </div>
    </section>
  )
}

export default Services