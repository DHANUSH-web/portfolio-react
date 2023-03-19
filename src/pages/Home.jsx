import { Box, HStack,Stack, VStack, Button, Text, Image, StackDivider, Link } from "@chakra-ui/react"
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
					<Image cursor="pointer" onClick={()=>window.open(profile.githubProfile)} as={motion.img} initial={{scale: 0.7}} animate={{scale: 1}} src={profile.profilePhoto} borderRadius="50%" w={300} mt={{ base: 20, lg: 0}}/>
				</Box>
			</HStack>
			<Box className="description" mt={{ base: 100, lg: 200 }}>
				<VStack align="flex-start" className="desc-container">
					<Text textAlign="left" className="desc-heading">Hi,</Text>
					<Text align="justify">I appreciate your time and patience and it's my great pleasure to have you here. By the way, my name is <b>{profile.name}</b> and I'm a <b>{profile.jobRole}</b> at<Link className="hyper-link" href={profile.companyURL} target="_blank">{profile.company}</Link> I'm a fresher with almost 6 months of experience in TCS as <b>Automation Developer</b>.
					<br/><br />Since, I'm a programmer who is more focused on coding stuff and love build apps and websites from scratch. After more than 3 years of personal expereince in app and website development, I taught myself with different programming languages on how to develop and solve the real time programming challenges. <b>Even, this website you'r seeing also developed by me with ReactJS</b></Text>
				</VStack>
			</Box>
		</Box>
	)
}

export default Home