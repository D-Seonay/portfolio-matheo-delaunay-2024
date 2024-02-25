import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useTheme } from "./ThemeContext";
import { EmblaMain, Embla, EmblaContainer, EmblaSlide, EmblaSlideImage, EmblaContent, EmblaSlideTitle, EmblaSlideLink, ScrollText, ProgressBar } from '../styles';
import EmblaSlides from './EmblaCarousel';
import { slidesData } from './slidesData';

function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { theme } = useTheme();

  return (
      <EmblaMain>
        <Embla ref={emblaRef}>
          <EmblaContainer>
            <EmblaSlides slides={slidesData} emblaApi={emblaApi} />
          </EmblaContainer>
        </Embla>

        <ScrollText theme={theme} id="scrollText">( SCROLL DOWN )</ScrollText>
        <ProgressBar theme={theme} id="progressBar" />
      </EmblaMain>
  );
}

export default EmblaCarousel;
