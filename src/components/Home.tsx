import React from 'react';
import { motion } from 'framer-motion';
import * as PortfolioData from '../helper/PortfolioData';
import { HomeContainer } from './styles/StyledComponents';
import DelayedText from './sub_components/DelayedText';

const Home: React.FC = () => {

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
    }
  };


  return (
    <HomeContainer className='home-container'>
      <motion.div style={{ maxWidth: "1500px" }} variants={textVariants(false)} initial="hidden" animate="visible">
        <h1  className='text-style' style={{ fontSize: '80px', textAlign: 'center'}}>
          <DelayedText content='Welcome to My Portfolio' />
        </h1>
        <p className='text-style' style={{ fontSize: '25px', textAlign: 'right'}}>
          <DelayedText content='My name is ' />
          <DelayedText content={PortfolioData.fullName} fontSize='45px' />
        </p>
        <p  className='text-style' style={{ fontSize: '25px', textAlign: 'left'}}>
          <DelayedText content='But my friends call me ' />
          <DelayedText content={PortfolioData.userInfo.nickName} fontSize='45px' />
        </p>
        <motion.p className='text-style' style={{ fontSize: '25px', textAlign: 'center'}} variants={textVariants(true)}>
          <DelayedText content={PortfolioData.intro} />
        </motion.p>
      </motion.div>
    </HomeContainer>
  );
};

export default Home;