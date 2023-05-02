 import { Accordion, Stack, useColorMode, Link } from "@chakra-ui/react"
import profilePhoto from "../resources/images/profileImage.png"
import ProfileCard from "../components/ProfileCard"
import AccordItem from "../components/AccordItem"
import data from "../database.json"
import React from "react"
import './About.css'

const AboutTab = () => {
    const profile = data.profiles[data.profileHolder]
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    const aboutMe = <p>Hi everyone, my name is <b style={{ color: isDark ? "aqua" : "teal" }}>{profile.name}</b> and I'm from Bangalore. Presently, I'm working as an <b style={{ color: isDark ? "aqua" : "teal" }}>Automation Engineer</b> in a project of <Link className="hyper-link" href={profile.companyURL} style={{ color: isDark ? "aqua" : "teal" }}>{profile.company}</Link> I completed my degree in B.E in <b style={{ color: isDark ? "aqua" : "teal" }}>Electronics and Communication Engineering</b> from <Link className="hyper-link" href="https://www.atme.in" target="_blank" style={{ color: isDark ? "aqua" : "teal" }}>ATME College of Engineering, Mysuru</Link>. It's been 6 months working in TCS project as a TCS employee and I want to claim all the opportunities that suits to my skills I have. I'm passionate about programming in <b><u>Python and Web Development with ReactJS</u></b>, no offence but I'm also good in design thinking. I would love to claim all the opportunites that can help me to be a better programmer and to help me take a strong direction towards my destination. I always try to learn new technologies and develop some project with them ▶️ <Link className="hyper-link" href={profile.githubProfile} style={{ color: isDark ? "aqua" : "teal" }} target="_blank">GitHub</Link></p>

    const contactMe = <hgroup>
            <Stack direction="column">
                <span>☎️ +91 9731131772</span>
                <span>✉️ <Link href="mailto:dhanushhv75@gmail.com" className="hyper-link" style={{ color: isDark ? "aqua" : "teal" }}>dhanushhv75@gmail.com</Link></span>
            </Stack>
        </hgroup>

    return (
        <Stack direction="column">
            <ProfileCard profileName={profile.name} profilePhoto={profilePhoto} imageStyle={{ border: `solid 5px ${isDark ? "aqua" : "#0080ff"}`, borderRadius: "50%", padding: 7 }} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} profileURL={profile.githubProfile} hideResume={true} hideSeeMore={true} />
            <Accordion allowToggle defaultIndex={[0]}>
                <AccordItem title={<span style={{ display: "flex", alignItems: 'center' }}><img src={data.images.lgtm} width={30} style={{ marginRight: 15 }} /> Intro to myself</span>} titleAlign="left" content={aboutMe} contentAlign="justify" padding="5px 25px" />
                <AccordItem title={<span style={{ display: "flex", alignItems: 'center' }}><img src={data.images.rocket} width={30} style={{ marginRight: 15 }} /> Contact Info</span>} titleAlign="left" content={contactMe} contentAlign="justify" padding="5px 25px" />
            </Accordion>
        </Stack>
    )
}

export default AboutTab