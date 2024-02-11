import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProgressBar, ProgressBarFill } from "../styles";
import ScrollWheelHandler from 'react-scroll-wheel-handler';
import { useTheme } from "./ThemeContext";
import WorksCards from "./ui/WorksCards";

const ProjectSlider = ({ projects }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);


	const handleScroll = event => {
		if (event && event.deltaY !== undefined) {
			const slider = sliderRef.current;
			if (event.deltaY > 0) {
				slider.slickNext();
			} else {
				slider.slickPrev();
			}
		}
	};


	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1
				}
			}
		],
	};

	const handleAfterChange = current => {
		setCurrentSlide(current);
	};

	const { theme } = useTheme();

	return (
		<ScrollWheelHandler
			upHandler={handleScroll}
			downHandler={handleScroll}
			style={{ overflowY: 'scroll', height: '100%' }}
		>
			<div>
				<Slider {...settings} ref={sliderRef} afterChange={handleAfterChange}>
					{projects.map(project => (
						<WorksCards key={project.id} title={project.title} img={project.img} link={project.link} />

					))}
				</Slider>
				{/* Ajustez les styles de la barre de progression */}
				<ProgressBar theme={theme}>
					<ProgressBarFill theme={theme} style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }} />
				</ProgressBar>
			</div>
		</ScrollWheelHandler>
	);
};

export default ProjectSlider;
