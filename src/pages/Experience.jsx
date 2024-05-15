import { EducationCard } from "./Education"
import NavBar from "../components/NavBar"
import database from "../database.json"
import { Flex, Text } from "@chakra-ui/react"
import { IconUserUp } from "@tabler/icons-react"
import React from "react"
import "./Experience.css"

const Experience = () => {
	const profile = database.profiles[database.profileHolder]

	return (
		<Flex flexDir="column" minH="100vh">
			<NavBar isExp />
			<Flex justify="center" align="center" gap={2}>
				<IconUserUp className="iconExperience" size={30} />
				<Text fontFamily='interBold' fontSize={30}>Experience</Text>
			</Flex>
			<Flex
				flexWrap='wrap'
				gap={12}
				justifyContent='center'
				alignContent='center'
				fontFamily='interRegular'
				direction={{
					base: "column",
					sm: "column",
					md: "column",
					lg: "row"
				}}
				mx={5}
				my={10}
			>
			{
				profile.proexp.map((data, idx) => (
					<EducationCard key={"exp__"+idx} title={data.title} year={data.year} description={data.desc} progress={data.progress} isCompleted={data.isCompleted} location={data.location} score={data.score} symbol={data.symbol} />
				))
			}
			</Flex>
		</Flex>
	)
}

export default Experience