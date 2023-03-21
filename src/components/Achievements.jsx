import { Box, Button, Wrap, HStack, VStack, Card, CardHeader, CardBody, CardFooter, Text, Image } from "@chakra-ui/react"
import { MdArrowForward } from "react-icons/md"
import data from "../database.json"
import "./Achievements.css"
import React from "react"


const Achievements = () => {
	const profileHolder = data.profileHolder
	const profile = data.profiles[profileHolder]
	const cards = profile.achievements

	return (
		<VStack mt={{ base: 100, lg: 70 }} spacing={15}>
			<Text fontFamily="googleSansBold" fontSize={30}>Achievements</Text>
			<Wrap pt={25} className="ach-cards" w="full" justify="center" display={{ base: "none", md: "flex", lg: "flex"}}>
				{
					Object.keys(cards).map((card) => (
						<Card className="cards" align="center" w={300} p={15} border="solid 2px" borderColor="blackAlpha.300" borderRadius={12}>
							<CardHeader>
								<Image src={profile.profilePhoto} h={20} borderRadius="50%" />
								<Text fontFamily="googleSansBold">{cards[card].title}</Text>
							</CardHeader>
							<CardBody>
								<Text fontFamily="googleSans">{cards[card].desc}</Text>
							</CardBody>
							<CardFooter>
								<Button fontFamily="googleSans" colorScheme="messenger" w={200} rightIcon={<MdArrowForward />}>View</Button>
							</CardFooter>
						</Card>
						)
					)
				}
			</Wrap>
			<Wrap pt={25} className="ach-cards" w="full" align="center" justify="center" display={{ base: "flex", md: "none", lg: "none"}}>
				{
					Object.keys(cards).map((card) => (
							<HStack className="shortCards" align="center">
								<Image src={profile.profilePhoto} h={20} borderRadius={7} />
								<VStack justify="flex-start" w="full">
									<Text fontFamily="googleSansBold">{cards[card].title}</Text>
									<Button colorScheme="messenger" w="full" rightIcon={<MdArrowForward />}>View</Button>
								</VStack>
							</HStack>
						)
					)
				}
			</Wrap>
		</VStack>
	)
}

export default Achievements