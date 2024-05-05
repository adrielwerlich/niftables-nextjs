"use client"
import React from 'react';

export const ScreenSizeContext = React.createContext({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0,
});

interface ScreenSizeProviderProps {
  children: React.ReactNode;
}

export const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({ children }) => {
  const [size, setSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={size}>
      {children}
    </ScreenSizeContext.Provider>
  );
};