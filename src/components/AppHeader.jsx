import { Header, Title, MediaQuery, Burger, Group, useMantineTheme, rem, ThemeIcon } from "@mantine/core";
import { SwitchToggle } from "./SwitchToggle";
import BrandButtonGroup from "./BrandButtonGroup";
import { FaCode } from "react-icons/fa";

const AppHeader = ({ opened, setOpened }) => {
  const theme = useMantineTheme();

  return (
    <Header height={{ base: 60, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Group>
          <MediaQuery smallerThan="sm" styles={{ display: 'none'}}>
            {/* <Avatar radius="md" size={rem(40)} color="blue" src="avatar.jpg" /> */}
            <ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ from: 'red.5', to: 'orange.5', deg: 45 }}>
              <FaCode size={rem(30)} />
            </ThemeIcon>
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ fontSize: 17}}>
            <Title fw={900} order={1} size={'h2'} variant={'gradient'} gradient={{ from: 'red.5', to: 'orange.5', deg: 45 }}>Richard Roberson's Portfolio</Title>
          </MediaQuery>
        </Group>
        <div></div>
        <MediaQuery smallerThan="sm" styles={{ display: 'none'}}>
          <Group spacing={'lg'}>
            <BrandButtonGroup />
            <SwitchToggle />
          </Group>
        </MediaQuery>
      </div>
    </Header>
  );
};

export default AppHeader;
