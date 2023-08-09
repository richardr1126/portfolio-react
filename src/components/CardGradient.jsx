import { createStyles, Paper, Text, ThemeIcon, rem, Avatar, Group, Space } from '@mantine/core';
import { FaRegHandshake } from 'react-icons/fa';
import Education from '../sections/Education';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 1.2)`,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.red[5], theme.colors.orange[5]),
    },
  },
}));


export function CardGradient({ title, description }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Group spacing={rem(5)}>
        <Avatar radius="md" size={rem(60)} color="blue" src="avatar-mountain.jpg" />
        <ThemeIcon
          size={rem(60)}
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        >
          <FaRegHandshake size={rem(35)} />
        </ThemeIcon>
      </Group>

      <Text size="xl" weight={500} mt="md">
        {title}
      </Text>
      <Text size="lg" mt="sm" color="dimmed">
        {description}
      </Text>
      <Space h={rem(20)} />
      <Education />
    </Paper>
  );
}