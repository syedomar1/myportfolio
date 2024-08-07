import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import "../styles.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaBriefcase} from 'react-icons/fa';

function Experience() {
  return (
    <section className='section' id="experience">
      <div className="container mx-auto mt-0">
        <div className='flex flex-col items-center justify-center'>
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='lg:bg-bottom mt-64 mb-12 lg:mb-0 text-center'>
            <h2 className='h2 text-accent mb-6 mt-28'>My Experience</h2>
          </motion.div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-black"
          dateClassName="text-white"
          date="Nov 2023 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentStyle={{
            backgroundColor: "rgb(151 112 173)",
          }}
          contentArrowStyle={{
                borderRightColor: "white",
              }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title" >
            Beta Microsoft Student Ambassador - Microsoft
          </h3>
          <p>I learn, improve my skills, conduct workshops and contribute to the community</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-black"
          dateClassName="text-white"
          date="Aug 2023 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentStyle={{
            backgroundColor: "rgb(151 112 173)",
          }}
          contentArrowStyle={{
                borderRightColor: "white",
              }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Management Lead - Google Developer Student Clubs
          </h3>
          <p>With over a year experience being in the Management department, I have organized many events with collaborative efforts by the team. Also conducted Recruitment drive for the the Club. Organizing one of Tamil Nudu's biggest hackathon <a target='_blank' rel="noopener noreferrer" href='https://www.devshouse.tech/' style={{ color: 'blue'}}>"DevsHouse"</a></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-black"
          dateClassName="text-white"
          date=" Mar 2023 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentStyle={{
            backgroundColor: "rgb(151 112 173)",
          }}
          contentArrowStyle={{
                borderRightColor: "white",
              }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Microsoft Innovations Club
          </h3>
          <p>Hosted and organized large-scale tech events as a Management Member, and now currently devoloping end to end products.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-black"
          dateClassName="text-white"
          date="Jan 2014 - Dec 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          contentStyle={{
            backgroundColor: "rgb(151 112 173)",
          }}
          contentArrowStyle={{
                borderRightColor: "white",
              }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Founder President - Creative Gavel Club, Toastmasters Intl'
          </h3>
          <p>
            Became the Competent Communicator, won many Intl' and Humurous Speech contest in Area Level, Conducted contests, welcomed new members into the Toastmaster fraternity.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>
    </section>
  );
}

export default Experience;