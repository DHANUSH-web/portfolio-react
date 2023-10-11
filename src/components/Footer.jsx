import { Center, Stack, StackDivider, Text, Tooltip } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import data from "../database.json";
import React from "react"
import "./Footer.css"


const Footer = () => {
    const profileHolder = data.profileHolder
    const profiles = data.profiles[profileHolder].profiles

    return (
        <Center className="footer" bg="#111c2f" pb={{ base: 100, sm: 100, md: 5, lg: 5 }}>
            <Stack direction='row' justifyContent='center' spacing={{ base: 100, lg: 350 }} w="full">
                <Stack divider={<StackDivider />}>
                    <Text className="head">Quick Links</Text>
                    <Stack align="left">
                        <Link to="/" id="footerLinks">Home</Link>
                        <Link to="/about" id="footerLinks">About</Link>
                        <Link to="/projects" id="footerLinks">Projects</Link>
                        <Link to="/experience" id="footerLinks">Experience</Link>
                        <Link to="/contact" id="footerLinks">Contact</Link>
                    </Stack>
                </Stack>
                <Stack direction='column' align="center" divider={<StackDivider />}>
                    <Text className="head">Profiles</Text>
                    <Stack direction='column' align="left" mt={2}>
                        <a href={profiles.linkedin.url} target="_blank" id="footerLinks">LinkedIn</a>
                        <Tooltip label="5⭐ in C++, 4⭐ in Python" placement='left' borderRadius={7} fontFamily='interSemiBold'>
                            <a href={profiles.hackerrank.url} target="_blank" id="footerLinks">Hackerrank</a>
                        </Tooltip>
                        <a href={profiles.github.url} target="_blank" id="footerLinks">GitHub</a>
                        <a href={profiles.bitbucket.url} target="_blank" id="footerLinks">BitBucket</a>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    )
}

export default Footer