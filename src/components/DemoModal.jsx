import { Modal, rem, useMantineColorScheme } from '@mantine/core';
import { useEffect, useState } from 'react';


const DemoModal = ({ open, onClose, demo }) => {
  const { colorScheme } = useMantineColorScheme();
  const [demoContent, setDemoContent] = useState(demo);
  const dark = colorScheme === 'dark';

  useEffect(() => {
    setDemoContent(demo);
  }, [demo]);

  // Defer heavy iframe rendering until modal is actually open
  return (
    <Modal
      key={demoContent + (dark ? '-dark' : '-light')}
      opened={open}
      onClose={onClose}
      title="Demo"
      overflow="auto"
      size={rem(1000)}
      keepMounted={false}
    >
      {open && (
        dark ? (
          <iframe
            title="demo"
            src={`${demoContent}/?__theme=dark`}
            frameBorder={0}
            width={'100%'}
            height={1050}
            loading="lazy"
          />
        ) : (
          <iframe
            title="demo"
            src={demoContent}
            frameBorder={0}
            width={'100%'}
            height={1050}
            loading="lazy"
          />
        )
      )}
    </Modal>
  );
};

export default DemoModal;
