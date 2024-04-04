import React from 'react';
import { useTheme } from '../ThemeContext';
import styled from "styled-components";

const ToggleButton = styled.button`
	position: absolute;
	top: 50%;
	right: 2rem;
	transform: translateY(-50%);
	height: 0.8rem;
	width: 0.8rem;
	padding: 0.25rem;
	background-color: ${props => props.theme === 'light' ? '#191919' : '#DADADA'};
	font-size: 1rem;
	border-radius: 50%;
	border: none;
	transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
	box-shadow: var(--box-shadow-lg);
`;

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<ToggleButton onClick={toggleTheme} aria-label="Toggle Theme" theme={theme}>
		</ToggleButton>

	);
};

export default ThemeToggleButton;
