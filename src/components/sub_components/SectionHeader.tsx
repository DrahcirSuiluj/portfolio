import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  content: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const textVariants = (isFast: boolean) => {
    return {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          staggerChildren: isFast ? 0.02 : 0.05,
        },
      },
    };
  };

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <motion.div className='section-header' ref={ref} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
      <motion.h1 style={{ letterSpacing: "2px", marginBlockEnd: "0.27em" }} variants={textVariants(false)}>
        {Array.from(content).map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default SectionHeader;
