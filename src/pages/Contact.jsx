import { Stack, Button, Flex, Tooltip, useColorMode } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import { motion } from "framer-motion"
import database from "../database.json"
import React from "react"
import "./Contact.css"

const Contact = () => {
	const { colorMode } = useColorMode()
	const isDark = colorMode === "dark"
	const profile = database.profiles[database.profileHolder]
	const info = profile.contact_info

	return (
		<div className="contact_container">
			<NavBar isContact={true} />
			<div>
				<Stack align='center'>
					<span className="contact_title">get in touch</span>
					<img className="contact_gif" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f607/512.gif" alt="🎊" width="150px" height="150px" />
					<Flex wrap='wrap' gap={5} m={5} justify='center'>
						{
							info.map(contact => (
								<Tooltip label={contact.tooltip} borderRadius={7}>
									<Button
										as={motion.button}
										onClick={() => window.open(contact.href)}
										fontFamily='intersemibold'
										borderRadius='full'
										colorScheme="linkedin"
									>
										{contact.service}
									</Button>
								</Tooltip>
							))
						}
					</Flex>
				</Stack>
			</div>
		</div>
	)
}

export default Contact