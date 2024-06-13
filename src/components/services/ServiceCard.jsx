import React from 'react'

const ServiceCard = ({icon, title}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#54372A] h-[225px] w-[170px] rounded-[35px]'>
        <div className='h-[60%] flex items-center'>
            <img src={icon} alt={title} />
        </div>
        <div className='h-[20%]'>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default ServiceCard