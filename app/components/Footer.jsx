import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='logo' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='mail_icon' className='w-6' />
          jeongah.biz@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 JeongAh Choi. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a href='https://github.com/jeong-ah-choi' target='_blank'>
              Github
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/jeongah-choi-729b06196/'
              target='_blank'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href='https://www.threads.net/@jeong_ah_c' target='_blank'>
              Threads
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
