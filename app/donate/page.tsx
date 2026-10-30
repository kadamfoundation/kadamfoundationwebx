'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import { CONTACT_INFO } from '@/lib/site-config';

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const copyVpa = async () => {
    try {
      await navigator.clipboard.writeText('kadamfoundation@upi');
    } catch {
      // Keep the same visible confirmation behavior if clipboard access is unavailable.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

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
      Every Contribution Moves Us Forward
    </h1>
    <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
      A heartfelt invitation to sustain Kadam Foundation’s youth-led, decentralized grassroots mission. We channel community solidarity directly to children's weekend learning pods, civic organizing cohorts, and frontline community circles across informal settlements.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-raised border border-border-subtle text-left">
        <div className="w-10 h-10 rounded-full bg-surface-clay-soft flex items-center justify-center shrink-0 text-primary">
          <Icon name="handshake" className="material-symbols-outlined text-[20px]" />
        </div>
        <div>
          <h4 className="font-label-md text-label-md font-semibold text-primary">
            Direct Grassroots Impact
          </h4>
          <p className="font-body-sm text-body-sm text-text-secondary">
            Direct support to frontline settlement pods
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-raised border border-border-subtle text-left">
        <div className="w-10 h-10 rounded-full bg-surface-olive-soft flex items-center justify-center shrink-0 text-primary">
          <Icon name="verified_user" className="material-symbols-outlined text-[20px]" />
        </div>
        <div>
          <h4 className="font-label-md text-label-md font-semibold text-primary">
            Youth &amp; Community Governed
          </h4>
          <p className="font-body-sm text-body-sm text-text-secondary">
            Accountable to student volunteers and parents
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-raised border border-border-subtle text-left">
        <div className="w-10 h-10 rounded-full bg-surface-lilac-soft flex items-center justify-center shrink-0 text-primary">
          <Icon name="nest_eco_leaf" className="material-symbols-outlined text-[20px]" />
        </div>
        <div>
          <h4 className="font-label-md text-label-md font-semibold text-primary">
            Zero Overhead Leaks
          </h4>
          <p className="font-body-sm text-body-sm text-text-secondary">
            100% focused on direct frontline materials
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="pb-16 md:pb-24 px-space-lg md:px-margin max-w-7xl mx-auto">
    <div className="bg-surface-raised border border-border-subtle rounded-3xl p-6 md:p-12 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          <div className="w-full max-w-sm bg-surface-container rounded-2xl border border-border-subtle p-6 relative">
            <div className="relative p-4 bg-surface rounded-xl border border-border-subtle/80 flex flex-col items-center justify-center">
              <div className="w-full flex justify-between items-center mb-3">
                <span className="text-xs font-mono font-medium text-text-secondary tracking-wider uppercase">
                  UPI Dynamic Scanner
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-status-success animate-pulse" title="Active Scanner Ready"></span>
              </div>
              <div className="w-56 h-56 bg-surface-canvas rounded-lg p-3 border border-border-subtle relative flex items-center justify-center group overflow-hidden">
                <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="#F8EEE8" height="160" rx="6" width="160"></rect>
                  <rect fill="#3F2C2E" height="38" rx="4" width="38" x="14" y="14"></rect>
                  <rect fill="#F8EEE8" height="26" rx="2" width="26" x="20" y="20"></rect>
                  <rect fill="#3F2C2E" height="16" rx="1.5" width="16" x="25" y="25"></rect>
                  <rect fill="#3F2C2E" height="38" rx="4" width="38" x="108" y="14"></rect>
                  <rect fill="#F8EEE8" height="26" rx="2" width="26" x="114" y="20"></rect>
                  <rect fill="#3F2C2E" height="16" rx="1.5" width="16" x="119" y="25"></rect>
                  <rect fill="#3F2C2E" height="38" rx="4" width="38" x="14" y="108"></rect>
                  <rect fill="#F8EEE8" height="26" rx="2" width="26" x="20" y="114"></rect>
                  <rect fill="#3F2C2E" height="16" rx="1.5" width="16" x="25" y="119"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="8" x="62" y="16"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="8" x="74" y="16"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="10" x="88" y="22"></rect>
                  <rect fill="#3F2C2E" height="6" rx="1" width="16" x="62" y="30"></rect>
                  <rect fill="#3F2C2E" height="14" rx="1" width="8" x="84" y="34"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="12" x="64" y="44"></rect>
                  <rect fill="#3F2C2E" height="16" rx="1" width="8" x="16" y="62"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="12" x="30" y="66"></rect>
                  <rect fill="#3F2C2E" height="10" rx="1" width="8" x="48" y="62"></rect>
                  <rect fill="#3F2C2E" height="10" rx="1" width="10" x="16" y="86"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="18" x="34" y="84"></rect>
                  <rect fill="#3F2C2E" height="6" rx="1" width="14" x="38" y="96"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="10" x="108" y="62"></rect>
                  <rect fill="#3F2C2E" height="6" rx="1" width="18" x="126" y="64"></rect>
                  <rect fill="#3F2C2E" height="10" rx="1" width="16" x="110" y="78"></rect>
                  <rect fill="#3F2C2E" height="14" rx="1" width="12" x="134" y="76"></rect>
                  <rect fill="#3F2C2E" height="6" rx="1" width="8" x="108" y="96"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="12" x="124" y="94"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="10" x="60" y="112"></rect>
                  <rect fill="#3F2C2E" height="16" rx="1" width="8" x="76" y="108"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="12" x="90" y="114"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="18" x="62" y="132"></rect>
                  <rect fill="#3F2C2E" height="14" rx="1" width="8" x="88" y="130"></rect>
                  <rect fill="#3F2C2E" height="8" rx="1" width="14" x="104" y="134"></rect>
                  <rect fill="#3F2C2E" height="16" rx="1" width="8" x="126" y="124"></rect>
                  <circle cx="80" cy="80" fill="#FFF8F5" r="18" stroke="#D4B9AE" strokeWidth="1.5"></circle>
                  <path d="M78 72C78 70.8954 78.8954 70 80 70C81.1046 70 82 70.8954 82 72V76H86C87.1046 76 88 76.8954 88 78C88 79.1046 87.1046 80 86 80H82V84C82 85.1046 81.1046 86 80 86C78.8954 86 78 85.1046 78 84V80H74C72.8954 80 72 79.1046 72 78C72 76.8954 72.8954 76 74 76H78V72Z" fill="#3F2C2E"></path>
                </svg>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-surface px-2.5 py-1 rounded text-xs font-medium text-text-primary border border-border-subtle shadow-sm">
                    Scan with Phone
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-text-secondary mt-3 italic">
                [Official Kadam Foundation UPI QR Code Placeholder — Scan to Donate]
              </p>
            </div>
            <div className="mt-4 p-3 bg-surface rounded-xl border border-border-subtle flex items-center justify-between">
              <div className="text-left">
                <div className="font-eyebrow text-eyebrow text-text-secondary uppercase">
                  UPI VPA Handle
                </div>
                <div className="font-mono text-sm font-semibold text-primary">
                  kadamfoundation@upi
                </div>
              </div>
              <button title="Copy UPI ID to clipboard" onClick={copyVpa} className={copied ? "flex items-center gap-1.5 px-3 py-1.5 bg-surface-clay-soft hover:bg-surface-peach text-primary rounded-full text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring bg-status-success text-white" : "flex items-center gap-1.5 px-3 py-1.5 bg-surface-clay-soft hover:bg-surface-peach text-primary rounded-full text-xs font-semibold transition-colors focus:ring-2 focus:ring-focus-ring"}>
                <Icon name="content_copy" className="material-symbols-outlined text-[16px]" />
                <span>
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1 bg-surface-canvas rounded-full text-xs font-medium text-text-secondary border border-border-subtle flex items-center gap-1">
              <Icon name="smartphone" className="material-symbols-outlined text-[14px]" />
              {' '}Google Pay
            </span>
            <span className="px-3 py-1 bg-surface-canvas rounded-full text-xs font-medium text-text-secondary border border-border-subtle flex items-center gap-1">
              <Icon name="smartphone" className="material-symbols-outlined text-[14px]" />
              {' '}PhonePe
            </span>
            <span className="px-3 py-1 bg-surface-canvas rounded-full text-xs font-medium text-text-secondary border border-border-subtle flex items-center gap-1">
              <Icon name="smartphone" className="material-symbols-outlined text-[14px]" />
              {' '}Paytm
            </span>
            <span className="px-3 py-1 bg-surface-canvas rounded-full text-xs font-medium text-text-secondary border border-border-subtle flex items-center gap-1">
              <Icon name="account_balance" className="material-symbols-outlined text-[14px]" />
              {' '}BHIM / Any Banking UPI
            </span>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="font-eyebrow text-eyebrow text-secondary uppercase tracking-wider mb-2">
              Straightforward &amp; Zero Gateway Fees
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary font-semibold">
              How to Make Your Contribution
            </h2>
            <p className="font-body-md text-body-md text-text-secondary mt-2">
              We purposefully bypass high-fee corporate donation portals. Every rupee or currency unit sent via UPI reaches our operations directly, leaving 100% of your generous support in frontline community hands.
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
                  Select ‘Scan QR’ and frame the code displayed here, or alternatively enter the VPA handle{' '}
                  <span className="font-mono text-primary font-medium">
                    kadamfoundation@upi
                  </span>
                  .
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
            Providing raw sewing fabrics, craft equipment, and fair accounting training to local mothers' self-help collectives.
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
              <span className="w-6 h-6 rounded-full bg-primary text-text-inverse text-xs flex items-center justify-center font-bold">
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
              <span className="w-6 h-6 rounded-full bg-primary text-text-inverse text-xs flex items-center justify-center font-bold">
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
          <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-text-inverse font-label-md text-label-md font-semibold hover:bg-action-hover transition-colors" href={`${CONTACT_INFO.emailHref}?subject=Donation%20Receipt%20Request`}>
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
            Kadam Foundation adheres to independent community audits, periodic financial disclosures, and strict non-profit governance under the Societies Registration Act. We honor the trust of every youth volunteer, parent, and benefactor who walks with us.
          </p>
        </div>
      </div>
      <a className="shrink-0 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-text-inverse font-label-md text-label-md font-medium transition-all duration-150" href="#">
        View Financial Transparency Reports
      </a>
    </div>
  </section>
</main>
  );
}
