import { Button, useColorMode } from "@chakra-ui/react"
import { MdColorLens } from "react-icons/md"
import React from "react"

export const ThemeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <Button onClick={toggleColorMode} mt={5} leftIcon={<MdColorLens />}>
            {colorMode.toUpperCase()}
        </Button>
    )
}
