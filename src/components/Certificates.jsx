import { Image, Badge, Text, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Stack, Wrap } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from "../database.json"
import './Certificates.css'
import React from 'react'

const profile = data.profiles[data.profileHolder]
const certificates = profile.certificates

export const SkillCard = ({ title, content, image, className, width, height, onClick, targetClick }) => {
    return (
        <Card as={motion.div} className={className} w={width} h={height} borderRadius={20} boxShadow='none' borderWidth={1} borderColor='gray.200' align="center" direction={{ base: "row", md: "column", lg: "column" }}>
            <CardHeader w='full'>
                <Stack direction={{ base: "column", md: "row", lg: "row" }} align="center">
                    <Image src={(image === undefined || image === '') ? data.images.not_found : image} w="40px" borderRadius={7} />
                    <Text display={{ base: "none", md: "block", lg: "block" }} fontSize='sm'>{title}</Text>
                </Stack>
            </CardHeader>
            <CardBody display={{ base: "none", md: "block", lg: "block" }}>
                <Badge colorScheme='teal' borderRadius='full' pl={2} pr={2}>{content}</Badge>
            </CardBody>
            <CardFooter justify="center">
                <Button as={motion.button} colorScheme='messenger' borderRadius='full' className='view-button' whileTap={{ scale: 0.9 }} fontFamily="interSemiBold" w={150} size="sm" onClick={onClick} display={{ base: "none", md: "none", lg: "block" }}>
                    Preview
                </Button>
                <Button className='view-button' colorScheme='messenger' borderRadius='full' fontFamily="interSemiBold" size="sm" onClick={targetClick} display={{ base: "block", md: "block", lg: "none" }}>
                    View Certificate
                </Button>
            </CardFooter>
        </Card>
    )
}

export const CertificatePreview = ({ src, width, height, display }) => {
    return <Box display={display}>
        <iframe className='cert-prev' src={src} width={width} height={height}></iframe>
    </Box>
}

const Certificates = () => {
    const [certificate, showCertificate] = React.useState(certificates[0].url)

    return (
        <Center>
            <Stack direction="row" align="center">
                <Wrap p={15} justify="center" align="center" overflow="auto" w={{ base: 'fit-content', lg: 700 }} h={600} direction={{ base: "column", md: "row", lg: "row" }}>
                    {certificates.map((item) => <SkillCard className='skill-card' title={item.title} content={item.provider} image={item.logo} onClick={() => showCertificate(item.url)} targetClick={() => window.open(item.url)} width={{ base: 300, md: 200, lg: 200 }} height={{ lg: 250, md: 150 }} />)}
                </Wrap>
                <CertificatePreview src={certificate} width={500} height={600} display={{ base: "none", md: "none", lg: "block" }} />
            </Stack>
        </Center>
    )
}

export default Certificates