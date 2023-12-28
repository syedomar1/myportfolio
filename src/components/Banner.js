import React from 'react';
import Image from '../assets/omar1.svg'
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadein} from '../variants'

const Banner = () => {
  return(
    <section className='section' id='home'>
    <div className="container mx-auto">
      <div>
        <div>
          <h1>
            SYED <span>OMAR</span> <span>ALBEEZ</span>
          </h1>
          <div>
            <span>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Manager',
              2000,
            ]}
          />
          </div>

        </div>  
        <div>
          <img src={Image} alt='' />
        </div>
      </div>
    </div>
    </section>

  );
};

export default Banner;
