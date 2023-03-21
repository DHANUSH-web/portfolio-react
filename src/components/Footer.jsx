import { Center, HStack, StackDivider, Text, VStack, Link } from "@chakra-ui/react"
import { Link as Hyper } from "react-router-dom"
import data from "../database.json";
import React from "react"
import "./Footer.css"


const Footer = () => {
    /* const quickLinks = {
        home: { title: "Home", url: "/"},
        about: { title: "About", url: "/about"},
        projects: { title: "Projects", url: "/projects"},
        experience: { title: "Experience", url: "/experience"},
        contact: { title: "Contact", url: "/contact"},
    }

    const profiles = {
        linkedin: { title: "LinkedIn", url: "/", icon: <SiLinkedin size="20px" /> },
        hackerrank: { title: "Hackerrank", url: "/", icon: <SiHackerrank size="20px" /> },
        github: { title: "GitHub", url: "/", icon: <SiGithub size="20px" /> },
        bitbucket: { title: "Bitbucket", url: "/", icon: <SiBitbucket size="20px" /> },
    } */
    const profileHolder = data.profileHolder
    const profiles = data.profiles[profileHolder].profiles

    return (
        <Center className="footer" bg="#111c2f">
            <HStack justify="center" align="flex-start" spacing={{ base: 100, lg: 350 }} w="full">
                <VStack divider={<StackDivider />}>
                    <Text className="head">Quick Links</Text>
                    <VStack align="left">
                        <Hyper to="/" id="footerLinks">Home</Hyper>
                        <Hyper to="/about" id="footerLinks">About</Hyper>
                        <Hyper to="/projects" id="footerLinks">Projects</Hyper>
                        <Hyper to="/experience" id="footerLinks">Experience</Hyper>
                        <Hyper to="/contact" id="footerLinks">Contact</Hyper>
                        {/* {
                            Object.keys(quickLinks).map((link) => (
                                <Link to={quickLinks[link].url} id="footerLinks">{quickLinks[link].title}</Link>
                            ))
                        } */}
                    </VStack>
                </VStack>
                <VStack align="center" divider={<StackDivider />}>
                    <Text className="head">Profiles</Text>
                    <VStack align="left" mt={2}>
                        <Link href={profiles.hackerrank} target="_blank" id="footerLinks">LinkedIn</Link>
                        <Link href={profiles.hackerrank} target="_blank" id="footerLinks" title="(5 star in C++, 4 star in Python)">Hackerrank</Link>
                        <Link href={profiles.github} target="_blank" id="footerLinks">GitHub</Link>
                        <Link href={profiles.bitbucket} target="_blank" id="footerLinks">BitBucket</Link>
                        {/* {
                            Object.keys(profiles).map((profile) => (
                                <Tooltip fontFamily="googleSansBold" label={profiles[profile].title} placement="end">
                                    <a href={profiles[profile].url}>{profiles[profile].icon}</a>
                                </Tooltip>
                            ))
                        } */}
                    </VStack>
                </VStack>
            </HStack>
        </Center>
    )
}

export default Footer