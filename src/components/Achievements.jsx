import { Button, Stack, Card, CardHeader, CardBody, CardFooter, Text, Image, useColorMode, Flex } from "@chakra-ui/react"
import { AchievementsDark, AchievementsLight } from "./FigmaDesigns"
import { IconExternalLink } from "@tabler/icons-react"
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
									rightIcon={<IconExternalLink size={15} />}
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
						<Flex direction='row' width={250} gap={2} border="solid" borderColor="blackAlpha.200" borderRadius={12} shadow="lg" p={1}>
							<Image src={card.icon} h={20} borderRadius={7} />
							<Flex direction='column' justify="space-between" wrap="wrap" width="inherit">
								<Text textAlign="initial" fontSize={15} fontFamily="interSemiBold">{card.title}</Text>
								<Button size="sm" onClick={() => window.open(card.url)} rightIcon={<IconExternalLink size={15} />}>View</Button>
							</Flex>
						</Flex>
					))
				}
			</Flex>
		</Stack>
	)
}

export default Achievements