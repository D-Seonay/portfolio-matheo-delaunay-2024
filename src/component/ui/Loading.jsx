import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation pour les barres, de bas en haut
const barAnimation = keyframes`
  0% {
    width: 10px;
  }

  100% {
    width: 100%;
  }
`;

// Conteneur pour centrer les barres
const BarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 5fr); // 5 colonnes égales
  height: 100vh; // Hauteur totale de la page
  overflow: hidden; // Évite le débordement
`;

// Création de la barre animée
const AnimatedBar = styled.div`
  width: 10px; // Largeur de la barre
  background-color: rgba(0, 0, 255, 0.2);
  animation: ${barAnimation} 2s infinite; // Animation sur 2 secondes
  margin: 0 2px; // Marge entre les barres
`;

// Barres avec différents délais pour créer l'effet d'animation
const Bar1 = styled(AnimatedBar)`
  animation-delay: 0s;
  height: 100%;
`;

const Bar2 = styled(AnimatedBar)`
  animation-delay: 0.25s;
  height: 100%;
`;

const Bar3 = styled(AnimatedBar)`
  animation-delay: 0.5s;
  height: 100%;
`;

const Bar4 = styled(AnimatedBar)`
  animation-delay: 0.75s;
  height: 100%;
`;

const Bar5 = styled(AnimatedBar)`
  animation-delay: 1s;
  height: 100%;
`;

const Loading = () => {
  return (
    <BarContainer>
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
    </BarContainer>
  );
};

export default Loading;
