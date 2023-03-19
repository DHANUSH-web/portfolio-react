import { Center, HStack, StackDivider, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
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

    return (
        <Center className="footer" bg="#111c2f">
            <HStack justify="center" align="flex-start" spacing={{ base: 100, lg: 350 }} w="full">
                <VStack divider={<StackDivider />}>
                    <Text className="head">Quick Links</Text>
                    <VStack align="left">
                        <Link to="/" id="footerLinks">Home</Link>
                        <Link to="/about" id="footerLinks">About</Link>
                        <Link to="/projects" id="footerLinks">Projects</Link>
                        <Link to="/experience" id="footerLinks">Experience</Link>
                        <Link to="/contact" id="footerLinks">Contact</Link>
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
                        <a href="/" id="footerLinks">LinkedIn</a>
                        <a href="/" id="footerLinks">Hackerrank</a>
                        <a href="/" id="footerLinks">GitHub</a>
                        <a href="/" id="footerLinks">BitBucket</a>
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