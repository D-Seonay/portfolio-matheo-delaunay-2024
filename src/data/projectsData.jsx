import { Phototheque, CardFlipRevise, Pokedex, GestionnaireDeBibliotheque } from '../Images';


const projectsData = [
	{
		id: '1',
		title: 'Photothèque de Chatons',
		date: 'Janvier 2023',
		description: 'Une application web pour parcourir et partager des photos de chatons.',
		role: 'Développeur frontend',
		categorie: 'School',
		tech: 'Symfony, MySQL',
		image: Phototheque,
		link: '',
		linkGithub: 'https://github.com/D-Seonay/chatons-bdd',
	},
	{
		id: '2',
		title: 'Card Flip Revise',
		date: 'Mars 2023',
		description: 'Un jeu de cartes pour réviser les définitions des cours de droit.',
		role: 'Développeur frontend',
		categorie: 'Personal',
		tech: 'Node.js',
		image: CardFlipRevise,
		link: '',
		linkGithub: '',
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
		linkGithub: 'https://github.com/D-Seonay/pokedex',
		// Autres détails du projet
	},
	{
		id: '4',
		title: 'Gestionnaire de Bibliothèque',
		date: 'Juillet 2023',
		description: 'Une application pour gérer les livres et les emprunts dans une bibliothèque.',
		role: 'Développeur backend',
		categorie: 'School',
		tech: 'Python',
		image: GestionnaireDeBibliotheque,
		link: '',
		linkGithub: 'https://github.com/D-Seonay/gestionnaire-de-bibliotheque',
		// Autres détails du projet
	}
	// Ajoutez d'autres projets ici
];

export default projectsData;
