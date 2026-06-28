"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TemplateInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
      if (typeof window !== 'undefined') {
        // Re-run standard jQuery and GSAP initializations
        if (window.initializeHeaderEffects) {
          window.initializeHeaderEffects();
        }
        if (window.initializeMainEffects) {
          window.initializeMainEffects();
        }
      }
    };

    // Delay slightly to give Next.js time to paint the new DOM elements
    const timer = setTimeout(init, 150);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
