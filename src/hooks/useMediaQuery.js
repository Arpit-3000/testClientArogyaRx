import { useState, useEffect } from 'react';

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
};

export function useMediaQuery(breakpoint) {
  const [matches, setMatches] = useState(false);
  const query = `(min-width: ${breakpoints[breakpoint]})`;

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Update state with current value
    const updateMatches = () => setMatches(media.matches);
    
    // Initial check
    updateMatches();
    
    // Add listener for changes
    media.addEventListener('change', updateMatches);
    
    // Cleanup
    return () => media.removeEventListener('change', updateMatches);
  }, [query]);

  return matches;
}

export function useIsMobile() {
  return !useMediaQuery('md');
}

export function useIsTablet() {
  const isMd = useMediaQuery('md');
  const isLg = useMediaQuery('lg');
  return isMd && !isLg;
}

export function useIsDesktop() {
  return useMediaQuery('lg');
}
