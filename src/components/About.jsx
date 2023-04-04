import ProfileCard from "../components/ProfileCard"
import data from "../database.json"
import React from "react"
import './About.css'
import { StackDivider, VStack } from "@chakra-ui/react"

const AboutTab = () => {
    const profile = data.profiles[data.profileHolder]

    return (
        <VStack divider={<StackDivider />}>
            <ProfileCard profileName={profile.name} profilePhoto={profile.profilePhoto} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} resume={profile.resume} profileURL={profile.githubProfile} hideSeeMore={true}/>
            <ProfileCard profileName="Chethan P" profilePhoto={profile.profilePhoto} jobRole="Embedded Engineer" companyName={profile.company} companyURL={profile.companyURL} hideResume={true} hideSeeMore={true}/>
        </VStack>
    )
}

export default AboutTab