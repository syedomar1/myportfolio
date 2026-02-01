import React from 'react';
import Image from '../assets/bannnerdp.svg'
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const resume = "Syed_Omar_Resume_.pdf"

const Banner = () => {
  const saveFile = (url) =>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag); // required for firefox
    aTag.click();
    aTag.remove();
  };
  return(
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center mb-8' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
        <div className='flex-1 text-center font-secondary lg:text-left mt-9'>
          <motion.h1 
          variants={fadeIn('up', 0.3)}
          initial="hidden" 
           whileInView = {'show'} 
           viewport={{once:false, amount:0.7}} 
           className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            SYED <span>OMAR</span> <span>ALBEEZ</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up', 0.4)}
          initial="hidden" 
          whileInView = {'show'} 
          viewport={{once:false, amount:0.7}} 
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Programmer',
              2000,
              'Organizer',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
          />
          </motion.div>
          <motion.p 
          variants={fadeIn('up', 0.5)}
          initial="hidden" 
           whileInView = {'show'} 
           viewport={{once:false, amount:0.7}}
          className='mb-5 max-w-lg mx-auto lg:mx-0'>
            I'm an SDE Intern at Honeywell and Senior at Vellore Institute of Technology pursuing B.Tech in Computer Science and Engineering
          </motion.p>
          <motion.div 
          variants={fadeIn('up', 0.6)}
          initial="hidden" 
          whileInView = {'show'} 
          viewport={{once:false, amount:0.7}}
          className='flex max-w-max gap-x-6 items-center mb-4 mx-auto lg:mx-0'>
            <a target='blank_' rel="noreferrer" href='https://www.linkedin.com/in/syed-omar-albeez' className='btn btn-lg leading-10'>Contact Me</a>
            <a href='/' onClick={() => saveFile(resume)} className='text-gradient btn-link'>
              My Portfolio
            </a>
          </motion.div>
          <motion.div 
          variants={fadeIn('up', 0.7)}
          initial="hidden" 
          whileInView = {'show'} 
          viewport={{once:false, amount:0.7}}
          className='flex text-[20px] gap-x-6 max-w-max -mb-4 mx-auto lg:mx-0'>
            <a target='_blank' rel="noreferrer" href='https://github.com/syedomar1'>
              <FaGithub/>
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/syed-omar-albeez'>
              <FaLinkedin/>
            </a>
            <a target='_blank' rel="noreferrer" href='https://x.com/Syedomar_'>
              <FaTwitter/>
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/syedomar_/'>
              <FaInstagram/>
            </a>
            <a target='_blank' rel="noreferrer" href='https://medium.com/@syedomar1'>
              <FaMedium/>
            </a>
          </motion.div>
        </div>  
        <motion.div 
        variants={fadeIn('down', 0.5)}
        initial="hidden" 
        whileInView = {'show'}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt='' width="400px" />
        </motion.div>
      </div>
    </div>
    </section>

  );
};

export default Banner;
