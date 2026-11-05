'use client';

import { useEffect, useRef, useState } from 'react';

const METRICS = [
  { value: 15, suffix: '+', label: 'cities', accessibleLabel: '15+ cities' },
  {
    value: 300,
    suffix: '+',
    label: 'volunteers',
    accessibleLabel: '300+ volunteers',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'lives impacted',
    accessibleLabel: '1,000+ lives impacted',
  },
] as const;

const DURATION_MS = 4000;

export default function ImpactMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [values, setValues] = useState<number[]>(() =>
    METRICS.map(({ value }) => value),
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setValues(METRICS.map(() => 1));
        setHasStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / DURATION_MS, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setValues(
        METRICS.map(({ value }) =>
          Math.round(1 + (value - 1) * easedProgress),
        ),
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      aria-label="Kadam Foundation impact at a glance"
      className="mt-0 grid border-y border-white/20 sm:grid-cols-3 lg:col-span-12"
    >
      {METRICS.map((metric, index) => (
        <div
          key={metric.label}
          role="group"
          aria-label={metric.accessibleLabel}
          className={`py-7 sm:px-7 sm:py-8 ${
            index > 0 ? 'border-t border-white/20 sm:border-l sm:border-t-0' : ''
          }`}
        >
          <p aria-hidden="true" className="font-display-lg text-5xl font-medium tracking-tight text-primary sm:text-6xl">
            {values[index].toLocaleString('en-IN')}
            {metric.suffix}
          </p>
          <p className="mt-2 font-eyebrow text-eyebrow uppercase tracking-[0.18em] text-white/75">
            {metric.label}
          </p>
        </div>
      ))}
    </section>
  );
}
