import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Tag, TagLabel, TagLeftIcon, Text, Tooltip } from '@chakra-ui/react'
import { IconCalendarMonth, IconCircleCheck, IconMapPin, IconLink, IconInfoCircle } from "@tabler/icons-react"
import database from '../database.json'
import "./Education.css";

const profile = database.profiles[database.profileHolder];

export const EducationCard = ({ title, year, progress, isCompleted, description, score, symbol, docURL, location }) => {
    return (
        <Card className='eduCard' maxW={370} borderRadius={20} shadow="none" border="solid" borderColor="blackAlpha.100" _hover={{shadow: "lg"}}>
            <CardHeader className='title'>
                <Text fontFamily="interBold" fontSize={{ base: 20, sm: 20, md: 25, lg: 25 }}>{title}</Text>
            </CardHeader>
            <CardBody className='eduCardBody'>
                <Flex gap={2}>
                    <Tag className='tag' colorScheme='blue' size='md' borderRadius="full">
                        <TagLeftIcon><IconCalendarMonth size='md' /></TagLeftIcon>
                        <TagLabel fontFamily="interSemiBold">{year}</TagLabel>
                    </Tag>
                    <Tag className='tag' colorScheme={ isCompleted ? 'green' : 'orange' } size='md' borderRadius="full">
                        <TagLeftIcon>
                            { isCompleted ? <IconCircleCheck size='sm' /> : <IconInfoCircle size='sm' />}
                        </TagLeftIcon>
                        <TagLabel fontFamily="interSemiBold">{progress}</TagLabel>
                    </Tag>
                </Flex>
                <Text textAlign="justify" mt={5} fontFamily='interMedium' fontSize={{base: "sm", sm: "sm"}}>{description}</Text>
                { docURL ?
                    <Tooltip label="🔗 Fork Git Repo" fontFamily='interSemiBold' fontSize={12} borderRadius={7}>
                        <Button
                            onClick={() => window.open(docURL)}
                            fontFamily="interSemiBold"
                            borderRadius="full"
                            leftIcon={<IconLink size={15} />}
                            size="sm"
                            my={2}
                        >
                            Git Repo
                        </Button>
                    </Tooltip> : ""
                }
            </CardBody>
            <CardFooter>
                <Flex w='full'>
                    <Flex className='eduContainer' direction={{base: 'column', sm: "row", md: "row", lg: 'row'}} alignItems="center" justify="space-between" w="full">
                        <Flex alignItems="flex-end" gap={2}>
                            <Text className='score'>{score}</Text>
                            <Text className='symbol' pb={6}>{symbol}</Text>
                        </Flex>
                        <Tag colorScheme='orange' size="md" p='5px 12px' borderRadius={20} w='fit-content'>
                            <TagLeftIcon><IconMapPin size='lg' /></TagLeftIcon>
                            <TagLabel fontFamily='interSemiBold'>{location}</TagLabel>
                        </Tag>
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
    )
}

const EducationTab = () => {
    return (
        <Flex flexWrap="wrap" gap={10} justifyContent="center">
            {
                profile.education.map((edu) => (
                    <EducationCard key={edu.title} title={edu.title} year={edu.year} progress={edu.progress} isCompleted={edu.isCompleted} description={edu.description} score={edu.score} symbol={edu.symbol} docURL={edu.docURL} location={edu.location} />
                ))
            }
        </Flex>
    )
}

export default EducationTab