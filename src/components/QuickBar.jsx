import { MdDarkMode, MdDoNotTouch, MdHome, MdLightMode, MdPerson } from "react-icons/md"
import { Avatar, Center, Stack, useColorMode } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import './QuickBar.css'
import { Link } from "react-router-dom"

const QuickBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <Center as={motion.div} drag className="container" w="full" display={{ base: 'block', md: 'none', lg: 'none' }}>
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
