import { Button, Card, CardBody, CardFooter, CardHeader, Stack, Tag, TagLabel, TagLeftIcon, TagRightIcon, Text } from '@chakra-ui/react'
import { MdOutlineCalendarMonth, MdCheckCircle, MdLocationPin } from "react-icons/md";
import database from '../database.json'
import "./Education.css";

const profile = database.profiles[database.profileHolder];

const EducationCard = ({ title, year, progress, description, score, symbol, docURL, location }) => {
    return (
        <Card className='eduCard' border="solid 2.5px #0080ff" borderRadius={20} boxShadow="0 0 20px 2px #00000033">
            <CardHeader className='title'>
                <Text>{title}</Text>
            </CardHeader>
            <CardBody className='eduCardBody'>
                <Stack direction="row" mt={-5}>
                    <Tag className='tag' colorScheme='blue' size='lg' borderRadius={20}>
                        <TagLeftIcon><MdOutlineCalendarMonth size='md' /></TagLeftIcon>
                        <TagLabel>{year}</TagLabel>
                    </Tag>
                    <Tag className='tag' colorScheme='green' size='lg' borderRadius={20}>
                        <TagLeftIcon><MdCheckCircle size='md' /></TagLeftIcon>
                        <TagLabel>{progress}</TagLabel>
                    </Tag>
                </Stack>
                <Text textAlign='left' mt={5} fontFamily='inter, googlesansbold'>{description}</Text>
            </CardBody>
            <CardFooter>
                <Stack w='full'>
                    <Stack className='eduContainer' direction='row' spacing='auto' align='center'>
                        <Stack className='scoreDisp' direction='row' align='flex-end'>
                            <Text className='score'>{score}</Text>
                            <Text className='symbol' pb={4}>{symbol}</Text>
                        </Stack>
                        <Button className='docButton' colorScheme='telegram' variant='ghost' borderRadius={20} rightIcon={<MdCheckCircle />}>
                            View Docs
                        </Button>
                    </Stack>
                    <Tag colorScheme='orange' size={20} p='5px 12px' borderRadius={20} w='fit-content'>
                        <TagLeftIcon><MdLocationPin size='lg' /></TagLeftIcon>
                        <TagLabel>{location}</TagLabel>
                    </Tag>
                </Stack>
            </CardFooter>
        </Card>
    )
}

const EducationTab = () => {
    return (
        <Stack mt={20} spacing={4} direction={{ lg: 'row', md: 'column', base: 'column' }} justify='center'>
            {
                profile.education.map((edu) => (
                    <EducationCard title={edu.title} year={edu.year} progress={edu.progress} description={edu.description} score={edu.score} symbol={edu.symbol} docURL={edu.docURL} location={edu.location} />
                ))
            }
        </Stack>
    )
}

export default EducationTab