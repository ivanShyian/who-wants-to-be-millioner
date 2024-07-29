import { useEffect, useState } from 'react';

export const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.matchMedia('(min-width: 768px)').matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };

    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return {
    isLargeScreen,
  };
};
