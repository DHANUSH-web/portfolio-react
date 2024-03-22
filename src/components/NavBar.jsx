import { HStack, Text, Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode } from "@chakra-ui/react"
import { IconHeartHandshake, IconMenu, IconUser, IconTimeline, IconSunFilled, IconMoonFilled, IconHome, IconGitCommit } from "@tabler/icons-react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import React from "react"
import "./NavBar.css"

const NavBar = ({ isHome, isAbout, isProjects, isExp, isContact }) => {
	const { colorMode, toggleColorMode } = useColorMode()
	const isDark = colorMode === "dark"
	
	const homeFg = isHome ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const aboutFg = isAbout ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const projectsFg = isProjects ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const expFg = isExp ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const contactFg = isContact ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const logoFg = isDark ? "aqua" : "#0080ff"

	return (
		<HStack className="navbar" width="full" p={5} spacing={5} bg={ isDark ? "#1a202cdc": "#ffffffdc"} backdropFilter="blur(5px)" zIndex={1} top={0} right={0} sticky="sticky">
			<Link to="/" className="brand">
				<Text color={logoFg} fontFamily="--apple-system, interSemiBold, arial, --system-ui">Portfolio</Text>
			</Link>
			<HStack w="full" justify="flex-end">
				<HStack spacing={5} justify="flex-end" w="full" display={{ base: "none", md: "flex", lg: "flex" }}>
					<Link id="navLink" to="/"><Text color={homeFg}>Home</Text></Link>
					<Link id="navLink" to="/about"><Text color={aboutFg}>About</Text></Link>
					<Link id="navLink" to="/projects"><Text color={projectsFg}>Projects</Text></Link>
					<Link id="navLink" to="/experience"><Text color={expFg}>Experience</Text></Link>
					<Link id="navLink" to="/contact"><Text color={contactFg}>Contact</Text></Link>
					<IconButton as={motion.button} whileTap={{ scale: 0.9 }} icon={ isDark ? <IconSunFilled size={15} /> : <IconMoonFilled size={15} /> } onClick={toggleColorMode} />
				</HStack>
				<Menu>
					<MenuButton as={IconButton} variant="ghost" icon={<IconMenu size={15}/>} display={{ base: "flex", md: "none", lg: "none" }} _expanded={{ color: isDark ? 'aqua' : 'blue.400' }} />
					<MenuList borderRadius={12} overflow='hidden' p={2}>
						<Link to="/"><MenuItem className="menu-item" icon={<IconHome size={15} />} color={homeFg}>Home</MenuItem></Link>
						<Link to="/about"><MenuItem className="menu-item" icon={ <IconUser size={15} />} color={aboutFg}>About</MenuItem></Link>
						<Link to="/projects"><MenuItem className="menu-item" icon={ <IconGitCommit size={15} />} color={projectsFg}>Projects</MenuItem></Link>
						<Link to="/experience"><MenuItem className="menu-item" icon={ <IconTimeline size={15} />} color={expFg}>Experience</MenuItem></Link>
						<Link to="/contact"><MenuItem className="menu-item" icon={ <IconHeartHandshake size={15} />} color={contactFg}>Contact</MenuItem></Link>
						<MenuItem className="menu-item" icon={isDark ? <IconSunFilled size={15} /> : <IconMoonFilled size={15} /> } onClick={toggleColorMode}>Switch to { isDark ? "Light" : "Dark" }</MenuItem>
					</MenuList>
				</Menu>
			</HStack>
		</HStack>
	)
}

export default NavBar