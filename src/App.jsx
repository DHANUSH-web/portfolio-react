import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import React from "react"
import "./App.css"

const App = () => {
	return (
		<>
			<NavBar />
			<br /><br /><br /><br />
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
				<Route path="/projects" element={ <Projects /> } />
				<Route path="/experience" element={ <Experience /> } />
				<Route path="/contact" element={ <Contact /> } />
				<Route path="*" element={ <PageNotFound /> } />
			</Routes>
		</>
	)
}

export default App