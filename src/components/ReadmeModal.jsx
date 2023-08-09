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
    //if error try master instead of main
    const githubUrl = `https://raw.githubusercontent.com/${repo}/main/README.md`; // replace {owner} and {repo} with the repo details

    
    fetch(githubUrl)
      .then((response) => response.text())
      .then((data) => {
        if (data.includes('404: Not Found')) {
          fetch(githubUrl.replace('main', 'master'))
            .then((response) => response.text())
            .then((data) => setReadmeContent(data));
        } else {
          setReadmeContent(data)
        }
      });
    
  }, [repo]);

  return (
    <Modal
      opened={open}
      onClose={onClose}
      title="README.md from GitHub"
      overflow="auto"
      size={rem(1000)}
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
