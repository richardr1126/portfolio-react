import { Modal, rem, useMantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';


const DemoModal = ({ open, onClose, demo }) => {
  const { colorScheme } = useMantineColorScheme();
  const [demoContent, setDemoContent] = useState(demo);
  const dark = colorScheme === 'dark';

  useEffect(() => {
    setDemoContent(demo);
  }, [demo]);

  return (
    <Modal
      key={demo}
      opened={open}
      onClose={onClose}
      title="Demo"
      overflow="auto"
      size={rem(1000)}
    >
      {dark ? (
        <iframe
          title="demo"
          src={`${demoContent}/?__theme=dark`}
          frameBorder={0}
          width={'100%'}
          height={1050}
        ></iframe>
      ) : (
        <iframe
          title="demo"
          src={demoContent}
          frameBorder={0}
          width={'100%'}
          height={1050}
        ></iframe>
      )
      }
    </Modal>
  );
};

export default DemoModal;
