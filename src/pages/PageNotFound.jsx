import NavBar from "../components/NavBar"
import { Button, Flex, Text, Image } from "@chakra-ui/react"
import { IconHome } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import "./PageNotFound.css"
import React from "react"

const PageNotFound = () => {
	return (
		<Flex flexDir="column" placeContent="center" h="80vh" gap={5}>
			<NavBar />
			<Flex flexDir="column" align="center" gap={5}>
				<Image src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f636_200d_1f32b_fe0f/512.gif" alt="😶" width={150} height={150} />
				<Text fontFamily="interBold" fontSize={30}>Page Not Found !!!</Text>
				<Text fontFamily="interRegular">Your candidate is waiting for your call, go to<Link className="home_link" to="/">Home Page</Link></Text>
				<Button as={Link} to="/" fontFamily="interSemiBold" leftIcon={<IconHome size={15} />}>
					Go home
				</Button>
			</Flex>
		</Flex>
	)
}

export default PageNotFound