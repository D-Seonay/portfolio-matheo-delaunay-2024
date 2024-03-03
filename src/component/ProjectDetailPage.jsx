// ProjectPage.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import projectsData from '../data/projectsData'; // Importez vos données de projet
import { Divider } from '../styles';
import { useTheme } from "./ThemeContext";

// Styles avec styled-components
const ProjectContainer = styled.div`
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProjectImageLink = styled(Link)`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.5);
`;

const ProjectDescription = styled.div
	`
      display: flex;
      flex-direction: column;
      align-items: start;
      position: absolute;
      top: 10vw;
      right: 10vw;
      padding: 2rem;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      width: 30vw;
      z-index: 1;
      backdrop-filter: blur(10px);

      @media (max-width: 768px) {
        width: 100vw;
        align-items: center;
        justify-content: center;
        text-align: start;
        right: 0;
        top: 0;
        padding: 1rem;
        height: 100vh;
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
	`;

const ProjectTitle = styled.h2`
  color: #fff;
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ProjectDescriptionTitleH4 = styled.div`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width: 80vw;
  }
`;

const ProjectDescriptionText = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem;

  }
`;

const ProjectDescriptionLink = styled.a`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  z-index: 10;

  &:hover {
    color: #6c757d;
    transition: 0.3s;
    text-decoration: inherit;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 80vw;
  }
`;

const ProjetDate = styled.div`
  color: #6c757d;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 80vw;
  }
`;

const ProjectRole = styled.div`
  color: #6c757d;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 80vw;
  }
`;

const ProjectTech = styled.div`
  color: #6c757d;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 80vw;
  }
`;

const NextProjectLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;

const NextProjectPreview = styled(Link)`
  width: 100vw; // Ajustez la taille selon vos besoins
  height: 100vh; // Ajustez la taille selon vos besoins
  position: relative;
  bottom: 0;
  filter: brightness(0.5);
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

const NextProjectTitle = styled.h2`
  color: #fff;
  font-size: 5rem;
  position: absolute;
`;

const NextProjectDescription = styled.p`
  color: #fff;
  font-size: 1rem;
`;

const ProjectPage = () => {
	const { id } = useParams(); // Récupérer l'ID de l'URL
	const filteredProjects = projectsData.filter(project => project.id === id); // Filtrer les projets par ID
	let nextProjectIndex = projectsData.findIndex(project => project.id === id) + 1; // Index du prochain projet

	// Rediriger vers le premier projet si l'index du prochain projet est en dehors des limites
	if (nextProjectIndex >= projectsData.length) {
		nextProjectIndex = 0;
	}

	const { theme } = useTheme();

	return (
		<div>
			<ProjectContainer>
				{filteredProjects.map(project => (
					<ProjectImageLink key={project.id} to={`/project/${project.id}`}>
						<ProjectItem>
							<ProjectImage src={project.image} alt={project.title} />
							<ProjectDescription>
								<ProjectTitle theme={theme}>{project.title}</ProjectTitle>
								<ProjectDescriptionTitleH4 theme={theme}>{project.description}</ProjectDescriptionTitleH4>
								<ProjectDescriptionLink theme={theme} href={project ? project.link : ''} target="_blank" rel="noreferrer"> Voir le projet</ProjectDescriptionLink>

								<ProjetDate>
									<ProjectDescriptionTitleH4 theme={theme}>Date :</ProjectDescriptionTitleH4>
									<ProjectDescriptionText theme={theme}>{project.date}</ProjectDescriptionText>
								</ProjetDate>
								<ProjectRole>
									<ProjectDescriptionTitleH4 theme={theme}>Role :</ProjectDescriptionTitleH4>
									<ProjectDescriptionText theme={theme}>{project.role}</ProjectDescriptionText>
								</ProjectRole>
								<ProjectTech>
									<ProjectDescriptionTitleH4 theme={theme}>Technologies :</ProjectDescriptionTitleH4>
									<ProjectDescriptionText theme={theme}>{project.tech}</ProjectDescriptionText>
								</ProjectTech>
							</ProjectDescription>
						</ProjectItem>
					</ProjectImageLink>
				))}
			</ProjectContainer>
			<Divider />
			<NextProjectPreview to={`/project/${projectsData[nextProjectIndex].id}`}>
				<NextProjectImage src={projectsData[nextProjectIndex].image} alt={projectsData[nextProjectIndex].title} />
				<NextProjectTitle>{projectsData[nextProjectIndex].title}</NextProjectTitle>
			</NextProjectPreview>
		</div>
	);
};

export default ProjectPage;
