import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

export function SiteLayout() {
  const { pathname } = useLocation();

  // Jump (not smooth-scroll) to the top on every route change, before paint.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-cream">
      <Header />
      <motion.main
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}>
        
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppButton />
    </div>);

}