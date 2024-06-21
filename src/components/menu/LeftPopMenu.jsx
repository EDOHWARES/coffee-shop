import React from 'react';
import PopMenuItem from './PopMenuItem';

const LeftPopMenu = () => {
  return (
    <div className='flex flex-col gap-[5.5rem] mt-[11rem] justify-between items-center bg-transparent'>
        <PopMenuItem 
            price={'40.00'}
            item={'Chocolate'}
            dir={'row'}
        />
        <PopMenuItem 
            price={25.00}
            item={'Double Es'}
            dir={'row'}
        />
        <PopMenuItem 
            price={45.00}
            item={'Caramel'}
            dir={'row'}
        />
        <PopMenuItem 
            price={50.00}
            item={'Doppio'}
            dir={'row'}
        />
    </div>
  )
}

export default LeftPopMenu