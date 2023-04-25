import { Avatar, Badge, Text, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Stack, Wrap, useColorMode, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from "../database.json"
import './Certificates.css'
import React from 'react'

const profile = data.profiles[data.profileHolder]
const certificates = profile.certificates

export const SkillCard = ({ title, content, className, width, height, onClick, targetClick }) => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const hoverBackgroundColor = isDark ? "aqua" : "black"

    return (
        <Card as={motion.div} className={className} w={width} h={height} border={`solid 2px ${isDark ? "transparent" : "#00000022" }`} whileHover={{ borderColor: hoverBackgroundColor }} align="center" direction={{ base: "row", md: "column", lg: "column" }}>
            <CardHeader w='full'>
                <Stack direction={{ base: "column", md: "row", lg: "row" }} align="center">
                    <Avatar />
                    <Text display={{ base: "none", md: "block", lg: "block" }} textAlign="left">{title}</Text>
                </Stack>
            </CardHeader>
            <CardBody display={{ base: "none", md: "block", lg: "block" }}>
                <Badge colorScheme='teal'>{content}</Badge>
            </CardBody>
            <CardFooter justify="center">
                <Button className='view-button' fontFamily="googleSansBold" colorScheme='linkedin' size="sm" onClick={onClick} display={{ base: "none", md: "none", lg: "block" }}>
                    View Certificate
                </Button>
                <Button className='view-button' fontFamily="googleSansBold" colorScheme="linkedin" size="sm" onClick={targetClick} display={{ base: "block", md: "block", lg: "none" }}>
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
    const [ certificate, showCertificate ] = React.useState(certificates[0].url)

    return (
        <Center>
            <Stack direction="row" align="center">
                <Wrap p={15} justify="center" style={{ overflow: "auto", width: 800, height: 600}}>
                    {certificates.map((item) => <SkillCard className='skill-card' title={item.title} content={item.provider} onClick={() => showCertificate(item.url)} targetClick={() => window.open(item.url)} width={{ base: 300, md: 200, lg: 200 }} />)}
                </Wrap>
                <CertificatePreview src={certificate} width={500} height={600} display={{ base: "none", md: "none", lg: "block" }} />
            </Stack>
        </Center>
    )
}

export default Certificates