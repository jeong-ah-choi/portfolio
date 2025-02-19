import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image
          src={assets.profile_img}
          alt='profile_img'
          className='rounded-full w-32'
        />
      </div>
      <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm JeongAh Choi
        <Image src={assets.hand_icon} alt='hand_icon' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Frontend Developer <br />
        Based In Seoul.
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        A frontend developer who loves creating, challenging, and improving
        experiences. <br />
        With experience in both front-end and app development, I focus on
        delivering valuable services to users. As a digital nomad, I aim to work
        freely and build innovative projects from anywhere in the world.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a
          href='#contact'
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          contact me{' '}
          <Image
            src={assets.right_arrow_white}
            alt='right_arrow_white'
            className='w-4'
          />
        </a>
        <a
          href='/sample-resume.pdf'
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
        >
          my resume{' '}
          <Image
            src={assets.download_icon}
            alt='download_icon'
            className='w-4'
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
