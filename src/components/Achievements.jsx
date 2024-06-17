import { Button, Card, CardHeader, CardBody, CardFooter, Text, Image, useColorMode, Flex } from "@chakra-ui/react"
import { AchievementsDark, AchievementsLight } from "./FigmaDesigns"
import { IconExternalLink } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import data from "../database.json"
import "./Achievements.css"
import React from "react"

const Achievements = () => {
	const { colorMode } = useColorMode()
	const profile = data.profiles[data.profileHolder]
	const cards = profile.achievements
	const isDark = colorMode === 'dark'

	return (
		<Flex direction='column' alignItems="center" gap={12} my={20} mx={5}>
			{ isDark ? <AchievementsDark /> : <AchievementsLight /> }
			<Flex maxW={1024} flexWrap="wrap" justifyContent="center" gap={5} display={{base: "none", sm: "none", md: "flex", lg: "flex"}}>
				{
					cards.map((card, idx) => (
						<Card key={"card__" + idx} w={400} borderRadius={20} variant="outline">
							<CardHeader>
								<Flex alignItems="center" gap={5}>
									<Image src={card.icon} h={20} borderRadius="full" />
									<Text fontFamily="interSemiBold">{card.title}</Text>
								</Flex>
							</CardHeader>
							<CardBody>
								<Text fontFamily="interRegular">{card.desc}</Text>
							</CardBody>
							<CardFooter justifyContent="end">
								<Link to={card.url} target="_blank">
									<Button
										fontFamily="interSemiBold"
										width={28}
										rightIcon={<IconExternalLink size={12} />}
									>
										View
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))
				}
			</Flex>
			<Flex flexWrap="wrap" gap={5} justifyContent="center" display={{ base: 'flex', sm: 'flex', md: 'none', lg: 'none'}}>
				{
					cards.map((card) => (
						<Flex key={"card__"+card.url} gap={2} w={300} p={1} borderRadius={9} border="solid" borderColor={isDark ? "whiteAlpha.200" : "blackAlpha.100"} shadow="sm">
							<Image src={card.icon} h={20} borderRadius={7} />
							<Flex direction='column' justifyContent="space-between" alignItems="end" w="full">
								<Text textAlign="initial" fontSize={15} fontFamily="interSemiBold">{card.title}</Text>
								<Link to={card.url}>
									<Button width="fit" size="sm" rightIcon={<IconExternalLink size={15} />}>View</Button>
								</Link>
							</Flex>
						</Flex>
					))
				}
			</Flex>
		</Flex>
	)
}

export default Achievements