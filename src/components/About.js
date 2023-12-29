import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });
  return(
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto -mt-5">
        <div className='flex flex-col gap-y-0 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[450px] mix-blend-lighten bg-top'></motion.div>
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me...</h2>
            <h3 className='h3 mb-4'>
              I'm a Full Stack Developer.
            </h3>
            <p className='mb-6'>
              I am the current Management Lead of Google Developer Students Club.
              Innovative, creative, team player who is passionate to solve problems, explore new tools, enhance skillset and enthusiastic about achieving academic and aspirational goals and always willing to explore a wide variety of opportunities that can help to gain perspective and embark new challenges.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-5'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView? <CountUp start={0} end={5} duration={3}/> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView? <CountUp start={0} end={7} duration={3}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Events <br/>
                  Organized
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center mt-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
