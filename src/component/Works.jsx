import React from 'react';
import WorksSlider from './WorksSlider';

const works = [
  {
    title: 'Titre de la diapositive 1',
    imageUrl: './img/1.jpg',
    linkUrl: 'lien_vers_votre_page_1',
  },
  {
    title: 'Titre de la diapositive 2',
    imageUrl: './img/2.jpg',
    linkUrl: 'lien_vers_votre_page_2',
  },
  // Ajoutez d'autres diapositives selon vos besoins
];

const App = () => {
  return (
    <div>
      <h1>Mon Slider</h1>
	  <WorksSlider works={works} />
    </div>
  );
};

export default App;
