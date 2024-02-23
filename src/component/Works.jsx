import React, { useEffect, useRef } from 'react';
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
  width: 80vw;
  max-width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 0;
`;

const EmblaContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  align-items: center;
`;

const EmblaSlideImage = styled.img`
  width: 80vw;
  height: 100vh;
  object-fit: cover;
  max-width: 80vw;
  max-height: 100vh;
`;

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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

  return (
      <EmblaMain>
        <Embla ref={emblaRef}>
          <EmblaContainer>
            <EmblaSlide className="embla__slide">
              <EmblaSlideImage src={Image1} alt="Slide 1" />
            </EmblaSlide>
            <EmblaSlide className="embla__slide">
              <EmblaSlideImage src={Image2} alt="Slide 2" />
            </EmblaSlide>
            <EmblaSlide className="embla__slide">
              <EmblaSlideImage src={Image3} alt="Slide 3" />
            </EmblaSlide>
          </EmblaContainer>
        </Embla>
      </EmblaMain>
  );
}

export default EmblaCarousel;
