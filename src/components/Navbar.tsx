import React, { useState, useEffect } from 'react';
import { NavbarContainer } from './styles/StyledComponents';
import NavLinks from './sub_components/NavLinks';
import MobileNavLinks from './sub_components/MobileNavLinks';
import { useLocation } from 'react-router-dom';
import DarkModeToggle from './sub_components/DarkModeToggle';
import { LuMenuSquare } from "react-icons/lu";
interface NavBarProps {
  activeSection: number;
  setSectionToScroll: (index: number) => void;
  setActiveSection: (index: number) => void;
}

const navLinksData = [
  { title: 'Home', path: '/#home' },
  { title: 'About Me', path: '/#about-me' },
  { title: 'Skills', path: '/#skills' },
  { title: 'Tech Stacks', path: '/#tech-stacks' },
  { title: 'Experiences', path: '/#experiences' },
  { title: 'Contact', path: '/#contact' },
];



const Navbar: React.FC<NavBarProps> = ({activeSection, setActiveSection, setSectionToScroll}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.hash; 
    const index = navLinksData.findIndex(link => link.path === path);
    setSectionToScroll(index === -1 ? 0 : index);
    setActiveSection(index === -1 ? 0 : index); 
  }, [location.pathname, location.hash]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleResize = () => {
    setShowMenu(false);
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavLinkClick = (index: number) => {
    setSectionToScroll(index);
    setActiveSection(index);
  };

  return (
    <NavbarContainer className='navbar'>
      <LuMenuSquare className='menu-icon' onClick={toggleMenu} />
      {!isMobile 
        ? <NavLinks links={navLinksData} activeIndex={activeSection} onNavLinkClick={handleNavLinkClick} /> 
        : <MobileNavLinks links={navLinksData} showMenu={showMenu} onNavLinkClick={handleNavLinkClick}  />}
        <DarkModeToggle/>
    </NavbarContainer>
  );
};

export default Navbar;