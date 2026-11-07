'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const HERO_IMAGES = [
  {
    src: '/images/homepage/kadam-hero.jpg',
    alt: '',
    priority: true,
  },
  {
    src: '/images/homepage/kadam-community-learning.webp',
    alt: '',
    priority: false,
  },
  {
    src: '/images/homepage/kadam-community-portrait.webp',
    alt: '',
    priority: false,
  },
] as const;

const ROTATION_INTERVAL_MS = 4000;

export default function HomeHeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion !== false) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_IMAGES.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      {HERO_IMAGES.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={image.priority}
          loading={image.priority ? undefined : 'eager'}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
            activeIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}
