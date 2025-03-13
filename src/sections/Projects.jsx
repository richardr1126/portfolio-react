import {
  SimpleGrid, Image, Text, Title, Button, rem, Center, Space,
  ActionIcon, Group, Paper, Badge, Collapse
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ReadmeModal from '../components/ReadmeModal';
import DemoModal from '../components/DemoModal';
import projects from '../data/projects.json';
import { useMemo } from 'react';
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa';

const ArticleCard = ({ imageSrc, title, description, link, repo, demo, openedDemo, openDemo, closeDemo, tags }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const tagColors = useMemo(() => {
    return tags?.map(() => {
      const colors = ['teal', 'indigo', 'blue', 'red', 'green', 'purple', 'pink', 'yellow', 'cyan', 'gray'];
      return colors[Math.floor(Math.random() * colors.length)];
    });
  }, [tags]);

  return (
    <Paper withBorder key={imageSrc + repo + demo} shadow="sm" p="lg" radius={'md'} style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        {repo && (<ReadmeModal open={opened} onClose={close} repo={repo} />)}
        {demo && (<DemoModal open={openedDemo} onClose={closeDemo} demo={demo} />)}
        <Image src={imageSrc} fit="cover" radius={'md'} fallbackSrc="https://placehold.co/600x400?text=Loading&font=roboto" />
        <Title order={2} my={rem(10)}>
          {title}
        </Title>
        <Group spacing={rem(5)}>
          {tags && tags.map((tag, index) => (
            <Badge key={index} color={tagColors[index]} variant="light" size="md">{tag}</Badge>
          ))}
        </Group>
        <Space h={'xs'} />
        <Text size="lg" color="dimmed">
          {description}
        </Text>
      </div>
      <Group style={{ marginTop: 'auto' }} spacing={0}>
        {repo && (<Button variant="light" mt="md" mr='xs' onClick={open}>Read More</Button>)}
        {demo && (<Button variant="light" mt="md" mr='xs' color='teal' onClick={openDemo}>Demo</Button>)}
        {link && <Button variant="light" mt="md" component="a" color='indigo' href={link} target="_blank">Visit</Button>}
        <div style={{ flexGrow: 1 }}></div>
        {repo && (<ActionIcon size={'lg'} variant="light" mt="md" onClick={() => window.open(`https://github.com/${repo}`, '_blank')}>
          <FaGithub />
        </ActionIcon>)}
      </Group>
    </Paper>
  );
};


const Projects = ({ id }) => {
  const [showMore, { toggle }] = useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Recent Projects</Title>
      {/* Always show first two projects */}
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 1, spacing: 'sm' },
        ]}
      >
        {projects.slice(0, 2).map((project, index) => (
          <ArticleCard
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            link={project.link}
            repo={project.repo}
            demo={project.demo}
            tags={project.tags}
            openedDemo={opened}
            openDemo={open}
            closeDemo={close}
            key={index}
          />
        ))}
      </SimpleGrid>

      <Collapse in={showMore}>
        <SimpleGrid
          cols={2}
          spacing="lg"
          mt="lg"
          breakpoints={[
            { maxWidth: 'md', cols: 1, spacing: 'sm' },
          ]}
        >
          {projects.slice(2).map((project, index) => (
            <ArticleCard
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              link={project.link}
              repo={project.repo}
              demo={project.demo}
              tags={project.tags}
              openedDemo={opened}
              openDemo={open}
              closeDemo={close}
              key={index + 2}
            />
          ))}
        </SimpleGrid>
      </Collapse>

      <Center mt={rem(20)}>
        <Button onClick={toggle} variant='light' size='lg'>
          {!showMore ? (
            <>More Projects<Space w={rem(5)} /><FaChevronDown /></>
          ) : (
            <>Less Projects<Space w={rem(5)} /><FaChevronUp /></>
          )}
        </Button>
      </Center>
    </section>
  );
};

export default Projects;
