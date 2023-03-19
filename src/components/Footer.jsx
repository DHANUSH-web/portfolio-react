import { Center, HStack, StackDivider, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import React from "react"
import "./Footer.css"


const Footer = () => {
    return (
        <Center className="footer" bg="#322f2c">
            <HStack justify="center" align="flex-start" spacing={{ base: 100, lg: 350 }} w="full">
                <VStack divider={<StackDivider />}>
                    <Text className="head">Quick Links</Text>
                    <VStack align="left">
                        <Link to="/" id="footerLinks">Home</Link>
                        <Link to="/about" id="footerLinks">About</Link>
                        <Link to="/projects" id="footerLinks">Projects</Link>
                        <Link to="/experience" id="footerLinks">Experience</Link>
                        <Link to="/contact" id="footerLinks">Contact</Link>
                    </VStack>
                </VStack>
                <VStack align="center" divider={<StackDivider />}>
                    <Text className="head">Profiles</Text>
                    <VStack align="left">
                        <a href="/" id="footerLinks">LinkedIn</a>
                        <a href="/" id="footerLinks">Hackerrank</a>
                        <a href="/" id="footerLinks">GitHub</a>
                        <a href="/" id="footerLinks">BitBucket</a>
                    </VStack>
                </VStack>
            </HStack>
        </Center>
    )
}

export default Footer