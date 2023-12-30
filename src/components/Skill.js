import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const skills = [
  {
    name: "FrontEnd Development",
    description: "HTML, CSS, JavaScript, React JS, Redux, Bootstrap.",
    link: "Learn More",
  },
  {
    name: "BackEnd Development",
    description:"Node JS, Express JS, MongoDB, MySQL.",
    link: "Learn More",
  },
  {
    name: "Technical",
    description: "C, C++, Java, Python, Google CLoud, Git, Github, Postman, Figma, Wordpress, Assembly.",
    link: "Learn More",
  },
  {
    name: "Leadership",
    description: "Event Management, Team Management, Public Speaking, Human Resources(HR), Team Building.",
    link: "Learn More",
  },
]

const Skill = () => {
  return(
    <section className='section mb-16' id='skills'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1 lg:bg-skill lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What am I profecient at?</h2>
            <h3 className='h3 max-w-[455px] mb-6'>
              As a sophomore, building upon my skills, I have developed expertise in various tech stacks.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex-1'>
            <div>
              {skills.map((skills, index)=> {
                // destructure
                const {name, description, link} = skills;
                return(
                  <div className='border-b border-white/20 h-[134px] mb-[36px] flex' key={index}>
                  <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href="#" className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  ); 
};

export default Skill;
