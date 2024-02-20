import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IconBase } from 'react-icons';

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
  color: #007bff;
`;

const SkillName = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #333;
`;

const SkillItem = ({ icon, name, position }) => {
	const Icon = icon;
	if (!position) {
		return null; // Ne rend rien si la position n'est pas définie
	}
	return (
		<SkillAtom style={{ left: `${position.x}`, top: `${position.y}` }}>
			<SkillIcon as={Icon} />
			<SkillName>{name}</SkillName>
		</SkillAtom>
	);
};

export default SkillItem;
