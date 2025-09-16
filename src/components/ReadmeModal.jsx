import { useState, useEffect } from 'react';
import { Modal, rem, useMantineColorScheme } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import './github-light.css';
import './github-dark.css';

const ReadmeModal = ({ open, onClose, repo }) => {
  const [readmeContent, setReadmeContent] = useState(null);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  

  useEffect(() => {
    if (!open || !repo) return;
    // if error try master instead of main
    const githubUrl = `https://raw.githubusercontent.com/${repo}/main/README.md`;

    let cancelled = false;
    fetch(githubUrl)
      .then((response) => response.text())
      .then((data) => {
        if (cancelled) return;
        if (data.includes('404: Not Found')) {
          fetch(githubUrl.replace('main', 'master'))
            .then((response) => response.text())
            .then((data) => {
              if (!cancelled) setReadmeContent(data);
            });
        } else {
          setReadmeContent(data);
        }
      });

    return () => { cancelled = true };
  }, [open, repo]);

  return (
    <Modal
      opened={open}
      onClose={onClose}
      title="README.md from GitHub"
      overflow="auto"
      size={rem(1000)}
      keepMounted={false}
    >
      {
        readmeContent ? (
          dark ? 
            (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeRaw]} 
                className='markdown-dark'
              >
                {readmeContent}
              </ReactMarkdown>
            ) : (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                rehypePlugins={[rehypeRaw]} 
                className='markdown-light'
              >
                {readmeContent}
              </ReactMarkdown>
            )
        ) : (
          'Loading...'
        )
      }
    </Modal>
  );  
};

export default ReadmeModal;
