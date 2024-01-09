// metrics.js

import { useEffect } from 'react';

export function useWebVitals(onPerfEntry) {
  useEffect(() => {
    import('web-vitals').then(({ getFID, getFCP, getLCP, getTTFB }) => {
      if (onPerfEntry && typeof onPerfEntry === 'function') {
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }
    });
  }, [onPerfEntry]);
}
