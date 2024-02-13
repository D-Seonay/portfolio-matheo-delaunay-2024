import React from 'react';
import { useSpring, animated } from 'react-spring';

const WavyBorder = () => {
	const props1 = useSpring({
		from: { transform: 'translate3d(0, 0, 0)' },
		to: { transform: 'translate3d(0, 2px, 0)' },
		loop: { reverse: true },
		config: { mass: 1, tension: 120, friction: 14 },
	});

	const props2 = useSpring({
		from: { transform: 'translate3d(0, 0, 0)' },
		to: { transform: 'translate3d(0, -2px, 0)' },
		loop: { reverse: true },
		config: { mass: 1, tension: 120, friction: 14 },
	});

	return (
		<div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
			<animated.div
				style={{
					position: 'absolute',
					width: '100%',
					height: '50%',
					top: 0,
					left: 0,
					background: 'linear-gradient(to right, #4facfe, #00f2fe)',
					...props1,
				}}
			/>
			<animated.div
				style={{
					position: 'absolute',
					width: '100%',
					height: '50%',
					bottom: 0,
					left: 0,
					background: 'linear-gradient(to right, #4facfe, #00f2fe)',
					...props2,
				}}
			/>
		</div>
	);
};

export default WavyBorder;
