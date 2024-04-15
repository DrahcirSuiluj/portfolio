import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './sub_components/SectionHeader';

const AboutMe: React.FC = () => {
  const aboutMeDetails = [
    {
      title: "Where I lived?",
      content: "lorem impsum"
    },
    {
      title: "Where I studied?",
      content: "lorem impsum"
    },
    {
      title: "More about me ?",
      content: "lorem impsum"
    },
  ]
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const Tabs = () => {
    return (
      <div className="tabs">
      {aboutMeDetails.map((detail, index) => (
        <button
          key={index}
          className={index === activeTabIndex ? 'active' : ''}
          onClick={() => handleTabClick(index)}
        >
          {detail.title}
        </button>
      ))}
    </div>
    )
  }

  return (
    <div className='section-container about-me-container'>
      <SectionHeader content='About Me'/>
        <Tabs />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="tab-card"
        >
          <h3 className="tab-title">{aboutMeDetails[activeTabIndex].title}</h3>
          <p className="tab-content">{aboutMeDetails[activeTabIndex].content}</p>

        </motion.div>
    </div>

  );
};

export default AboutMe;