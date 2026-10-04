import React from 'react';
import { capabilities, companyFacts, images } from '../data/content';
import { PageHero } from '../components/ui/PageHero';
import { CtaBand } from '../components/ui/CtaBand';
import { Reveal } from '../components/ui/Reveal';

export function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Distinctly Sri Lankan. Naturally Exceptional."
        intro="A Sri Lankan tea company bringing the character, craftsmanship, and natural richness of Ceylon Tea to discerning consumers around the world."
        image={images.lowland}
        alt="Lush lowland tea estate near Ratnapura, Sri Lanka" />
      

      {/* Story */}
      <section className="w-full bg-cream py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="font-serif text-3xl leading-[1.25] text-plum sm:text-4xl lg:text-[2.6rem]">
              Rooted in Sri Lanka’s renowned tea-growing heritage, made for the world.
            </h2>
          </Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-plum/80 lg:col-span-6">
            <Reveal delay={0.05}>
              <p>
                Singularitea is a Sri Lankan tea company dedicated to bringing the character,
                craftsmanship, and natural richness of Ceylon Tea to discerning consumers around the
                world.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We combine traditional tea-making expertise with modern standards of processing,
                quality control, branding, and global market development.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="border-l-2 border-copper pl-5 font-serif text-xl italic text-plum">
                Our philosophy is simple: great tea begins with great leaves, careful
                craftsmanship, and respect for its origin.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="w-full bg-forest text-cream">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative h-[60vh] min-h-[380px] overflow-hidden lg:h-auto lg:min-h-[640px]">
            <img
              src={images.plucker}
              alt="A Sri Lankan tea plucker among tea bushes"
              className="absolute inset-0 h-full w-full object-cover" />
            
          </div>
          <div className="flex items-center px-5 py-16 sm:px-12 lg:px-16">
            <div className="max-w-lg">
              <Reveal>
                <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                  The heritage of Ceylon Tea
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 leading-relaxed text-cream/80">
                  Since commercial tea cultivation began on the island in 1867, Ceylon Tea has become
                  one of the most celebrated teas in the world, known for its brightness, depth, and
                  remarkable variety.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 leading-relaxed text-cream/80">
                  Our home is Ratnapura, in the Sabaragamuwa province, a lowland region known for
                  rich, full-bodied teas. From here we work with carefully selected sources across
                  Sri Lanka’s diverse growing regions.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8">
                  <div>
                    <dt className="text-sm text-cream/60">Ceylon Tea since</dt>
                    <dd className="mt-1 font-serif text-4xl text-amber">1867</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-cream/60">Growing regions</dt>
                    <dd className="mt-1 font-serif text-4xl text-amber">7</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="w-full bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-serif text-3xl leading-tight text-plum sm:text-4xl">
                Traditional expertise. Modern standards.
              </h2>
            </Reveal>
            <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-plum/80">
                Every stage, from leaf selection and processing to blending, packaging, and
                presentation, is approached with a commitment to consistency and quality.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-x-16 sm:grid-cols-2">
            {capabilities.map((c, i) =>
            <Reveal key={c.title} delay={i * 0.04} className="border-t border-plum/15 py-8">
                <h3 className="font-serif text-2xl text-plum">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-plum/75">{c.text}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="w-full bg-sand py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="overflow-hidden rounded-2xl lg:col-span-5">
            <img
              src={images.packaging}
              alt="Premium tea packaging with loose leaf tea"
              className="aspect-[4/3] w-full object-cover" />
            
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h2 className="font-serif text-3xl text-plum sm:text-4xl">At a glance</h2>
            </Reveal>
            <dl className="mt-8">
              {companyFacts.map((f, i) =>
              <Reveal
                key={f.label}
                delay={i * 0.04}
                className="grid gap-1 border-t border-plum/15 py-5 sm:grid-cols-2 sm:gap-6">
                
                  <dt className="text-sm text-plum/60 sm:text-base">{f.label}</dt>
                  <dd className="font-serif text-lg text-plum">{f.value}</dd>
                </Reveal>
              )}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand next={{ label: 'Next', title: 'Our Philosophy', to: '/philosophy' }} />
    </>);

}