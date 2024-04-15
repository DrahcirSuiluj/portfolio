import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLinksProps {
  links: { title: string; path: string }[];
  showMenu: boolean;
  onNavLinkClick: (index: number) => void;
}

const MobileNavLinks: React.FC<NavLinksProps> = ({ links, showMenu, onNavLinkClick }) => {
  const mobileNavAnimation = {
    initial: { x: -300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
    transition: { duration: 0.5, delay: 0.2 },
  };

  const linkIsClicked = (index: number) => {
    onNavLinkClick(index);
  };

  return (
    <div className='mobile-navlinks-container'>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            {...mobileNavAnimation}
          >
            {links.map((link, index) => (
              <a className="navlinks-text" onClick={() => linkIsClicked(index)} key={index} href={link.path}>
                {link.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  )
}

export default MobileNavLinks;