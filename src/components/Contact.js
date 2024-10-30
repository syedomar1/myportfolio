import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium} from 'react-icons/fa';

const Contact = () => {
  return(
    <section className='section md:mt-[950px] md:mb-[100px]' id='contact'>
      <div className="container mx-auto md:-mt-96">
        <div className='flex flex-col lg:flex-row md:mt-96'>
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
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-8'>
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
          </motion.div>
          <motion.form name='contact' method='post' data-netlify="true"
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start'>
            <input type="hidden" name='form-name' value="contact" />
            <input name='name' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Name'/>
            <input required name='email' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your Email ID'/>
            <textarea required name='message' className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message'></textarea>
            <button type='submit' className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
