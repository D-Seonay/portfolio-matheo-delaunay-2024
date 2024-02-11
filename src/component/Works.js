import React from 'react';
import ProjectSlider from './WorksSlider';

const projects = [
	{ id: 1, title: 'Projet 1', img: '/img/1.jpg', link: '#' },
	{ id: 2, title: 'Projet 2', img: '/img/2.jpg', link: '#' },
	{ id: 3, title: 'Projet 3', img: '/img/3.jpg', link: '#' },
	{ id: 4, title: 'Projet 4', img: '/img/4.jpg', link: '#' },
	{ id: 5, title: 'Projet 5', img: '/img/5.jpg', link: '#' },
	{ id: 6, title: 'Projet 6', img: '/img/6.jpg', link: '#' },

];

const Works = () => {
	return (
			<ProjectSlider projects={projects} />
	);
};

export default Works;
