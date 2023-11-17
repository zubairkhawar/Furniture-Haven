import React, {useState,useEffect}from 'react';
import { Link } from "react-router-dom";
import {CgMenuRight, CgClose} from 'react-icons/cg';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false)
  return(
    <header className={`${bg ? 'bg-black py-4 lg:py-6' : 'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#" alt='logo' className="text-white text-2xl font-semibold">Furniture Haven</a>
          <div className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'>{mobileNav ? <CgClose /> : <CgMenuRight />}</div>
        </div>
        <nav className='hidden md:flex'>
          <ul className='uppercase text-white hover:border-b transition-all'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <button><Link to='/SignUp'>Login</Link></button>
          </ul>
        </nav>
        <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0m w-full max-w-xs h-screen transition-all`}>
          <div className='bg-white w-full h-full shadow-2xl'>

          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
