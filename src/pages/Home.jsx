import { Box, HStack, VStack, Button, Text, Image, StackDivider, Link, Badge } from "@chakra-ui/react"
import { MdLink, MdArrowForward } from "react-icons/md"
import { Link as Hyper } from "react-router-dom"
import { motion } from "framer-motion"
import data from "../database.json"
import React from "react"
import "./Home.css"

const Home = () => {
	const profileHolder = data.profileHolder
	const profile = data.profiles[profileHolder]

	return (
		<Box className="profile" align="center" w="full" p={20}>
			<HStack align="center" justify="center" spacing={{base: 0, lg: "10rem"}} display={{ base: "block", lg: "flex" }}>
				<VStack spacing="none">
					<Text w={500} fontSize={{base: 50, lg: 70}} fontFamily="googleSans">{profile.name}</Text>
					<HStack divider={<StackDivider />}>
						<Text to="/experience" as={Hyper} fontFamily="googleSans">{profile.jobRole}</Text>
						<Text as={Link} className="hyper-link" fontFamily="googleSansBold" color="blue.500" href={profile.companyURL} target="_blank">{profile.company}</Text>
					</HStack>
					<HStack mt={5} spacing={5} w="full" justify="center">
						<Button as={Link} href={profile.resume} target="_blank" colorScheme="twitter" leftIcon={<MdLink />} download>Resume</Button>
						<Button to="/about" as={Hyper} rightIcon={<MdArrowForward />}>See More</Button>
					</HStack>
				</VStack>
				<Box>
					<Image cursor="pointer" onClick={()=>window.open(profile.githubProfile)} as={motion.img} initial={{scale: 0.7}} animate={{scale: 1}} src={profile.profilePhoto} borderRadius="50%" w={300} mt={{ base: 20, lg: 0}}/>
				</Box>
			</HStack>
		</Box>
	)
}

export default Home