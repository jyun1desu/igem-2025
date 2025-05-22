import { useEffect, useState } from 'react';

export function useActiveSection({sectionIds = [] , thresholdRatio = 2.5}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const isPastThreshold = rect.top < window.innerHeight / thresholdRatio;

        if (isPastThreshold) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, thresholdRatio]);

  return activeSection;
}
