import { useState, useEffect } from 'react';
import { Title, rem } from "@mantine/core";

function Resume({ id }) {
  const [iframeHeight, setIframeHeight] = useState('500px');

  useEffect(() => {
    // Function to dynamically calculate height based on screen width
    const calculateHeight = () => {
      const screenWidth = window.innerWidth;
      const baseHeight = 500; // Base height for small screens
      const scaleFactor = 0.9; // Scale factor for larger screens

      // Calculate height as a function of screen width
      let height = baseHeight + (screenWidth - 500) * scaleFactor;
      height = Math.max(height, baseHeight); // Ensure minimum height of baseHeight

      setIframeHeight(`${height}px`);
    };

    // Update height on mount and when the window resizes
    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <section id={id}>
      <Title order={2} mb={rem(15)}>Resume</Title>

      <iframe
        src="https://drive.google.com/file/d/1lq_ojDOxMp-16QLF8Jdrc1eT8Kb7n2Qe/preview"
        width="100%"
        height={iframeHeight}
        allow="autoplay"
        title="Resume PDF"
        style={{ border: "none" }}
      ></iframe>
    </section>
  );
}

export default Resume;
