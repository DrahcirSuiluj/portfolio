import React from 'react';
import { motion } from 'framer-motion';

interface FlipBoxProps {
  content: { logo:any, name:string, yearStarted:number};
  flipOnHover?: boolean;
}

const FlipBox: React.FC<FlipBoxProps> = ({ content, flipOnHover = true }) => {
  return (
    <div className="flip-box">
      <motion.div
        className="flip-box-inner"
        whileHover={flipOnHover ? { rotateY: 180 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="flip-box-front">
          <img src={content.logo} alt="Front" />
        </div>
        <div className="flip-box-back">
          <div className='name'>{content.name}</div>
          <div>
            <small>
            Year Started: {content.yearStarted}
            </small>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipBox;
