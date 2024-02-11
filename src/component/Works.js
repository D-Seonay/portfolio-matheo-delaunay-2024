import React from 'react';
import ProjectSlider from './WorksSlider';

const projects = [
	{ id: 1, title: 'Projet 1', img: 'https://clips-media-assets2.twitch.tv/BKPAMMmWJr9DBT29drbZyw/AT-cm%7CBKPAMMmWJr9DBT29drbZyw-preview-260x147.jpg', link: 'https://www.google.com' },
	{ id: 2, title: 'Projet 2', description: 'Description du projet 2' },
	{ id: 3, title: 'Projet 3', description: 'Description du projet 3' },
	{ id: 4, title: 'Projet 4', description: 'Description du projet 4' },
	{ id: 5, title: 'Projet 5', description: 'Description du projet 5' },
	{ id: 6, title: 'Projet 6', description: 'Description du projet 6' }
];

const Works = () => {
	return (
		<div>
			<h1>Carrousel de projets</h1>
			<ProjectSlider projects={projects} />
		</div>
	);
};

export default Works;
