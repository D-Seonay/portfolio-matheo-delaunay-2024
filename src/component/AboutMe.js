import React, {useEffect, useState} from 'react';
import {useTheme} from "./ThemeContext";
import WorkPreview1 from "../img/1.jpg";
import WorkPreview2 from "../img/2.jpg";
import WorkPreview3 from "../img/3.jpg";
import HeroImg from "../img/Hero.jpg";
import {ParallaxProvider} from "react-scroll-parallax";
import ContactMe from "./ui/ContactMe";
import styled from "styled-components";
import ParallaxComponent from "./ui/ParallaxComponent";


const AboutMeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const TitleH2 = styled.h2`
  font-size: 5rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  text-align: center;
  line-height: 0.7;
  
  @media (max-width: 768px) {
    font-size: 3rem;
	line-height: 1;
  }
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


const Divider = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};

`;

const TextWithImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const Text = styled.span`
  font-size: 2rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  margin-right: 2rem;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 0;
    text-align: center;
  
  }
`;

const HeroImage = styled.img`
	  width: 40vw;
	  height: 60vh;
	  object-fit: cover;
	  object-position: center;
	  border-radius: 10px;
	  margin-left: 2rem;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	  transition: 0.3s;
	  
	  @media (max-width: 768px) {
	  		width: 80vw;
	  		margin-left: 0;
	  		margin-top: 2rem;
	  }
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

			<ParallaxComponent />

			<TitleH2 theme={theme}>About Me</TitleH2>
			<Divider />
			<TextWithImage>

				<Text theme={theme}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
					vehicula faucibus magna, nec efficitur ipsum viverra nec.
				</Text>

				<HeroImage src={HeroImg} alt="Hero Image" />

			</TextWithImage>
			<ParallaxComponent />
			<ContactMe />
		</ParallaxProvider>
	);
};

export default AboutMe;