import { TableOfContents } from "./components/TableOfContents";
import {
  MantineProvider,
  ColorSchemeProvider,
  AppShell,
  Navbar,
  MediaQuery,
  Stack,
  Space,
  Container,
  Divider
} from "@mantine/core";
import { useState } from "react";
import { useLocalStorage } from '@mantine/hooks';
import { ChakraProvider } from '@chakra-ui/react'

// My imports
import AppHeader from "./components/AppHeader";
import { useActiveSection } from "./hooks/useActiveSection";
import CustomFonts from "./fonts/CustomFonts";
import BrandButtonGroup from "./components/BrandButtonGroup";
import Introduction from "./sections/Introduction";
//import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { FooterSocial } from "./components/Footer";


function App() {
  const [opened, setOpened] = useState(false);
  //check if device prefers dark mode
  const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const sections = ['intro', 'education', 'experience', 'projects', 'skills', 'contact', 'resume'];
  const activeSection = useActiveSection(sections);

  // Set page title
  document.title = "Richard Roberson's Portfolio";


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <ChakraProvider>

        <MantineProvider theme={{ colorScheme, primaryColor: 'orange', fontFamily: 'Figtree, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji' }} withGlobalStyles withNormalizeCSS>
          <CustomFonts />
          <AppShell
            padding="sm"
            navbar={
              <Navbar
                p="md"
                hiddenBreakpoint="sm"
                hidden={!opened}
                width={{ sm: 175, lg: 225 }}
              >
                <TableOfContents
                  links={[
                    { label: "Introduction", link: "#intro", order: 1 },
                    { label: "Education", link: "#education", order: 2 },
                    { label: "Experience", link: "#experience", order: 1 },
                    { label: "Projects", link: "#projects", order: 1 },
                    { label: "Skills", link: "#skills", order: 1 },
                    { label: "Contact Info", link: "#contact", order: 1 },
                    { label: "Resume", link: "#resume", order: 1 },
                  ]}
                  active={activeSection}
                  setOpened={setOpened}
                />
              </Navbar>
            }
            header={<AppHeader opened={opened} setOpened={setOpened} />}
            bg={colorScheme === 'dark' ? 'dark' : 'gray.0'}

          >
            {/* Main content */}
            <Container size="xl">
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <div>
                  <BrandButtonGroup />
                  <Space h="lg" />
                </div>
              </MediaQuery>


              {/* Sections */}
              <Stack spacing={'xl'}>
                <Introduction id='intro' />
                <Divider />
                <Experience id='experience' />
                <Divider />
                <Projects id='projects' />
                <Divider />
                <Skills id='skills' />
                <Divider />
                <Contact id='contact' />
                <Divider />
                <Resume id='resume' />
              </Stack>
            </Container>

            <FooterSocial />
          </AppShell>

        </MantineProvider>
      </ChakraProvider>
    </ColorSchemeProvider>
  );
}

export default App;
