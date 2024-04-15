import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavLinksProps {
  links: { title: string; path: string }[];
  activeIndex: number;
  onNavLinkClick: (index: number) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, activeIndex, onNavLinkClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (!hasBeenHovered) {
      setHasBeenHovered(true);
    }
  };

  const linkIsClicked = (index: number) => {
    onNavLinkClick(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const getOpacity = (index: number) => {
    const targetIndex = hoveredIndex === -1 ? activeIndex : hoveredIndex;
    const distance = Math.abs(index - targetIndex);
    return 1 / (1 + distance);
  };

  const getZIndex = (index: number) => {
    const targetIndex = hoveredIndex === -1 ? activeIndex : hoveredIndex;
    return index === targetIndex ? links.length : Math.abs(targetIndex - index);
  };

  return (
    <div className='navlinks-container'>
      {links.map((link, index) => {
        const isLinkActive = index === (hoveredIndex === -1 ? activeIndex : hoveredIndex);
        const linkAnimation = {
          initial: { x: 400, opacity: 0 },
          animate: {
            x: index * -15,
            opacity: getOpacity(index),
            zIndex: getZIndex(index),
            borderBottom: isLinkActive ? "4px solid #3f3d56" : "4px solid #3f3d5600",
            scale: isLinkActive ? 1.2 : 1,
          },
          transition: hasBeenHovered ? { duration: 0.3, delay: 0 } : { duration: 0.3, delay: index * 0.2 }
        };

        return (
          <motion.div
            key={index}
            className='navlink-container'
            {...linkAnimation}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => linkIsClicked(index)}
          >
            <a className="navlinks-text" href={link.path}>{link.title}</a>
          </motion.div>
        )
      })}
    </div>
  );
};

export default NavLinks;