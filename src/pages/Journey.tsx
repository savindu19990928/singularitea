import React from 'react';
import { CheckIcon } from 'lucide-react';
import { images, qualityCommitments } from '../data/content';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { Reveal } from '../components/ui/Reveal';
import { Timeline } from '../components/sections/Timeline';
import { RegionsTable } from '../components/sections/RegionsTable';

export function Journey() {
  return (
    <>
      <PageHero
        label="Our Journey"
        title="From Sri Lanka to the World"
        intro="Every stage, from leaf selection and processing to blending, packaging, and presentation, is approached with a commitment to consistency and quality."
        image={images.craft}
        alt="Tea leaves withering inside a Sri Lankan tea factory" />
      

      {/* Process */}
      <section className="w-full bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight text-plum sm:text-5xl">
                Leaf to cup, with care at every stage.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-plum/80">
                We work with carefully selected tea sources and focus on producing teas that reflect
                the unique character of Sri Lanka’s diverse growing regions.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-plum/80">
                Our goal is to create tea products that are not only enjoyable to drink, but also
                represent the authentic identity and heritage of Ceylon Tea.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 overflow-hidden rounded-2xl">
              <img
                src={images.dryleaf}
                alt="Dry twisted Ceylon black tea leaves with golden tips"
                className="aspect-[16/10] w-full object-cover lg:aspect-[4/3]" />
              
            </Reveal>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Regions */}
      <section className="w-full bg-cream pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 border-t border-plum/15 pt-20 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-serif text-4xl leading-tight text-plum sm:text-5xl">
                The regions of Ceylon
              </h2>
            </Reveal>
            <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-plum/80">
                Sri Lanka’s seven tea regions differ in altitude, rainfall, and climate, and each
                gives its tea a distinct character. Our home, Ratnapura, lies in Sabaragamuwa.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <RegionsTable />
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="w-full bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex items-center px-5 py-20 sm:px-8 lg:order-1 lg:pr-16">
            <div className="max-w-lg">
              <Reveal>
                <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                  Consistency and quality, without compromise
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 leading-relaxed text-cream/80">
                  Quality is never left to a single checkpoint. It is built into every stage of our
                  process, so the tea in the final cup is true to its origin.
                </p>
              </Reveal>
              <ul className="mt-8 border-t border-cream/15">
                {qualityCommitments.map((q, i) =>
                <Reveal
                  as="li"
                  key={q}
                  delay={0.08 + i * 0.04}
                  className="flex items-start gap-3 border-b border-cream/15 py-4 text-cream/90">
                  
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-amber" />
                    {q}
                  </Reveal>
                )}
              </ul>
            </div>
          </div>
          <div className="relative h-[55vh] min-h-[360px] overflow-hidden lg:order-2 lg:h-auto lg:min-h-[600px]">
            <img
              src={images.tasting}
              alt="Tea being tasted in rows of porcelain cups"
              className="absolute inset-0 h-full w-full object-cover" />
            
          </div>
        </div>
      </section>

      <CtaBand next={{ label: 'Next', title: 'Vision & Mission', to: '/vision-mission' }} />
    </>);

}