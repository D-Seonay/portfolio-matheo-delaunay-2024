import React from 'react';
import { Overlay ,CardContainer, ProjectTitle, ProjectImage, OpenProjectLink } from '../../styles';

const WorksCards = ({ title, img, link }) => {
	return (
		<CardContainer>
			<ProjectImage src={img} alt={title} />
			<Overlay>
				<ProjectTitle>{title}</ProjectTitle>
				<OpenProjectLink href={link} target="_blank" rel="noopener noreferrer">
					Open project
				</OpenProjectLink>
			</Overlay>
		</CardContainer>
	);
};

export default WorksCards;
