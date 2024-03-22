import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Stack, Tag, TagLabel, TagLeftIcon, Text, Tooltip } from '@chakra-ui/react'
import { IconCalendarMonth, IconCircleCheck, IconMapPin, IconLink, IconInfoCircle } from "@tabler/icons-react"
import database from '../database.json'
import "./Education.css";

const profile = database.profiles[database.profileHolder];

export const EducationCard = ({ title, year, progress, isCompleted, description, score, symbol, docURL, location }) => {
    return (
        <Card className='eduCard' borderRadius={20} shadow="xl" border="solid" borderColor="blackAlpha.200">
            <CardHeader className='title'>
                <Text fontFamily="interBold" fontSize={{ base: 20, sm: 20, md: 30, lg: 35 }}>{title}</Text>
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
                <Text textAlign='start' mt={5} fontFamily='interMedium' fontSize={{base: "sm", sm: "sm"}}>{description}</Text>
                { docURL ?
                    <Tooltip label="🔗 Fork Git Repo" fontFamily='interSemiBold' fontSize={12} borderRadius={7}>
                        <Button
                            onClick={() => window.open(docURL)}
                            fontFamily="interSemiBold"
                            borderRadius="full"
                            leftIcon={<IconLink />}
                            size="sm"
                        >
                            Git Repo
                        </Button>
                    </Tooltip> : ""
                }
            </CardBody>
            <CardFooter>
                <Stack w='full'>
                    <Stack className='eduContainer' direction={{base: 'column', sm: "row", md: "row", lg: 'row'}} spacing='auto' alignItems='center' justify='space-between'>
                        <Stack className='scoreDisp' direction='row' align='flex-end'>
                            <Text className='score'>{score}</Text>
                            <Text className='symbol' pb={4}>{symbol}</Text>
                        </Stack>
                        <Tag colorScheme='orange' size="md" p='5px 12px' borderRadius={20} w='fit-content'>
                            <TagLeftIcon><IconMapPin size='lg' /></TagLeftIcon>
                            <TagLabel fontFamily='interSemiBold'>{location}</TagLabel>
                        </Tag>
                    </Stack>
                </Stack>
            </CardFooter>
        </Card>
    )
}

const EducationTab = () => {
    return (
        <Flex flexWrap="wrap" gap={10} placeContent='center' w="full">
            {
                profile.education.map((edu) => (
                    <EducationCard title={edu.title} year={edu.year} progress={edu.progress} isCompleted={edu.isCompleted} description={edu.description} score={edu.score} symbol={edu.symbol} docURL={edu.docURL} location={edu.location} />
                ))
            }
        </Flex>
    )
}

export default EducationTab