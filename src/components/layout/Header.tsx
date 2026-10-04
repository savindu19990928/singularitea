import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { navLinks } from '../../data/content';
import { LogoMark } from '../ui/LogoMark';
import { EASE } from '../ui/Reveal';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-200 ${
      scrolled || open ? 'shadow-[0_1px_0_rgba(59,42,44,0.12),0_8px_24px_-14px_rgba(20,17,15,0.3)]' : ''}`
      }>
      
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Singularitea home">
          <LogoMark className="h-11 w-[17px]" />
          <span className="font-serif text-[22px] tracking-[0.02em] text-plum">Singularitea</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((l) =>
            <li key={l.to}>
                <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                `group relative block whitespace-nowrap py-2 text-[15px] font-medium transition-colors duration-150 ${
                isActive ? 'text-copper' : 'text-plum/80 hover:text-copper'}`

                }>
                
                  {({ isActive }) =>
                <>
                      {l.label}
                      <span
                    className={`absolute inset-x-0 bottom-0.5 h-px origin-left bg-copper transition-transform duration-200 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`
                    } />
                  
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-plum transition-colors duration-150 hover:bg-sand lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}>
          
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="h-[calc(100svh-72px)] overflow-y-auto border-t border-plum/10 bg-cream px-5 pb-8 pt-2 sm:px-8 lg:hidden">
          
            <ul className="flex flex-col">
              {navLinks.map((l) =>
            <li key={l.to} className="border-b border-plum/10">
                  <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                `flex items-center justify-between py-4 font-serif text-xl ${
                isActive ? 'text-copper' : 'text-plum'}`

                }>
                
                    {({ isActive }) =>
                <>
                        {l.label}
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-copper" />}
                      </>
                }
                  </NavLink>
                </li>
            )}
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}