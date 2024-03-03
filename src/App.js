import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import './index.css';
import GlassBackground from './component/ui/GlassBackground';
import Works from './component/Works';
import CursorTracker from "./component/ui/CursorTracker";
import AboutMe from "./component/AboutMe";
import Error404Page from "./component/Error404";
import Footer from "./component/Footer";
import ProjectDetailPage from './component/ProjectDetailPage';



function App() {
	return (
		<>
			<GlassBackground>
				<Router>
					<Navbar />
					<CursorTracker />
					<Routes>
						<Route path="/" element={<Works />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/works/*" element={<Works />} />
						{/*  Route for each project */}
						<Route path="/project/:id" element={<ProjectDetailPage />} />

						<Route path="*" element={<Error404Page/>} />
					</Routes>
					<Footer />
				</Router>
			</GlassBackground>
		</>
	);
}

export default App;
