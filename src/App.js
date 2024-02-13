import React from 'react';
import Navbar from './component/Navbar';
import {ThemeProvider} from './component/ThemeContext';
import './index.css';
import GlassBackground from './component/ui/GlassBackground';
import Works from './component/Works';
import CursorTracker from "./component/ui/CursorTracker";

function App() {
	return (
		<>
			<ThemeProvider>
				<CursorTracker/>
				<GlassBackground>
						<Navbar />
						<Works />
				</GlassBackground>

			</ThemeProvider>



		</>
	);
}

export default App;
