import { EducationCard } from "../pages/Education"
import NavBar from "../components/NavBar"
import database from "../database.json"
import { Flex } from "@chakra-ui/react"
import React from "react"
import "./Experience.css"

const Experience = () => {
	const profile = database.profiles[database.profileHolder]

	return (
		<div>
			<NavBar isExp={true} />
			<Flex
				flexWrap='wrap'
				gap={12}
				justifyContent='center'
				alignContent='center'
				fontFamily='inter'
				direction={{
					base: "column",
					sm: "column",
					md: "column",
					lg: "row"
				}}
				p={5}
			>
			{
				profile.proexp.map((data) => (
					<EducationCard title={data.title} year={data.year} description={data.desc} progress={data.progress} isCompleted={data.isCompleted} location={data.location} score={data.score} symbol={data.symbol} />
				))
			}
			</Flex>
		</div>
	)
}

export default Experience