import React, {useState,useEffect}from 'react';
import { Link } from "react-router-dom";
import {CgMenuRight, CgClose} from 'react-icons/cg';


const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })
  return(
    <header className={`${bg ? 'bg-gray-200 py-4 lg:py-6' : 'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#" alt='logo' className="text-black text-2xl font-semibold">Furniture Haven</a>
          <div onClick={() => setMobileNav(!mobileNav)}className='text-2xl text-black md:hidden lg:text-3xl cursor-pointer'>{mobileNav ? <CgClose /> : <CgMenuRight />}</div>
        
        
        <nav className='hidden md:flex'>
          <ul className=' flex space-x-14 uppercase text-black transition-all'>
            <li className='text-black hover:text-teal-500 hover:border-b'><Link to='/home'>Home</Link></li>
            <li className='text-black hover:text-teal-500 hover:border-b'><Link to='/products'>Products</Link></li>
            <li className='text-black hover:text-teal-500 hover:border-b'><Link to='/contact'>Contact</Link></li>
            <li className='text-black hover:text-teal-500 hover:border-b'><Link to='/cart'>Cart</Link></li>
          </ul>
        </nav>

        <div className='hidden md:flex'>
        <button className="bg-teal-700 font-medium text-white rounded-full px-7 py-2 hover:bg-teal-900"><Link to='/login'>Login</Link></button>
        </div>

        </div>
        
        
        <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-[80%] max-w-xs h-screen transition-all`}>
          <div className='bg-gray-300 w-full h-full shadow-2xl'>
            <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
            <li className='text-xl font-medium capitalize'><Link to='/home'>Home</Link></li>
            <li className='text-xl font-medium capitalize'><Link to='/products'>Products</Link></li>
            <li className='text-xl font-medium capitalize'><Link to='/contact'>Contact</Link></li>
            <li className='text-xl font-medium capitalize'><Link to='/cart'>Cart</Link></li>
            <button class="bg-teal-700 text-xl font-medium text-white rounded-full px-7 py-2"><Link to='/login'>Login</Link></button>
            </ul>

          </div>
        </div>
      
      
      </div>
    </header>
  )
};

export default Header;
