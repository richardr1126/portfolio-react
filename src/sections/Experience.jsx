import { Title, rem, Text, Group, Badge, Flex, Image, Stack, Paper, Button, ActionIcon, ThemeIcon, Space } from "@mantine/core";
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
          <Stack spacing={0}>
            <Title order={4}>Programming Languages and Verification at the University of Colorado Boulder</Title>
            <Text size="md" fw={600} color="dimmed">2023 - Present</Text>
            <Space h={'sm'} />
            <Text size="lg" color="dimmed">
              Leading a project that finetunes large language models for text-to-SQL synthesis.
              Learn more about the project in the recent project section below.
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
          </Stack>
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