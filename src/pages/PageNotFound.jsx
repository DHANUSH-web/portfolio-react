import NavBar from "../components/NavBar"
import { Button, Center } from "@chakra-ui/react"
import { IconHome } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import "./PageNotFound.css"
import React from "react"

const PageNotFound = () => {
	return (
		<Center h="60vh" flexDirection="column">
			<NavBar />
			<center className="animate">
				<div>
					<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f636_200d_1f32b_fe0f/512.gif" alt="😶" width="150" height="150" />
					<p className="title_text">Page Not Found !!!</p>
				</div>
			</center>
			<br/>
			<center className="navigate">
				<h4 className="helper">Your candidate is waiting for your call, go to<Link className="home_link" to="/">Home Page</Link></h4>
				<Button as={Link} to="/" className="home_button" colorScheme="linkedin" borderRadius={12} leftIcon={<IconHome />}>Go To Home</Button>
			</center>
		</Center>
	)
}

export default PageNotFound