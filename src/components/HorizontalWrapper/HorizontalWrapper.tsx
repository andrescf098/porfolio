'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const HorizontalWrapper = ({ children }: Props) => {
  const textVariants = {
    initial: { opacity: 0, width: '100%' },
    animate: {
      opacity: 1,
      wiwidthth: '100%',
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div variants={textVariants} initial='initial' whileInView='animate'>
      {children}
    </motion.div>
  );
};
