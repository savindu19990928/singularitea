import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { journeySteps } from '../../data/content';
import { Reveal } from '../ui/Reveal';

export function Timeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <ol ref={listRef} className="relative">
      <span className="absolute bottom-3 left-[11px] top-3 w-px bg-plum/15" aria-hidden="true" />
      <motion.span
        style={{ scaleY }}
        className="absolute bottom-3 left-[11px] top-3 w-px origin-top bg-copper"
        aria-hidden="true" />
      
      {journeySteps.map((s, i) =>
      <Reveal as="li" key={s.title} className="relative pb-12 pl-14 last:pb-0 sm:pb-14">
          <span className="absolute left-0 top-1 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-copper bg-cream">
            <span className="h-2 w-2 rounded-full bg-copper" />
          </span>
          <p className="text-sm font-medium text-leaf">Stage {i + 1}</p>
          <h3 className="mt-1 font-serif text-2xl text-plum sm:text-3xl">{s.title}</h3>
          <p className="mt-3 max-w-lg leading-relaxed text-plum/80">{s.text}</p>
          <p className="mt-3 text-sm italic text-copper">{s.detail}</p>
        </Reveal>
      )}
    </ol>);

}