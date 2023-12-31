import React, {useState} from 'react';
// import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const skills = [
  {
    name: "FrontEnd Development",
    description: "HTML, CSS, JavaScript, React JS, Redux, Bootstrap...                                            \n\nI have worked on various projects where I have created the NoteDesk, Text Utilities Tool, NewsLive Website, Myntra Clone and many more which are on my Github profile. These projects have extensively helped me in improving my web development skills.",
    // link: "Learn More",
  },
  {
    name: "BackEnd Development",
    description:"Node JS, Express JS, MongoDB, MySQL...                                                         \n\nI have worked on backend in my NoteDesk Webapp, contributed my part in the Smart India hackathon where we worked on WooLogix to ease the Wool Logistics in India.",
    // link: "Learn More",
  },
  {
    name: "Technical",
    description: "C, C++, Java, Python, Google CLoud, Git, Github,REST APIs, Postman, Figma, Wordpress, Assembly...\n\nAs a Tech enthusiast eagerly building upon my skills, I have been working on Data Structures and Algorithms strengthening promaramming knowledge. As well as smoothly using GIT, APIs and testing it using Postman are my strengths.",
    // link: "Learn More",
  },
  {
    name: "Leadership",
    description: "Event Management, Team Management, Public Speaking, Human Resources(HR), Team Building...       \n\nI am the current Management Lead of Google Developer Student Clubs, Founder President of Creative Gavel Club, Management Team Member of Microsoft Innovations Club and Marketing Team Member of CloudOps Club. With experience of more than a year I have conducted and hosted several events. Which played a key role in improving my Leadership qualities and Public Speaking.",
    // link: "Learn More",
  },
]

const Skill = () => {
  const [showMore, setShowMore] = useState(Array(skills.length).fill(false));
  const toggleShowMore = index => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };
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
            <a target='blank_' rel="noreferrer" href='https://github.com/syedomar1' className='btn btn-lg leading-10'>See my Work</a>
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
                // const {name, description, link} = skills;
                const {name, description} = skills;
                return(
                  <div className='border-b border-white/20 mb-[36px] flex' key={index}>
                  <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {showMore[index] ? description.split('\n').map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>) : description.substring(0, 97)}
                      </p>

                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <button className='btn btn-lg w-9 h-9 mb-[42px] flex justify-center items-center' onClick={() => toggleShowMore(index)}>
                        {/* <BsArrowUpRight/> */}
                        {showMore[index] ? 'Read Less' : 'Know More'}
                      </button>
                      {/* <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight/>
                      </a> */}
                      {/* <a href="#" className='text-gradient text-sm'>
                        {link}
                      </a> */}
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
