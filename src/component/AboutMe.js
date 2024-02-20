import React, {useEffect, useState} from 'react';
import {useTheme} from "./ThemeContext";
import WorkPreview1 from "../img/1.jpg";
import WorkPreview2 from "../img/2-min.png";
import WorkPreview3 from "../img/5-min.png";
import HeroImg from "../img/Hero.jpg";
import {ParallaxProvider} from "react-scroll-parallax";
import ContactMe from "./ui/ContactMe";
import styled from "styled-components";
import ParallaxComponent from "./ui/ParallaxComponent";
import MyTimeline from "./ui/Timeline";
import {Button} from "../styles";
import DownloadButton from "./ui/DownloadButton";


const AboutMeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 10vw;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  text-align: center;
  line-height: 0.7; 
  
  @media (max-width: 768px) {
    font-size: 6vw; 
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
  width: 10vw; /* Taille de l'aperçu du travail */
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
  padding: 0 5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    
  }
`;

const SectionTextButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
	margin-top: 2rem;
    
  }

`;
const Text = styled.span`
  font-size: 1.5rem;
  color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
  margin-right: 2rem;
  text-align: justify;
  max-width: 50vw;
  
  @media (max-width: 1192px) {
    font-size: 1.5rem;
    max-width: 80vw;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0;
    text-align: center;
  
  }
`;

const HeroImage = styled.img`
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
			setCurrentWorkPreview((prevImage) => {
				if (prevImage === WorkPreview1) {
					return WorkPreview2;
				} else if (prevImage === WorkPreview2) {
					return WorkPreview3;
				} else {
					// Retournez à la première image si nous sommes à la troisième
					return WorkPreview1;
				}
			});
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
			<Divider theme={theme} />
			<TextWithImage>
				<SectionTextButton>

					<Text theme={theme}>
						I ' Mathéo DELAUNAY, a computer engineering student at EPSI Nantes. Passionate about programming and computing in general, I ' ve acquired skills in HTML, CSS, PHP, MySQL and Adobe suites. I also enjoy mountain sports and video games. Check out my portfolio to find out more about my skills and achievements.
					</Text>
					<DownloadButton theme={theme} />
				</SectionTextButton>


				<HeroImage src={HeroImg} alt="Hero Image" />

			</TextWithImage>
			<MyTimeline />
			<ParallaxComponent />
			<ContactMe />
		</ParallaxProvider>
	);
};

export default AboutMe;