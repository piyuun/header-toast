import { useLayoutEffect, useState } from 'react';

export default function useVisualViewPort() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      const viewport = window.visualViewport;
      if (viewport) {        
        setSize([viewport.width, viewport.height]);
      }
    }
    window.visualViewport?.addEventListener('resize', updateSize);
    updateSize();
    return () => window.visualViewport?.removeEventListener('resize', updateSize);
  }, []);
  return size;
}