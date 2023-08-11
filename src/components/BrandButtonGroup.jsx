import { Group, ActionIcon, rem } from '@mantine/core';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMailPlus } from 'react-icons/lu';
import { ReactComponent as IconHuggingFace }  from '../icons/huggingface.svg'

export default function BrandButtonGroup() {
  return (
    <Group spacing={8} position='center'>
      <ActionIcon size={rem(40)} variant="light" onClick={() => window.open('https://github.com/richardr1126', '_blank')}>
        <FaGithub size={rem(24)} />
      </ActionIcon>
      <ActionIcon size={rem(40)} color='yellow' variant="light" onClick={() => window.open('https://huggingface.co/richardr1126', '_blank')}>
        <IconHuggingFace style={{ width: rem(28), height: rem(28) }} />
      </ActionIcon>
      <ActionIcon color='blue' size={rem(40)} variant="light" onClick={() => window.open('https://www.linkedin.com/in/richard-roberson/', '_blank')}>
        <FaLinkedin size={rem(24)} />
      </ActionIcon>
      <ActionIcon color='primary' size={rem(40)} variant="light" onClick={() => window.open('mailto:richardr1126@gmail.com', '_blank')}>
        <LuMailPlus size={rem(24)} />
      </ActionIcon>
    </Group>
  );
}