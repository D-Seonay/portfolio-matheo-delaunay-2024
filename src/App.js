import React from 'react';
import Navbar from './component/Navbar';
import { Title, Card, Section } from './styles';
import {ThemeProvider, useTheme} from './component/ThemeContext';
import './index.css';
import GlassBackground from './component/ui/GlassBackground';


function Home() {
	const { theme } = useTheme();
	return (
		<>
			<Section>
				<Title theme={theme}>Accueil</Title>
				<div>Je suis le contenu de la page d'accueil</div>
				<Card>
					<Title theme={theme}>Card</Title>
					<div>Je suis une card</div>
				</Card>
				{/* Intégrez ici le contenu de votre page d'accueil */}
			</Section>
		</>
	);
}

function App() {
	return (
		<>
			<ThemeProvider>
				<GlassBackground>
						<Navbar />
						<Home />
				</GlassBackground>
			</ThemeProvider>

		</>
	);
}

export default App;
