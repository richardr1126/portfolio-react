import {
  SimpleGrid, Image, Text, Title, Button, rem, Center, Space,
  ActionIcon, Group, Paper
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ReadmeModal from '../components/ReadmeModal';
import DemoModal from '../components/DemoModal';
import projects from '../data/projects.json';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa';

const ArticleCard = ({ imageSrc, title, description, link, repo, demo, openedDemo, openDemo, closeDemo }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Paper withBorder key={imageSrc+repo+demo} shadow="sm" p="lg" radius={'md'} style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        {repo && (<ReadmeModal open={opened} onClose={close} repo={repo} />)}
        {demo && (<DemoModal open={openedDemo} onClose={closeDemo} demo={demo} />)}
        <Image src={imageSrc} fit="cover" radius={'md'} />
        <Title order={2} my={rem(10)}>
          {title}
        </Title>
        <Text size="lg" color="dimmed">
          {description}
        </Text>
      </div>
      <Group style={{marginTop: 'auto'}} spacing={0}>
        {repo && (<Button variant="light" mt="md" mr='xs' onClick={open}>Read More</Button>)}
        {demo && (<Button variant="light" mt="md" mr='xs' color='teal' onClick={openDemo}>Demo</Button>)}
        <Button variant="light" mt="md" component="a" color='indigo' href={link} target="_blank">Visit</Button>
        <div style={{flexGrow: 1}}></div>
        {repo && (<ActionIcon size={'lg'} variant="light" mt="md" onClick={() => window.open(`https://github.com/${repo}`, '_blank')}>
          <FaGithub />
        </ActionIcon>)}
      </Group>
    </Paper>
  );
};


const Projects = ({ id }) => {
  const [visibleCards, setVisibleCards] = useState(2);
  const [opened, { open, close }] = useDisclosure(false);

  const handleViewMore = () => {
    setVisibleCards(projects.length);
  };

  const handleViewLess = () => {
    setVisibleCards(2);
  };

  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Recent Projects</Title>
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 1, spacing: 'sm' }, // stack all columns at small breakpoint
        ]}
      >
        {projects.slice(0, visibleCards).map((project, index) => (
          <ArticleCard
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            link={project.link}
            repo={project.repo}
            demo={project.demo}
            openedDemo={opened}
            openDemo={open}
            closeDemo={close}
            key={index}
          />
        ))}
      </SimpleGrid>
      <Center mt={rem(20)}>
        {visibleCards < projects.length ? (
          <Button onClick={handleViewMore} variant='light'>
            More Projects<Space w={rem(5)}></Space><FaChevronDown />
          </Button>
        ) : (
          <Button onClick={handleViewLess} variant='light'>
            Less Projects<Space w={rem(5)}></Space><FaChevronUp />
          </Button>
        )}
      </Center>
    </section>
  );
};

export default Projects;
