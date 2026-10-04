import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';

type CtaBandProps = {
  next?: {label: string;to: string;title: string;};
};

export function CtaBand({ next }: CtaBandProps) {
  return (
    <section className="w-full bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <Reveal className="px-5 py-16 sm:px-8 sm:py-20 lg:pr-16">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Interested in partnering with Singularitea?
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-cream/75">
            We welcome distributors, growers, and partners who share our respect for Ceylon Tea.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-cream">
            
            Contact us
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Reveal>

        {next &&
        <Link
          to={next.to}
          className="group flex flex-col justify-center border-t border-cream/15 px-5 py-14 transition-colors duration-200 hover:bg-moss sm:px-8 lg:border-l lg:border-t-0 lg:pl-16">
          
            <span className="text-sm text-cream/60">{next.label}</span>
            <span className="mt-2 flex items-center gap-4 font-serif text-3xl sm:text-4xl">
              {next.title}
              <ArrowRightIcon className="h-7 w-7 text-amber transition-transform duration-200 ease-out group-hover:translate-x-1.5" />
            </span>
          </Link>
        }
      </div>
    </section>);

}