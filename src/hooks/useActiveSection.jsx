import { useState, useEffect } from 'react';

export function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState();
  const [intersectingSections, setIntersectingSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        let newIntersectingSections = [...intersectingSections];

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const existingIndex = newIntersectingSections.findIndex(
              section => section.id === entry.target.id
            );

            if (existingIndex !== -1) {
              newIntersectingSections[existingIndex].rect = entry.boundingClientRect;
            } else {
              newIntersectingSections.push({
                id: entry.target.id,
                rect: entry.boundingClientRect,
              });
            }
          } else {
            newIntersectingSections = newIntersectingSections.filter(
              section => section.id !== entry.target.id
            );
          }
        });
        
        setIntersectingSections(newIntersectingSections);
      },
      { threshold: 0.1, rootMargin: '-75px 0px 0px 0px' } // adjust top margin to offset navbar height
    );

    sections.forEach(section => {
      observer.observe(document.getElementById(section));
    });

    return () => {
      observer.disconnect();
    };
  }, [sections, intersectingSections]);

  useEffect(() => {
    if (intersectingSections.length > 0) {
      const closest = intersectingSections.reduce(
        (acc, item, index) => {
          if (Math.abs(acc.position) < Math.abs(item.rect.y)) {
            return acc;
          }

          return {
            index,
            position: item.rect.y,
          };
        },
        { index: 0, position: intersectingSections[0].rect.y }
      );

      setActiveSection('#' + intersectingSections[closest.index].id);
    }
  }, [intersectingSections]);

  return activeSection;
}
