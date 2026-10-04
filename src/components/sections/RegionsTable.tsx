import React from 'react';
import { regions } from '../../data/regions';
import { Reveal } from '../ui/Reveal';

export function RegionsTable() {
  return (
    <div className="border-t border-plum/15">
      <div className="hidden grid-cols-12 gap-6 border-b border-plum/15 py-4 text-sm font-medium text-plum/60 md:grid">
        <span className="col-span-3">Region</span>
        <span className="col-span-3">Elevation</span>
        <span className="col-span-6">Character in the cup</span>
      </div>
      <ul>
        {regions.map((r, i) =>
        <Reveal
          as="li"
          key={r.name}
          delay={i * 0.03}
          className={`grid gap-1 border-b border-plum/15 py-5 md:grid-cols-12 md:gap-6 md:py-6 ${
          r.home ? 'bg-sand/70 -mx-5 px-5 sm:-mx-8 sm:px-8 md:mx-0 md:px-4' : ''}`
          }>
          
            <span className="flex items-center gap-3 font-serif text-xl text-plum md:col-span-3">
              {r.name}
              {r.home &&
            <span className="whitespace-nowrap rounded-full bg-leaf px-2.5 py-0.5 font-sans text-xs font-medium text-cream">
                  Our home
                </span>
            }
            </span>
            <span className="text-sm text-copper md:col-span-3 md:self-center md:text-base">
              {r.elevation}
            </span>
            <span className="mt-1 leading-relaxed text-plum/80 md:col-span-6 md:mt-0 md:self-center">
              {r.character}
            </span>
          </Reveal>
        )}
      </ul>
    </div>);

}