import { IconHome, IconUser, IconFolder, IconSun, IconMoon, IconUserUp } from "@tabler/icons-react"
import { Text, Center, Flex, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import React from "react"
import './QuickBar.css'

const QuickBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <Center className="container" w="full" display={{ base: 'block', md: 'none', lg: 'none' }} align='center'>
            <Flex className="quickbar" direction="row" justifyContent='space-evenly' alignItems='center' gap={8}>
                <Link to="/">
                    <IconHome color="white" size={30} />
                    <Text fontFamily='interSemiBold' fontSize={12} color='gray.300'>Home</Text>
                </Link>
                <Link to="/about">
                    <IconUser color="white" size={30} />
                    <Text fontFamily='interSemiBold' fontSize={12} color='gray.300'>About</Text>
                </Link>
                <Link to="/projects">
                    <IconFolder color="white" size={30} />
                    <Text fontFamily='interSemiBold' fontSize={12} color='gray.300'>Projects</Text>
                </Link>
                <Link to="/experience">
                    <IconUserUp color="white" size={30} />
                    <Text fontFamily='interSemiBold' fontSize={12} color='gray.300'>Experience</Text>
                </Link>
                <span onClick={toggleColorMode}>
                    {isDark ? <IconSun color="white" size={30} /> : <IconMoon color="white" size={30} />}
                    <Text fontFamily='interSemiBold' fontSize={12} color='gray.300'>{ isDark ? "Light" : "Dark" }</Text>
                </span>
            </Flex>
        </Center>
    )
}

export default QuickBar
