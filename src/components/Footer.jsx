import { rem, ThemeIcon, createStyles, Container, Text, Group } from "@mantine/core";
import BrandButtonGroup from "./BrandButtonGroup";
import { FaCode } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group>
          <ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'red.5', to: 'orange.5', deg: 45 }}>
            <FaCode size={rem(30)} />
          </ThemeIcon>
          <Text color="dimmed" m={rem(10)}>
            &copy; {new Date().getFullYear()} Richard Roberson
          </Text>
        </Group>

        <BrandButtonGroup />
      </Container>
    </div>
  );
}