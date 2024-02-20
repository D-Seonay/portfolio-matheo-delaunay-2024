import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {MdOutlineDownloadDone} from "react-icons/md";
import {useTheme} from "../ThemeContext";
const CV = require('../../pdf/cv-matheo-delaunay.pdf');


// Animation de la bordure de chargement
const loadAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

// Bouton de téléchargement
const DownloadButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(0, 0, 255, 0.4);
  color: #fff;
  text-decoration: none; /* Supprime la soulignement par défaut sur les liens */
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  overflow: hidden; /* Masque le contenu qui dépasse */
  min-width: 200px; /* Largeur minimale du bouton */
  min-height: 50px; /* Hauteur minimale du bouton */
  transition: 0.3s; /* Animation de transition */
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin-top: 2rem;
  
  &:hover {
    background-color: rgba(0, 0, 255, 0.6);
  }
`;

// Barre de chargement
const LoadingBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  background-color: rgba(255, 255, 255, 0.2); /* Couleur de la barre */
  animation: ${loadAnimation} 3s linear forwards; /* Animation de chargement */
`;

// Icône de validation
const CheckIcon = styled.span`
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 30px;

`;

const DownloadAnimationButton = () => {

	const { theme } = useTheme();

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	// Gestion du clic sur le bouton
	const handleClick = () => {
		setIsLoading(true); // Démarre l'animation de chargement

		// Simulation du téléchargement en attendant 3 secondes
		setTimeout(() => {
			setIsLoading(false); // Arrête l'animation de chargement
			setIsSuccess(true); // Affiche l'icône de validation

			// Déclencher le téléchargement après un délai supplémentaire
			setTimeout(() => {
				const link = document.createElement('a');
				link.href = CV;
				link.setAttribute('download', 'cv-matheo-delaunay.pdf');
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);

				// Réinitialise le texte après 3 secondes
				setTimeout(() => {
					setIsSuccess(false);
				}, 3000);
			}, 10); // Délai supplémentaire de 2 secondes avant de télécharger
		}, 3000); // Délai initial de 3 secondes avant d'afficher l'icône de validation
	};

	return (
		<DownloadButton theme={theme} download onClick={handleClick}>
			{isLoading && <LoadingBar theme={theme} />} {/* Affiche la barre de chargement si isLoading est true */}
			{isSuccess ? <CheckIcon theme={theme}><MdOutlineDownloadDone /></CheckIcon> : 'Download CV'} {/* Affiche l'icône de validation si isSuccess est true */}

		</DownloadButton>
	);
};

export default DownloadAnimationButton;
