import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';
import Image from '../../img/7.jpg';
import {useTheme} from "../ThemeContext"; // Importez votre image ici






const ParallaxHero = styled.div`
  position: relative;
	  height: 80vh;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color: #000;
	  color: #fff;
	  font-size: 3rem;
	  font-weight: bold;
	  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    height: 40vh;
  }
`;

const ParallaxComponent = () => {
	const { theme } = useTheme();
	return (
		<ParallaxProvider>
			<ParallaxHero>
				<ParallaxBanner layers={[{ image: Image, amount: 0.05, speed: 100 }]} style={{ height: '100%', filter: theme === 'light' ? "none"  : 'invert(0.6)' }}>
				</ParallaxBanner>
			</ParallaxHero>
		</ParallaxProvider>
	);
}

export default ParallaxComponent;
