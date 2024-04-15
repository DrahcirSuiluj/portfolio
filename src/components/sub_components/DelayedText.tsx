import React from 'react';
import { motion } from 'framer-motion';

interface DelayedTextProps {
  content: string;
  fontSize?: string;
}

const DelayedText: React.FC<DelayedTextProps> = ({ content, fontSize}) => {
  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      {Array.from(content).map((letter, index) => (
        <motion.span className='text-style' style={{ fontSize: fontSize ? fontSize : 'auto'}} key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default DelayedText;
