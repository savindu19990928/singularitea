import React from 'react';
import { Link } from 'react-router-dom';
import { company, navLinks } from '../../data/content';
import { LogoMark } from '../ui/LogoMark';

export function Footer() {
  return (
    <footer className="w-full bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Singularitea home">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                <LogoMark className="h-8 w-[12px]" />
              </span>
              <span className="font-serif text-2xl">Singularitea</span>
            </Link>
            <p className="mt-5 max-w-sm font-serif text-lg italic text-amber">{company.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              A Sri Lankan tea company bringing the character, craftsmanship, and natural richness
              of Ceylon Tea to the world.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-cream">Explore</h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) =>
              <li key={l.to}>
                  <Link
                  to={l.to}
                  className="text-sm text-cream/65 transition-colors duration-150 hover:text-amber">
                  
                    {l.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-sm font-semibold text-cream">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-cream/65 transition-colors duration-150 hover:text-amber">
                  
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${company.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/65 transition-colors duration-150 hover:text-amber">
                  
                  WhatsApp {company.whatsappDisplay}
                </a>
              </li>
              <li>
                <address className="not-italic leading-relaxed text-cream/65">
                  {company.addressLines.map((line) =>
                  <span key={line} className="block">
                      {line}
                    </span>
                  )}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-6 text-sm text-cream/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Pure Ceylon Tea · Made in Sri Lanka</p>
        </div>
      </div>
    </footer>);

}