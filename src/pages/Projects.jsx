import { EducationCard } from "../pages/Education"
import NavBar from "../components/NavBar"
import database from "../database.json"
import { Flex } from "@chakra-ui/react"
import React from "react"
import "./Projects.css"

const Projects = () => {
	const profile = database.profiles[database.profileHolder]

	return (
		<div>
			<NavBar isProjects={true} />
			<Flex flexWrap='wrap' gap={12} justifyContent='center' mt={10} mb={10} ml={5} mr={5} fontFamily="inter">
				{
					profile.projects.map(project => (
						<EducationCard title={project.title} year={project.year} progress={project.progress} description={project.desc} score={project.score} symbol={project.symbol} location={project.location} docURL={project.docURL} />
					))
				}
			</Flex>
		</div>
	)
}

export default Projects