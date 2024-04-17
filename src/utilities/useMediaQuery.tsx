'use client';

import { useEffect } from 'react';

export const useMediaQuery = () => {
  let mediaQuery;
  useEffect(() => {
    mediaQuery = window.matchMedia('(min-width:400px)').matches;
  }, []);
  return console.log(mediaQuery);
};
