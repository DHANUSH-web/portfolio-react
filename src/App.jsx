import { Routes, Route } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import QuickBar from "./components/QuickBar"
import Experience from "./pages/Experience"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import React from "react"
import "./App.css"

const App = () => {
	return (
		<>
			<NavBar />
			<div className="cover-navbar"></div>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
				<Route path="/projects" element={ <Projects /> } />
				<Route path="/experience" element={ <Experience /> } />
				<Route path="/contact" element={ <Contact /> } />
				<Route path="*" element={ <PageNotFound /> } />
			</Routes>
			<QuickBar />
			<Footer />
		</>
	)
}

export default App