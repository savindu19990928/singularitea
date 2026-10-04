import React from 'react';
import { CheckIcon } from 'lucide-react';
import { company, connections, images, pillars } from '../data/content';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { Reveal } from '../components/ui/Reveal';
import { QuoteBand } from '../components/sections/QuoteBand';

export function Philosophy() {
  return (
    <>
      <PageHero
        label="Our Philosophy"
        title="Great tea begins with great leaves."
        intro="Careful craftsmanship and respect for origin guide everything we do, from the first leaf to the final cup."
        image={images.leaf}
        alt="A hand holding a freshly plucked tea shoot" />
      

      {/* Philosophy statement */}
      <section className="w-full bg-forest py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <blockquote className="max-w-5xl font-serif text-3xl leading-[1.25] sm:text-4xl lg:text-[3.25rem]">
              “Our philosophy is simple: great tea begins with{' '}
              <em className="text-amber">great leaves</em>, careful craftsmanship, and respect for
              its origin.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Pillars — alternating rows */}
      <section className="w-full bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-5 sm:space-y-32 sm:px-8">
          {pillars.map((p, i) =>
          <article key={p.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={p.image} alt={p.alt} className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]" />
              </Reveal>
              <div>
                <Reveal>
                  <p className="font-serif text-lg italic text-copper">{p.lead}</p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-2 font-serif text-4xl text-plum sm:text-5xl">{p.title}</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-6 text-lg leading-relaxed text-plum/80">{p.text}</p>
                </Reveal>
                <ul className="mt-8 border-t border-plum/15">
                  {p.points.map((pt, j) =>
                <Reveal
                  as="li"
                  key={pt}
                  delay={0.12 + j * 0.04}
                  className="flex items-center gap-3 border-b border-plum/15 py-4 text-plum">
                  
                      <CheckIcon className="h-4 w-4 shrink-0 text-leaf" />
                      {pt}
                    </Reveal>
                )}
                </ul>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* Connections */}
      <section className="w-full bg-sand py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-plum sm:text-4xl">
              Tea is a connection between Sri Lanka’s mountains, its people, its craftsmanship, and
              the world.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {connections.map((c, i) =>
            <Reveal
              key={c.title}
              delay={i * 0.04}
              className="border-t border-plum/20 pt-6 sm:pr-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0">
              
                <h3 className="font-serif text-2xl text-plum">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-plum/75">{c.text}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <QuoteBand
        image={images.craft}
        label="Crafted with purpose"
        title="From the first flush to the final cup."
        body="We strive to preserve the character of the tea while presenting it in a contemporary, globally appealing form."
        signoff={`Singularitea — ${company.tagline}`} />
      

      <CtaBand next={{ label: 'Next', title: 'Our Journey', to: '/journey' }} />
    </>);

}