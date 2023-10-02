import { Card, CardBody, CardFooter, CardHeader, Flex, Stack, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react'
import { MdOutlineCalendarMonth, MdCheckCircle, MdLocationPin } from "react-icons/md";
import database from '../database.json'
import "./Education.css";

const profile = database.profiles[database.profileHolder];

export const EducationCard = ({ title, year, progress, description, score, symbol, docURL, location }) => {
    return (
        <Card className='eduCard' borderRadius={20} boxShadow="0 0 20px 2px #00000033">
            <CardHeader className='title'>
                <Text fontFamily="interBold" fontSize={{ base: 20, sm: 20, md: 30, lg: 35 }}>{title}</Text>
            </CardHeader>
            <CardBody className='eduCardBody'>
                <Stack direction={{lg: "row", md: "row", sm: "column", base: "column"}} mt={-5}>
                    <Tag className='tag' colorScheme='blue' size='lg' borderRadius={20}>
                        <TagLeftIcon><MdOutlineCalendarMonth size='md' /></TagLeftIcon>
                        <TagLabel>{year}</TagLabel>
                    </Tag>
                    <Tag className='tag' colorScheme='green' size='lg' borderRadius={20}>
                        <TagLeftIcon><MdCheckCircle size='md' /></TagLeftIcon>
                        <TagLabel>{progress}</TagLabel>
                    </Tag>
                </Stack>
                <Text textAlign='start' mt={5} fontFamily='interSemiBold' display={{base: "none", sm: "block", md: "block", lg: "block"}}>{description}</Text>
            </CardBody>
            <CardFooter>
                <Stack w='full'>
                    <Stack className='eduContainer' direction={{base: 'column', sm: "row", md: "row", lg: 'row'}} spacing='auto' align='center'>
                        <Stack className='scoreDisp' direction='row' align='flex-end'>
                            <Text className='score'>{score}</Text>
                            <Text className='symbol' pb={4}>{symbol}</Text>
                        </Stack>
                        <Tag colorScheme='orange' size={20} p='5px 12px' borderRadius={20} w='fit-content'>
                            <TagLeftIcon><MdLocationPin size='lg' /></TagLeftIcon>
                            <TagLabel>{location}</TagLabel>
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
                    <EducationCard title={edu.title} year={edu.year} progress={edu.progress} description={edu.description} score={edu.score} symbol={edu.symbol} docURL={edu.docURL} location={edu.location} />
                ))
            }
        </Flex>
    )
}

export default EducationTab