import { BiHome, BiUser, BiFolder, BiSun, BiMoon } from "react-icons/bi"
import { Center, Flex, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import React from "react"
import './QuickBar.css'

const QuickBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <Center className="container" w="full" display={{ base: 'block', md: 'none', lg: 'none' }} align='center'>
            <Flex className="quickbar" w="fit-content" direction="row" justifyContent='center' alignItems='center' gap={8}>
                <Link to="/"><BiHome size={30} /></Link>
                <Link to="/about"><BiUser size={30} /></Link>
                <Link to="/projects"><BiFolder size={30} /></Link>
                <span onClick={toggleColorMode}>
                    {isDark ? <BiSun size={30} /> : <BiMoon size={30} />}
                </span>
            </Flex>
        </Center>
    )
}

export default QuickBar
