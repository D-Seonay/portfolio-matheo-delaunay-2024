import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from "../ThemeContext";
const scaleAnimation = css`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  cursor: none;
  transition: transform 0.1s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Cursor = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${props => props.theme === 'light' ? '#000' : '#fff'};
  border-radius: 50%;
  transition: transform 0.1s ease;
  transform: ${props => props.clicked ? 'scale(2)' : 'scale(1)'};
  
  ${props => props.onLink && css`
	background-color: ${props.theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
	  `};
`;

const CursorRing = styled.div`
  position: absolute;
  display: flex;
  width: 32px;
  height: 32px;
  border: 2px solid ${props => props.theme === 'light' ? '#000' : '#fff'};
  border-radius: 50%;
  animation: ${props => props.clicked ? scaleAnimation : ''} 0.3s forwards;
  transform: ${props => props.clicked ? 'scale(0.7)' : 'scale(1)'};
  transition: transform 0.1s ease, background-color 0.1s ease; /* Ajout de la transition */
  z-index: -1;

  ${props => props.onLink && css`
    background-color: ${props.theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${props.theme === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'};
    scale: 1.2;
  `};
`;


const CursorTracker = () => {
	const { theme } = useTheme();

	const [state, setState] = React.useState({
		mouseX: window.innerWidth / 2,
		mouseY: window.innerHeight / 2,
		clicked: false,
		onLink: false, // Indique si le curseur est sur un lien
	});

	React.useEffect(() => {
		const handleMouseDown = () => setState(prevState => ({ ...prevState, clicked: true }));
		const handleMouseUp = () => setState(prevState => ({ ...prevState, clicked: false }));
		const handleMouseMove = (event) => {
			setState(prevState => ({
				...prevState,
				mouseX: event.clientX,
				mouseY: event.clientY,
			}));

			// Vérifiez si le curseur est sur un lien
			const isOnLink = event.target.closest('a') !== null;
			setState(prevState => ({ ...prevState, onLink: isOnLink }));
		};

		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const { mouseX, mouseY, clicked, onLink } = state;

	return (
		<CursorContainer clicked={clicked}>
			<Cursor theme={theme} style={{ transform: `translate(-50%, -50%) translate(${mouseX}px, ${mouseY}px)` }} clicked={clicked}/>
			<CursorRing clicked={clicked} theme={theme} style={{ left: mouseX - 16, top: mouseY - 16 }} onLink={onLink} />
		</CursorContainer>
	);
};

export default CursorTracker;
