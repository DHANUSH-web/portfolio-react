import { Box, HStack,Stack, VStack, Button, Text, Image, StackDivider, Link } from "@chakra-ui/react"
import { MdLink, MdArrowForward } from "react-icons/md"
import Achievements from "../components/Achievements"
import { Link as Hyper } from "react-router-dom"
import { motion } from "framer-motion"
import data from "../database.json"
import React from "react"
import "./Home.css"

const Home = () => {
	const profileHolder = data.profileHolder
	const profile = data.profiles[profileHolder]

	return (
		<Box className="profile" align="center" w="full" p={{ base: 10, md: 20, lg: 20}}>
			<HStack align="center" justify="center" spacing={{base: 0, lg: "10rem"}} display={{ base: "block", lg: "flex" }}>
				<VStack spacing="none">
					<Text fontSize={{base: 50, lg: 70}} fontFamily="googleSans">{profile.name}</Text>
					<HStack divider={<StackDivider />}>
						<Text to="/experience" as={Hyper} fontFamily="googleSans">{profile.jobRole}</Text>
						<Text as={Link} className="hyper-link" fontFamily="googleSansBold" color="blue.500" href={profile.companyURL} target="_blank">{profile.company}</Text>
					</HStack>
					<Stack mt={5} w="full" justify="center" direction={ { base: "column", md: "row", lg: "row" } }>
						<Button className="resumeBtn" as={Link} href={profile.resume} target="_blank" colorScheme="twitter" leftIcon={<MdLink />} download>Resume</Button>
						<Button className="seeMoreBtn" to="/about" as={Hyper} rightIcon={<MdArrowForward />}>See More</Button>
					</Stack>
				</VStack>
				<Box>
					<Image className="profileImage" cursor="pointer" onClick={()=>window.open(profile.githubProfile)} as={motion.img} initial={{scale: 0.7}} animate={{scale: 1}} src={profile.profilePhoto} borderRadius="50%" w={300} mt={{ base: 20, lg: 0}}/>
				</Box>
			</HStack>
			<Box className="description" mt={100}>
				<VStack align="flex-start" className="desc-container">
					<Text textAlign="left" className="desc-heading">Hi,</Text>
					<Text align="justify">Thank you for your time and patience, and it's a pleasure to have you here with me. My name is <b>{profile.name}</b>, and I work as a <b>{profile.jobRole}</b> at <Link className="hyper-link"><b>{profile.company}</b></Link> Although I am a fresher, I have almost six months of experience as an Automation Developer. As a programmer, my passion lies in coding and building apps and websites from scratch. Over the past three years, I have gained personal experience in app and website development and have taught myself multiple programming languages. This has allowed me to develop the skills necessary to solve real-time programming challenges.<br /><br/>As a result of my dedication, even the website you're currently viewing was developed by me using ReactJS. I am always looking to improve my skills and learn new things, and I am excited to continue my journey in the world of web development.</Text>
					<Hyper to="/about">
						<Button colorScheme="telegram" rightIcon={<MdArrowForward />}>Know More</Button>
					</Hyper>
				</VStack>
			</Box>
			<Achievements />
		</Box>
	)
}

export default Home