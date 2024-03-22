import { Button, Center } from "@chakra-ui/react"
import { IconHome } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import "./MaintainancePage.css"
import React from "react"

const MaintainancePage = () => {
	return (
		<Center h="60vh" flexDirection="column">
			<center className="animate">
				<div>
					<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f331/512.gif" alt="❄️" width="150" height="150" />
					<p className="title_text">under development</p>
				</div>
			</center>
			<br/>
			<center className="navigate">
				<h4 className="helper">This page is currently under maintainance.. sorry for the inconvinience, please go to<Link className="home_link" to="/">Home Page</Link></h4>
				<Button as={Link} to="/" className="home_button" colorScheme="linkedin" borderRadius={12} leftIcon={<IconHome />}>Go To Home</Button>
			</center>
		</Center>
	)
}

export default MaintainancePage