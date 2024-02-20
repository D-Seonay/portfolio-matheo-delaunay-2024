import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IconBase } from 'react-icons';
import {useTheme} from "../ThemeContext";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg) translateY(-200px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateY(-200px) rotate(-360deg);
  }
`;

const SkillAtom = styled.div`
  position: absolute;
  animation: ${rotateAnimation} 10s linear infinite;
`;

const SkillIcon = styled(IconBase)`
  font-size: 2rem;
  color: rgba(0, 0, 255, 0.4);
`;

const SkillName = styled.span`
  display: block;
  font-size: 0.8rem;
  color: ${props => (props.theme === 'light' ? '#191919' : '#DADADA')};
`;

const SkillItem = ({ icon, name, position }) => {
	const { theme } = useTheme();
	const Icon = icon;
	if (!position) {
		return null; // Ne rend rien si la position n'est pas définie
	}
	return (
		<SkillAtom theme={theme} style={{ left: `${position.x}`, top: `${position.y}` }}>
			<SkillIcon as={Icon} theme={theme} />
			<SkillName theme={theme}>{name}</SkillName>
		</SkillAtom>
	);
};

export default SkillItem;
