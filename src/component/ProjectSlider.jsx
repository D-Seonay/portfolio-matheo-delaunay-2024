import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';

const projects = [
	{
		title: 'Project 1',
		image: '../img/1.jpg',
	},
	{
		title: 'Project 2',
		image: '../img/2.jpg',
	},
	// ...
];

const SliderContainer = styled(animated.div)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80vw;
	max-width: 600px;
	overflow: hidden;
`;

const Slide = styled(animated.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	will-change: transform;
`;

const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ProjectTitle = styled.h3`
	position: absolute;
	bottom: 20px;
	left: 20px;
	color: white;
`;

const Slider = () => {
	const [props, set] = useSpring(() => ({ x: 0, config: config.slow }));
	const bind = useGesture(
		({ down, delta, direction: [xDir], velocity }) => {
			const maxOffset = (projects.length - 1) * window.innerWidth;
			if (down && velocity > 0.2) {
				const x = Math.min(Math.max(delta[0], -maxOffset), maxOffset);
				set({ x, config: { ...config.stiff, velocity } });
			} else {
				set({ x: 0, config: config.default });
			}
		},
		{ drag: { axis: 'x' }, rubberband: true }
	);

	return (
		<SliderContainer {...bind()}>
			{projects.map((project, index) => (
				<Slide
					key={index}
					style={{
						transform: props.x.interpolate(x => `translate3d(${x}px, 0, 0)`),
					}}
				>
					<ProjectImage src={project.image} alt={project.title} />
					<ProjectTitle>{project.title}</ProjectTitle>
				</Slide>
			))}
		</SliderContainer>
	);
};

export default Slider;
