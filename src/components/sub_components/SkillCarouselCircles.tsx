import React from 'react';
import { motion } from 'framer-motion';
import { SkillCarousel } from '../styles/StyledComponents';
import { skills } from '../../helper/PortfolioData';
import { FaArrowsRotate } from "react-icons/fa6";

interface SkillCarouselCircleProps {
  activeIndex: number;
  triggerRotate: any;
  rotate: number
}

const SkillCarouselCircles: React.FC<SkillCarouselCircleProps> = ({ activeIndex, triggerRotate, rotate }) => {
  return (
    <SkillCarousel>
      <div 
        onClick={activeIndex != -1 ? triggerRotate : {}}
        className='rotate-trigger' >
       <FaArrowsRotate />
      </div>
      <motion.div
        className='grid-2-2'
        animate={{ x: 190, y: -70, rotate: rotate }}
        transition={{ type: "spring" }}
      >
        {skills.map((skill, index) => {
          const isActive = (activeIndex == 0 && 0 == index) ||
            (activeIndex == 3 && index == 1) ||
            (activeIndex == 1 && index == 2) ||
            (activeIndex == 2 && index == 3);
          return (
            <motion.div
              key={index}
              className='circle-container'
              initial={{ rotate: rotate * -1 }}
              animate={{ scale: isActive ? 1 : .5, opacity: isActive ? 1 : .2, rotate: rotate * -1, transition: { duration: .8 } }}
            >
              <h1 style={{ fontSize: isActive ? '48px' : '25px' }}>{skill.name}</h1>
            </motion.div>

          )
        })}
      </motion.div>
    </SkillCarousel>
  );
};

export default SkillCarouselCircles;
