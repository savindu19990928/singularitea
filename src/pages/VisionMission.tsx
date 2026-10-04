import React from 'react';
import { images, missionItems, relationships } from '../data/content';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { Reveal } from '../components/ui/Reveal';
import { QuoteBand } from '../components/sections/QuoteBand';

export function VisionMission() {
  return (
    <>
      <PageHero
        label="Vision & Mission"
        title="A respected Sri Lankan tea brand, for the world."
        intro="Where we are headed, and the commitments that guide us every day."
        image={images.pour}
        alt="Glass teapot pouring amber Ceylon tea beside loose leaf tea" />
      

      {/* Vision */}
      <section className="w-full bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-copper">Our Vision</h2>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-9">
            <p className="font-serif text-3xl leading-[1.3] text-plum sm:text-4xl lg:text-[2.75rem]">
              To establish Singularitea as a respected Sri Lankan tea brand in international markets,
              offering exceptional Ceylon Tea while creating sustainable value throughout the tea
              industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="font-serif text-2xl text-copper">Our Mission</h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-4 leading-relaxed text-plum/75">
                  Six commitments that shape how we source, make, and share Ceylon Tea.
                </p>
              </Reveal>
            </div>
            <ul className="border-t border-plum/15 lg:col-span-9">
              {missionItems.map((m, i) =>
              <Reveal
                as="li"
                key={m.statement}
                delay={i * 0.04}
                className="grid gap-3 border-b border-plum/15 py-7 md:grid-cols-12 md:gap-8">
                
                  <p className="font-serif text-xl leading-snug text-plum sm:text-2xl md:col-span-7">
                    {m.statement}
                  </p>
                  <p className="leading-relaxed text-plum/75 md:col-span-5 md:pt-1">{m.detail}</p>
                </Reveal>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Relationships */}
      <section className="w-full bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight text-plum sm:text-5xl">
                Relationships built to last
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-plum/80">
                Sustainable value comes from long-term relationships throughout the tea industry,
                from the estates where our leaf is grown to the people who enjoy it.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-2xl">
              <img
                src={images.plucker}
                alt="A Sri Lankan tea plucker among tea bushes"
                className="aspect-[4/3] w-full object-cover" />
              
            </Reveal>
          </div>
          <div className="grid content-start gap-x-12 sm:grid-cols-2 lg:col-span-7">
            {relationships.map((r, i) =>
            <Reveal key={r.title} delay={i * 0.04} className="border-t border-plum/15 py-8">
                <h3 className="font-serif text-2xl text-plum">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-plum/75">{r.text}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <QuoteBand
        image={images.hero}
        label="Looking ahead"
        title="Exceptional Ceylon Tea, shared with the world."
        body="We aim to grow as a trusted name in international markets while honouring the land, people, and heritage that make Ceylon Tea unique." />
      

      <CtaBand next={{ label: 'Next', title: 'Contact Us', to: '/contact' }} />
    </>);

}