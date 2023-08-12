import { Title, rem, Text, Group, Badge, Flex, Image, Stack, Paper, Button, ActionIcon, ThemeIcon, Space, MediaQuery } from "@mantine/core";
import { FaGithub } from "react-icons/fa";

function Experience({ id }) {
  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Work Experience</Title>
      <Paper shadow="sm" p={'md'} radius={'md'} withBorder>

        <Flex align={'center'} wrap={'wrap'} p={'xs'}>
          <ThemeIcon size={rem(100)} mb={'xs'} mr={'sm'} color="gray.1" radius={'lg'}>
            <Image src="cuplv.png" alt="UCB" width={rem(75)} height={rem(75)} />
          </ThemeIcon>
          <MediaQuery largerThan={600} styles={{ flex: 1, marginLeft: rem(10) }}>
            <Stack spacing={0}>
              <Title order={3}>Machine Learning Research</Title>
              <Title order={4} color="dimmed">@ Programming Languages and Verification at the University of Colorado Boulder</Title>
              <Text size="md" fw={600} color="dimmed">2023 - Present</Text>
              <Space h={'sm'} />
              <Text size="lg" color="dimmed">
                Leading a research project that finetunes large language models for text-to-SQL synthesis.
                Learn more about the project in the Recent Projects section below.
              </Text>
              <Space h={'xs'} />
              <Group spacing={rem(5)}>
                <Badge color="teal" variant="light" size="lg">
                  Python
                </Badge>
                <Badge color="indigo" variant="light" size="lg">
                  C++
                </Badge>
                <Badge color="primary" variant="light" size="lg">
                  LLM Finetuning
                </Badge>
              </Group>
              <Space h={'xs'} />
            </Stack>
          </MediaQuery>

        </Flex>
        <Group mt={'xs'} spacing={rem(5)}>
          <ActionIcon variant='light' h={rem(35)} w={rem(35)} onClick={() => window.open('https://github.com/cuplv', '_blank')}>
            <FaGithub />
          </ActionIcon>
          <Button h={rem(35)} variant='light' color='blue' style={{ flex: 1 }} onClick={() => window.open('https://plv.colorado.edu/', '_blank')}>Vist CUPLV Website</Button>
        </Group>

      </Paper>
    </section>
  );
}

export default Experience;
