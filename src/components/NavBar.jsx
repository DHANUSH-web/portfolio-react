import { HStack, Text, Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode } from "@chakra-ui/react"
import { MdOutlineHandshake, MdPerson, MdTimeline } from "react-icons/md"
import { BiGitCommit, BiSun, BiMoon, BiHomeAlt } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"
import { CgMenuLeftAlt } from "react-icons/cg"
import { motion } from "framer-motion"
import React from "react"
import "./NavBar.css"

const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const urlPath = useLocation()
	const [ activeWindow, setActiveWindow ] = React.useState(urlPath.pathname)
	const isHome = activeWindow === '/'
	const isAbout = activeWindow === '/about'
	const isProjects = activeWindow === '/projects'
	const isExperience = activeWindow === '/experience'
	const isContact = activeWindow === '/contact'
	const isDark = colorMode === "dark"
	
	const homeFg = isHome ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const aboutFg = isAbout ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const projectsFg = isProjects ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const expFg = isExperience ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const contactFg = isContact ? (isDark) ? "aqua" : "#0050ff" : (isDark) ? "white" : "black"
	const logoFg = isDark ? "aqua" : "#0080ff"

	return (
		<HStack className="navbar" width="full" p={5} spacing={5} bg={ isDark ? "#1a202cdc": "#ffffffdc"} backdropFilter="blur(5px)" zIndex={1}>
			<Link to="/" className="brand"><Text color={logoFg}>Portfolio</Text></Link>
			<HStack w="full" justify="flex-end">
				<HStack spacing={5} justify="flex-end" w="full" display={{ base: "none", md: "flex", lg: "flex" }}>
					<Link id="navLink" to="/" onClick={() => setActiveWindow('/')}><Text color={homeFg}>Home</Text></Link>
					<Link id="navLink" to="/about" onClick={() => setActiveWindow('/about')}><Text color={aboutFg}>About</Text></Link>
					<Link id="navLink" to="/projects" onClick={() => setActiveWindow('/projects')}><Text color={projectsFg}>Projects</Text></Link>
					<Link id="navLink" to="/experience" onClick={() => setActiveWindow('/experience')}><Text color={expFg}>Experience</Text></Link>
					<Link id="navLink" to="/contact" onClick={() => setActiveWindow('/contact')}><Text color={contactFg}>Contact</Text></Link>
					<IconButton as={motion.button} whileTap={{ scale: 1.5 }} icon={ isDark ? <BiSun size="20px" /> : <BiMoon size="20px" /> } onClick={toggleColorMode} colorScheme="blue"/>
				</HStack>
				<Menu>
					<MenuButton as={IconButton} variant="ghost" icon={<CgMenuLeftAlt size="25px"/>} display={{ base: "flex", md: "none", lg: "none" }} _expanded={{ color: isDark ? 'aqua' : 'blue.400' }} />
					<MenuList borderRadius={12} overflow='hidden' p={2}>
						<Link to="/"><MenuItem className="menu-item" icon={<BiHomeAlt size="25px" />} onClick={() => setActiveWindow('/')} color={homeFg}>Home</MenuItem></Link>
						<Link to="/about"><MenuItem className="menu-item" icon={ <MdPerson size="25px" />} onClick={() => setActiveWindow('/about')} color={aboutFg}>About</MenuItem></Link>
						<Link to="/projects"><MenuItem className="menu-item" icon={ <BiGitCommit size="25px" />} onClick={() => setActiveWindow('/projects')} color={projectsFg}>Projects</MenuItem></Link>
						<Link to="/experience"><MenuItem className="menu-item" icon={ <MdTimeline size="25px" />} onClick={() => setActiveWindow('/experience')} color={expFg}>Experience</MenuItem></Link>
						<Link to="/contact"><MenuItem className="menu-item" icon={ <MdOutlineHandshake size="25px" />} onClick={() => setActiveWindow('/contact')} color={contactFg}>Contact</MenuItem></Link>
						<MenuItem className="menu-item" icon={isDark ? <BiSun size="25px" /> : <BiMoon size="25px" /> } onClick={toggleColorMode}>Switch to { isDark ? "Light" : "Dark" }</MenuItem>
					</MenuList>
				</Menu>
				{/* <IconButton icon={<CgMenuLeftAlt size="20px" />} onClick={onOpen} />
				<Drawer isOpen={isOpen} placement="right" initialFocusRef={initialFocusRef} onClose={onClose}>
					<DrawerOverlay bg="blackAlpha.500" backdropFilter="blur(10px)" />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader fontFamily="googleSansBold" color={ isDark ? "aqua" : "#0050ff"}>
							Quick Links
						</DrawerHeader>
						<DrawerBody>
							<Stack fontFamily='googleSans'>
								<Link to="/" onClick={() => setActiveWindow('/')} color={homeFg}>Home</Link>
								<Link to="/about" onClick={() => setActiveWindow('/about')} color={aboutFg}>About</Link>
								<Link to="/projects" onClick={() => setActiveWindow('/projects')} color={projectsFg}>Projects</Link>
								<Link to="/experience" onClick={() => setActiveWindow('/experience')} color={expFg}>Experience</Link>
								<Link to="/contact" onClick={() => setActiveWindow('/contact')} color={contactFg}>Contact</Link>
							</Stack>
						</DrawerBody>
						<DrawerFooter>
							<IconButton icon={ isDark ? <BiSun /> : <BiMoon /> } onClick={toggleColorMode} />
						</DrawerFooter>
					</DrawerContent>
				</Drawer> */}
			</HStack>
		</HStack>
	)
}

export default NavBar