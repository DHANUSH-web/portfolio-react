import { Badge, IconButton, Image, Stack, Text, Tooltip, Wrap, useColorMode } from "@chakra-ui/react"
import { FaGithub, FaHackerrank, FaLinkedin, FaBitbucket } from "react-icons/fa"
import SkillDesktopView from "../resources/images/skill_desktop_view.svg"
import SkillMobileView from "../resources/images/skills_mobile_view.png"
import profilePhoto from "../resources/images/profileImage.png"
import MyselfMobile from '../resources/images/MyselfMobile.png'
import ProfileCard from "../components/ProfileCard"
import Myself from "../resources/images/Myself.png"
import { motion } from 'framer-motion'
import data from "../database.json"
import React from "react"
import './About.css'

// Global profile
const profile = data.profiles[data.profileHolder]

const AboutTab = () => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <Stack>
            <ProfileCard profileName={profile.name} textMode={true} profilePhoto={profilePhoto} imageStyle={{ border: `solid 5px ${isDark ? "aqua" : "#0080ff"}`, borderRadius: "50%", padding: 7 }} jobRole={profile.jobRole} companyName={profile.company} companyURL={profile.companyURL} profileURL={profile.githubProfile} hideResume={true} hideSeeMore={true} />
            <Stack align='center'>
                <Stack className='about-myself' spacing='auto' direction={{ md: 'row', base: 'column', lg: 'row' }} borderColor='blackAlpha.200' w='fit-content'>
                    <Image className="myself-img-right" src={Myself} alt='Myself Image' backgroundColor={isDark ? 'blue.200' : 'white'} w='full' display={{ base: 'none', md: 'block', lg: 'block' }} />
                    <Image className="myself-img-right" src={MyselfMobile} alt='Myself Image' backgroundColor={isDark ? 'blue.200' : 'white'} w='full' display={{ base: 'block', md: 'none', lg: 'none' }}/>
                    <Stack id="aboutme" className="right-content" p={5} bg={isDark ? 'blackAlpha.500' : 'teal.50'} w='full'>
                        <Text className="about-title" fontSize={30} textAlign="left" color={ isDark ? "teal.200" : "blue.500" }>About Me</Text>
                        <br />
                        <Text className="insider" textAlign='left'>
                            Hello.. I'm <span className="name">Dhanush!!</span>
                            <p>I'm 22 years old and graduated in 2022</p>
                            <p className="jobrole">Profesionally <span className="highlight">{profile.jobRole}</span> and <span className="highlight">Ex-Automation Engineer, Tech Lead</span></p>
                            <p>Presently working in <span className="highlight">{profile.company}</span> since <span className="highlight">{profile.experience}</span></p>
                            <br />
                            <p>Apart from Job, more passionated in <span className="highlight">Web Development</span></p>
                        </Text>
                        <br />
                        <Stack direction='row' spacing={5} justify={{ base: 'center', md: 'left', lg: 'left' }}>
                            <Tooltip label='GitHub' borderRadius={7}>
                                <IconButton colorScheme={ isDark ? 'gray' : 'teal' } borderRadius={10} icon={<FaGithub />} onClick={() => window.open(profile.profiles.github.url)} />
                            </Tooltip>
                            <Tooltip label='Hackerrank' borderRadius={7}>
                                <IconButton colorScheme={ isDark ? 'gray' : 'teal' } borderRadius={10} icon={<FaHackerrank />} onClick={() => window.open(profile.profiles.hackerrank.url)} />
                            </Tooltip>
                            <Tooltip label='LinkedIn' borderRadius={7}>
                                <IconButton colorScheme={ isDark ? 'gray' : 'teal' } borderRadius={10} icon={<FaLinkedin />} onClick={() => window.open(profile.profiles.linkedin.url)} />
                            </Tooltip>
                            <Tooltip label='BitBucket' borderRadius={7}>
                                <IconButton colorScheme={ isDark ? 'gray' : 'teal' } borderRadius={10} icon={<FaBitbucket />} onClick={() => window.open(profile.profiles.bitbucket.url)} />
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export const SkillsTab = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const beginner = [];
    const intermediate = [];
    const advanced = [];
    const expert = [];
    
    for (let i of profile.skills)
        switch (i.level) {
            case 0:
                beginner.push(i);
                break;
            case 1:
                intermediate.push(i);
                break;
            case 2:
                advanced.push(i);
                break;
            case 3:
                expert.push(i);
                break;
        }

    const openLink = () => {
        const open = confirm("Would you like to visit the GitHub page ?");
        
        if (open)
            window.open(profile.githubProfile)
    }

    return (
        <Stack id="skills" className="skills_design" direction="column" align="center">
            <Image src={SkillMobileView} className="skill_mobile_view" borderRadius={20} alt="Mobile View Load Failed" display={{ base: 'block', md: 'none', lg: 'none' }} onDoubleClick={openLink} title="Double click to open" />
            <Image src={SkillDesktopView} className="skill_desktop_view" borderRadius={20} alt="Desktop View Load Failed" display={{ base: 'none', md: 'block', lg: 'block' }} onDoubleClick={openLink} title="Double click to open" />
            <Stack className="skills" w={{base: "", sm: "", lg: "container.lg"}} align='center' justify='center'>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' display={{ base: 'none', md: 'none', lg: 'block' }} colorScheme='messenger' variant='solid'>Expert</Badge>
                    <Text w='full' p={5} borderRadius={7} bg={ isDark ? 'aqua' : 'blue.700' } color='white' display={{ base: 'block', md: 'block', lg: 'none' }}>Expert</Text>
                    <Wrap direction="row" w='full' justify='center' pt='15px' overflow='visible'>
                        {
                            expert.map((skill) => (
                                <Stack className='skill_card' width={{ base: '100px', md: '150px', lg: '150px' }} align='center' justify='center' bg={ isDark ? '#2f2f5f' : 'white' } border='solid 2px transparent' as={motion.button} whileHover={{ }}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' />
                                    <p display={{ base: 'none', md: 'block', lg: 'block' }}>{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' display={{ base: 'none', md: 'none', lg: 'block' }} colorScheme='messenger' variant='solid'>Advanced</Badge>
                    <Text w='full' p={5} borderRadius={7} bg={ isDark ? 'aqua' : 'blue.700' } color='white' display={{ base: 'block', md: 'block', lg: 'none' }}>Advanced</Text>
                    <Wrap direction="row" w='full' justify='center' pt='15px' overflow='visible'>
                        {
                            advanced.map((skill) => (
                                <Stack className='skill_card' width={{ base: '100px', md: '150px', lg: '150px' }} align='center' justify='center' bg={ isDark ? '#2f2f5f' : 'white' } border='solid 2px transparent' as={motion.button} whileHover={{ }}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' />
                                    <p display={{ base: 'none', md: 'block', lg: 'block' }}>{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' display={{ base: 'none', md: 'none', lg: 'block' }} colorScheme='messenger' variant='solid'>Intermediate</Badge>
                    <Text w='full' p={5} borderRadius={7} bg={ isDark ? 'aqua' : 'blue.700' } color='white' display={{ base: 'block', md: 'block', lg: 'none' }}>Intermediate</Text>
                    <Wrap direction="row" w='full' justify='center' pt='15px' overflow='visible'>
                        {
                            intermediate.map((skill) => (
                                <Stack className='skill_card' width={{ base: '100px', md: '150px', lg: '150px' }} align='center' justify='center' bg={ isDark ? '#2f2f5f' : 'white' } border='solid 2px transparent' as={motion.button} whileHover={{ }}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' />
                                    <p display={{ base: 'none', md: 'block', lg: 'block' }}>{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' display={{ base: 'none', md: 'none', lg: 'block' }} colorScheme='messenger' variant='solid'>Beginner</Badge>
                    <Text w='full' p={5} borderRadius={7} bg={ isDark ? 'aqua' : 'blue.700' } color='white' display={{ base: 'block', md: 'block', lg: 'none' }}>Beginner</Text>
                    <Wrap direction="row" w='full' justify='center' pt='15px' overflow='visible'>
                        {
                            beginner.map((skill) => (
                                <Stack className='skill_card' width={{ base: '100px', md: '150px', lg: '150px' }} align='center' justify='center' bg={ isDark ? '#2f2f5f' : 'white' } border='solid 2px transparent' as={motion.button} whileHover={{ }}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' />
                                    <p display={{ base: 'none', md: 'block', lg: 'block' }}>{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AboutTab