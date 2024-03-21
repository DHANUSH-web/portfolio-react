import {Box, Stack, StackDivider, Text, Tooltip} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import data from "../database.json"
import React from "react"
import "./Footer.css"


const Footer = () => {
    const profiles = data.profiles[data.profileHolder].profiles

    return (
        <Box className="footer" bg="gray.900">
            <Stack
                direction='row'
                justifyContent='center'
                spacing={{base: 100, lg: 350}}
                pb={{ base: 50, sm: 50, md: 0, lg: 0 }}
                w="full"
            >
                <Stack divider={<StackDivider/>}>
                    <Text className="head">Quick Links</Text>
                    <Stack align="left">
                        <Link to="/" id="footerLinks">Home</Link>
                        <Link to="/about" id="footerLinks">About</Link>
                        <Link to="/projects" id="footerLinks">Projects</Link>
                        <Link to="/experience" id="footerLinks">Experience</Link>
                        <Link to="/contact" id="footerLinks">Contact</Link>
                    </Stack>
                </Stack>
                <Stack direction='column' align="center" divider={<StackDivider/>}>
                    <Text className="head">Profiles</Text>
                    <Stack direction='column' align="left" mt={2}>
                        <a href={profiles.linkedin.url} target="_blank" id="footerLinks">LinkedIn</a>
                        <Tooltip label="5⭐ in C++, 4⭐ in Python" placement='left' borderRadius={7}
                                 fontFamily='interSemiBold'>
                            <a href={profiles.hackerrank.url} target="_blank" id="footerLinks">Hackerrank</a>
                        </Tooltip>
                        <a href={profiles.github.url} target="_blank" id="footerLinks">GitHub</a>
                        <a href={profiles.bitbucket.url} target="_blank" id="footerLinks">BitBucket</a>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer