import React from 'react';
import coffee_grinder from '../../assets/images/grind-coffee.png';
import bg from '../../assets/images/Bg footer.png';
import linkedin from '../../assets/icons/linkedin.png';
import pinterest from '../../assets/icons/pinterest.png';
import oho from '../../assets/icons/oho.png';

import location from '../../assets/icons/location.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/contact.png';

const Footer = () => {
  return (
    <section style={{backgroundImage: `url(${bg})`}} className='bg-no-repeat bg-center bg-cover relative w-full max-w-[1440px] mx-auto h-[450px] flex items-center justify-center'>
        <div className='flex items-center justify-between gap-[2rem] px-[34px] pb-[2rem] h-full'>
            <div>
                <img src={coffee_grinder} alt="coffee-grinder" />
            </div>

            <div className='flex flex-col gap-[1rem] text-[#FFF3E0] text-[16px] items-center justify-center h-[100%]'>
                <ul className='grid grid-cols-4 gap-x-[3rem] gap-y-[2rem]'>
                    <li>About</li>
                    <li>Our Story</li>
                    <li>FAQ</li>
                    <li className='flex items-center gap-[1rem]'>
                        <img src={location} alt="location" />
                        <span>12 Jhon Avenue #35 - Abuja</span>
                    </li>
                    <li>Customer Resources</li>
                    <li>Menu</li>
                    <li>Locations</li>
                    <li className='flex items-center gap-[1rem]'>
                        <img src={mail} alt="mail" />
                        <span>ectasycoffee@coffee.com</span>
                    </li>
                    <li>Services</li>
                    <li>Payment Options</li>
                    <li>Refunds & Exchanges</li>
                    <li className='flex items-center gap-[1rem]'>
                        <img src={phone} alt="contact" />
                        <span>+234 704 8126 687</span>
                    </li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Limitation Of Liability</li>
                </ul>
                <div className='text-[#FFF3E0] absolute bottom-[1rem] transform -translate-x-1/2 left-[50%] text-[16px] flex flex-col items-center opacity-[65%]'>
                    <p>Created By <b>EDOHWARES</b></p>
                    <p>Copyright 2024 Ectasy Coffee. All Right Reserved</p>
                </div>
                <div className="socials flex items-center gap-[1rem] absolute top-[-2rem] right-[34px]">
                    <p>Social Media:</p>
                    <div className='flex items-center gap-[.5rem]'>
                        <img src={linkedin} alt="linkedin" /><img src={pinterest} alt="pinterest" /><img src={oho} alt="others" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer