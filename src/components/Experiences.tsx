import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../helper/PortfolioData';
import SectionHeader from './sub_components/SectionHeader';

const Experiences: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);

  const handleAccordionToggle = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="section-container">
      <SectionHeader content='Experiences'/>
      {experiences.map((experience, index) => (
        <div className="accordion-container" key={index}>
          <button 
            style={{borderBottom:  activeTabIndex != index && index === experiences.length -1 ? "2px solid gray" : "none"}}
            className="accordion-header"
            onClick={() => handleAccordionToggle(index)}
          >
            {experience.position}
          </button>
          {activeTabIndex === index && (
            <motion.div
            style={{borderBottom:  activeTabIndex === index && activeTabIndex === experiences.length -1 ? "2px solid gray" : "none"}}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto'}}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="accordion-content"
            >
              <h3 className="position">{experience.position}</h3>
              <p className="company">{experience.company}</p>
              <p className="details">
                {experience.location && `${experience.location} | `}
                {experience.dateStarted} - {experience.dateEnd ? experience.dateEnd : 'Present'}
              </p>
              <p className="main-paragraph">{experience.description.mainParagraph}</p>
              <ul className="bullets">
                {experience.description.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experiences;
