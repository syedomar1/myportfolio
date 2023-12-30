import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium} from 'react-icons/fa';

const Contact = () => {
  return(
    <section className='py-64 mt-80 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row mt-16'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's <br/> Collaborate!!
              </h2>
          <motion.div 
          variants={fadeIn('right', 0.7)}
          initial="hidden" 
          whileInView = {'show'} 
          viewport={{once:false, amount:0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a target='_blank' href='https://github.com/syedomar1'>
              <FaGithub/>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/syed-omar-albeez'>
              <FaLinkedin/>
            </a>
            <a target='_blank' href='https://twitter.com/Syedomar_'>
              <FaTwitter/>
            </a>
            <a target='_blank' href='https://www.instagram.com/syedomar_/'>
              <FaInstagram/>
            </a>
            <a target='_blank' href='https://medium.com/@syedomar1'>
              <FaMedium/>
            </a>
          </motion.div>
            </div>
          </motion.div>
          <motion.form 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Name'/>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Email ID'/>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message'></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
