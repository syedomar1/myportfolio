import React from 'react';
import Logo from '../assets/logo.svg'

const resume = "Syed_Omar_Resume_.pdf"

const Header = () => {
  const saveFile = (url) =>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag); // required for firefox
    aTag.click();
    aTag.remove();
  };
  return <header className='py-3'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      <a href='/'>
        <img src={Logo} alt="Logo" width="70px" />
      </a>
      <button className='btn btn-sm' onClick={() => saveFile(resume)}>Resume</button>
      </div>
    </div>
  </header>;
};

export default Header;
