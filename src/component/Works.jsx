import React, { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styled from "styled-components";
import Image1 from '../img/1.jpg';
import Image2 from '../img/2.jpg';
import Image3 from '../img/3.jpg';

const EmblaMain = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const Embla = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 0;
`;

const EmblaContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease; /* Ajout d'une transition pour le déplacement des slides */
  will-change: transform;
  width: 100%;
  height: 100%;
`;

const EmblaSlide = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  min-width: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10rem;
  align-items: center;
  transition: opacity 0.5s ease; /* Ajout d'une transition pour l'opacité des slides */
  
    @media (max-width: 768px) {
    padding: 2rem;
    
    }
`;


const EmblaContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const EmblaSlideTitle = styled.h2`
  font-size: 5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  
    @media (max-width: 768px) {
    font-size: 3rem;
    
    }
`;



const EmblaSlideImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 60vw;
  border-radius: 0.5rem;
  height: 100%;
  object-fit: cover;
  max-width: 80vw;
  max-height: 60vh;
  margin: 0 auto;
  filter: brightness(50%);
  
    @media (max-width: 768px) {
    width: 100vw;
    }
`;

const EmblaSlideLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #ff0000;
  }
`;

const ScrollText = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  font-size: 0.5rem;
  margin-bottom: 5rem;
  opacity: 1;
    transition: opacity 1s ease;
`;

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!scrolling.current) {
        scrolling.current = true;
        setTimeout(() => {
          scrolling.current = false;
        }, 1500); // Limite du défilement à une action toutes les 500ms
        if (emblaApi) {
          if (e.deltaY > 0) {
            emblaApi.scrollNext();
          } else {
            emblaApi.scrollPrev();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [emblaApi]);

  const handleScroll = () => {
    if (emblaApi) {
      const currentScrollProgress = emblaApi.scrollProgress();
      const shouldHideScrollText = currentScrollProgress >= 0.35; // Vous pouvez ajuster cette valeur selon vos besoins

      // Masquer ou afficher le texte en fonction de la position de la slide
      const scrollText = document.getElementById('scrollText');
      if (scrollText) {
        scrollText.style.opacity = shouldHideScrollText ? '0' : '1';
      }
    }
  };

  useEffect(() => {
    emblaApi && emblaApi.on('scroll', handleScroll);
    return () => emblaApi && emblaApi.off('scroll', handleScroll);
  }, [emblaApi]);

  return (
      <EmblaMain>
        <Embla ref={emblaRef}>
          <EmblaContainer>
            <EmblaSlide>
              <EmblaContent>
                <EmblaSlideImage src={Image1} alt="Slide 1" />
                <EmblaSlideTitle>Slide 1</EmblaSlideTitle>
                <EmblaSlideLink href="https://www.google.com" target="_blank">
                  Open project
                </EmblaSlideLink>
              </EmblaContent>
            </EmblaSlide>

            <EmblaSlide>
                <EmblaContent>
                    <EmblaSlideImage src={Image2} alt="Slide 2" />
                    <EmblaSlideTitle>Slide 2</EmblaSlideTitle>
                    <EmblaSlideLink href="https://www.google.com" target="_blank">
                      Open project
                    </EmblaSlideLink>
                </EmblaContent>
            </EmblaSlide>

            <EmblaSlide>
                <EmblaContent>
                    <EmblaSlideImage src={Image3} alt="Slide 3" />
                    <EmblaSlideTitle>Slide 3</EmblaSlideTitle>
                    <EmblaSlideLink href="https://www.google.com" target="_blank">
                      Open project
                    </EmblaSlideLink>
                </EmblaContent>
            </EmblaSlide>

            <EmblaSlide>
                <EmblaContent>
                    <EmblaSlideImage src={Image1} alt="Slide 1" />
                    <EmblaSlideTitle>Slide 4</EmblaSlideTitle>
                    <EmblaSlideLink href="https://www.google.com" target="_blank">
                      Open project
                    </EmblaSlideLink>
                </EmblaContent>
            </EmblaSlide>
          </EmblaContainer>
        </Embla>

        <ScrollText id="scrollText">( SCROLL DOWN )</ScrollText>
      </EmblaMain>
  );
}

export default EmblaCarousel;