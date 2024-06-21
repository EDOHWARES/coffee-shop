import React from 'react';
import PopMenuItem from './PopMenuItem';

const RightPopMenu = () => {
  return (
    <div className='flex flex-col gap-[5.5rem] mt-[11rem] justify-between items-center bg-transparent'>
        <PopMenuItem 
            price={'30.00'}
            item={'Espresso'}
            dir={'row-reverse'}
        />
        <PopMenuItem 
            price={30.00}
            item={'Cappuccino'}
            dir={'row-reverse'}
        />
        <PopMenuItem 
            price={25.00}
            item={'Mocha'}
            dir={'row-reverse'}
        />
        <PopMenuItem 
            price={25.00}
            item={'Latte'}
            dir={'row-reverse'}
        />
    </div>
  )
}

export default RightPopMenu