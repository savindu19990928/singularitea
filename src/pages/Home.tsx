import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { company, homeExplore, images, LOGO_URL } from '../data/content';
import { regions } from '../data/regions';
import { HomeHero } from '../components/sections/HomeHero';
import { QuoteBand } from '../components/sections/QuoteBand';
import { CtaBand } from '../components/ui/CtaBand';
import { Reveal } from '../components/ui/Reveal';

export function Home() {
  const [feature, ...rest] = homeExplore;

  return (
    <>
      <HomeHero />

      {/* Intro split — mirrors the reference brand's image + cream story panel */}
      <section className="grid w-full bg-cream lg:min-h-[88vh] lg:grid-cols-2">
        <div className="relative h-[60vh] min-h-[380px] overflow-hidden lg:h-auto">
          <img
            src={images.cup}
            alt="Hands holding a glass cup of amber Ceylon tea"
            className="absolute inset-0 h-full w-full object-cover" />
          
        </div>
        <div className="flex items-center px-5 py-16 sm:px-12 lg:px-16 xl:px-20">
          <div className="max-w-xl">
            <Reveal>
              <img
                src={LOGO_URL}
                alt="Singularitea"
                className="-ml-[12%] w-[240px] mix-blend-multiply sm:w-[290px]" />
              
            </Reveal>
            <Reveal delay={0.05}>
              <p className="-mt-1 text-xs font-semibold tracking-[0.22em] text-copper uppercase">
                The character of Ceylon
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-plum/90">
                Singularitea is a Sri Lankan tea company dedicated to bringing the character,
                craftsmanship, and natural richness of Ceylon Tea to discerning consumers around the
                world.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-lg leading-relaxed text-plum/80">
                Rooted in Sri Lanka’s renowned tea-growing heritage, we combine traditional
                tea-making expertise with modern standards of processing, quality control, branding,
                and global market development.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/about"
                className="group mt-9 inline-flex items-center gap-2 border-b border-copper pb-1 text-sm font-semibold text-copper">
                
                Read our story
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Explore — one featured path, two supporting */}
      <section className="w-full bg-sand py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <h2 className="max-w-xl font-serif text-4xl leading-tight text-plum sm:text-5xl">
                Great tea begins with great leaves.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="max-w-md leading-relaxed text-plum/75">
                Discover what guides us, how our teas are made, and where Singularitea is headed.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-5 lg:grid-rows-2">
            <ExploreTile {...feature} className="min-h-[420px] lg:col-span-3 lg:row-span-2 lg:min-h-[600px]" large />
            {rest.map((t) =>
            <ExploreTile key={t.to} {...t} className="min-h-[280px] lg:col-span-2" />
            )}
          </div>
        </div>
      </section>

      {/* Regions teaser */}
      <section className="w-full bg-cream py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-4xl leading-tight text-plum sm:text-5xl">
                Seven regions. One remarkable origin.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg leading-relaxed text-plum/80">
                From the misty highlands of Nuwara Eliya to the rich lowlands of Sabaragamuwa, our
                home in Ratnapura, every Ceylon region gives its tea a distinct character.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/journey"
                className="group mt-8 inline-flex items-center gap-2 border-b border-copper pb-1 text-sm font-semibold text-copper">
                
                Explore the regions
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-serif text-2xl text-plum/40 sm:text-3xl lg:text-4xl">
              {regions.map((r) =>
              <li key={r.name} className={r.home ? 'text-copper' : ''}>
                  {r.name}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        image={images.craft}
        label="Crafted with purpose"
        title="At Singularitea, tea is more than a beverage."
        body="It is a connection between Sri Lanka’s mountains, its people, its craftsmanship, and the world. From the first flush of the tea leaf to the final cup, we strive to preserve the character of the tea."
        signoff={`Singularitea — ${company.tagline}`} />
      

      <CtaBand next={{ label: 'Next', title: 'About Us', to: '/about' }} />
    </>);

}

type ExploreTileProps = {
  title: string;
  text: string;
  to: string;
  image: string;
  alt: string;
  className?: string;
  large?: boolean;
};

function ExploreTile({ title, text, to, image, alt, className = '', large }: ExploreTileProps) {
  return (
    <Reveal className={`relative ${className}`}>
      <Link to={to} className="group absolute inset-0 block overflow-hidden rounded-2xl bg-ink">
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
        
        <div className="absolute inset-0 bg-ink/45 transition-colors duration-200 group-hover:bg-ink/55" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <h3 className={`font-serif text-cream ${large ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            {title}
          </h3>
          <p className="mt-2 max-w-sm leading-relaxed text-cream/85">{text}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber">
            Learn more
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>);

}