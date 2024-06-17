import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import AboutTab, { SkillsTab } from "../components/About"
import Certificates from "../components/Certificates"
import NavBar from "../components/NavBar"
import EducationTab from "./Education"
import React from "react"
import "./About.css"

const TabMaps = [
	"about",
	"education",
	"skills",
	"certificates",
];

const About = () => {
	const [searchParams] = useSearchParams();
	const { colorMode } = useColorMode()
	const isDark = colorMode === 'dark'
	const pathname = useLocation();
	const navigate = useNavigate();

	const handleTabParams = (index) => {
		const params = new URLSearchParams();

		if (index > 0 && index < TabMaps.length) {
			params.set('tab', TabMaps[index]);
		} else {
			params.delete('tab');
		}

		navigate(`${pathname.pathname}?${params.toString()}`, { replace: true });
	}

	return (
		<Box minH="100vh">
			<NavBar isAbout />
			<Box className="about-container">
				<Tabs index={searchParams.get('tab') ? TabMaps.indexOf(searchParams.get('tab')) : 0} onChange={(index) => handleTabParams(index)} variant="unstyled" fontFamily="interSemiBold">
					<TabList className="tabList" placeContent='center'>
						<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} p={3} borderRadius={7} bg={!searchParams.get('tab') ? isDark ? "whiteAlpha.200" : "blackAlpha.200" : "transparent"} w={{base: 80, sm: 80, md: 120, lg: 120}}>About</Tab>
						<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} p={3} borderRadius={7} bg={searchParams.get('tab') === "education" ? isDark ? "whiteAlpha.200" : "blackAlpha.200" : "transparent"} w={{base: 80, sm: 80, md: 120, lg: 120}}>Education</Tab>
						<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} p={3} borderRadius={7} bg={searchParams.get('tab') === "skills" ? isDark ? "whiteAlpha.200" : "blackAlpha.200" : "transparent"} w={{base: 80, sm: 80, md: 120, lg: 120}}>Skills</Tab>
						<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} p={3} borderRadius={7} bg={searchParams.get('tab') === "certificates" ? isDark ? "whiteAlpha.200" : "blackAlpha.200" : "transparent"} w={{base: 80, sm: 80, md: 120, lg: 120}}>Certificates</Tab>
					</TabList>
					{/* <TabIndicator h='2px' bg={ isDark ? 'aqua' : 'blue.500'} borderRadius={1}/> */}
					<TabPanels>
						<TabPanel><AboutTab /></TabPanel>
						<TabPanel><EducationTab /></TabPanel>
						<TabPanel><SkillsTab /></TabPanel>
						<TabPanel><Certificates /></TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Box>
	)
}

export default About