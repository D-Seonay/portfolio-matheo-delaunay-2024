import React from 'react';
import styled from 'styled-components';
import ThemeToggleButton from "./ui/ToggleThemeButton";
import { useTheme } from "./ThemeContext";
import { useLocation } from 'react-router-dom';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: #fff;
  font-size: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin-top: 2rem;
  z-index: 100;
`;

const Link = styled.a`
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => (props.theme === 'light' ? '#DADADA' : '#191919')};
  }

  &.active {
    text-decoration: line-through;
    pointer-events: none; /* Désactive les clics pour les liens actifs */
  }
`;

function Footer() {
	const { theme } = useTheme();
	const location = useLocation();
	return (
		<FooterContainer>
			<Link href="/" theme={theme} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
			<ThemeToggleButton theme={theme} />
		</FooterContainer>
	);
}

export default Footer;
