import React, { useState } from 'react';
import { SkillsContainer, SkillDivContainer } from './styles/StyledComponents';
import { skills } from '../helper/PortfolioData';
import SectionHeader from './sub_components/SectionHeader';
import { motion } from 'framer-motion';
import SkillCarouselCircles from './sub_components/SkillCarouselCircles';
import { AnimatePresence } from 'framer-motion';

const Skills: React.FC = () => {
  const [rotate, setRotate] = useState<number>(-45);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const triggerRotate = () => {
    const newActiveIndex = activeIndex == 3 ? 0 : activeIndex + 1;
    setActiveIndex(-1);
    setTimeout(()=>{
      setActiveIndex(newActiveIndex);
    }, 500)
    setRotate(activeIndex == 3 ? -45 : rotate + 90);
  }



  return (
    <SkillsContainer className='skills-main-container'>
      <SectionHeader content='These are my Skills' />
      <div className='skills-container'>
        <SkillDivContainer>
          <AnimatePresence>
            { activeIndex != -1 && (
              <>
              <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            src={skills[activeIndex].image} alt="Skill Icon" style={{ width: "70%", marginRight: '10px' }} />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            style={{ letterSpacing: "2px", fontSize: "18px" }} >{skills[activeIndex].details}</motion.p>
              </>
            )}
            
          </AnimatePresence>
        </SkillDivContainer>
        <SkillDivContainer>
          <SkillCarouselCircles activeIndex={activeIndex} triggerRotate={triggerRotate} rotate={rotate} />
        </SkillDivContainer>
      </div>
    </SkillsContainer>
  );
};

export default Skills;