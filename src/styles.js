import styled from 'styled-components';
//Importing the index.css file
import './index.css';

export const GlassBackgroundStyle = styled.div`
  position: relative;
  background: ${props =>
  		props.theme === 'light' ? 'rgba(205, 205, 205, 0.2)' : 'rgba(0, 0, 0, 0.5)'};
  
  padding: 0;
  width: 100%;
  height: 100vh;
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
  background-color: ${props =>
          props.theme === 'light' ? 'rgba(245, 245, 245, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  z-index: 2;
`;
export const Link = styled.a`
  	color: ${props => props.theme === 'light' ? '#191919' : '#DADADA'};
	  margin-right: 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
	color: rgba(145, 148, 185, 0.90);
  }
`;


export const Icons = styled.span`
  display: flex;
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
	  padding: 0.5rem;
  		background-color: ${props => props.theme === 'light' ? '#f0f0f0' : '#191919'};
	  font-size: 1.5rem;
	  border-radius: 50%;
	  border: none;
	  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  	  box-shadow: var(--box-shadow-lg);

  
`;

export const ProgressBar = styled.div`
  position: fixed;
  left: 5%;
  bottom: 5px;
	width: 90%;
  height: 10px;
  background-color: ${props => props.theme === 'light' ? '#DADADA' : '#191919'};
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

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

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh; /* Hauteur fixe pour toutes les cartes */
  overflow: hidden;
  border-radius: 10px;
  perspective: 1000px; /* Profondeur de la perspective */

  /* Ajoutez de l'espace entre les cartes */
  margin-right: 1rem;
`;


export const ProjectImage = styled.img`
  width: 100%;
  height: 100%; /* Pour remplir complètement le conteneur */
  object-fit: cover; /* Pour remplir le conteneur sans déformer l'image */
  border-radius: 10px;
  transition: 0.3s;
  overflow: hidden;
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
