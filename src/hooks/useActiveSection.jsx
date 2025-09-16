import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState();
  const [intersectingSections, setIntersectingSections] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create a single observer instance and keep it stable across re-renders
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIntersectingSections((prev) => {
          let newIntersectingSections = [...prev];

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const existingIndex = newIntersectingSections.findIndex(
                (section) => section.id === entry.target.id
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
                (section) => section.id !== entry.target.id
              );
            }
          });

          return newIntersectingSections;
        });
      },
      { threshold: 0.1, rootMargin: '-75px 0px 0px 0px' } // adjust top margin to offset navbar height
    );

    // Observe provided section ids
    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  // Only set up when the list of ids changes
  }, [sections]);

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
