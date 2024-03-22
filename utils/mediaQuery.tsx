import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [breakPoint, setBreakpoint] = useState<string>('sm');

  function handleResize() {
    if (window.innerWidth < 641) {
      setBreakpoint('xsm')
    } else if (window.innerWidth < 769) {
      setBreakpoint('sm')
    } else if (window.innerWidth < 1025) {
      setBreakpoint('md')
    } else if (window.innerWidth < 1281) {
      setBreakpoint('lg') 
    } else {
      setBreakpoint('xl')
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
    
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize)
    }
  }, []);

  return breakPoint;
};

export default useMediaQuery;