import { EducationCard } from "./Education"
import NavBar from "../components/NavBar"
import database from "../database.json"
import { Flex, Text } from "@chakra-ui/react"
import { IconGitMerge } from "@tabler/icons-react"
import React from "react"
import "./Projects.css"

const Projects = () => {
	const profile = database.profiles[database.profileHolder]

	return (
		<Flex flexDir="column" minH="100vh">
			<NavBar isProjects={true} />
			<Flex justify="center" align="center" gap={2}>
				<IconGitMerge size={30} className="iconProjects" />
				<Text fontFamily="interBold" fontSize={30}>My Projects</Text>
			</Flex>
			<Flex flexWrap='wrap' gap={12} justifyContent='center' my={10} mx={5} fontFamily="interRegular">
				{
					profile.projects.map((project, idx) => (
						<EducationCard key={"project__"+idx} title={project.title} year={project.year} progress={project.progress} isCompleted={project.isCompleted} description={project.desc} score={project.score} symbol={project.symbol} location={project.location} docURL={project.docURL} />
					))
				}
			</Flex>
		</Flex>
	)
}

export default Projects