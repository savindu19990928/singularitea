import React from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li';
};

export const EASE = [0.23, 1, 0.32, 1] as const;

export function Reveal({ children, className, delay = 0, y = 16, as = 'div' }: RevealProps) {
  const Comp = as === 'li' ? motion.li : motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: EASE, delay: Math.min(delay, 0.3) }}>
      
      {children}
    </Comp>);

}