import { Paper, Progress, Text, Title, rem, List, Button, Collapse, Center, Space, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaChevronDown, FaRobot, FaChevronUp, FaCircle, FaRegCircle, FaArrowUp, FaStar, FaCrown, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaJava } from 'react-icons/fa';
import { SiCplusplus, SiPostgresql, SiMongodb, SiFirebase, SiScala } from 'react-icons/si';


const skillsData = [
  { name: "LLMs", value: 5, icon: <FaRobot size="1.25rem" /> },
  { name: "Python", value: 4, icon: <FaPython size="1.25rem"/> },
  { name: "C++", value: 4, icon: <SiCplusplus size="1.25rem" /> },
  { name: "React.js", value: 5, icon: <FaReact size="1.25rem" /> },
  { name: "React Native", value: 4, icon: <FaReact size="1.25rem" /> },
  { name: "Node.js", value: 5, icon: <FaNodeJs size="1.25rem" /> },
  { name: "HTML", value: 5, icon: <FaHtml5 size="1.25rem" /> },
  { name: "CSS", value: 2, icon: <FaCss3Alt size="1.25rem" /> },
  { name: "JavaScript", value: 5, icon: <FaJsSquare size="1.25rem" /> },
  { name: "Express", value: 4, icon: <FaNodeJs size="1.25rem" /> },  // Used Node.js logo for Express.js, you might want to find a more suitable one.
  { name: "PostgreSQL", value: 4, icon: <SiPostgresql size="1.25rem" /> },
  { name: "MongoDB", value: 4, icon: <SiMongodb size="1.25rem" /> },
  { name: "Firebase", value: 4, icon: <SiFirebase size="1.25rem" /> },
  { name: "Scala", value: 2, icon: <SiScala size="1.25rem" /> },
  { name: "Java", value: 3, icon: <FaJava size="1.25rem" /> },
];


const SKILL_ICONS = {
  1: {
    icon: <FaCircle size="1.25rem" />,
    variant: "gradient",
    gradient: { from: 'lime', to: 'green', deg: 157.5 }
  },
  2: {
    icon: <FaRegCircle size="1.25rem" />,
    variant: "gradient",
    gradient: { from: 'green', to: 'cyan', deg: 157.5 }
  },
  3: {
    icon: <FaArrowUp size="1.25rem" />,
    variant: "gradient",
    gradient: { from: 'cyan', to: 'blue', deg: 157.5 }
  },
  4: {
    icon: <FaStar size="1.25rem" />,
    variant: "gradient",
    gradient: { from: 'blue', to: 'purple', deg: 157.5 }
  },
  5: {
    icon: <FaCrown size="1.25rem" />,
    variant: "gradient",
    gradient: { from: '#FFD700', to: '#FFA500', deg: 157.5 } // gold to orange color gradient for a rich gold look
  },
};


export default function Skills({ id }) {
  const [showMore, { toggle }] = useDisclosure(false);
  const reorderedSkillsData = skillsData.sort((a, b) => b.value - a.value);

  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Skills</Title>
      {/* Skill explanation */}


      <Paper p='xl' withBorder shadow="md">
        <Center>
          <List center mb={'md'} size={'lg'} spacing={rem(5)}>
            {Object.entries(SKILL_ICONS).map(([key, value]) => (
              <List.Item key={key} icon={
                <ThemeIcon variant={value.variant} gradient={value.gradient} size={30} radius="xl">
                  {value.icon}
                </ThemeIcon>
              }>
                <Text><span style={{ fontWeight: 600 }}>{['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Expert'][key - 1]}:</span> {['Just started learning.', 'Some hands-on experience.', 'Comfortable working.', 'Solid understanding.', 'Comprehensive understanding.'][key - 1]}</Text>
              </List.Item>
            ))}
          </List>
        </Center>


        {/* Display first 4 skills */}
        {reorderedSkillsData.slice(0, 5).map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}

        <Collapse in={showMore}>
          {/* Display the rest of the skills */}
          {reorderedSkillsData.slice(5).map((skill, index) => (
            <SkillItem key={index + 4} skill={skill} />
          ))}
        </Collapse>

        <Center mt={'md'}>
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

  // Helper function to determine the appropriate icon and gradient for a given skill value
  function getSkillRepresentation(value) {
    return SKILL_ICONS[value] || {
      icon: null,
      variant: "gradient",
      gradient: { from: 'gray', to: 'dark-gray', deg: 157.5 }
    };
  }

  const skillLevelTitle = ['Novice', 'Beginner', 'Intermediate', 'Proficient', 'Expert'][skill.value - 1];
  const skillRep = getSkillRepresentation(skill.value);

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Text p={'xs'} align='center' style={{ flex: 1 }} fw={600}>{skill.name}</Text>
      {skill.icon && (
        <ThemeIcon variant={skillRep.variant} gradient={skillRep.gradient} size={'lg'} radius="md" style={{ marginRight: '10px' }}>
          {skill.icon}
        </ThemeIcon>
      )}
      <Progress value={skill.value * 20} style={{ flex: 7 }} label={skillLevelTitle} color="indigo" size="xl" h={rem(30)} radius={'md'} />

      <ThemeIcon m={'xs'} variant={skillRep.variant} gradient={skillRep.gradient} size={'lg'} radius="xl">
        {skillRep.icon}
      </ThemeIcon>

    </div>
  );
}

