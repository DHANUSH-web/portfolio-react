import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Center, Stack, Wrap, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from "../database.json"
import './Certificates.css'
import React from 'react'

const profile = data.profiles[data.profileHolder]
const certificates = profile.certificates

export const SkillCard = ({ title, content, className, width, height, onClick }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const hoverBackgroundColor = isDark ? "aqua" : "teal"

    return (
        <Card as={motion.div} className={className} w={width} h={height} border="solid 2px transparent" whileHover={{ borderColor: hoverBackgroundColor }}>
            <CardHeader>
                <Stack direction="row" align="center">
                    <Avatar />
                    <h1>{title}</h1>
                </Stack>
            </CardHeader>
            <CardBody>
                <Badge colorScheme='teal'>{content}</Badge>
            </CardBody>
            <CardFooter justify="center">
                <Button className='view-button' colorScheme='linkedin' size="sm" onClick={onClick}>
                    View Certificate
                </Button>
            </CardFooter>
        </Card>
    )
}

export const CertificatePreview = ({ src, width, height }) => {
    return <div>
        <iframe className='cert-prev' src={src} width={width} height={height}></iframe>
    </div>
}

const Certificates = () => {
    const [ certificate, showCertificate ] = React.useState(certificates[0].url)

    return (
        <Center>
            <Stack direction={{ base: "column", md: "column", lg: "row" }} align="center">
                <Wrap p={15} justify="center">
                    {certificates.map((item) => <SkillCard className='skill-card' title={item.title} content={item.provider} onClick={() => showCertificate(item.url)} width={200} />)}
                </Wrap>
                <CertificatePreview src={certificate} width={500} height={600} />
            </Stack>
        </Center>
    )
}

export default Certificates