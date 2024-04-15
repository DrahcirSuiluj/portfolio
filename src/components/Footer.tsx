import React from 'react';
import styled from 'styled-components';
import { currentYear, fullName } from '../helper/PortfolioData';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 15px;
  text-align: center;
`;

const Footer: React.FC = () => <FooterContainer>&copy; {`${currentYear} ${fullName}`}</FooterContainer>;

export default Footer;