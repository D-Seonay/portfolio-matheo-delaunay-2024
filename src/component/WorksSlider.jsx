import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

// Styled components pour le titre, l'image et le lien
const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideTitle = styled.h2`
  color: #333;
`;

const SlideImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SlideLink = styled.a`
  color: blue;
  text-decoration: underline;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const Slide = ({ title, imageUrl, linkUrl }) => (
  <SlideContainer>
    <SlideTitle>{title}</SlideTitle>
    <SlideImage src={imageUrl} alt={title} />
    <SlideLink href={linkUrl}>Voir plus</SlideLink>
  </SlideContainer>
);

const WorksSlider = ({ works }) => {
	// Appel de useRef en dehors du bloc conditionnel
	const sliderRef = useRef(null);
  
	// Appel de useEffect en dehors du bloc conditionnel
	useEffect(() => {
	  const handleScroll = () => {
		if (sliderRef.current) {
		  sliderRef.current.slickNext();
		}
	  };
  
	  window.addEventListener('scroll', handleScroll);
	  return () => window.removeEventListener('scroll', handleScroll);
	}, [sliderRef]); // Assurez-vous de passer sliderRef comme dépendance
  
	return (
	  <Slider ref={sliderRef} {...settings}>
		{works.map((work, index) => ( // Remplacez "slides" par "works"
		  <div key={index}>
			<Slide {...work} /> {/* Remplacez "slide" par "work" */}
		  </div>
		))}
	  </Slider>
	);
  };

export default WorksSlider;
