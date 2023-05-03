import { MdDarkMode, MdDoNotTouch, MdHome, MdLightMode, MdPerson } from "react-icons/md"
import { Avatar, Center, Stack, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import React from "react"
import './QuickBar.css'

const QuickBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <Center className="container" w="full" display={{ base: 'block', md: 'none', lg: 'none' }}>
            <Stack direction="row" className="quickbar" spacing={7} justify="center" align='center'>
                <Link to="/"><Avatar icon={<MdHome />} /></Link>
                <Link to="/about"><Avatar icon={<MdPerson />} /></Link>
                <Link to="/projects"><Avatar icon={<MdDoNotTouch />} /></Link>
                <Avatar icon={isDark ? <MdLightMode/> : <MdDarkMode/>} onClick={toggleColorMode} />
            </Stack>
        </Center>
    )
}

export default QuickBar
