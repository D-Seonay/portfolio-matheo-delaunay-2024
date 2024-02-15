import React, { useState, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import Image from '../img/1.jpg'; // Importez votre image ici
import WorkPreview1 from '../img/1.jpg'; // Importez l'aperçu du travail ici
import WorkPreview2 from '../img/2.jpg';
import {useTheme} from "./ThemeContext";
import ContactMe from "./ui/ContactMe"; // Importez l'aperçu du travail ici (image différente)


const AboutMeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column; /* Pour aligner les éléments verticalement */
  align-items: center;
`;

const Title = styled.h1`
  font-size: 10rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  text-align: center;
  line-height: 0.7; 
  
  @media (max-width: 768px) {
    font-size: 5rem; 
    line-height: 1;
    
  }

`;

const TextWithImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 2rem;
  background-color: ${props => (props.theme === 'light' ? '#fff' : '#000')};
`;

const Text = styled.span`
  font-size: 2rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
`;

const WorkPreviewLink = styled.a`
  margin-left: 2rem; /* Marge entre le texte et le lien d'aperçu du travail */
  
  @media (max-width: 768px) {
    margin-left: 0; /* Marge entre le texte et le lien d'aperçu du travail sur mobile */
  }
`;

const WorkPreviewImage = styled.img`
  width: 10rem; /* Taille de l'aperçu du travail */
  height: auto; /* Maintenir le ratio hauteur-largeur */
  display: inline-block; /* Aligner l'image horizontalement avec le texte */
`;

const ParallaxImage = styled.img`
  width: 100%;
`;

const AboutMe = () => {

	const { theme } = useTheme();
	const [currentWorkPreview, setCurrentWorkPreview] = useState(WorkPreview1);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Changez l'image de preview toutes les 10 secondes
			setCurrentWorkPreview((prevImage) =>
				prevImage === WorkPreview1 ? WorkPreview2 : WorkPreview1
			);
		}, 2000);

		// Nettoyez l'intervalle lorsqu'on quitte le composant
		return () => clearInterval(intervalId);
	}, []); // Videz le tableau de dépendances pour que cela se produise uniquement une fois

	return (
		<ParallaxProvider>
			<AboutMeContainer theme={theme}>
				<Title theme={theme}>
					STUDENT
					<WorkPreviewLink href="/work" theme={theme}>
						<WorkPreviewImage src={currentWorkPreview} alt="Work Preview"  theme={theme}/>
					</WorkPreviewLink>
					<br />
					& WEB DEV
				</Title>
			</AboutMeContainer>
			<Parallax y={[-20, 20]}>
				<ParallaxImage src={Image} alt="Parallax Image" />
			</Parallax>
			<TextWithImage>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
					vehicula faucibus magna, nec efficitur ipsum viverra nec.
				</Text>
			</TextWithImage>
			<ContactMe />
		</ParallaxProvider>
	);
};

export default AboutMe;
