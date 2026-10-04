import React from 'react';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Philosophy } from './pages/Philosophy';
import { Journey } from './pages/Journey';
import { VisionMission } from './pages/VisionMission';
import { Contact } from './pages/Contact';
import { useFavicon } from './hooks/useFavicon';
import { LOGO_URL } from './data/content';

export function App() {
  useFavicon(LOGO_URL, 'Singularitea — Distinctly Sri Lankan. Naturally Exceptional.');

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>);

}