import { Button, Wrap, HStack, VStack, Card, CardHeader, CardBody, CardFooter, Text, Image, useColorMode } from "@chakra-ui/react"
import { AchievementsDark, AchievementsLight } from "./FigmaDesigns"
import data from "../database.json"
import "./Achievements.css"
import React from "react"

const Achievements = () => {
	const { colorMode } = useColorMode()
	const profile = data.profiles[data.profileHolder]
	const cards = profile.achievements
	const isDark = colorMode === 'dark'

	return (
		<VStack mt={{ base: 100, lg: 70 }} spacing={15}>
			{ isDark ? <AchievementsDark /> : <AchievementsLight /> }
			<Wrap pt={25} w="full" justify="center" display={{ base: "none", md: "grid", lg: "grid" }}>
				{
					cards.map((card) => (
						<Card className="cards" align="center" w={300} p={15} border="solid 2px" borderColor="blackAlpha.200" borderRadius={12}>
							<CardHeader>
								<HStack w="full" spacing={5}>
									<Image src={card.icon} h={20} borderRadius="50%" />
									<Text textAlign="initial" fontFamily="interSemiBold">{card.title}</Text>
								</HStack>
							</CardHeader>
							<CardBody>
								<Text textAlign="initial" fontFamily="interRegular">{card.desc}</Text>
							</CardBody>
							<CardFooter>
								<Button className="view-btn" onClick={() => window.open(card.url)} w='200px' borderRadius={20} colorScheme="blue">View</Button>
							</CardFooter>
						</Card>
					)
					)
				}
			</Wrap>
			<Wrap pt={25} w="full" align="center" justify="center" display={{ base: "flex", md: "none", lg: "none" }}>
				{
					cards.map((card) => (
						<HStack className="shortCards" align="center">
							<Image src={card.icon} h={20} borderRadius={7} />
							<VStack w="full">
								<Text textAlign="initial" fontSize={15} fontFamily="interSemiBold">{card.title}</Text>
								<Button onClick={() => window.open(card.url)} fontFamily="interRegular" fontWeight={350} colorScheme="blue" w="full">View</Button>
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