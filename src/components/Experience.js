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
    <section className='section md:-mt-[150px]' id="experience">
      <div className="container mx-auto md:mt-[850px]">
        <div className='flex flex-col items-center justify-center'>
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='lg:bg-bottom text-center'>
            <h2 className='h2 text-accent mb-6 mt-28'>My Experience</h2>
          </motion.div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-black"
          dateClassName="text-white"
          date="Dec 2024 - Present"
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
            Software Developer Intern - ProfitAngles
          </h3>
          <p>• Designed an intuitive UI with dynamic data visualizations for financial insights, enhancing user experience and decision
making. • Integrated MySQL for querying and managing historical stock data, improving data retrieval efficiency by 10%.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-black"
          dateClassName="text-white"
          date="Sept 2024 - Present"
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
            Secretary - Google Developer Groups VITC
          </h3>
          <p>Oversee departmental functions and act as an advisory. Served as Management Lead for over a year and organized
          multiple events and workshops.Organized one of Tamil Nudu's largest hackathon <a target='_blank' rel="noopener noreferrer" href='https://www.devshouse.in/' style={{ color: 'blue'}}>"DevsHouse"</a></p>
        </VerticalTimelineElement>
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
            Full-Stack Developer - Microsoft Innovations Club
          </h3>
          <p>• Crafted responsive design strategy, enhancing the UX across devices and elevated user satisfaction ratings by 40%.• Hosted and organized large-scale tech events as a Management Member, and now currently devoloping end to end products.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-black"
          dateClassName="text-white"
          date=" June 2024 - Present"
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
            Technical Member - CloudOps Club
          </h3>
          <p>Redesigned the club’s website, increasing user engagement by 25%.</p>
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
            Became the Competent Communicator, won several Intl' and Humurous Speech contest in Area Level, Conducted contests, welcomed new members into the Toastmaster fraternity.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </div>
    </section>
  );
}

export default Experience;