import { Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithubFilled, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function BrandButtonGroup() {
  return (
    <Group spacing={8} position='center'>
      <ActionIcon size={rem(40)} variant="light" onClick={() => window.open('https://github.com/richardr1126', '_blank')}>
        <IconBrandGithubFilled />
      </ActionIcon>
      <ActionIcon color='blue' size={rem(40)} variant="light" onClick={() => window.open('https://www.linkedin.com/in/richard-roberson/', '_blank')}>
        <IconBrandLinkedin />
      </ActionIcon>
      <ActionIcon color='primary' size={rem(40)} variant="light" onClick={() => window.open('mailto:richardr1126@gmail.com', '_blank')}>
        <IconMail />
      </ActionIcon>
    </Group>
  );
}