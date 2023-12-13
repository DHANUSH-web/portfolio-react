import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import AboutTab, { SkillsTab } from "../components/About"
import Certificates from "../components/Certificates"
import NavBar from "../components/NavBar"
import EducationTab from "./Education"
import React from "react"
import "./About.css"

const About = () => {
	const [activeTab, setActiveTab] = React.useState(0)
	const { colorMode } = useColorMode()
	const isDark = colorMode === 'dark'

	return (
		<>
			<NavBar isAbout={true} />
			<Box className="about-container">
					<Tabs onChange={(index) => setActiveTab(index)} variant="soft-rounded" position="relative" fontFamily='interSemiBold' colorScheme={ isDark ? 'teal' : 'blue' }>
						<TabList className="tabList" placeContent='center'>
							<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} color={ activeTab === 0 ? isDark ? 'aqua' : '#0050ff' : 'default' }>About</Tab>
							<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} color={ activeTab === 1 ? isDark ? 'aqua' : '#0050ff' : 'default' }>Education</Tab>
							<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} color={ activeTab === 2 ? isDark ? 'aqua' : '#0050ff' : 'default' }>Skills</Tab>
							<Tab fontSize={{ base: 12, sm: 12, md: 15, lg: 15 }} color={ activeTab === 3 ? isDark ? 'aqua' : '#0050ff' : 'default' }>Certificates</Tab>
						</TabList>
						<TabIndicator h='2px' bg={ isDark ? 'aqua' : 'blue.500'} borderRadius={1}/>
						<TabPanels>
							<TabPanel><AboutTab /></TabPanel>
							<TabPanel><EducationTab /></TabPanel>
							<TabPanel><SkillsTab /></TabPanel>
							<TabPanel><Certificates /></TabPanel>
						</TabPanels>
					</Tabs>
			</Box>
		</>
	)
}

export default About