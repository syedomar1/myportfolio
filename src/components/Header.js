import React from 'react';
import Logo from '../assets/logo2.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      <a href='#'>
        <img src={Logo} alt="Logo" width="100px" />
      </a>
      <button className='btn btn-sm'>Resume</button>
      </div>
    </div>
  </header>;
};

export default Header;
