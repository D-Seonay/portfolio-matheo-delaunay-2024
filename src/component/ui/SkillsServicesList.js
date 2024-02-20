import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SkillItem from './SkillItem';
import { MdCode, MdComputer, MdBrush, MdBuild } from 'react-icons/md';
import { FaDatabase } from "react-icons/fa";

const skillsData = {
	frontend: [
		{ name: 'HTML', icon: MdCode },
		{ name: 'CSS', icon: MdCode },
		{ name: 'JavaScript', icon: MdCode },
		{ name: 'React', icon: MdCode },
		{ name: 'Vue.js', icon: MdCode }
	],
	backend: [
		{ name: 'Node.js', icon: MdCode },
		{ name: 'Express', icon: MdCode },
		{ name: 'MongoDB', icon: FaDatabase },
		{ name: 'MySQL', icon: FaDatabase },
		{ name: 'Firebase', icon: MdCode }
	],
	creative: [
		{ name: 'UI/UX Design', icon: MdBrush },
		{ name: 'Adobe Creative Suite', icon: MdBrush },
		{ name: 'Sketch', icon: MdBrush },
		{ name: 'Figma', icon: MdBrush }
	],
	devtools: [
		{ name: 'Git', icon: MdBuild },
		{ name: 'Webpack', icon: MdBuild },
		{ name: 'Babel', icon: MdBuild },
		{ name: 'VS Code', icon: MdComputer },
		{ name: 'Terminal', icon: MdComputer }
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
