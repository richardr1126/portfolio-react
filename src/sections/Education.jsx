import React from 'react';
import { Group, Stack, Image, rem, Text, Space, Flex } from '@mantine/core';

function Education() {
  return (
    <Flex id='education' padding="md" gap={rem(20)} direction="row" align="center">
      <Image
        src="cu.png"
        height={rem(50)}
        width={rem(50)}
        alt="University Logo"
        radius="xl"
        styles={{ img: { verticalAlign: 'middle' } }}
      />
      <Flex direction="column" w={'100%'}>
        <Group direction="row" spacing="md" align="center" mb={rem(5)}>
          <Stack spacing={0}>
            <Text fw={700}>University of Colorado Boulder College of Engineering</Text>
            <Text fw={500} c={'dimmed'}>Bachelor's of Science in Computer Science</Text>
          </Stack>
          <div style={{ marginLeft: 'auto' }}>
            <Text fw={700} c={'dimmed'}>2020-2024</Text>
          </div>
        </Group>
        <Space h={rem(10)} />
        <Group direction="row" spacing="md" align="center" mb={rem(5)}>
          <Stack spacing={0}>
            <Text fw={700}>University of Colorado Boulder College of Engineering</Text>
            <Text fw={500} c={'dimmed'}>Master's in Computer Science</Text>
          </Stack>
          <div style={{ marginLeft: 'auto' }}>
            <Text fw={700} c={'dimmed'}>2024-Present</Text>
          </div>
        </Group>
      </Flex>
    </Flex>
  );
}

export default Education;
