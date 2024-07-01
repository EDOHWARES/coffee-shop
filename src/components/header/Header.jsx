import React, { useEffect, useRef } from 'react';

import './header.css';

// logos and icons
import logo from '../../assets/images/logo.png';
import account from '../../assets/icons/account.png';
import cart from '../../assets/icons/cart.png';

const Header = () => {

    const headerRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 50) {
                    headerRef.current.classList.add('bg');
                } else {
                    headerRef.current.classList.remove('bg');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleNavItemSelection = (e) => {
        document.querySelectorAll('#navItems a').forEach(item => {
            item.classList.remove('active');
        })

        e.target.classList.add('active');
    };

  return (
    <section ref={headerRef} style={{zIndex: '99999999'}} className='h-[86px] sticky top-0 w-full px-[34px] max-w-[1440px] mx-auto'>
        <div className='flex items-center justify-between max-w-[1440px] h-full mx-auto'>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <nav className='text-[#FFF8E8] h-full'>
                <ul id='navItems' className='flex items-center gap-6'>
                    <a href='#' className='cursor-pointer pt-[34px] pb-[10px] rounded-b-3xl'><img src={account} alt='account' /></a>
                    <a href='#' className='cursor-pointer pt-[34px] pb-[10px] rounded-b-3xl'><img src={cart} alt='cart' /></a>
                    <a onClick={handleNavItemSelection} href='#' className=' active cursor-pointer h-full pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Home</a>
                    <a onClick={handleNavItemSelection} href='#about' className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>About</a>
                    <a onClick={handleNavItemSelection} href='#services' className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Services</a>
                    <a onClick={handleNavItemSelection} href='#offers' className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl' >Products</a>
                    <a onClick={handleNavItemSelection} href='#reserve-table' className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Reserve Table</a>
                    <a onClick={handleNavItemSelection} href='#blog' className=' cursor-pointer pt-[34px] pb-[10px] px-[10px] rounded-b-3xl'>Blog</a>
                </ul>
            </nav>
        </div>
    </section>
  )
}

export default Header