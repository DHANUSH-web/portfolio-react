import ProfileCard from "../components/ProfileCard"
import { Accordion, Box, Stack } from "@chakra-ui/react"
import data from "../database.json"
import React from "react"
import './About.css'
import AccordItem from "./AccordItem"

const AboutTab = () => {
    const profile = data.profiles[data.profileHolder]

    return (
        <Stack direction="column">
            <ProfileCard profileName={profile.name} profilePhoto={profile.profilePhoto} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} resume={profile.resume} profileURL={profile.githubProfile} hideResume={true} hideSeeMore={true} />
            <Accordion allowToggle>
                <AccordItem title="Toggle 1" content="Welcome to Toggle 1" titleAlign='left' contentAlign='justify' padding={2} />
                <AccordItem title="Toggle 1" content="Welcome to Toggle 1" titleAlign='left' contentAlign='justify' padding={2} />
                <AccordItem title="Toggle 1" content="Welcome to Toggle 1" titleAlign='left' contentAlign='justify' padding={2} />
                <AccordItem title="Toggle 1" content="Welcome to Toggle 1" titleAlign='left' contentAlign='justify' padding={2} />
                <AccordItem title="Toggle 1" content="Welcome to Toggle 1" titleAlign='left' contentAlign='justify' padding={2} />
            </Accordion>
        </Stack>
    )
}

export default AboutTab