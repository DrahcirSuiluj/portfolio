import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as PortfolioData from '../helper/PortfolioData';
import FlipBox from './sub_components/FlipBox';
import SectionHeader from './sub_components/SectionHeader';

const TechStacks: React.FC = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [initialScrollY, setinitialScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(() => {
      if (initialScrollY == 0) {
        setinitialScrollY(window.scrollY);
      }
    },
    );

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    controls.start({ left: (scrollY - initialScrollY) - initialScrollY });
  }, [scrollY, controls]);

  return (
    <div ref={ref} className='section-container' style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        className='background-text'
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        animate={controls}
        custom={scrollY}
      >
        <h1 className='tectstacks-bg-text'>TECH-STACKS - TECH-STACKS - TECH-STACKS</h1>
      </motion.div>
      <SectionHeader content='These are my Tech Stacks' />
      <div className='tech-stack-container'>
        {PortfolioData.techStack.map((tech, index) => (
          <FlipBox
            key={index}
            content={tech}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStacks;