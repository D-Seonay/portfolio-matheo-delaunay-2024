import { Phototheque, CardFlipRevise, Pokedex, GestionnaireDeBibliotheque } from '../Images';


const projectsData = [
	{
		id: '1',
		title: 'Photothèque de Chatons',
		date: 'Janvier 2023',
		description: 'Une application web pour parcourir et partager des photos de chatons.',
		role: 'Développeur frontend',
		categorie: 'School',
		tech: 'React, Firebase',
		image: Phototheque,
		link: '',
		// Autres détails du projet
	},
	{
		id: '2',
		title: 'Card Flip Revise',
		date: 'Mars 2023',
		description: 'Un jeu de cartes pour réviser les concepts clés.',
		role: 'Concepteur UI/UX',
		categorie: 'Personal',
		tech: 'Node.js',
		image: CardFlipRevise,
		link: '',
		// Autres détails du projet
	},

	{
		id: '3',
		title: 'Pokedex',
		date: 'Mai 2023',
		description: 'Une application pour explorer et en apprendre davantage sur les Pokémon.',
		role: 'Développeur frontend',
		categorie: 'Personal',
		tech: 'Node.js, PokeAPI',
		image: Pokedex,
		link: 'https://chatonsphototheque-q26cn.ondigitalocean.app/',
		// Autres détails du projet
	},
	{
		id: '4',
		title: 'Gestionnaire de Bibliothèque',
		date: 'Juillet 2023',
		description: 'Une application pour gérer les livres et les emprunts dans une bibliothèque.',
		role: 'Développeur fullstack',
		categorie: 'School',
		tech: 'Python',
		image: GestionnaireDeBibliotheque,
		link: '',
		// Autres détails du projet
	}
	// Ajoutez d'autres projets ici
];

export default projectsData;
