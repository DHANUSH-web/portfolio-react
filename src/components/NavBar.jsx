import { HStack, Text, Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode } from "@chakra-ui/react"
import { MdOutlineHandshake, MdPerson, MdTimeline } from "react-icons/md"
import { CgMenuLeftAlt } from "react-icons/cg"
import { BiGitCommit } from "react-icons/bi"
import { BiHomeAlt } from "react-icons/bi"
import { Link } from "react-router-dom"
import React from "react"
import "./NavBar.css"

const NavBar = () => {
	const { colorMode } = useColorMode()
	const isDark = colorMode === "dark"

	const [ activeWindow, setActiveWindow ] = React.useState(0)
	const isHome = activeWindow === 0
	const isAbout = activeWindow === 1
	const isProjects = activeWindow === 2
	const isExperience = activeWindow === 3
	const isContact = activeWindow === 4

	const homeFg = isHome ? "#0050ff" : (isDark) ? "white" : "black"
	const aboutFg = isAbout ? "#0050ff" : (isDark) ? "white" : "black"
	const projectsFg = isProjects ? "#0050ff" : (isDark) ? "white" : "black"
	const expFg = isExperience ? "#0050ff" : (isDark) ? "white" : "black"
	const contactFg = isContact ? "#0050ff" : (isDark) ? "white" : "black"


	return (
		<HStack className="navbar" width="full" p={5} spacing={5} bg="blackAlpha.200" backdropFilter="blur(7px)" zIndex={1}>
			<Link to="/" className="brand">Portfolio</Link>
			<HStack w="full" justify="flex-end">
				<HStack spacing={5} justify="flex-end" w="full" display={{ base: "none", md: "flex", lg: "flex" }}>
					<Link id="navLink" to="/" onClick={() => setActiveWindow(0)}><Text color={homeFg}>Home</Text></Link>
					<Link id="navLink" to="/about" onClick={() => setActiveWindow(1)}><Text color={aboutFg}>About</Text></Link>
					<Link id="navLink" to="/projects" onClick={() => setActiveWindow(2)}><Text color={projectsFg}>Projects</Text></Link>
					<Link id="navLink" to="/experience" onClick={() => setActiveWindow(3)}><Text color={expFg}>Experience</Text></Link>
					<Link id="navLink" to="/contact" onClick={() => setActiveWindow(4)}><Text color={contactFg}>Contact</Text></Link>
				</HStack>
				<Menu>
					<MenuButton as={IconButton} variant="ghost" icon={<CgMenuLeftAlt size="25px"/>} display={{ base: "flex", md: "none", lg: "none" }} />
					<MenuList>
						<Link to="/"><MenuItem icon={<BiHomeAlt size="25px" />}>Home</MenuItem></Link>
						<Link to="/about"><MenuItem icon={ <MdPerson size="25px" />}>About</MenuItem></Link>
						<Link to="/projects"><MenuItem icon={ <BiGitCommit size="25px" />}>Projects</MenuItem></Link>
						<Link to="/experience"><MenuItem icon={ <MdTimeline size="25px" />}>Experience</MenuItem></Link>
						<Link to="/contact"><MenuItem icon={ <MdOutlineHandshake size="25px" />}>Contact</MenuItem></Link>
					</MenuList>
				</Menu>
			</HStack>
		</HStack>
	)
}

export default NavBar