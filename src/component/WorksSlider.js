import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProgressBar, ProgressBarFill, ProjectSliderStyle } from "../styles";
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
		infinite: false,

		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				}
			}
		],
		dots: false, // Désactiver les boutons de navigation
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
			<ProjectSliderStyle>
				<Slider {...settings} ref={sliderRef} afterChange={handleAfterChange}>
					{projects.map(project => (
						<WorksCards key={project.id} title={project.title} img={project.img} link={project.link} />
					))}
				</Slider>
				<ProgressBar theme={theme}>
					<ProgressBarFill theme={theme} style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }} />
				</ProgressBar>
			</ProjectSliderStyle>
		</ScrollWheelHandler>
	);
};

export default ProjectSlider;
