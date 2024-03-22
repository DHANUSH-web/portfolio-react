import { Box, Button, Badge, Center, Flex, TableContainer, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react'
import { IconExternalLink } from "@tabler/icons-react"
import data from "../database.json"
import './Certificates.css'
import React from 'react'

const profile = data.profiles[data.profileHolder]
const certificates = profile.certificates

export const CertificatePreview = ({ src, width, height, display }) => {
    return <Box display={display}>
        <iframe className='cert-prev' src={src} width={width} height={height}></iframe>
    </Box>
}

const Certificates = () => {
    const [certificate, showCertificate] = React.useState(certificates[0].url)

    return (
        <Flex justify="center" align="center" gap={5}>
            {/* Table of Certificates */}
            <TableContainer border="solid" height={600} borderColor="blackAlpha.100" overflowY="auto" borderRadius={7}>
                <Table size="sm">
                    <Thead h={12}>
                        <Tr>
                            <Th fontFamily="interBold">Sl. No</Th>
                            <Th fontFamily="interBold">Logo</Th>
                            <Th fontFamily="interBold">Course Name</Th>
                            <Th fontFamily="interBold">Platform/Provider</Th>
                            <Th fontFamily="interBold">Certificate</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {certificates.map((cert, idx) => (
                            <Tr key={"cert__" + idx}>
                                <Td>{idx + 1}</Td>
                                <Td>
                                    <img src={cert.logo} alt={cert.title} width={20} />
                                </Td>
                                <Td>{cert.title}</Td>
                                <Td>
                                    <Badge variant="subtle" colorScheme='linkedin' cursor="pointer" textTransform="capitalize" p={1} borderRadius={5}>
                                        {cert.provider}
                                    </Badge>
                                </Td>
                                <Td>
                                    <Button variant="outline" size="sm" display={{ base: "none", md: "none", lg: "block" }} onClick={() => showCertificate(cert.url)}>Preview</Button>
                                    <Button variant="outline" size="sm" display={{ base: "block", md: "block", lg: "none" }} onClick={() => window.open(cert.url)} rightIcon={<IconExternalLink size={12} />}>Open</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <CertificatePreview src={certificate} width={500} height={600} display={{ base: "none", md: "none", lg: "block" }} />
        </Flex>
    )
}

export default Certificates