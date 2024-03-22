import { Text, Stack, Button, Flex, useColorMode, Image } from "@chakra-ui/react";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconPhone,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import NavBar from "../components/NavBar";
import database from "../database.json";
import React from "react";
import "./Contact.css";

const Contact = () => {
  const { colorMode } = useColorMode();
  const profile = database.profiles[database.profileHolder];
  const contacts = profile.contacts;

  return (
    <div className="contact_container">
      <NavBar isContact={true} />
      <div>
        <Stack align="center" gap={15}>
          <Text fontFamily="interBold" fontSize={50}>Get in touch</Text>
          <Image
            className="contact_gif"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/4qPZTqxXRCDQiimE4c9xXc/eb57558f50ee6fac68dc04e3b5099c8a/home-hero.png"
            alt="🎊"
            width={700}
            bg="white"
            p={12}
            borderRadius={7}
          />
          <Flex fontFamily="interSemiBold" gap={5} mb={20} wrap="wrap" justify="center">
            {/* Mail */}
            <Button
              variant="outline"
              leftIcon={<IconMail size={15} />}
              onClick={() => window.open(contacts.mail)}
            >
              Mail
            </Button>
            {/* LinkedIn */}
            <Button
              variant="outline"
              leftIcon={<IconBrandLinkedin size={15} />}
              onClick={() => window.open(contacts.linkedin)}
            >
              LinkedIn
            </Button>
            {/* Twitter */}
            <Button
              variant="outline"
              leftIcon={<IconBrandTwitter size={15} />}
              onClick={() => window.open(contacts.twitter)}
            >
              Twitter
            </Button>
            {/* Instagram */}
            <Button
              variant="outline"
              leftIcon={<IconBrandInstagram size={15} />}
              onClick={() => window.open(contacts.instagram)}
            >
              Instagram
            </Button>
            {/* Mobile */}
            <Button
              variant="outline"
              leftIcon={<IconPhone size={15} />}
              onClick={() => window.open(contacts.mobile)}
            >
              Mobile
            </Button>
            {/* WhatsApp */}
            <Button
              variant="outline"
              leftIcon={<IconBrandWhatsapp size={15} />}
              onClick={() => window.open(contacts.whatsapp)}
            >
              WhatsApp
            </Button>
          </Flex>
        </Stack>
      </div>
    </div>
  );
};

export default Contact;
