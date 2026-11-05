'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { VOLUNTEER_FORM_URL } from '@/lib/site-config';

export default function VolunteerDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-primary hover:text-inverse-primary focus:outline-none focus:ring-2 focus:ring-focus-ring sm:px-5"
      >
        Volunteer
        <Icon name="arrow_outward" className="text-base" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="volunteer-dialog-title"
        aria-describedby="volunteer-dialog-description"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
        className="w-[calc(100%-2rem)] max-w-lg rounded-2xl border border-border-subtle bg-surface-raised p-0 text-text-primary shadow-2xl backdrop:bg-primary-container/80"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-secondary">
                Join Kadam
              </p>
              <h2
                id="volunteer-dialog-title"
                className="mt-2 font-display-lg text-display-lg-mobile text-primary sm:text-display-lg"
              >
                Take your next step.
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close volunteer dialog"
              autoFocus
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle text-primary transition-colors hover:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              <Icon name="close" className="text-xl" />
            </button>
          </div>

          <p
            id="volunteer-dialog-description"
            className="mt-4 font-body-md text-body-md text-text-secondary"
          >
            Explore ways to volunteer with Kadam, or use the registration form to get started.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary-container px-5 py-3 font-label-md text-label-md font-semibold text-text-inverse transition-colors hover:bg-action-hover focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Register as a volunteer
              <Icon name="arrow_outward" className="text-base" />
            </a>
            <Link
              href="/volunteer"
              onClick={() => setIsOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-subtle px-5 py-3 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-surface-canvas focus:outline-none focus:ring-2 focus:ring-focus-ring"
            >
              Volunteer details
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
