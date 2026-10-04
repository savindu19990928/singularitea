import React from 'react';
import { LOGO_URL } from '../../data/content';

type LogoMarkProps = {
  className?: string;
};

/** Crops the "S" leaf mark out of the full logo artwork. Use on light surfaces (multiply removes the white). */
export function LogoMark({ className = 'h-10 w-[15px]' }: LogoMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 mix-blend-multiply ${className}`}
      style={{
        backgroundImage: `url(${LOGO_URL})`,
        backgroundSize: '542% auto',
        backgroundPosition: '49% 43%',
        backgroundRepeat: 'no-repeat'
      }} />);


}