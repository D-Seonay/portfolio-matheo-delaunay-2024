import React from 'react';
import { Overlay, CardContainerAnimated, ProjectTitle, ProjectImage, OpenProjectLink } from '../../styles';
import WavyBorder from "./WavyBorder";

const WorksCards = ({ title, img, link }) => {
	return (
		<>
			<WavyBorder />
			<CardContainerAnimated>
				<ProjectImage src={img} alt={title} />
				<Overlay>
					<ProjectTitle>{title}</ProjectTitle>
					<OpenProjectLink href={link} target="_blank" rel="noopener noreferrer">
						Open project
					</OpenProjectLink>
				</Overlay>
			</CardContainerAnimated>
		</>
	);
};


export default WorksCards;
