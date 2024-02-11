import React from 'react';
import Navbar from './component/Navbar';
import { Title, Card, Section } from './styles';
import {ThemeProvider, useTheme} from './component/ThemeContext';
import './index.css';
import GlassBackground from './component/ui/GlassBackground';
import Works from './component/Works';


function App() {
	return (
		<>
			<ThemeProvider>
				<GlassBackground>
						<Navbar />
						<Works />
				</GlassBackground>
			</ThemeProvider>

		</>
	);
}

export default App;
