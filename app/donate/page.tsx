'use client';

import Image from 'next/image';
import Icon from '@/components/Icon';
import { CONTACT_INFO } from '@/lib/site-config';

export default function DonatePage() {
  return (
<main className="flex-grow">
  <section className="py-12 md:py-20 px-space-lg md:px-margin max-w-7xl mx-auto text-center">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-peach text-text-primary border border-border-subtle font-eyebrow text-eyebrow tracking-widest uppercase mb-6 shadow-sm">
      <Icon name="favorite" className="material-symbols-outlined text-[15px]" filled style={{fontVariationSettings: "'FILL' 1"}} />
      <span>
        COMMUNITY SOLIDARITY &amp; GIVING
      </span>
    </div>
    <h1 className="font-display-lg md:font-display-xl text-display-lg-mobile md:text-display-xl text-primary font-semibold max-w-4xl mx-auto leading-tight mb-6">
      Support Kadam Foundation
    </h1>
    <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
      Your support helps Kadam Foundation continue its community work in education, women&apos;s empowerment, and youth development. Share your interest through our donation enquiry form, and our team will follow up with next steps.
    </p>
  </section>

  <section className="px-space-lg pb-16 md:px-margin md:pb-20">
    <div className="mx-auto max-w-4xl">
      <div className="mb-5 border-l-2 border-primary bg-surface-raised px-5 py-4 md:px-6">
        <p className="font-label-md text-label-md font-semibold text-primary">
          This is a donation enquiry form, not an online payment gateway.
        </p>
        <p className="mt-2 font-body-sm text-body-sm leading-relaxed text-text-secondary">
          Submitting this form expresses your interest in supporting Kadam Foundation. Our team will contact you with donation and payment instructions. Your donation is considered complete only after payment is received and verified.
        </p>
      </div>

      <div className="w-full overflow-hidden border border-border-subtle bg-surface-raised">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdPDdouVBfm9L55DNl1-JiR1G9MJjnmBZcxqjzhOstSwjzTTQ/viewform?embedded=true"
          title="Kadam Foundation Donation Enquiry Form"
          width="100%"
          height={1850}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          scrolling="yes"
          loading="lazy"
          className="block w-full max-w-full border-0"
        >
          Loading…
        </iframe>
      </div>
      <p className="mt-4 text-center font-body-sm text-body-sm text-text-secondary">
        If the form does not load,{' '}
        <a
          href="https://forms.gle/iiCJXcZRd3nfidWQA"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-4 hover:text-secondary"
        >
          open the donation enquiry form in a new tab
        </a>
        .
      </p>
    </div>
  </section>

  <section className="pb-16 md:pb-24 px-space-lg md:px-margin max-w-7xl mx-auto">
    <div className="mb-8 max-w-3xl">
      <p className="font-eyebrow text-eyebrow uppercase tracking-wider text-secondary">
        Optional direct donation
      </p>
      <h2 className="mt-2 font-display-lg text-display-lg-mobile font-semibold text-primary md:text-display-lg">
        Prefer to donate directly by UPI?
      </h2>
      <p className="mt-3 font-body-md text-body-md text-text-secondary">
        You may use the QR code below instead of submitting an enquiry. This direct payment option is separate from the enquiry form above.
      </p>
    </div>
    <div className="bg-surface-raised border border-border-subtle rounded-3xl p-6 md:p-12 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-center text-center">
          <div className="w-full max-w-[40rem] bg-surface-container rounded-2xl border border-border-subtle p-6 relative">
            <div className="relative p-4 bg-surface rounded-xl border border-border-subtle/80 flex flex-col items-center justify-center">
              <div className="w-full flex justify-center items-center mb-3">
                <span className="text-xs font-mono font-medium text-text-secondary tracking-wider uppercase">
                  Official UPI QR
                </span>
              </div>
              <div className="w-full max-w-[560px] aspect-square bg-surface-canvas rounded-lg p-3 border border-border-subtle relative flex items-center justify-center group overflow-hidden">
                <Image
                  src="/images/donate/kadam-donation-qr.jpeg"
                  alt="Kadam Foundation merchant QR code for donations"
                  fill
                  sizes="(min-width: 1024px) 560px, calc(100vw - 5rem)"
                  className="object-contain p-2"
                />
                <div className="absolute inset-0 bg-primary-container/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-surface px-2.5 py-1 rounded text-xs font-medium text-text-primary border border-border-subtle shadow-sm">
                    Scan with Phone
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-text-secondary mt-3 italic">
                Scan the official Kadam Foundation QR code to donate.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="font-eyebrow text-eyebrow text-secondary uppercase tracking-wider mb-2">
              Direct UPI option
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary font-semibold">
              Make a Direct Contribution
            </h2>
            <p className="font-body-md text-body-md text-text-secondary mt-2">
              To donate directly, scan the official Kadam Foundation QR code and complete your payment through your UPI app. Your donation is complete only after payment is received and verified.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl bg-surface border border-border-subtle/80 hover:border-border-subtle transition-all">
              <div className="w-8 h-8 rounded-full bg-surface-clay-soft flex items-center justify-center font-bold text-primary shrink-0 text-sm">
                1
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-semibold text-base">
                  Open any UPI mobile application
                </h3>
                <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
                  Launch Google Pay, PhonePe, Paytm, BHIM, or your trusted mobile banking application on your phone.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-surface border border-border-subtle/80 hover:border-border-subtle transition-all">
              <div className="w-8 h-8 rounded-full bg-surface-clay-soft flex items-center justify-center font-bold text-primary shrink-0 text-sm">
                2
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-semibold text-base">
                  Scan the official Kadam Foundation QR code
                </h3>
                <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
                  Select “Scan QR” in your UPI app and frame the code displayed here.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-surface border border-border-subtle/80 hover:border-border-subtle transition-all">
              <div className="w-8 h-8 rounded-full bg-surface-clay-soft flex items-center justify-center font-bold text-primary shrink-0 text-sm">
                3
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-semibold text-base">
                  Enter any contribution amount you wish
                </h3>
                <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
                  There are no minimums and no forced tiers. Whether it covers a box of chalk or a semester of study books, every single step matters.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-surface border border-border-subtle/80 hover:border-border-subtle transition-all">
              <div className="w-8 h-8 rounded-full bg-surface-clay-soft flex items-center justify-center font-bold text-primary shrink-0 text-sm">
                4
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary font-semibold text-base">
                  Confirm and save your transaction record
                </h3>
                <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">
                  Authorize the secure transfer using your UPI PIN and save the confirmation receipt or UTR number for verification.
                </p>
              </div>
            </div>
          </div>
          <div className="p-3.5 bg-surface-peach/50 rounded-xl border border-border-subtle flex items-start gap-2.5">
            <Icon name="info" className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5" />
            <p className="font-body-sm text-body-sm text-text-secondary">
              <strong className="text-primary font-semibold">
                Decentralized Youth Operations:
              </strong>
              {' '}We do not ask for card details, bank logins, or third-party credential handoffs anywhere on this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-12 md:py-20 px-space-lg md:px-margin max-w-7xl mx-auto">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <div className="font-eyebrow text-eyebrow text-secondary uppercase tracking-wider mb-2">
        WHERE YOUR SUPPORT JOURNEYS
      </div>
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-semibold">
        Holistic General Mission Support
      </h2>
      <p className="font-body-md text-body-md text-text-secondary mt-3">
        To sustain authentic community ownership, Kadam Foundation pools contributions into an unrestricted general fund. This deliberate approach gives our youth volunteers the agility to respond quickly to changing neighborhood priorities without rigid administrative bottlenecks.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between hover:border-text-secondary transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-surface-clay-soft flex items-center justify-center text-primary mb-4">
            <Icon name="menu_book" className="material-symbols-outlined text-[24px]" />
          </div>
          <span className="font-eyebrow text-eyebrow text-secondary uppercase block mb-1">
            Project Shiksha
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-2.5">
            Weekend Learning Pods
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Funding notebooks, workbooks, geometry kits, chalkboards, and safe weekend shelter rentals across five urban informal settlement communities.
          </p>
        </div>
        <div className="pt-6 mt-6 border-t border-border-subtle/50 text-xs text-secondary font-medium">
          Supporting 240+ recurring young learners
        </div>
      </div>
      <div className="bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between hover:border-text-secondary transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-surface-blue-soft flex items-center justify-center text-primary mb-4">
            <Icon name="groups" className="material-symbols-outlined text-[24px]" />
          </div>
          <span className="font-eyebrow text-eyebrow text-secondary uppercase block mb-1">
            Project Samanvay
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-2.5">
            Youth Civic Organizing
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Supporting collegiate volunteer training camps, civic research toolkits, and participatory public dialogue workshops for first-time student leaders.
          </p>
        </div>
        <div className="pt-6 mt-6 border-t border-border-subtle/50 text-xs text-secondary font-medium">
          Mobilizing 60+ university campus ambassadors
        </div>
      </div>
      <div className="bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between hover:border-text-secondary transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-surface-lilac-soft flex items-center justify-center text-primary mb-4">
            <Icon name="diversity_1" className="material-symbols-outlined text-[24px]" />
          </div>
          <span className="font-eyebrow text-eyebrow text-secondary uppercase block mb-1">
            Heal with Kadam
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-2.5">
            Empathetic Peer Circles
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Sustaining safe, destigmatized youth listening spaces, certified emotional wellness guidance, and peer counseling materials in local dialects.
          </p>
        </div>
        <div className="pt-6 mt-6 border-t border-border-subtle/50 text-xs text-secondary font-medium">
          Bi-weekly peer sessions across three centers
        </div>
      </div>
      <div className="bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between hover:border-text-secondary transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-surface-olive-soft flex items-center justify-center text-primary mb-4">
            <Icon name="interests" className="material-symbols-outlined text-[24px]" />
          </div>
          <span className="font-eyebrow text-eyebrow text-secondary uppercase block mb-1">
            Empower Initiative
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-2.5">
            Artisan Micro-Aid
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Providing raw sewing fabrics, craft equipment, and fair accounting training to local mothers&apos; self-help collectives.
          </p>
        </div>
        <div className="pt-6 mt-6 border-t border-border-subtle/50 text-xs text-secondary font-medium">
          Self-sustaining micro-economic units
        </div>
      </div>
    </div>
  </section>
  <section className="py-12 md:py-16 px-space-lg md:px-margin max-w-7xl mx-auto">
    <div className="bg-surface border border-border-subtle rounded-3xl p-6 md:p-10 relative overflow-hidden">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-raised border border-border-subtle text-secondary font-eyebrow text-eyebrow uppercase mb-4">
          <Icon name="receipt_long" className="material-symbols-outlined text-[14px]" />
          <span>
            Manual Verification &amp; Recognition
          </span>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-primary font-semibold mb-4">
          Need a formal donation receipt or confirmation?
        </h2>
        <p className="font-body-md text-body-md text-text-secondary mb-8">
          Because we operate without automated merchant gateways, our youth finance secretariat reviews and verifies each contribution manually. This human-to-human process ensures complete accountability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-surface-raised border border-border-subtle">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-primary text-inverse-primary text-xs flex items-center justify-center font-bold">
                A
              </span>
              <h4 className="font-label-md text-label-md font-semibold text-primary">
                Capture Transaction Record
              </h4>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary">
              Take a clear screenshot of your completed UPI transaction screen or copy down the 12-digit UPI Reference / UTR Number.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-surface-raised border border-border-subtle">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-primary text-inverse-primary text-xs flex items-center justify-center font-bold">
                B
              </span>
              <h4 className="font-label-md text-label-md font-semibold text-primary">
                Send Details to our Secretariat
              </h4>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary">
              Share your transfer screenshot, full donor name, and postal or email address through our verified channels below.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-container text-text-inverse font-label-md text-label-md font-semibold hover:bg-action-hover transition-colors" href={`${CONTACT_INFO.emailHref}?subject=Donation%20Receipt%20Request`}>
            <Icon name="mail" className="material-symbols-outlined text-[18px]" />
            <span>
              {CONTACT_INFO.email}
            </span>
          </a>
          <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-raised border border-border-subtle text-text-primary font-label-md text-label-md font-medium" href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="chat" className="material-symbols-outlined text-[18px] text-status-success" filled style={{fontVariationSettings: "'FILL' 1"}} />
            <span>
              Join WhatsApp Community
            </span>
          </a>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs text-text-secondary">
          <Icon name="schedule" className="material-symbols-outlined text-[16px] text-secondary" />
          <span>
            Acknowledgement letters and receipts are dispatched within{' '}
            <strong>
              48–72 operational hours
            </strong>
            .
          </span>
        </div>
      </div>
    </div>
  </section>
  <section className="py-10 md:py-14 px-space-lg md:px-margin max-w-7xl mx-auto">
    <div className="p-8 rounded-3xl bg-surface-peach/40 border border-border-subtle text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-surface-clay-soft flex items-center justify-center shrink-0 text-primary mt-1">
          <Icon name="policy" className="material-symbols-outlined text-[26px]" />
        </div>
        <div>
          <h3 className="font-headline-md text-headline-md text-primary font-semibold">
            Our Commitment to Clean Governance
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mt-1.5 max-w-2xl leading-relaxed">
            Kadam SOS Foundation is a Section 8 Company with 12A and 80G certifications. Submitting an enquiry does not issue a donation receipt or 80G certificate; please contact the foundation about documentation. Any tax treatment depends on applicable rules.
          </p>
        </div>
      </div>
      <a className="shrink-0 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-inverse-primary font-label-md text-label-md font-medium transition-all duration-150" href={`${CONTACT_INFO.emailHref}?subject=Financial%20and%20Compliance%20Documents`}>
        Request Financial &amp; Compliance Documents
      </a>
    </div>
  </section>
  <section className="px-space-lg pb-16 md:px-margin md:pb-20">
    <div className="mx-auto max-w-4xl border-t border-border-subtle pt-8 text-center">
      <p className="font-headline-md text-headline-md font-semibold text-primary">
        Thank you for considering supporting Kadam Foundation.
      </p>
      <p className="mt-2 font-body-sm text-body-sm text-text-secondary">
        We appreciate your interest in walking alongside the communities we serve.
      </p>
    </div>
  </section>
</main>
  );
}
