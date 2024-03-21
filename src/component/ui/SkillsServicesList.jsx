import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SkillItem from './SkillItem';
import { MdBrush} from 'react-icons/md';
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNode,FaPhp, FaSymfony, FaFigma, FaGitAlt, FaApple, FaLinux, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoTerminal } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiAdobe } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import {useTheme} from "../ThemeContext";

const skillsData = {
	Frontend: [
		{ name: 'HTML', icon: FaHtml5 },
		{ name: 'CSS', icon: FaCss3Alt },
		{ name: 'JavaScript', icon: IoLogoJavascript },
		{ name: 'React', icon: FaReact },
		{ name: 'Vue.js', icon: FaVuejs }

	],
	Backend: [
		{ name: 'Node.js', icon: FaNode },
		{ name: 'Php', icon: FaPhp },
		{ name: 'Symfony', icon: FaSymfony },
		{ name: 'MySQL', icon: DiMysql },
	],
	Creative: [
		{ name: 'UI/UX Design', icon: MdBrush },
		{ name: 'Adobe Creative Suite', icon: SiAdobe },
		{ name: 'Figma', icon: FaFigma }
	],
	Devtools: [
		{ name: 'Git', icon: FaGitAlt },
		{ name: 'MacOS', icon: FaApple },
		{ name: 'Linux', icon: FaLinux },
		{ name: 'VS Code', icon: TbBrandVscode },
		{ name: 'Docker', icon: FaDocker },
		{ name: 'Terminal', icon: IoTerminal }
	]
};

const Skills = styled.section`
  padding: 5vh 5vw;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
`;

const Divider = styled.hr`
  width: 75%;
  margin: 1rem auto;
  border-color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
`;

const SkillsContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 2rem;
  color : ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
`;


const SkillsService = () => {

	const { theme } = useTheme();

	const [categoryIndex, setCategoryIndex] = useState(0);
	const [atomsPositions, setAtomsPositions] = useState([]);
	const titleRef = useRef(null); // Création de la référence pour le titre

	useEffect(() => {
		const interval = setInterval(() => {
			setCategoryIndex((prevIndex) => (prevIndex + 1) % Object.keys(skillsData).length);
		}, 5000); // Changement de catégorie toutes les 5 secondes

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const titleElement = titleRef.current; // Utilisation de la référence
		if (titleElement) {
			const { left, top, width, height } = titleElement.getBoundingClientRect();
			const centerX = left + width / 2;
			const centerY = top + height / 2;
			const radius = 150; // Rayon de la "planète"

			const positions = [];
			for (let i = 0; i < 15; i++) {
				const angle = Math.random() * Math.PI * 3; // Angle aléatoire
				const distance = Math.sqrt(Math.random()) * radius; // Distance aléatoire du centre
				const x = centerX + distance * Math.cos(angle);
				const y = centerY + distance * Math.sin(angle);
				positions.push({ x, y });
			}


			setAtomsPositions(positions);
		}
	}, [categoryIndex]);

	const currentCategory = skillsData[Object.keys(skillsData)[categoryIndex]];
	if (!currentCategory || !Array.isArray(currentCategory)) {
		// Gérer le cas où la catégorie n'existe pas ou n'est pas un tableau
		return null;
	}

	// Assurez-vous que atomsPositions a la même longueur que currentCategory
	const positions = atomsPositions.slice(0, currentCategory.length);

	return (
		<Skills>
			<TitleContainer>
				<Title theme={theme}>Skills</Title>
				<Divider theme={theme} />
			</TitleContainer>
			<SkillsContainer>
				<SkillTitle theme={theme} ref={titleRef}>
					{Object.keys(skillsData)[categoryIndex]}
				</SkillTitle>

				{positions.map((position, index) => (
					<DelayedSkillItem
						themed={theme}
						key={index}
						name={currentCategory[index].name}
						icon={currentCategory[index].icon}
						position={position}
						delay={index * 1000} // Adjust the delay duration (in milliseconds)
					/>
				))}
			</SkillsContainer>
		</Skills>
	);
};

// Define a new component with delay
const DelayedSkillItem = ({ name, icon, position, delay }) => {

	const { theme } = useTheme();

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsVisible(true);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [delay]);

	return isVisible ? (
		<SkillItem name={name} icon={icon} position={position} theme={theme} />
	) : null;
};

export default SkillsService;
