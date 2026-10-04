import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { EASE } from './Reveal';

type PageHeroProps = {
  label: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
};

export function PageHero({ label, title, intro, image, alt }: PageHeroProps) {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: EASE, delay }
  });

  return (
    <section className="relative flex min-h-[460px] w-full items-end overflow-hidden bg-ink pt-[72px] sm:min-h-[520px] lg:h-[64vh]">
      <motion.img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: EASE }} />
      
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20">
        <motion.nav {...item(0.05)} aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-cream/70">
            <li>
              <Link to="/" className="transition-colors duration-150 hover:text-amber">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRightIcon className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="text-amber">
              {label}
            </li>
          </ol>
        </motion.nav>
        <motion.h1
          {...item(0.1)}
          className="mt-5 max-w-4xl font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
          
          {title}
        </motion.h1>
        <motion.p {...item(0.16)} className="mt-5 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          {intro}
        </motion.p>
      </div>
    </section>);

}