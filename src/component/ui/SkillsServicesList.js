import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SkillItem from './SkillItem';
import { MdBrush} from 'react-icons/md';
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaNode,FaPhp, FaSymfony, FaFigma, FaGitAlt, FaApple, FaLinux, FaDocker } from "react-icons/fa";
import { IoLogoJavascript, IoTerminal } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiAdobe } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";








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
`;

const SkillTitle = styled.h2`
  font-size: 24px;
`;

const SkillsService = () => {
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
			const radius = 150; // Augmentez le rayon pour éloigner les éléments du titre

			const positions = [];
			const angleStep = 90; // Angle entre chaque élément pour diviser en quatre sections
			for (let i = 0; i < 5; i++) {
				const angle = i * angleStep;
				const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
				const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
				positions.push({ x, y });
			}

			console.log(positions); // Afficher les positions générées dans la console

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
		<SkillsContainer>
			<SkillTitle ref={titleRef}>
				{Object.keys(skillsData)[categoryIndex]}
			</SkillTitle>

			{positions.map((position, index) => (
				<DelayedSkillItem
					key={index}
					name={currentCategory[index].name}
					icon={currentCategory[index].icon}
					position={position}
					delay={index * 1000} // Adjust the delay duration (in milliseconds)
				/>
			))}
		</SkillsContainer>
	);
};

// Define a new component with delay
const DelayedSkillItem = ({ name, icon, position, delay }) => {
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
		<SkillItem name={name} icon={icon} position={position} />
	) : null;
};

export default SkillsService;
