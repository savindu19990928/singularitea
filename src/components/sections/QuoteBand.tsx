import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../ui/Reveal';

type QuoteBandProps = {
  image: string;
  label: string;
  title: string;
  body: string;
  signoff?: string;
};

export function QuoteBand({ image, label, title, body, signoff }: QuoteBandProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-ink py-28 sm:py-36">
      <motion.img
        style={{ y }}
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 -top-[6%] h-[112%] w-full object-cover" />
      
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.18em] text-amber uppercase">{label}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 font-serif text-3xl leading-[1.25] text-cream sm:text-5xl">{title}</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream/85">{body}</p>
        </Reveal>
        {signoff &&
        <Reveal delay={0.18}>
            <p className="mt-10 font-serif text-xl italic text-amber sm:text-2xl">{signoff}</p>
          </Reveal>
        }
      </div>
    </section>);

}