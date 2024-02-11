import React from 'react';
import { useTheme } from '../ThemeContext';
import { ToggleButton, Icons } from "../../styles";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<ToggleButton onClick={toggleTheme} aria-label="Toggle Theme">
			{theme === 'light' ? <Icons><FiMoon /></Icons> : <Icons><FiSun /></Icons>}
		</ToggleButton>

	);
};

export default ThemeToggleButton;
