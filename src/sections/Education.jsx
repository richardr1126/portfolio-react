import React from 'react';
import { Paper, Group, Stack, Image, rem, Text } from '@mantine/core';

function Education() {
  return (
    <Paper id='education' padding="md">
      <Group direction="row" spacing="md" align="center" mb={rem(5)}>
        <Image
          src="cu.png"
          height={rem(50)}
          width={rem(50)}
          alt="University Logo"
          radius="xl"
          styles={{ img: { verticalAlign: 'middle' } }}
        />
        <Stack spacing={0}>
          <Text fw={700}>University of Colorado Boulder</Text>
          <Text fw={500} c={'dimmed'}>Bachelor's of Science in Computer Science</Text>
        </Stack>
        <div style={{ marginLeft: 'auto' }}>
          <Text fw={700} c={'dimmed'}>2020-2024</Text>
        </div>
      </Group>
    </Paper>
  );
}

export default Education;
