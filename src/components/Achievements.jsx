import { Button, Wrap, HStack, VStack, Card, CardHeader, CardBody, CardFooter, Text, Image } from "@chakra-ui/react"
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
			<Wrap pt={25} w="full" justify="center" display={{ base: "none", md: "grid", lg: "grid"}}>
				{
					cards.map((card) => (
						<Card className="cards" align="center" w={300} h={380} p={15} border="solid 2px" borderColor="blackAlpha.200" borderRadius={12}>
							<CardHeader>
								<HStack w="full" spacing={5}>
									<Image src={card.icon} h={20} borderRadius="50%" />
									<Text textAlign="initial" fontFamily="googleSansBold">{card.title}</Text>
								</HStack>
							</CardHeader>
							<CardBody>
								<Text textAlign="initial" fontFamily="googleSans">{card.desc}</Text>
							</CardBody>
							<CardFooter>
								<Button onClick={() => window.open(card.url)} fontFamily="googleSans" fontWeight={350} colorScheme="messenger" w={200} rightIcon={<MdArrowForward />}>View</Button>
							</CardFooter>
						</Card>
						)
					)
				}
			</Wrap>
			<Wrap pt={25} w="full" align="center" justify="center" display={{ base: "flex", md: "none", lg: "none"}}>
				{
					cards.map((card) => (
							<HStack className="shortCards" align="center">
								<Image src={card.icon} h={20} borderRadius={7} />
								<VStack w="full">
									<Text textAlign="initial" fontSize={15} fontFamily="googleSansBold">{card.title}</Text>
									<Button onClick={() => window.open(card.url)} fontFamily="googleSans" colorScheme="messenger" w="full" rightIcon={<MdArrowForward />}>View</Button>
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