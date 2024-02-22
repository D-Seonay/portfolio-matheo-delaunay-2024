import React from 'react';
import { useTheme } from '../ThemeContext';
import { GlassBackgroundStyle, Aura, Content, Circle } from '../../styles';

const GlassBackground = ({ children }) => {
	const { theme } = useTheme();

	return (
		<GlassBackgroundStyle theme={theme}>
			<Content>
			{children}
			</Content>
			<Circle style={{ top: '10%', left: '80%' }}>
				<Aura />
			</Circle>
			<Circle style={{ top: '20%', left: '10%' }}>
				<Aura />
			</Circle>
			<Circle style={{ top: '50%', left: '50%' }}>
				<Aura />
			</Circle>


			<Circle style={{ top: '55%', left: '20%' }}>
				<Aura />
			</Circle>

			<Circle style={{ top: '80%', left: '80%' }}>
				<Aura />
			</Circle>
			<Circle style={{ top: '90%', left: '20%' }}>
				<Aura />
			</Circle>

			<Circle style={{ top: '90%', left: '80%' }}>
				<Aura />
			</Circle>

			<Circle style={{ top: '10%', left: '20%' }}>
				<Aura />
			</Circle>


		</GlassBackgroundStyle>
	);
};

export default GlassBackground;


