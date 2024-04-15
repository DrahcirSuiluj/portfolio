import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #3f3d56;
  color: #fff;
  height: 100vh;
  min-height: 812px;
  display: flex;
  padding: 5%;
  padding-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.nav`
  padding: 15px;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: row;
    justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: block;
  align-self: start;
  order: -1;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SkillsContainer = styled.div`
  background-color: #3f3d56;
  color: #fff;
  height: 100vh;
  min-height: 1000px;
  overflow: hidden;
  display: flex;
  padding: 5%;
  padding-left:10%;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const SkillDivContainer = styled.div`
  min-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SkillCarousel = styled.div`
  min-width: 100%,
  max-width: 100%,
  position: absolute,
  display: flex,
  align-items: center,
`;

export const SkillCard = styled.div`
  margin: 10px; 
`;
