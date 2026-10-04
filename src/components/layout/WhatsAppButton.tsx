import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
import { company } from '../../data/content';
import { EASE } from '../ui/Reveal';

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${company.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Singularitea on WhatsApp"
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE, delay: 0.6 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-colors duration-150 hover:bg-[#1ebe5b] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16">
      
      <MessageCircleIcon className="h-7 w-7" />
    </motion.a>);

}