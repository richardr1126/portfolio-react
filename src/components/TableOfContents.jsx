import { createStyles, Box, Text, Group, rem } from '@mantine/core';
import { IconListSearch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.xs,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 7],
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
  },
}));

export function TableOfContents({ links, active }) {
  const { classes, cx } = useStyles();

  const scrollTo = (event, link) => {
    event.preventDefault();
    // scroll to section with offset for Title
    const section = document.querySelector(link);
    const offset = 75;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const items = links.map((item) => (
    <Box
      component="a"
      href={item.link}
      onClick={(event) => scrollTo(event, item.link)}
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === item.link })}
      sx={(theme) => ({ paddingLeft: `calc(${item.order} * ${theme.spacing.md})` })}
    >
      {item.label}
    </Box>
  ));

  return (
    <div>
      <Group mb="md">
        <IconListSearch size="1.1rem" stroke={1.5} />
        <Text>Jump to</Text>
      </Group>
      {items}
    </div>
  );
}
