import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const startInterval = useCallback(() => {
    function tick() {
      savedCallback.current();
    }
    
    if (delay !== null) {
      const id = setInterval(tick, delay);
      setTimerId(id);
      return () => clearInterval(id);
    }
  }, [delay]);

  const stopInterval = useCallback(() => timerId && clearInterval(timerId), [timerId]);

  const restartInterval = () => stopInterval() || startInterval();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    return startInterval();
  }, [delay]);

  return { stopInterval, restartInterval };
}