import ProfileCard from "../components/ProfileCard"
import { VStack } from "@chakra-ui/react"
import data from "../database.json"
import React from "react"
import './About.css'

const AboutTab = () => {
    const profile = data.profiles[data.profileHolder]

    return (
        <VStack>
            <ProfileCard profileName={profile.name} profilePhoto={profile.profilePhoto} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} resume={profile.resume} profileURL={profile.githubProfile} hideResume={true} hideSeeMore={true} />
        </VStack>
    )
}

export default AboutTab