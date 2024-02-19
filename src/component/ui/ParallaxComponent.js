import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';
import Image from '../../img/7.jpg'; // Importez votre image ici






const ParallaxHero = styled.div`
  position: relative;
	  height: 40vh;
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
    height: 20vh;
  }
`;


const ParallaxComponent = () => {
  return (
	<ParallaxProvider>
	  <ParallaxHero>
		<ParallaxBanner layers={[{ image: Image, amount: 0.5, speed: -10 }]} style={{ height: '100%' }}>
		</ParallaxBanner>
	  </ParallaxHero>
	</ParallaxProvider>
  );
}

export default ParallaxComponent;
