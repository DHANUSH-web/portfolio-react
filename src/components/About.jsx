import { Badge, IconButton, Image, Stack, Flex, Text, Tooltip, Wrap, useColorMode } from "@chakra-ui/react"
import { IconBrandGithub, IconHospital as IconBrandHackerrank, IconBrandLinkedin, IconBrandBitbucket } from "@tabler/icons-react";
import Avatar from "../resources/images/avatar.png";
import data from "../database.json"
import React from "react"
import './About.css'

// Global profile
const profile = data.profiles[data.profileHolder]

const AboutTab = () => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <Flex mx={5} my={10} p={5} alignItems="center" gap={20} flexDir="column">
            <Image src={Avatar} alt="Avatar" width="xs" borderRadius="full" />
            <Flex flexDir="column" fontFamily="interRegular">
                <Text p={2}>
                    👋 Hey there! I'm <span className="highligher">{profile.name}</span>, a {profile.jobRole} with {profile.experience} of coding adventures. Currently, I&apos;m learning and exploring new technologies at Tata Consultancy Services (TCS) 🚀.
                </Text>
                <Text>
                💻 I&apos;m not just another developer — I&apos;m your go-to developer for Python Full Stack Development and Full Stack web development in Next.js. Hands-on with Python, JavaScript, TypeScript, HTML, CSS, Node.js, React.js, and Next.js with amazing projects online which are used by other developers.<br />
                </Text>
                🔥 Back-End technology ? Look no further! I'm well-versed in using the power of Google Firebase to fuel dynamic applications with real-time data updates and seamless user experiences, and experienced with RESTful API development in FastAPI and Node.js.<br />
                ✨ What sets me apart? I don't just build websites and applications; I craft experiences. I use the amazing power of TailwindCSS, DaisyUI, Radix-UI, ShadCN-UI and Chakra UI to transform projects into interactive websites for better user experience, for example my own Portfolio website which has been online at https://dhanushhv.vercel.app<br />
                🔍 I'm currently looking for exciting opportunities to use my personal and professional skills to build Software solutions and products for the client and for the company with well crafted design and user experience. I'm still not done enough, updating myself with the latest new frameworks and technologies to make the websites more powerful and interactive.<br />
                🌟 Let's connect for any opportunities ahead for me. Whether it's revolutionizing user experiences or tackling tech's toughest challenges, I'm all in! Reach out to me at dhanushhv75@gmail.com<br />
                <br />
                🌐 Portfolio - https://dhanushhv.vercel.app
                <br />
                📧 Email Id - dhanushhv75@gmail.com
            </Flex>
        </Flex>
    )
}

export const SkillsTab = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const beginner = [];
    const intermediate = [];
    const advanced = [];
    const expert = [];

    profile.skills.map(skill => {
        switch (skill.level) {
            case 0:
                beginner.push(skill);
                break;
            case 1:
                intermediate.push(skill);
                break;
            case 2:
                advanced.push(skill);
                break;
            case 3:
                expert.push(skill);
                break;
        }
    })

    const openLink = () => {
        const open = confirm("Would you like to visit the GitHub page ?");

        if (open)
            window.open(profile.githubProfile)
    }

    return (
        <Stack id="skills" className="skills_design" direction="column" align="center">
            <Stack className="skills" w='fit-content' maxW='container.lg' align='center' justify='center'>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Advanced++</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            expert.map((skill, idx) => (
                                <Stack key={"skillcard__" + idx} className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Advanced</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            advanced.map((skill) => (
                                <Stack className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Intermediate</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            intermediate.map((skill) => (
                                <Stack className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
                                </Stack>
                            ))
                        }
                    </Wrap>
                </Stack>
                <Stack className="classifier" mt={5} padding={5} borderRadius={20} w='full'>
                    <Badge w='fit-content' alignSelf='center' textTransform='capitalize' fontSize={16} pl={5} pr={5} pt={1} pb={1} borderRadius='full' colorScheme='green' variant='subtle'>Beginner</Badge>
                    <Wrap direction="row" justify='center' overflow='visible'>
                        {
                            beginner.map((skill) => (
                                <Stack className='skill_card' maxW={140} alignItems='center' justifyContent='space-around' borderColor={isDark ? 'gray.700' : 'gray.200'} bg={isDark ? "gray.700" : "white"}>
                                    <Image className="skill_logo" src={skill.icon} alt='😢' bg='transparent' />
                                    <p className="skill-text">{skill.text}</p>
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