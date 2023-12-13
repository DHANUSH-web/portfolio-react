import { Box, Stack, Button, Text } from "@chakra-ui/react"
import Achievements from "../components/Achievements"
import ProfileCard from "../components/ProfileCard"
import NavBar from "../components/NavBar"
import ProfileAvatar from "../resources/images/profile_avatar.png"
import { MdArrowForwardIos } from "react-icons/md"
import { Link } from "react-router-dom"
import data from "../database.json"
import React from "react"
import "./Home.css"

const Home = () => {
	const profileHolder = data.profileHolder
	const profile = data.profiles[profileHolder]

	return (
		<div>
			<NavBar isHome={true} />
			<Box className="profile" align="center" w="full" p={{ base: 10, md: 20, lg: 20 }}>
				<ProfileCard profileName={profile.name} profilePhoto={ProfileAvatar} profileURL={profile.githubProfile} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} resume={profile.resume} width={200} height={300} />
				<Box className="description" mt={100}>
					<Stack direction="column" align="flex-start" className="desc-container">
						<p className="desc-heading">Hi,</p>
						<Text align="justify">Thank you for your time and patience, and it's a pleasure to have you here with me. My name is <Text as='span' fontFamily='interSemiBold'>{profile.name}</Text>, and I work as an <Text as='span' fontFamily='interSemiBold'>{profile.jobRole}</Text> at <Text as='a' fontFamily="interSemiBold" href={profile.companyURL} target="_blank" className="hyper-link">{profile.company}</Text> Although I am a fresher, I have almost six months of experience as an Automation Developer in an Automation Team. As a programmer, my passion lies in coding and building apps and websites from scratch. Over the past three years, I have gained personal experience in app and website development and have taught myself multiple programming languages. This has allowed me to develop the skills necessary to solve real-time programming challenges.<br /><br />As a result of my dedication, even the website you're currently viewing was developed by me using ReactJS. I am always looking to improve my skills and learn new things, and I am excited to continue my journey in the world of web development.</Text>
						<Button as={Link} to="/about" colorScheme="telegram" borderRadius='full' fontFamily="interSemiBold" fontSize={13} rightIcon={<MdArrowForwardIos />}>Know More</Button>
					</Stack>
				</Box>
				<Achievements />
			</Box>
		</div>
	)
}

export default Home