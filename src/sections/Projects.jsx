import {
  SimpleGrid, Image, Text, Title, Button, rem, Center, Space,
  ActionIcon, Group, Paper, Badge, Collapse
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ReadmeModal from '../components/ReadmeModal';
import DemoModal from '../components/DemoModal';
import { useMemo, useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa';

const getColorFromString = (str) => {
  const colors = ['teal', 'indigo', 'blue', 'red', 'green', 'purple', 'pink', 'yellow', 'cyan'];
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 6) - hash);
  }
  hash = Math.abs(hash);
  return colors[hash % colors.length];
};

const ArticleCard = ({ imageSrc, title, description, link, repo, demo, openedDemo, openDemo, closeDemo, tags }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const tagColors = useMemo(() => {
    return tags?.map(tag => getColorFromString(tag));
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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id={id}>
      {!showMore && <Title order={2} mb={rem(15)}>Recent Projects</Title>}
      {showMore && <Title order={2} mb={rem(15)}>All Projects</Title>}
      {/* Always show first two projects */}
      <SimpleGrid
        cols={2}
        spacing={rem(25)}
        breakpoints={[
          { maxWidth: 'sm', cols: 1, spacing: 'xs' },
        ]}
      >
        {projects.filter(project => project.status !== "inprogress").slice(0, 2).map((project, index) => (
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
          spacing={rem(25)}
          mt="lg"
          breakpoints={[
            { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          ]}
        >
          {projects.filter(project => project.status !== "inprogress").slice(2).map((project, index) => (
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
