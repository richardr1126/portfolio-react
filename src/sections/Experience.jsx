import { Title, rem, Text, Group, Badge, Flex, Image, Stack, Paper, Button, ThemeIcon, Space, MediaQuery } from "@mantine/core";
import { FaGithub, FaLinkedin, FaSearch } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

function Experience({ id }) {
  const scrollTo = (event, link) => {
    event.preventDefault();
    // scroll to section with offset for Title
    const section = document.querySelector(link);
    const offset = 75;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Work Experience</Title>

      {/* Existing Experience */}
      <Paper shadow="sm" p={'md'} radius={'md'} withBorder>
        <Flex align={'center'} wrap={'wrap'} p={'xs'}>
          <ThemeIcon size={rem(100)} mb={'xs'} mr={'sm'} color="gray.1" radius={'lg'}>
            <Image src="cuplv.png" alt="UCB" width={rem(75)} height={rem(75)} loading="lazy" />
          </ThemeIcon>
          <MediaQuery largerThan={600} styles={{ flex: 1, marginLeft: rem(10) }}>
            <Stack spacing={0}>
              <Title order={3}>Machine Learning Research</Title>
              <Title order={4} color="dimmed">@ Programming Languages and Verification at the University of Colorado Boulder</Title>
              <Text size="md" fw={600} color="dimmed">June 2023 - February 2024</Text>
              <Space h={'sm'} />
              <Text size="lg" color="dimmed">
                Leading a research project that finetunes large language models for text-to-SQL synthesis.
                Learn more about the project in the Recent Projects section below.
              </Text>
              <Space h={'xs'} />
              <Group spacing={rem(5)}>
                <Badge color="teal" variant="light" size="lg">Python</Badge>
                <Badge color="indigo" variant="light" size="lg">C++</Badge>
                <Badge color="primary" variant="light" size="lg">LLM Finetuning</Badge>
              </Group>
              <Space h={'xs'} />
            </Stack>
          </MediaQuery>
        </Flex>
        <Group mt={'xs'} spacing={rem(5)} style={{ flex: 3 }}>
          <Button h={rem(35)} variant='light' color="teal" leftIcon={<FaSearch />} style={{ flex: 1 }} onClick={(e) => scrollTo(e, '#projects')}>
            Learn more about my project
          </Button>
          <Button h={rem(35)} variant='light' leftIcon={<FaGithub />} style={{ flex: 1 }} onClick={() => window.open('https://github.com/cuplv', '_blank')}>
            CUPLV GitHub
          </Button>
          <Button h={rem(35)} variant='light' color='blue' leftIcon={<MdWeb />} style={{ flex: 1 }} onClick={() => window.open('https://plv.colorado.edu/', '_blank')}>
            CUPLV Website
          </Button>
        </Group>
      </Paper>

      {/* New UpWork Experience */}
      <Paper shadow="sm" p={'md'} radius={'md'} withBorder mt={'md'}>
        <Flex align={'center'} wrap={'wrap'} p={'xs'}>
          <MediaQuery largerThan={600} styles={{ flex: 1, marginLeft: rem(10) }}>
            <Stack spacing={0}>
              <Title order={3}>Fullstack Freelance Developer</Title>
              <Text size="md" fw={600} color="dimmed">June 2024 - May 2025</Text>
              <Space h={'sm'} />
              <Text size="md" color="dimmed">
                "Richard was able to quickly complete the tasks assigned to him, along with finding and fixing a few issues he found on his own. He quickly was able to understand what was being asked and was able to take initiative and perform his tasks despite our somewhat half-baked and incomplete requirements. He will be one of the first places we look for front-end development work from now on."
                - Client Feedback
              </Text>
              <Space h={'sm'} />
              <Group spacing={rem(5)}>
                <Badge color="orange" variant="light" size="lg">Frontend Development</Badge>
                <Badge color="teal" variant="light" size="lg">Backend Development</Badge>
              </Group>
              <Space h={'xs'} />
            </Stack>
          </MediaQuery>
        </Flex>
        <Flex mt={'xs'}>
          <Button h={rem(35)} variant='light' color="teal" leftIcon={<FaSearch />} style={{ flex: 1 }} onClick={(e) =>{
            window.open('https://www.upwork.com/freelancers/~015b295507f2496334', '_blank');
          }}>
            Visit freelance profile
          </Button>
        </Flex>
      </Paper>

      {/* Ricoh Experience */}
      <Paper shadow="sm" p={'md'} radius={'md'} withBorder mt={'md'}>
        <Flex align={'center'} wrap={'wrap'} p={'xs'}>
          <ThemeIcon size={rem(100)} mb={'xs'} mr={'sm'} color="gray.1" radius={'lg'}>
            <Image src="ricoh.png" alt="Ricoh logo" width={rem(100)} loading="lazy" />
          </ThemeIcon>
          <MediaQuery largerThan={600} styles={{ flex: 1, marginLeft: rem(10) }}>
            <Stack spacing={0}>
              <Title order={3}>AI Software Engineer Intern</Title>
              <Title order={4} color="dimmed">@ Ricoh, USA in Boulder</Title>
              <Text size="md" fw={600} color="dimmed">May 2025 - August 2025</Text>
              <Space h={'sm'} />
              <Text size="lg" color="dimmed">
                Developed a natural language SQL database interaction chatbot that uses <strong>graphs and plots. </strong>
                 Enables non-technical users to interact with company databases using natural language queries.
                 in its outputs for internal use and the infrastructure required to host it on-premise. 
                <br />
                <br />
                 Pivoted to build a production ready version as an agent deployed using AWS Bedrock AgentCore services, which enables
                 background running agents and great observability for enterprise use cases.
              </Text>
              <Space h={'xs'} />
              <Group spacing={rem(5)}>
                <Badge color="primary" variant="light" size="lg">LLMs</Badge>
                <Badge color="indigo" variant="light" size="lg">Text-2-SQL</Badge>
                <Badge color="teal" variant="light" size="lg">AI Agents</Badge>
                <Badge color="orange" variant="light" size="lg">Fullstack Development</Badge>
              </Group>
              <Space h={'xs'} />
            </Stack>
          </MediaQuery>
        </Flex>
        <Group mt={'xs'} spacing={rem(5)} style={{ flex: 3 }}>
          <Button h={rem(35)} variant='light' leftIcon={<FaLinkedin />} style={{ flex: 1 }} onClick={() => window.open('https://www.linkedin.com/company/ricoh-company-ltd-', '_blank')}>
            Ricoh USA LinkedIn
          </Button>
          <Button h={rem(35)} variant='light' color='blue' leftIcon={<MdWeb />} style={{ flex: 1 }} onClick={() => window.open('https://www.ricoh-usa.com/', '_blank')}>
            Ricoh USA Website
          </Button>
        </Group>
      </Paper>
    </section>
  );
}

export default Experience;