import React, {useEffect, useState} from 'react';
import {useTheme} from "./ThemeContext";
import { slidesData } from './slidesData';
import {Hero} from "../Images";
import {ParallaxProvider} from "react-scroll-parallax";
import ContactMe from "./ui/ContactMe";
import styled from "styled-components";
import ParallaxComponent from "./ui/ParallaxComponent";
import MyTimeline from "./ui/Timeline";
import DownloadButton from "./ui/DownloadButton";
import SkillsServicesList from "./ui/SkillsServicesList";


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
  width: 12vw; /* Taille de l'aperçu du travail */
  height: auto; /* Maintenir le ratio hauteur-largeur */
  display: inline-block; /* Aligner l'image horizontalement avec le texte */
  filter: grayscale(100%); 
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
  
  
  @media (max-width: 1192px) {
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
  
  }
`;

const HeroImage = styled.img`
	  height: 60vh;
	  object-fit: cover;
	  object-position: center;
	  border-radius: 10px;
	  margin-left: 2rem;
	  transition: 0.3s;
	  
	  @media (max-width: 1192px) {
	  		width: 40vw;
	  		margin-left: 0;
	  		margin-top: 2rem;
	  }
`;


const AboutMe = () => {

	const { theme } = useTheme();
		const [currentWorkPreview, setCurrentWorkPreview] = useState(slidesData[0]); // Commencez avec le premier projet

		useEffect(() => {
			const intervalId = setInterval(() => {
				// Changez le projet de preview toutes les 10 secondes
				setCurrentWorkPreview((prevProject) => {
					const currentIndex = slidesData.findIndex((slide) => slide === prevProject); // Trouvez l'index du projet actuel dans la liste
					const nextIndex = (currentIndex + 1) % slidesData.length; // Calculez l'index du projet suivant en prenant en compte le rebouclage
					return slidesData[nextIndex]; // Récupérez le projet suivant dans la liste
				});
			}, 10000); // Interval de 10 secondes

			// Nettoyez l'intervalle lorsqu'on quitte le composant
			return () => clearInterval(intervalId);
		}, []);


	return (
		<ParallaxProvider>
			<AboutMeContainer theme={theme}>
				<Title theme={theme}>
					STUDENT
					<WorkPreviewLink href={currentWorkPreview.link}  rel="noopener noreferrer" theme={theme}>
						<WorkPreviewImage src={currentWorkPreview.img} alt="Work Preview"  theme={theme}/>
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


				<HeroImage src={Hero} alt="Hero Image" />

			</TextWithImage>

			<SkillsServicesList />
			<MyTimeline />
			<ParallaxComponent />
			<ContactMe />
		</ParallaxProvider>
	);
};


export default AboutMe;