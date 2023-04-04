import { Box, HStack, Stack, VStack, Button, Text, Image, StackDivider, Link } from "@chakra-ui/react"
import { MdLink, MdArrowForward } from "react-icons/md"
import { Link as Hyper } from "react-router-dom"
import { motion } from "framer-motion"
import React from "react"

const ProfileCard = ({ ...props }) => {
	return (
		<>
			<Box className="profile" align="center" w="full" p={{ base: 10, md: 20, lg: 20 }}>
				<HStack align="center" justify="center" spacing={{ base: 0, lg: "10rem" }} display={{ base: "block", lg: "flex" }}>
					<VStack spacing="none">
						<Text className="profileName" fontSize={{ base: 50, lg: 70 }} fontFamily="googleSans">{props.profileName}</Text>
						<HStack divider={<StackDivider />}>
							<Text to="/experience" as={Hyper} fontFamily="googleSans">{props.jobRole}</Text>
							<Text as={Link} className="hyper-link" fontFamily="googleSansBold" color="blue.500" href={props.companyURL} target="_blank">{props.companyName}</Text>
						</HStack>
						<Stack mt={5} w="full" justify="center" direction={{ base: "column", md: "row", lg: "row" }}>
							<Button className="resumeBtn" hidden={props.hideResume} as={Link} href={props.resume} target="_blank" colorScheme="twitter" leftIcon={<MdLink />} download>Resume</Button>
							<Button className="seeMoreBtn" hidden={props.hideSeeMore} to="/about" as={Hyper} rightIcon={<MdArrowForward />}>See More</Button>
						</Stack>
					</VStack>
					<Box>
						<Image className="profileImage" cursor="pointer" onClick={() => window.open(props.profileURL)} as={motion.img} initial={{ scale: 0.7 }} animate={{ scale: 1 }} src={props.profilePhoto} borderRadius="50%" w={300} mt={{ base: 20, lg: 0 }} />
					</Box>
				</HStack>
			</Box>
		</>
	)
}

export default ProfileCard