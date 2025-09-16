import { Fragment } from 'react';
import { Paper, Progress, Text, Title, rem, Button, Collapse, Center, Space, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaChevronDown, FaRobot, FaChevronUp, FaCircle, FaRegCircle, FaArrowUp, FaStar, FaCrown, FaPython, FaReact, FaNodeJs, FaHtml5, FaJsSquare, FaJava, FaAws, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiFastapi, SiPostgresql, SiMongodb, SiScala, SiFlask, SiTypescript, SiRedis, SiApachekafka, SiDigitalocean, SiGooglecloud, SiMicrosoftazure, SiKubernetes, SiHelm, SiC, SiOpensearch, SiDocker, SiGitlab } from 'react-icons/si';

const skills = [
  { name: "Python", value: 5, icon: <FaPython size={20}/> },
  { name: "TypeScript", value: 4, icon: <SiTypescript size={20} /> },
  { name: "JavaScript", value: 4, icon: <FaJsSquare size={20} /> },
  { name: "HTML/CSS", value: 3, icon: <FaHtml5 size={20} /> },
  { name: "C++", value: 3, icon: <SiCplusplus size={20} /> },
  { name: "C", value: 2, icon: <SiC size={20} /> },
  { name: "Java", value: 3, icon: <FaJava size={20} /> },
  { name: "Scala", value: 1, icon: <SiScala size={20} /> },
];
const frameworks = [
  { name: "FastAPI", value: 3, icon: <SiFastapi size={20} /> },
  { name: "React.js", value: 5, icon: <FaReact size={20} /> },
  { name: "LangChain", value: 4, icon: <FaRobot size={20} /> },
  { name: "LangGraph", value: 3, icon: <FaRobot size={20} /> },
  { name: "Flask", value: 4, icon: <SiFlask size={20} /> },
  { name: "React Native", value: 4, icon: <FaReact size={20} /> },
  { name: "Node.js", value: 4, icon: <FaNodeJs size={20} /> },
];
const databases = [
  { name: "PostgreSQL", value: 4, icon: <SiPostgresql size={20} /> },
  { name: "Redis", value: 2, icon: <SiRedis size={20} /> },
  { name: "Kafka", value: 3, icon: <SiApachekafka size={20} /> },
  { name: "S3 Buckets", value: 4, icon: <FaAws size={20} /> },
  { name: "OpenSearch", value: 3, icon: <SiOpensearch size={20} /> },
  { name: "MongoDB", value: 3, icon: <SiMongodb size={20} /> },
];
const devops = [
  { name: "Kubernetes", value: 4, icon: <SiKubernetes size={20} /> },
  { name: "Helm", value: 3, icon: <SiHelm size={20} /> },
  { name: "Docker", value: 5, icon: <SiDocker size={20} /> },
  { name: "GitHub Actions", value: 4, icon: <FaGithub size={20} /> },
  { name: "GitLab CI/CD", value: 3, icon: <SiGitlab size={20} /> },
  { name: "Digital Ocean", value: 2, icon: <SiDigitalocean size={20} /> },
  { name: "AWS", value: 4, icon: <FaAws size={20} /> },
  { name: "Google Cloud", value: 3, icon: <SiGooglecloud size={20} /> },
  { name: "Azure", value: 3, icon: <SiMicrosoftazure size={20} /> },
];

const skillsData = {
  languages: skills,
  tools: frameworks,
  databases: databases,
  cloud: devops,
};

const SKILL_ICONS = {
  1: {
    icon: <FaCircle size={20} />,
    variant: "gradient",
    gradient: { from: 'lime', to: 'green', deg: 157.5 }
  },
  2: {
    icon: <FaRegCircle size={20} />,
    variant: "gradient",
    gradient: { from: 'green', to: 'cyan', deg: 157.5 }
  },
  3: {
    icon: <FaArrowUp size={20} />,
    variant: "gradient",
    gradient: { from: 'cyan', to: 'blue', deg: 157.5 }
  },
  4: {
    icon: <FaStar size={20} />,
    variant: "gradient",
    gradient: { from: 'blue', to: 'purple', deg: 157.5 }
  },
  5: {
    icon: <FaCrown size={20} />,
    variant: "gradient",
    gradient: { from: '#FFD700', to: '#FFA500', deg: 157.5 } // gold to orange color gradient for a rich gold look
  },
};

export default function Skills({ id }) {
  const [showMore, { toggle }] = useDisclosure(false);

  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Skills</Title>

      <Paper p='xl' withBorder shadow="md" radius='md'>
        {/* Show one skill from each category */}
        <Title order={3} size="h4" mb={rem(15)}>Favorites</Title>
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <Fragment key={category}>
            <SkillItem skill={skills[0]} />
          </Fragment>
        ))}

        <Collapse in={showMore}>
          <Space h="md" />
          <Title order={3} size="h4" mb={rem(15)}>Programming Languages</Title>
          {skillsData.languages.map((skill, index) => (
            <SkillItem key={`lang-${index}`} skill={skill} />
          ))}

          <Space h="md" />
          <Title order={3} size="h4" mb={rem(15)}>Tools & Frameworks</Title>
          {skillsData.tools.map((skill, index) => (
            <SkillItem key={`tool-${index}`} skill={skill} />
          ))}

          <Space h="md" />
          <Title order={3} size="h4" mb={rem(15)}>Databases & Messaging</Title>
          {skillsData.databases.map((skill, index) => (
            <SkillItem key={`db-${index}`} skill={skill} />
          ))}

          <Space h="md" />
          <Title order={3} size="h4" mb={rem(15)}>DevOps</Title>
          {skillsData.cloud.map((skill, index) => (
            <SkillItem key={`cloud-${index}`} skill={skill} />
          ))}
        </Collapse>

        <Center mt={'md'}>
          <Button onClick={toggle} variant='light'>
            {!showMore ? (
              <>Show All Skills<Space w={rem(5)} /><FaChevronDown /></>
            ) : (
              <>Show Less<Space w={rem(5)} /><FaChevronUp /></>
            )}
          </Button>
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
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: rem(2) }}>
      <Text p={'xs'} align='right' style={{ flex: 1 }} fw={600}>{skill.name}</Text>
      {skill.icon && (
        <ThemeIcon variant={skillRep.variant} gradient={skillRep.gradient} size={'lg'} radius="md" style={{ marginRight: '10px' }}>
          {skill.icon}
        </ThemeIcon>
      )}
      <Progress value={skill.value * 20} style={{ flex: 7 }} label={skillLevelTitle} color="indigo" size="xl" h={rem(30)} radius={'md'} />

    </div>
  );
}

