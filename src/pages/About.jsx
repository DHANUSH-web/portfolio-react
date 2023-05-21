import { Box, Center, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react"
import Certificates from "../components/Certificates"
import AboutTab from "../components/About"
import React from "react"
import "./About.css"

const About = () => {
	const [activeTab, setActiveTab] = React.useState(0)
	const { colorMode } = useColorMode()
	const isDark = colorMode === 'dark'

	return (
		<Box className="about-container">
			<Center>
				<Tabs onChange={(index) => setActiveTab(index)} w='full' variant="soft-rounded" position="relative" align="center" fontFamily='googlesansbold' colorScheme={ isDark ? 'teal' : 'blue' }>
					<TabList className="tabList" bg="transparent">
						<Tab color={ activeTab === 0 ? isDark ? 'aqua' : '#0050ff' : 'default' }>About</Tab>
						<Tab color={ activeTab === 1 ? isDark ? 'aqua' : '#0050ff' : 'default' }>Education</Tab>
						<Tab color={ activeTab === 2 ? isDark ? 'aqua' : '#0050ff' : 'default' }>Skills</Tab>
						<Tab color={ activeTab === 3 ? isDark ? 'aqua' : '#0050ff' : 'default' }>Certificates</Tab>
					</TabList>
					<TabIndicator h='2px' bg={ isDark ? 'aqua' : 'blue.500'} borderRadius={1}/>
					<TabPanels>
						<TabPanel><AboutTab /></TabPanel>
						<TabPanel>Education Details</TabPanel>
						<TabPanel>Technical Skills</TabPanel>
						<TabPanel><Certificates /></TabPanel>
					</TabPanels>
				</Tabs>
			</Center>
		</Box>
	)
}

export default About