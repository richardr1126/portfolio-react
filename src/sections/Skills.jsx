import { Paper, Progress, Text, Title, rem, List, Button, Collapse, Center, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const skillsData = [
  { name: "Python", value: 4 },
  { name: "C++", value: 4 },
  { name: "React.js", value: 5 },
  { name: "React Native", value: 5 },
  { name: "Node.js", value: 4 },
  { name: "HTML", value: 5 },
  { name: "CSS", value: 2 },
  { name: "JavaScript", value: 4 },
  { name: "Express", value: 4 },
  { name: "PostgreSQL", value: 3 },
  { name: "MongoDB", value: 5 },
  { name: "Firebase", value: 5 },
  { name: "Scala", value: 3 },
  { name: "Java", value: 4 },
];

export default function Skills({ id }) {
  const [showMore, { toggle }] = useDisclosure(false);

  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Skills</Title>
      {/* Skill explanation */}
      <Text size={'lg'} mb={rem(10)}>
        I have experience with the following technologies, and I am always looking to learn more! Skill levels are defined as:
      </Text>

      <List type='ordered' withPadding mb={rem(20)} size={'lg'}>
        <List.Item><Text><span style={{ fontWeight: 900 }}>Novice:</span> Just started learning, basic understanding.</Text></List.Item>
        <List.Item><Text><span style={{ fontWeight: 900 }}>Beginner:</span> Some hands-on experience, still early stages of learning.</Text></List.Item>
        <List.Item><Text><span style={{ fontWeight: 900 }}>Intermediate:</span> Comfortable working, used in projects.</Text></List.Item>
        <List.Item><Text><span style={{ fontWeight: 900 }}>Proficient:</span> Solid understanding, can solve complex problems.</Text></List.Item>
        <List.Item><Text><span style={{ fontWeight: 900 }}>Expert:</span> Comprehensive understanding, can mentor and lead.</Text></List.Item>
      </List>

      <Paper py={rem(20)} pr={rem(20)} shadow="md">
        {/* Display first 4 skills */}
        {skillsData.slice(0, 5).map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}

        <Collapse in={showMore}>
          {/* Display the rest of the skills */}
          {skillsData.slice(5).map((skill, index) => (
            <SkillItem key={index + 4} skill={skill} />
          ))}
        </Collapse>

        <Center mt={rem(20)}>
          {!showMore ? (
            <Button onClick={toggle} variant='light'>
              More Skills<Space w={rem(5)}></Space><FaChevronDown />
            </Button>
          ) : (
            <Button onClick={toggle} variant='light'>
              Less Skills<Space w={rem(5)}></Space><FaChevronUp />
            </Button>
          )}
        </Center>
      </Paper>
    </section>
  );
}

function SkillItem({ skill }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Text p={'sm'} ml={rem(10)} align='right' style={{ flex: 1 }} fw={600}>{skill.name}</Text>
      <Progress value={skill.value * 20} style={{ flex: 7 }} color="blue" size="xl" />
      <Text p={'sm'} fw={900}>{skill.value}</Text>
    </div>
  );
}
