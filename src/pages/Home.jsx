import { Box, HStack, VStack, Text, Avatar, StackDivider } from "@chakra-ui/react"
import React from "react"
import "./Home.css"

const Home = () => {
	return (
		<Box className="profile" justify="center" width="full" bg="transparent" p={20}>
			<HStack justify="center" spacing="10rem">
				<VStack spacing="none">
					<Text fontSize={70} fontFamily="googleSans">DHANUSH H V</Text>
					<HStack divider={<StackDivider />}>
						<Text fontFamily="googleSans">Front-End Web Developer</Text>
						<Text fontFamily="googleSansBold" color="blue.500">TATA Consultancy Services Pvt Ltd.</Text>
					</HStack>
				</VStack>
				<Avatar size="4xl" align="center" />
			</HStack>
		</Box>
	)
}

export default Home