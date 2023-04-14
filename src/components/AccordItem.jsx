import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"


const AccordItem = ({ title, content, titleAlign, contentAlign, padding }) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex={1} textAlign={titleAlign}>
                        {title}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel p={padding} textAlign={contentAlign}>
                { content }
            </AccordionPanel>
        </AccordionItem>
    )
}

export default AccordItem