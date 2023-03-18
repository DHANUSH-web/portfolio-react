import { HStack, Text, Box, Avatar } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import React from "react"
import "./NavBar.css"

const NavBar = () => {
	const [ activeWindow, setActiveWindow ] = React.useState(0)
	const isHome = activeWindow === 0
	const isAbout = activeWindow === 1
	const isProjects = activeWindow === 2
	const isExperience = activeWindow === 3
	const isContact = activeWindow === 4

	const homeFg = isHome ? "#0050ff" : "black"
	const aboutFg = isAbout ? "#0050ff" : "black"
	const projectsFg = isProjects ? "#0050ff" : "black"
	const expFg = isExperience ? "#0050ff" : "black"
	const contactFg = isContact ? "#0050ff" : "black"


	return (
		<HStack className="navbar" width="full" p={5} spacing={5} bg="blackAlpha.200" backdropFilter="blur(10px)">
			<Link to="/" className="brand">Portfolio</Link>
			<HStack spacing={5} justify="flex-end" width="full">
				<Link id="navLink" to="/" onClick={() => setActiveWindow(0)}><Text color={homeFg}>Home</Text></Link>
				<Link id="navLink" to="/about" onClick={() => setActiveWindow(1)}><Text color={aboutFg}>About</Text></Link>
				<Link id="navLink" to="/projects" onClick={() => setActiveWindow(2)}><Text color={projectsFg}>Projects</Text></Link>
				<Link id="navLink" to="/experience" onClick={() => setActiveWindow(3)}><Text color={expFg}>Experience</Text></Link>
				<Link id="navLink" to="/contact" onClick={() => setActiveWindow(4)}><Text color={contactFg}>Contact</Text></Link>
			</HStack>
		</HStack>
	)
}

export default NavBar