import styled from 'styled-components';
//Importing the index.css file
import './index.css';
import {animated} from "react-spring";

export const GlassBackgroundStyle = styled.div`
  position: relative;
  background: ${props =>
  		props.theme === 'light' ? 'rgba(205, 205, 205, 0.2)' : 'rgba(0, 0, 0, 0.5)'};
  padding: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  
`;


export const Circle = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 255, 0.2);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(50px);
`;

export const Aura = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 255, 0.2) 0%, rgba(0, 0, 255, 0) 80%);
  z-index: -1;
`;

export const Title = styled.h1`
  font-family: 'Gallery', sans-serif;
  mix-blend-mode: difference;
  color: ${props => props.theme === 'light' ? '#191919' : '#DADADA'};
  font-size: 2.5rem;
  margin-bottom: 1rem;	
  font-weight: 500;
  line-height: 1.2;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

`;

export const Button = styled.button`
	  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 5px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
	background-color: #e0e0e0;
  }
`;


export const NavbarStyle = styled.nav`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100vw;
  top: 0px;
  z-index: 2;
`;

export const Link = styled.a`
mix-blend-mode: difference; /* Applique le mode de mélange difference */
color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
margin-right: 1rem;
text-decoration: none;
transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

&:hover {
  mix-blend-mode: difference; /* Peut être répété ici pour plus de clarté */
  color: rgba(145, 148, 185, 0.90); /* Changement de couleur au survol */
}
`;



export const Icons = styled.span`
  display: flex;
  mix-blend-mode: difference;
  color: ${props => props.theme === 'light' ? '#191919' : '#DADADA'};
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    color: rgba(145, 148, 185, 0.90);
  }
`;

export const NavbarLink = styled.div`
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  text-align: center;
	  align-items: center;
	  position: relative;
  	  z-index: 2;
      transition: text-decoration 0.5s ease-in-out, color 0.5s ease-in-out;
  
  
  
  a.active {
    text-decoration: line-through;
    pointer-events: none; /* Désactive les clics pour les liens actifs */
  }
`;


export const Card = styled.div`
	  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: var(--box-shadow-lg);
  transition: 0.3s;
  &:hover {
	transform: scale(1.05);
  }
`;

export const ToggleButton = styled.button`
	  padding: 0.25rem;
  		background-color: ${props => props.theme === 'light' ? '#f0f0f0' : '#191919'};
	  font-size: 1rem;
	  border-radius: 50%;
	  border: none;
	  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  	  box-shadow: var(--box-shadow-lg);

  
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: ${props => props.theme === 'light' ? '#191919' : '#DADADA'};
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, width 0.5s ease-in-out;
`;


export const ProjectSliderStyle = styled.div`
  padding: 1rem;
  margin: 2rem;
`;


export const CardContainerAnimated = styled(animated.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 60vh; /* Hauteur fixe pour toutes les cartes */
  overflow: hidden;
  border-radius: 10px;
  margin-right: 1rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%; /* Pour remplir complètement le conteneur */
  object-fit: cover; /* Pour remplir le conteneur sans déformer l'image */
  border-radius: 10px;
  transition: 0.3s;
  overflow: hidden;
  filter: grayscale(100%);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5); /* Opacité du fond */
  color: #fff; /* Couleur du texte */
  padding: 20px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Gallery', sans-serif;
  margin-bottom: 10px;
`;

export const OpenProjectLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
`;





export const EmblaMain = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

export const Embla = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 0;
`;

export const EmblaContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease; /* Ajout d'une transition pour le déplacement des slides */
  will-change: transform;
  width: 100%;
  height: 100%;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  min-width: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10rem;
  align-items: center;
  transition: opacity 0.5s ease; /* Ajout d'une transition pour l'opacité des slides */
  
    @media (max-width: 768px) {
    padding: 2rem;
    
    }
`;


export const EmblaContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const EmblaSlideTitle = styled.h2`
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  
    @media (max-width: 768px) {
    font-size: 3rem;
    
    }
`;



export const EmblaSlideImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 60vw;
  border-radius: 0.5rem;
  height: 100%;
  object-fit: cover;
  max-width: 80vw;
  max-height: 60vh;
  margin: 0 auto;
    @media (max-width: 768px) {
    width: 100vw;
    }
`;

export const EmblaSlideLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
`;

export const ScrollText = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  font-size: 0.5rem;
  margin-bottom: 5rem;
  opacity: 1;
    transition: opacity 1s ease;
`;


export const ProgressBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 4px;
  border-radius: 2px;
  width: 0;
  background-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  transition: width 0.3s ease; // Ajout d'une transition pour une animation fluide
`;


export const Divider = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

`;