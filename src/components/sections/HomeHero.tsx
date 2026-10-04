import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../../data/content';
import { EASE } from '../ui/Reveal';

export function HomeHero() {
  const reduce = useReducedMotion();

  const item = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: EASE, delay }
  });

  return (
    <section className="relative flex h-[100svh] min-h-[600px] w-full items-end overflow-hidden bg-ink pt-[72px] md:items-center">
      <motion.img
        src={images.hero}
        alt="Misty Ceylon tea terraces in the Sri Lankan highlands at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        animate={reduce ? { scale: 1 } : { scale: 1.08 }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }} />
      
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 md:pb-0">
        <motion.p {...item(0.1)} className="mb-5 text-sm font-medium tracking-[0.18em] text-amber uppercase">
          Pure Ceylon Tea · Sri Lanka
        </motion.p>
        <h1 className="max-w-4xl font-serif text-[2.6rem] leading-[1.08] text-cream sm:text-6xl lg:text-7xl">
          <motion.span {...item(0.16)} className="block">
            Distinctly Sri Lankan.
          </motion.span>
          <motion.span {...item(0.22)} className="block italic text-amber">
            Naturally Exceptional.
          </motion.span>
        </h1>
        <motion.p {...item(0.28)} className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Bringing the character, craftsmanship, and natural richness of Ceylon Tea to discerning tea
          lovers around the world.
        </motion.p>
        <motion.div {...item(0.34)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-cream">
            
            Discover our story
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-150 hover:border-cream hover:bg-cream/10">
            
            Partner with us
          </Link>
        </motion.div>
      </div>
    </section>);

}