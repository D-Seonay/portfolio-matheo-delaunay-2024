import React from 'react';
import Navbar from './component/Navbar';
import './index.css';
import GlassBackground from './component/ui/GlassBackground';
import Works from './component/Works';
import CursorTracker from "./component/ui/CursorTracker";
import WavyBorder from "./component/ui/WavyBorder";

function App() {
	return (
		<>
				<CursorTracker/>
				<GlassBackground>
						<Navbar />
					<WavyBorder/>
						<Works />
				</GlassBackground>



		</>
	);
}

export default App;
