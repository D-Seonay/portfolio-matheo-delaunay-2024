import React, { useEffect, useRef } from 'react';
import { EmblaSlide, EmblaSlideImage, EmblaContent, EmblaSlideTitle, EmblaSlideLink } from '../styles';

function EmblaSlides({ slides, emblaApi }) {
	const scrolling = useRef(false);
	const touchStart = useRef(0);

	useEffect(() => {
		const handleWheel = (e) => {
			if (!scrolling.current) {
				scrolling.current = true;
				setTimeout(() => {
					scrolling.current = false;
				}, 1500);
				if (emblaApi) {
					if (e.deltaY > 0) {
						emblaApi.scrollNext();
					} else {
						emblaApi.scrollPrev();
					}
				}
			}
		};

		const handleTouchStart = (e) => {
			touchStart.current = e.touches[0].clientY;
		};

		const handleTouchEnd = (e) => {
			if (touchStart.current - e.changedTouches[0].clientY > 50) {
				if (emblaApi) {
					emblaApi.scrollNext();
				}
			} else if (e.changedTouches[0].clientY - touchStart.current > 50) {
				if (emblaApi) {
					emblaApi.scrollPrev();
				}
			}
		};

		window.addEventListener('wheel', handleWheel);
		window.addEventListener('touchstart', handleTouchStart);
		window.addEventListener('touchend', handleTouchEnd);

		return () => {
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('touchend', handleTouchEnd);
		};
	}, [emblaApi]);

	const handleScroll = () => {
		if (emblaApi) {
			const currentScrollProgress = emblaApi.scrollProgress();
			const shouldHideScrollText = currentScrollProgress >= 0.35;

			const scrollText = document.getElementById('scrollText');
			if (scrollText) {
				scrollText.style.opacity = shouldHideScrollText ? '0' : '1';
			}

			const progressBar = document.getElementById('progressBar');
			if (progressBar) {
				progressBar.style.width = `${currentScrollProgress * 100}%`;
			}
		}
	};

	useEffect(() => {
		emblaApi && emblaApi.on('scroll', handleScroll);
		return () => emblaApi && emblaApi.off('scroll', handleScroll);
	}, [emblaApi]);

	return (
		<>
			{slides.map((slide, index) => (
				<EmblaSlide key={index}>
					<EmblaSlideImage src={slide.img} alt={slide.title} />
					<EmblaContent>
						<EmblaSlideTitle>{slide.title}</EmblaSlideTitle>
						<EmblaSlideLink href={slide.link}>Lien vers le projet</EmblaSlideLink>
					</EmblaContent>
				</EmblaSlide>
			))}
		</>
	);
}

export default EmblaSlides;
