'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';

export default function VolunteerPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
<main className="w-full overflow-hidden">
  <section className="relative pt-12 pb-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div className="lg:col-span-7 flex flex-col items-start space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-peach text-text-primary border border-border-subtle">
          <Icon name="diversity_3" className="material-symbols-outlined text-[16px] text-text-secondary" />
          <span className="font-eyebrow text-eyebrow tracking-wider uppercase">
            COMMUNITY ACTION &amp; YOUTH PARTICIPATION
          </span>
        </div>
        <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-text-primary tracking-tight">
          Your Time Can Make a Difference
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl leading-relaxed">
          At Kadam Foundation, we believe sustainable nation-building does not begin with grand speeches—it begins on quiet Sunday mornings in neighborhood learning pods. Our volunteer fellows, university students, and working professionals bridge educational inequities and catalyze civic accountability right where they live.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
          <a className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-primary text-text-inverse h-12 px-7 rounded-full hover:bg-action-hover transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring active:scale-95 shadow-sm group" href="#register">
            Register as a Volunteer{' '}
            <Icon name="arrow_forward" className="material-symbols-outlined ml-2 transition-transform duration-150 group-hover:translate-x-1" />
          </a>
          <a className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-transparent border border-text-primary text-text-primary h-12 px-6 rounded-full hover:bg-surface-raised transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#roles">
            Explore Opportunities
          </a>
        </div>
        <div className="pt-4 border-t border-border-subtle w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-raised/70 border border-border-subtle">
            <Icon name="schedule" className="material-symbols-outlined text-text-secondary text-[20px]" />
            <div>
              <span className="block font-eyebrow text-[10px] text-text-secondary uppercase">
                Commitment
              </span>
              <span className="font-label-md text-label-md font-semibold text-text-primary">
                2–4 Hours/Weekend
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-raised/70 border border-border-subtle">
            <Icon name="hub" className="material-symbols-outlined text-text-secondary text-[20px]" />
            <div>
              <span className="block font-eyebrow text-[10px] text-text-secondary uppercase">
                Structure
              </span>
              <span className="font-label-md text-label-md font-semibold text-text-primary">
                Decentralized City Pods
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-raised/70 border border-border-subtle">
            <Icon name="group_add" className="material-symbols-outlined text-text-secondary text-[20px]" />
            <div>
              <span className="block font-eyebrow text-[10px] text-text-secondary uppercase">
                Eligibility
              </span>
              <span className="font-label-md text-label-md font-semibold text-text-primary">
                Students &amp; Professionals
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 relative">
        <div className="relative rounded-2xl overflow-hidden border border-border-subtle bg-surface-raised shadow-sm p-3">
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-clay-soft">
            <img className="w-full h-full object-cover" data-alt="An authentic, warmly lit grassroots photograph of Indian youth volunteers and young children engaged in an interactive weekend open-air learning circle. The setting is a clean, sunny community courtyard with textured terracotta brick walls in warm daylight. Young collegiate facilitators are smiling, sitting on colorful woven floor mats, teaching with handmade illustrated flashcards. The overall aesthetic feels empathetic, tactile, and documentary-style, matching warm peach and clay brand tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4QdWScekR1l2FpQ-tfQ7Ke7Qa3oCTVHA07nPNAt7rF-49S7wZ-Eu2xv-_qRB9uV5ejalD1OvC3Ci6zHLSfUocbsAkgfqqhcumUSEP3EJoaQF1_EEWlU8ivhS8Zo0oWrfz3HOXDSGJcdsnxUKYnamqwGr4JfKdskDI2Q6-C3LnLfq1Je4qhJMALvropKPLCnsm1wQbuHpii6hZ_ZgB2zn7Bd-77VBSyB1Nzea6Ice4pKTd89n3nG3z" />
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/75 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-raised/95 border border-border-subtle backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-clay-soft flex items-center justify-center text-text-primary">
                  <Icon name="school" className="material-symbols-outlined text-[22px]" />
                </div>
                <div>
                  <p className="font-label-md text-label-md font-bold text-text-primary">
                    Project Shiksha — Sector 14 Pod
                  </p>
                  <p className="font-body-sm text-body-sm text-text-secondary">
                    32 students mentored this morning by 4 fellows
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 bg-surface-peach border border-border-subtle px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
            <span className="font-eyebrow text-[11px] font-bold text-text-primary">
              Active Cohorts: 15+ Cities
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-20 bg-surface-raised border-y border-border-subtle">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="max-w-3xl mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-surface-peach text-text-primary font-eyebrow text-eyebrow tracking-wider uppercase mb-3">
          RECIPROCITY &amp; MUTUAL LEARNING
        </div>
        <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-text-primary mb-4">
          Why Step Forward With Us
        </h2>
        <p className="font-body-md text-body-md text-text-secondary">
          Grassroots volunteering at Kadam is not a one-sided act of charity; it is a collective practice of active listening, civic empathy, and frontline unlearning. Here, you don't merely instruct—you grow alongside the communities you partner with.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-surface-clay-soft/40 border border-border-subtle flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-clay-soft flex items-center justify-center text-text-primary mb-5 border border-border-subtle">
              <Icon name="handshake" className="material-symbols-outlined text-[26px]" />
            </div>
            <h3 className="font-headline-md text-headline-md text-text-primary mb-3">
              Real Community Immersion
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Direct interaction with informal settlement pods and local neighborhood panchayats, building reciprocal trust through weekly physical presence.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-text-primary font-label-md text-label-md font-semibold">
            <Icon name="check_circle" className="material-symbols-outlined text-[18px]" />
            {' '}Grounded, non-extractive
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-surface-blue-soft/30 border border-border-subtle flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-blue-soft flex items-center justify-center text-text-primary mb-5 border border-border-subtle">
              <Icon name="psychology" className="material-symbols-outlined text-[26px]" />
            </div>
            <h3 className="font-headline-md text-headline-md text-text-primary mb-3">
              Frontline Leadership
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Gain hands-on competencies in organizing decentralized field logistics, innovative classroom facilitation, and adaptive crisis mediation.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-text-primary font-label-md text-label-md font-semibold">
            <Icon name="check_circle" className="material-symbols-outlined text-[18px]" />
            {' '}Practical problem-solving
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-surface-olive-soft/40 border border-border-subtle flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-olive-soft flex items-center justify-center text-text-primary mb-5 border border-border-subtle">
              <Icon name="hub" className="material-symbols-outlined text-[26px]" />
            </div>
            <h3 className="font-headline-md text-headline-md text-text-primary mb-3">
              Collegiate &amp; Civic Network
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Connect with an interconnected fraternity of 450+ passionate youth fellows across 15+ university hubs and localized civic development desks.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-text-primary font-label-md text-label-md font-semibold">
            <Icon name="check_circle" className="material-symbols-outlined text-[18px]" />
            {' '}Lifelong peer solidarity
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-surface-lilac-soft/40 border border-border-subtle flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-lilac-soft flex items-center justify-center text-text-primary mb-5 border border-border-subtle">
              <Icon name="self_improvement" className="material-symbols-outlined text-[26px]" />
            </div>
            <h3 className="font-headline-md text-headline-md text-text-primary mb-3">
              Reflexivity &amp; Unlearning
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Regular guided decompression circles to interrogate top-down saviour biases, understand systemic privilege, and build genuine allyship.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-text-primary font-label-md text-label-md font-semibold">
            <Icon name="check_circle" className="material-symbols-outlined text-[18px]" />
            {' '}Ethical mentorship
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-24 max-w-7xl mx-auto px-space-lg md:px-margin" id="roles">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-surface-peach text-text-primary font-eyebrow text-eyebrow tracking-wider uppercase mb-3">
          SECTORS &amp; RESPONSIBILITIES
        </div>
        <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-text-primary">
          Areas of Engagement
        </h2>
        <p className="font-body-md text-body-md text-text-secondary mt-2 max-w-2xl">
          Choose the track that fits your weekend availability, academic background, or technical craft. Every pod operates with autonomy under safety guidelines.
        </p>
      </div>
      <div className="flex flex-wrap gap-2" id="filterContainer">
        <button data-filter="all" className={activeFilter === "all" ? "px-4 py-2 rounded-full font-label-md text-label-md font-semibold bg-primary text-text-inverse transition-colors filter-btn" : "px-4 py-2 rounded-full font-label-md text-label-md font-medium bg-surface-raised border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors filter-btn"} onClick={() => setActiveFilter("all")}>
          All Tracks
        </button>
        <button data-filter="education" className={activeFilter === "education" ? "px-4 py-2 rounded-full font-label-md text-label-md font-semibold bg-primary text-text-inverse transition-colors filter-btn" : "px-4 py-2 rounded-full font-label-md text-label-md font-medium bg-surface-raised border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors filter-btn"} onClick={() => setActiveFilter("education")}>
          Field Education
        </button>
        <button data-filter="civic" className={activeFilter === "civic" ? "px-4 py-2 rounded-full font-label-md text-label-md font-semibold bg-primary text-text-inverse transition-colors filter-btn" : "px-4 py-2 rounded-full font-label-md text-label-md font-medium bg-surface-raised border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors filter-btn"} onClick={() => setActiveFilter("civic")}>
          Civic Action
        </button>
        <button data-filter="wellbeing" className={activeFilter === "wellbeing" ? "px-4 py-2 rounded-full font-label-md text-label-md font-semibold bg-primary text-text-inverse transition-colors filter-btn" : "px-4 py-2 rounded-full font-label-md text-label-md font-medium bg-surface-raised border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors filter-btn"} onClick={() => setActiveFilter("wellbeing")}>
          Wellbeing
        </button>
        <button data-filter="backbone" className={activeFilter === "backbone" ? "px-4 py-2 rounded-full font-label-md text-label-md font-semibold bg-primary text-text-inverse transition-colors filter-btn" : "px-4 py-2 rounded-full font-label-md text-label-md font-medium bg-surface-raised border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors filter-btn"} onClick={() => setActiveFilter("backbone")}>
          Backbone
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="rolesGrid">
      <div className="role-card education bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-text-primary hover:shadow-sm" style={{ display: activeFilter === 'all' || ["education"].includes(activeFilter) ? 'flex' : 'none' }}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-clay-soft text-text-primary font-eyebrow text-eyebrow font-semibold">
              Project Shiksha
            </span>
            <span className="font-body-sm text-[12px] text-text-secondary flex items-center gap-1 font-medium">
              <Icon name="timer" className="material-symbols-outlined text-[16px]" />
              {' '}3–4 hrs / Sun
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-2">
            Weekend Educator &amp; Pod Mentor
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-5">
            Teaching foundational literacy, remedial arithmetic, and expressive creative arts to primary schoolers in informal peri-urban community hubs.
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-text-primary">
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Co-facilitating playful, bilingual activity modules
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Tracking learning milestones in simple paper trackers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Nurturing curiosity, hygiene routines, and sports
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <a className="inline-flex items-center justify-between w-full font-label-md text-label-md font-semibold text-text-primary hover:text-action-hover group" href="#register">
            <span>
              Apply for Shiksha Track
            </span>
            <Icon name="arrow_outward" className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="role-card civic bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-text-primary hover:shadow-sm" style={{ display: activeFilter === 'all' || ["civic"].includes(activeFilter) ? 'flex' : 'none' }}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-blue-soft text-text-primary font-eyebrow text-eyebrow font-semibold">
              Project Samanvay
            </span>
            <span className="font-body-sm text-[12px] text-text-secondary flex items-center gap-1 font-medium">
              <Icon name="timer" className="material-symbols-outlined text-[16px]" />
              {' '}2–3 hrs / Sat
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-2">
            Civic Dialogue &amp; Campus Organizer
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-5">
            Facilitating collegiate youth assemblies, participatory ward councillor town halls, and street-level public transport &amp; infrastructure audits.
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-text-primary">
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Moderating non-partisan collegiate debate circles
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Conducting barrier-free sidewalk &amp; light pole surveys
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Drafting community petitions for municipal corporators
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <a className="inline-flex items-center justify-between w-full font-label-md text-label-md font-semibold text-text-primary hover:text-action-hover group" href="#register">
            <span>
              Apply for Samanvay Track
            </span>
            <Icon name="arrow_outward" className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="role-card wellbeing bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-text-primary hover:shadow-sm" style={{ display: activeFilter === 'all' || ["wellbeing"].includes(activeFilter) ? 'flex' : 'none' }}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-lilac-soft text-text-primary font-eyebrow text-eyebrow font-semibold">
              Heal with Kadam
            </span>
            <span className="font-body-sm text-[12px] text-text-secondary flex items-center gap-1 font-medium">
              <Icon name="timer" className="material-symbols-outlined text-[16px]" />
              {' '}2 hrs / Alternate Sun
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-2">
            Peer-Support Circle Facilitator
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-5">
            Holding non-judgmental community listening spaces and youth mental decompression circles under strict non-clinical protocols.
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-text-primary">
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Anchoring active listening circles for high-stress students
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Enforcing boundary safety &amp; non-clinical guidelines
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Linking distressed individuals to certified clinical helplines
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <a className="inline-flex items-center justify-between w-full font-label-md text-label-md font-semibold text-text-primary hover:text-action-hover group" href="#register">
            <span>
              Apply for Wellbeing Track
            </span>
            <Icon name="arrow_outward" className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="role-card education bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-text-primary hover:shadow-sm" style={{ display: activeFilter === 'all' || ["education"].includes(activeFilter) ? 'flex' : 'none' }}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-peach text-text-primary font-eyebrow text-eyebrow font-semibold">
              Nari Utkarsh
            </span>
            <span className="font-body-sm text-[12px] text-text-secondary flex items-center gap-1 font-medium">
              <Icon name="timer" className="material-symbols-outlined text-[16px]" />
              {' '}2–3 hrs / Weekend
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-2">
            Vocational &amp; Digital Mentor
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-5">
            Conducting practical smartphone literacy, UPI/banking security, and cooperative bookkeeping workshops for local women micro-entrepreneurs.
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-text-primary">
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                One-on-one digital payment safety walkthroughs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Mentoring self-help groups in inventory pricing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Connecting artisan groups to localized exhibition fairs
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <a className="inline-flex items-center justify-between w-full font-label-md text-label-md font-semibold text-text-primary hover:text-action-hover group" href="#register">
            <span>
              Apply for Vocational Track
            </span>
            <Icon name="arrow_outward" className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="role-card backbone bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-text-primary hover:shadow-sm" style={{ display: activeFilter === 'all' || ["backbone"].includes(activeFilter) ? 'flex' : 'none' }}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-olive-soft text-text-primary font-eyebrow text-eyebrow font-semibold">
              Operations
            </span>
            <span className="font-body-sm text-[12px] text-text-secondary flex items-center gap-1 font-medium">
              <Icon name="timer" className="material-symbols-outlined text-[16px]" />
              {' '}4 hrs / Weekend
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-2">
            Event &amp; Field Operations Lead
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-5">
            Handling pod supply logistics, distribution of stationery teaching kits, volunteer induction desks, and onsite medical safety preparedness.
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-text-primary">
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Managing textbook and materials inventories across pods
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Setting up neighborhood safety checks before classes
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Coordinating rapid first-aid response kits &amp; parent check-ins
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <a className="inline-flex items-center justify-between w-full font-label-md text-label-md font-semibold text-text-primary hover:text-action-hover group" href="#register">
            <span>
              Apply for Ops Track
            </span>
            <Icon name="arrow_outward" className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="role-card civic backbone bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-text-primary hover:shadow-sm" style={{ display: activeFilter === 'all' || ["civic", "backbone"].includes(activeFilter) ? 'flex' : 'none' }}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-clay-soft text-text-primary font-eyebrow text-eyebrow font-semibold">
              Storytelling
            </span>
            <span className="font-body-sm text-[12px] text-text-secondary flex items-center gap-1 font-medium">
              <Icon name="timer" className="material-symbols-outlined text-[16px]" />
              {' '}Flexible / Hybrid
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-2">
            Grassroots Storyteller &amp; Media
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-5">
            Ethical documentation of grassroots impact through consent-based field photography, podcast dispatches, and qualitative pod chronicles.
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-text-primary">
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Securing informed guardian consent for all media
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Writing human-centered case studies of youth fellows
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Crafting quarterly transparency photo digests
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <a className="inline-flex items-center justify-between w-full font-label-md text-label-md font-semibold text-text-primary hover:text-action-hover group" href="#register">
            <span>
              Apply for Media Track
            </span>
            <Icon name="arrow_outward" className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="role-card backbone bg-surface-raised border border-border-subtle rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-text-primary hover:shadow-sm md:col-span-2 lg:col-span-1" style={{ display: activeFilter === 'all' || ["backbone"].includes(activeFilter) ? 'flex' : 'none' }}>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-surface-blue-soft text-text-primary font-eyebrow text-eyebrow font-semibold">
              Digital &amp; Tech
            </span>
            <span className="font-body-sm text-[12px] text-text-secondary flex items-center gap-1 font-medium">
              <Icon name="timer" className="material-symbols-outlined text-[16px]" />
              {' '}3–5 hrs / Remote
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-2">
            Technical &amp; Portal Developer
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-5">
            Maintaining open-source civic reporting tools, volunteer database workflows, web accessibility (WCAG AA), and pod inventory tracking.
          </p>
          <ul className="space-y-2.5 font-body-sm text-body-sm text-text-primary">
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Collaborating on our lightweight Next.js &amp; Tailwind stack
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Building privacy-first offline-friendly intake forms
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="check" className="material-symbols-outlined text-text-secondary text-[18px] shrink-0 mt-0.5" />
              <span>
                Securing chapter data and volunteer information vaults
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-5 border-t border-border-subtle">
          <a className="inline-flex items-center justify-between w-full font-label-md text-label-md font-semibold text-text-primary hover:text-action-hover group" href="#register">
            <span>
              Apply for Tech Track
            </span>
            <Icon name="arrow_outward" className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-24 bg-surface-peach/40 border-t border-border-subtle">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="max-w-3xl mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-surface-clay-soft text-text-primary font-eyebrow text-eyebrow tracking-wider uppercase mb-3">
          ONBOARDING PROTOCOL
        </div>
        <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-text-primary mb-2">
          How to Join the Movement
        </h2>
        <p className="font-body-sm text-body-sm text-text-secondary italic">
          [Note: Proposed volunteer onboarding pathway — subject to final coordinator protocol confirmation]
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle flex flex-col justify-between relative">
          <div className="absolute -top-3.5 left-6 bg-primary text-text-inverse font-eyebrow text-[11px] font-bold px-3 py-0.5 rounded-full">
            STEP 01
          </div>
          <div className="pt-2">
            <div className="w-10 h-10 rounded-full bg-surface-clay-soft flex items-center justify-center text-text-primary mb-4">
              <Icon name="assignment" className="material-symbols-outlined text-[22px]" />
            </div>
            <h3 className="font-headline-md text-[18px] text-text-primary font-semibold mb-2">
              Complete Official Form
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Submit your basic details, location preferences, language proficiency, and skills via our central registration desk.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border-subtle/50 text-[12px] font-medium text-text-secondary">
            Duration: ~5 Minutes
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle flex flex-col justify-between relative">
          <div className="absolute -top-3.5 left-6 bg-primary text-text-inverse font-eyebrow text-[11px] font-bold px-3 py-0.5 rounded-full">
            STEP 02
          </div>
          <div className="pt-2">
            <div className="w-10 h-10 rounded-full bg-surface-blue-soft flex items-center justify-center text-text-primary mb-4">
              <Icon name="account_tree" className="material-symbols-outlined text-[22px]" />
            </div>
            <h3 className="font-headline-md text-[18px] text-text-primary font-semibold mb-2">
              Chapter Desk Review
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Our regional coordinator reviews your profile and matches you with nearby active learning pods or civic chapters based on proximity.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border-subtle/50 text-[12px] font-medium text-text-secondary">
            Timeline: 48–72 Hours
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle flex flex-col justify-between relative">
          <div className="absolute -top-3.5 left-6 bg-primary text-text-inverse font-eyebrow text-[11px] font-bold px-3 py-0.5 rounded-full">
            STEP 03
          </div>
          <div className="pt-2">
            <div className="w-10 h-10 rounded-full bg-surface-olive-soft flex items-center justify-center text-text-primary mb-4">
              <Icon name="verified_user" className="material-symbols-outlined text-[22px]" />
            </div>
            <h3 className="font-headline-md text-[18px] text-text-primary font-semibold mb-2">
              Safeguarding Induction
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Attend a mandatory 90-minute digital induction covering child safeguarding, ethical photography, respectful engagement, and pod safety.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border-subtle/50 text-[12px] font-medium text-text-secondary">
            Format: Weekend Online Session
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle flex flex-col justify-between relative">
          <div className="absolute -top-3.5 left-6 bg-primary text-text-inverse font-eyebrow text-[11px] font-bold px-3 py-0.5 rounded-full">
            STEP 04
          </div>
          <div className="pt-2">
            <div className="w-10 h-10 rounded-full bg-surface-lilac-soft flex items-center justify-center text-text-primary mb-4">
              <Icon name="nature_people" className="material-symbols-outlined text-[22px]" />
            </div>
            <h3 className="font-headline-md text-[18px] text-text-primary font-semibold mb-2">
              First Pod Deployment
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Shadow senior fellows during an introductory weekend pod circle, meet the children or community leaders, and embark on your journey.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-border-subtle/50 text-[12px] font-medium text-text-secondary">
            Milestone: Welcome to Kadam!
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-24 max-w-7xl mx-auto px-space-lg md:px-margin" id="register">
    <div className="bg-surface-raised rounded-2xl md:rounded-3xl border-2 border-border-subtle p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm">
      <div className="absolute top-0 right-0 w-80 h-80 bg-surface-clay-soft/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="max-w-3xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-peach text-text-primary font-eyebrow text-eyebrow uppercase tracking-wider mb-4 border border-border-subtle">
          <Icon name="app_registration" className="material-symbols-outlined text-[16px]" />
          {' '}CENTRAL INTAKE DESK
        </div>
        <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-text-primary mb-4 tracking-tight">
          Official Volunteer Registration Form
        </h2>
        <p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-6">
          To ensure zero friction, robust data privacy, and uniform access across all regional chapters, Kadam Foundation routes all volunteer enrolments through a verified, encrypted Google Form managed strictly by our Chapter Governance Council.
        </p>
        <div className="p-4 rounded-xl bg-surface-canvas border border-border-subtle flex items-start gap-3 mb-8">
          <Icon name="security" className="material-symbols-outlined text-status-warning text-[22px] shrink-0 mt-0.5" />
          <div className="font-body-sm text-body-sm text-text-secondary">
            <strong className="text-text-primary font-semibold">
              Important Security Notice:
            </strong>
            {' '}Kadam Foundation will never solicit bank PINs, OTPs, registration fees, or sensitive financial documents. Ensure you are only submitting through verified organization channels.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-primary text-text-inverse h-14 px-8 rounded-full hover:bg-action-hover transition-all active:scale-95 shadow-sm group focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#" rel="noopener noreferrer" target="_blank">
            Open Official Registration Form ↗{' '}
            <Icon name="open_in_new" className="material-symbols-outlined ml-2 text-[20px] transition-transform duration-150 group-hover:translate-x-1" />
          </a>
          <span className="font-body-sm text-body-sm text-text-secondary italic">
            [Placeholder: Official Google Form URL - Awaiting Chapter Admin Link]
          </span>
        </div>
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap items-center gap-6 text-text-secondary font-body-sm text-body-sm">
          <span className="flex items-center gap-1.5">
            <Icon name="lock" className="material-symbols-outlined text-[18px] text-status-success" />
            {' '}Encrypted Data Handling
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="support_agent" className="material-symbols-outlined text-[18px] text-text-primary" />
            {' '}Inquiries: volunteer@kadamfoundation.org
          </span>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-20 bg-surface-raised border-t border-border-subtle">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="max-w-3xl mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-surface-peach text-text-primary font-eyebrow text-eyebrow tracking-wider uppercase mb-3">
          ETHICAL ACCOUNTABILITY
        </div>
        <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-text-primary mb-2">
          Volunteer Code of Conduct &amp; Ground Rules
        </h2>
        <p className="font-body-sm text-body-sm text-status-error font-medium">
          [Status: Policy draft awaiting official executive council and legal advisor confirmation]
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-canvas p-6 md:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-status-error/10 text-status-error flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-headline-md text-headline-md text-text-primary">
                Child &amp; Beneficiary Safeguarding
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-4">
              We maintain an absolute zero-tolerance protocol regarding child neglect, physical reprimand, or psychological intimidation. Every volunteer operates strictly within POCSO (Protection of Children from Sexual Offences) compliance.
            </p>
            <ul className="space-y-2 text-text-primary font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <Icon name="cancel" className="material-symbols-outlined text-status-error text-[18px]" />
                {' '}No photography without counter-signed guardian consent forms.
              </li>
              <li className="flex items-center gap-2">
                <Icon name="cancel" className="material-symbols-outlined text-status-error text-[18px]" />
                {' '}No unescorted one-on-one sessions behind closed doors.
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle text-[12px] font-semibold text-text-secondary uppercase">
            Mandatory Annual Compliance
          </div>
        </div>
        <div className="bg-surface-canvas p-6 md:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-clay-soft text-text-primary flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-headline-md text-headline-md text-text-primary">
                Respectful &amp; Empathetic Engagement
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-4">
              We explicitly repudiate the condescending "savior complex." Kadam volunteers are guests in community neighborhoods, honoring regional autonomy, local vernaculars, culinary habits, and dignified agency.
            </p>
            <ul className="space-y-2 text-text-primary font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <Icon name="check_circle" className="material-symbols-outlined text-status-success text-[18px]" />
                {' '}Respect local cultural customs and non-verbal boundaries.
              </li>
              <li className="flex items-center gap-2">
                <Icon name="check_circle" className="material-symbols-outlined text-status-success text-[18px]" />
                {' '}Prioritize collaborative pedagogy over top-down lecturing.
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle text-[12px] font-semibold text-text-secondary uppercase">
            Core Cultural Standard
          </div>
        </div>
        <div className="bg-surface-canvas p-6 md:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-blue-soft text-text-primary flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-headline-md text-headline-md text-text-primary">
                Attendance &amp; Reliability
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-4">
              Children build emotional attachment to regular pod facilitators. Unannounced absences fracture learning progress and community goodwill. Volunteers commit to consistent weekend scheduling.
            </p>
            <ul className="space-y-2 text-text-primary font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <Icon name="schedule" className="material-symbols-outlined text-text-secondary text-[18px]" />
                {' '}Minimum 48 hours advance notice required for planned leave.
              </li>
              <li className="flex items-center gap-2">
                <Icon name="swap_horiz" className="material-symbols-outlined text-text-secondary text-[18px]" />
                {' '}Facilitator must brief substitute fellow with lesson plans.
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle text-[12px] font-semibold text-text-secondary uppercase">
            Operational Dependability
          </div>
        </div>
        <div className="bg-surface-canvas p-6 md:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-olive-soft text-text-primary flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-headline-md text-headline-md text-text-primary">
                Data Privacy &amp; Confidentiality
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-4">
              Beneficiary family financial hardship, medical records, domicile documentation, and personal addresses are strictly confidential. No unauthorized sharing on personal social accounts is permitted.
            </p>
            <ul className="space-y-2 text-text-primary font-body-sm text-body-sm">
              <li className="flex items-center gap-2">
                <Icon name="lock" className="material-symbols-outlined text-text-secondary text-[18px]" />
                {' '}Beneficiary names anonymized in public case chronicle drafts.
              </li>
              <li className="flex items-center gap-2">
                <Icon name="delete" className="material-symbols-outlined text-text-secondary text-[18px]" />
                {' '}Temporary offline rosters deleted following attendance sync.
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-border-subtle text-[12px] font-semibold text-text-secondary uppercase">
            Statutory Privacy Compliance
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-24 max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="max-w-3xl mb-12">
      <div className="inline-block px-3 py-1 rounded-full bg-surface-peach text-text-primary font-eyebrow text-eyebrow tracking-wider uppercase mb-3">
        GROWTH &amp; CAPACITY BUILDING
      </div>
      <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-text-primary mb-3">
        Recognition, Growth &amp; Support
      </h2>
      <p className="font-body-md text-body-md text-text-secondary">
        While Kadam is driven by grassroots solidarity rather than transactional incentives, we invest deeply in the professional and civic trajectory of our volunteers through accredited validations and masterclasses.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-8 rounded-2xl bg-surface-raised border border-border-subtle flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-surface-clay-soft flex items-center justify-center text-text-primary mb-6">
            <Icon name="workspace_premium" className="material-symbols-outlined text-[28px]" />
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-3">
            Experience Certificate &amp; LOR
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Awarded upon completing an active semester (minimum 40 verifiable hours). Exceptional contributors receive tailored Letters of Recommendation signed by our Founder for graduate school and fellowship applications.
          </p>
        </div>
        <div className="mt-8 pt-4 border-t border-border-subtle text-text-primary font-label-md text-label-md font-semibold flex items-center gap-1.5">
          <Icon name="verified" className="material-symbols-outlined text-[18px] text-status-success" />
          {' '}Digitally verifiable credential
        </div>
      </div>
      <div className="p-8 rounded-2xl bg-surface-raised border border-border-subtle flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-surface-blue-soft flex items-center justify-center text-text-primary mb-6">
            <Icon name="co_present" className="material-symbols-outlined text-[28px]" />
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-3">
            Capacity-Building Labs
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Quarterly skill workshops anchored by visiting development practitioners, covering non-violent communication, open-source cartography, child psychology fundamentals, and public grievance redressal filing.
          </p>
        </div>
        <div className="mt-8 pt-4 border-t border-border-subtle text-text-primary font-label-md text-label-md font-semibold flex items-center gap-1.5">
          <Icon name="verified" className="material-symbols-outlined text-[18px] text-status-success" />
          {' '}Free for all active volunteers
        </div>
      </div>
      <div className="p-8 rounded-2xl bg-surface-raised border border-border-subtle flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-surface-olive-soft flex items-center justify-center text-text-primary mb-6">
            <Icon name="military_tech" className="material-symbols-outlined text-[28px]" />
          </div>
          <h3 className="font-headline-md text-headline-md text-text-primary mb-3">
            Chapter Leadership Pathway
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
            Demonstrated dedication unlocks positions as Pod Captain, Regional City Coordinator, or Program Anchor, granting executive governance exposure and autonomy over localized project budgets.
          </p>
        </div>
        <div className="mt-8 pt-4 border-t border-border-subtle text-text-primary font-label-md text-label-md font-semibold flex items-center gap-1.5">
          <Icon name="verified" className="material-symbols-outlined text-[18px] text-status-success" />
          {' '}Executive council progression
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 md:py-24 bg-surface-raised border-t border-border-subtle">
    <div className="max-w-4xl mx-auto px-space-lg md:px-margin">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-block px-3 py-1 rounded-full bg-surface-peach text-text-primary font-eyebrow text-eyebrow tracking-wider uppercase mb-3">
          CLEAR ANSWERS
        </div>
        <h2 className="font-headline-xl md:font-display-lg text-headline-xl md:text-display-lg text-text-primary mb-3">
          Frequently Asked Questions
        </h2>
        <p className="font-body-md text-body-md text-text-secondary">
          Everything you need to know about joining our grassroots pods, time allocations, and volunteer safety.
        </p>
      </div>
      <div className="space-y-4" id="faqAccordion">
        <div className="faq-item border border-border-subtle rounded-xl bg-surface-canvas overflow-hidden transition-colors">
          <button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-focus-ring" aria-expanded={openFaq === 0} onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
            <span className="font-headline-md text-[18px] text-text-primary font-semibold">
              Who is eligible to volunteer with Kadam Foundation?
            </span>
            <Icon name="expand_more" className="material-symbols-outlined text-text-secondary transition-transform duration-200 faq-icon" style={{ transform: openFaq === 0 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>
          <div className={openFaq === 0 ? "faq-content px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50" : "faq-content hidden px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50"}>
            We welcome college students, young working professionals, educators, and community elders aged 18 and above. Our core criteria are empathy, open-mindedness, and an authentic willingness to commit scheduled weekend hours consistently.
          </div>
        </div>
        <div className="faq-item border border-border-subtle rounded-xl bg-surface-canvas overflow-hidden transition-colors">
          <button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-focus-ring" aria-expanded={openFaq === 1} onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
            <span className="font-headline-md text-[18px] text-text-primary font-semibold">
              What is the typical weekly time commitment?
            </span>
            <Icon name="expand_more" className="material-symbols-outlined text-text-secondary transition-transform duration-200 faq-icon" style={{ transform: openFaq === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>
          <div className={openFaq === 1 ? "faq-content px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50" : "faq-content hidden px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50"}>
            Most direct field pods (such as Project Shiksha or Samanvay civic assemblies) require 2 to 4 hours on Saturday or Sunday mornings. Preparation and lesson sync calls generally take 30–45 minutes during the week.
          </div>
        </div>
        <div className="faq-item border border-border-subtle rounded-xl bg-surface-canvas overflow-hidden transition-colors">
          <button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-focus-ring" aria-expanded={openFaq === 2} onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
            <span className="font-headline-md text-[18px] text-text-primary font-semibold">
              Do I need prior teaching or NGO experience?
            </span>
            <Icon name="expand_more" className="material-symbols-outlined text-text-secondary transition-transform duration-200 faq-icon" style={{ transform: openFaq === 2 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>
          <div className={openFaq === 2 ? "faq-content px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50" : "faq-content hidden px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50"}>
            No prior experience is necessary. All incoming volunteers participate in our 90-minute digital induction and shadow experienced senior pod mentors for their first two sessions until they feel confident.
          </div>
        </div>
        <div className="faq-item border border-border-subtle rounded-xl bg-surface-canvas overflow-hidden transition-colors">
          <button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-focus-ring" aria-expanded={openFaq === 3} onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
            <span className="font-headline-md text-[18px] text-text-primary font-semibold">
              How are volunteers matched to specific cities and pods?
            </span>
            <Icon name="expand_more" className="material-symbols-outlined text-text-secondary transition-transform duration-200 faq-icon" style={{ transform: openFaq === 3 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>
          <div className={openFaq === 3 ? "faq-content px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50" : "faq-content hidden px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50"}>
            During form registration, you select your city hub and postal pincode. Our Chapter Desk will pair you with the closest neighborhood learning center to minimize transit fatigue and preserve local neighborhood familiarity.
          </div>
        </div>
        <div className="faq-item border border-border-subtle rounded-xl bg-surface-canvas overflow-hidden transition-colors">
          <button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-focus-ring" aria-expanded={openFaq === 4} onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
            <span className="font-headline-md text-[18px] text-text-primary font-semibold">
              Can I volunteer remotely or in technical roles?
            </span>
            <Icon name="expand_more" className="material-symbols-outlined text-text-secondary transition-transform duration-200 faq-icon" style={{ transform: openFaq === 4 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>
          <div className={openFaq === 4 ? "faq-content px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50" : "faq-content hidden px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50"}>
            Yes! Our Technical Backbone, Communications, Design, and Research clusters support hybrid or fully remote schedules. You can contribute to web maintenance, data management, curriculum drafting, or impact reporting from anywhere.
          </div>
        </div>
        <div className="faq-item border border-border-subtle rounded-xl bg-surface-canvas overflow-hidden transition-colors">
          <button className="faq-btn w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-focus-ring" aria-expanded={openFaq === 5} onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}>
            <span className="font-headline-md text-[18px] text-text-primary font-semibold">
              Is there any registration fee to volunteer?
            </span>
            <Icon name="expand_more" className="material-symbols-outlined text-text-secondary transition-transform duration-200 faq-icon" style={{ transform: openFaq === 5 ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>
          <div className={openFaq === 5 ? "faq-content px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50" : "faq-content hidden px-6 pb-5 pt-1 text-text-secondary font-body-md text-body-md border-t border-border-subtle/50"}>
            Never. Volunteering with Kadam Foundation is 100% free and voluntary. We never charge for onboarding, training kits, or experience certifications.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 md:py-28 bg-surface-canvas border-t border-border-subtle">
    <div className="max-w-4xl mx-auto px-space-lg md:px-margin text-center">
      <div className="w-16 h-16 rounded-full bg-surface-clay-soft mx-auto flex items-center justify-center text-text-primary mb-6 shadow-sm border border-border-subtle">
        <Icon name="footprint" className="material-symbols-outlined text-[32px]" />
      </div>
      <h2 className="font-headline-xl md:font-display-xl text-headline-xl md:text-display-xl text-text-primary mb-6">
        Ready to Take Your First Step?
      </h2>
      <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
        Whether you can teach for two hours on a Sunday morning or help coordinate collegiate civic forums across your campus, there is a place for your energy here.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-primary text-text-inverse h-14 px-8 rounded-full hover:bg-action-hover transition-all duration-150 active:scale-95 shadow-sm group focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#register">
          Register as a Volunteer ↗{' '}
          <Icon name="north_east" className="material-symbols-outlined ml-2 text-[20px] transition-transform duration-150 group-hover:translate-x-1" />
        </a>
        <a className="inline-flex items-center justify-center font-label-md text-label-md font-semibold bg-surface-raised border border-text-primary text-text-primary h-14 px-8 rounded-full hover:bg-surface-peach transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#">
          View All Focus Areas
        </a>
      </div>
    </div>
  </section>
</main>
  );
}
