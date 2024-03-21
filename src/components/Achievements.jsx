import { Button, Stack, Card, CardHeader, CardBody, CardFooter, Text, Image, useColorMode, Flex } from "@chakra-ui/react"
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
		<Stack direction='column' mt={{ base: 100, lg: 70 }} spacing={15} align='center'>
			{ isDark ? <AchievementsDark /> : <AchievementsLight /> }
			<Flex flexWrap='wrap' justifyContent='center' gap={5} w="full" display={{ base: 'none', sm: 'none', md: 'flex', lg: 'flex' }}>
				{
					cards.map((card, idx) => (
						<Card key={"card__" + idx} w={400} borderRadius={20} variant="outline">
							<CardHeader>
								<Stack direction='row' spacing={5} align='center'>
									<Image src={card.icon} h={20} borderRadius="full" />
									<Text textAlign="initial" fontFamily="interSemiBold">{card.title}</Text>
								</Stack>
							</CardHeader>
							<CardBody>
								<Text textAlign="initial" fontFamily="interRegular" fontSize="md">{card.desc}</Text>
							</CardBody>
							<CardFooter justify="end">
								<Button
									fontFamily="interSemiBold"
									width={28}
									onClick={() => window.open(card.url)}
								>
									View
								</Button>
							</CardFooter>
						</Card>
					))
				}
			</Flex>
			<Flex flexWrap='wrap' gap={5} justifyContent='center' w="full" display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none'}}>
				{
					cards.map((card) => (
						<Stack direction='row' className="shortCards" align="center">
							<Image src={card.icon} h={20} borderRadius={7} />
							<Stack direction='column' w="full">
								<Text textAlign="initial" fontSize={15} fontFamily="interSemiBold">{card.title}</Text>
								<Button onClick={() => window.open(card.url)} fontFamily="interRegular" fontWeight={350} colorScheme="blue" w="full">View</Button>
							</Stack>
						</Stack>
					)
					)
				}
			</Flex>
		</Stack>
	)
}

export default Achievements