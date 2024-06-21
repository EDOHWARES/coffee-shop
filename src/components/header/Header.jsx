import React from 'react';

// logos and icons
import logo from '../../assets/images/logo.png';
import account from '../../assets/icons/account.png';
import cart from '../../assets/icons/cart.png';

const Header = () => {
  return (
    <section className='h-[86px] px-[34px] z-50 max-w-[1440px] mx-auto'>
        <div className='flex items-center justify-between max-w-[1440px] h-full mx-auto'>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <nav className='text-[#FFF8E8] h-full'>
                <ul className='flex items-center gap-6'>
                    <li className='flex items-center gap-4 pt-[34px]'>
                        <span className='cursor-pointer'><img src={account} alt='account' /></span>
                        <span className='cursor-pointer'><img src={cart} alt='cart' /></span>
                    </li>
                    <li className=' cursor-pointer bg-[#DFC39D80] h-full pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Home</li>
                    <li className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Menu</li>
                    <li className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Services</li>
                    <li className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl' >Product</li>
                    <li className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Blog</li>
                    <li className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl]'>Contact</li>
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default Header