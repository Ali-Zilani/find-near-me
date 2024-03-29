import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <div className='flex justify-between px-5 p-3 shadow-sm'>
      <div className='flex gap-3 items-cneter'>
      <Image src='/logo.png' alt='logo' width={50} height={50} />
      <h2 className='text-[25px] text-red-500 font-bold tracking-widest py-2'>DISCOVER</h2>
      </div>
      <ul className='flex gap-8 items-center'>
        <li className='text-[18px] hover:text-red-500 cursor-pointer '>Home</li>
        <li className='text-[18px] hover:text-red-500 cursor-pointer '>About Us</li>
        <li className='text-[18px] hover:text-red-500 cursor-pointer '>Contact Us</li>
      </ul>
    </div>
  )
}

export default Header