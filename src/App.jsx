import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./components/ThemeContext";
import Home from "./pages/Home";

const App = () => {
	return (
		<ThemeProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;
