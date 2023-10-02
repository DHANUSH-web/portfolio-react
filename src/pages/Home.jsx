import { Box, Stack, Button, Text, Link } from "@chakra-ui/react"
import profileImage from "../resources/images/profileImage.png"
import Achievements from "../components/Achievements"
import ProfileCard from "../components/ProfileCard"
import { Link as Hyper } from "react-router-dom"
import { MdArrowForwardIos } from "react-icons/md"
import NavBar from "../components/NavBar"
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
				<ProfileCard profileName={profile.name} profilePhoto={profileImage} profileURL={profile.githubProfile} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} resume={profile.resume} width={200} height={300} />
				<Box className="description" mt={100}>
					<Stack direction="column" align="flex-start" className="desc-container">
						<Stack direction="row" align="center">
							<Text textAlign="left" className="desc-heading">Hi,</Text>
							<img src={data.images.hello} width="60px"/>
						</Stack>
						<Text align="justify">Thank you for your time and patience, and it's a pleasure to have you here with me. My name is <b>{profile.name}</b>, and I work as an <b>{profile.jobRole}</b> at <Link className="hyper-link"><b>{profile.company}</b></Link> Although I am a fresher, I have almost six months of experience as an Automation Developer in an Automation Team. As a programmer, my passion lies in coding and building apps and websites from scratch. Over the past three years, I have gained personal experience in app and website development and have taught myself multiple programming languages. This has allowed me to develop the skills necessary to solve real-time programming challenges.<br /><br />As a result of my dedication, even the website you're currently viewing was developed by me using ReactJS. I am always looking to improve my skills and learn new things, and I am excited to continue my journey in the world of web development.</Text>
						<Hyper to="/about">
							<Button colorScheme='green' borderRadius={20} fontFamily="interSemiBold" fontSize={13} rightIcon={<MdArrowForwardIos />}>Know More</Button>
						</Hyper>
					</Stack>
				</Box>
				<Achievements />
			</Box>
		</div>
	)
}

export default Home