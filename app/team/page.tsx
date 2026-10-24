'use client';

import Icon from '@/components/Icon';

export default function TeamPage() {
  return (
<main className="flex-grow">
  <section className="w-full pt-12 pb-16 md:py-20 border-b border-border-subtle bg-surface-canvas relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-clay-soft border border-border-subtle mb-6">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="font-eyebrow text-eyebrow tracking-widest text-text-primary uppercase">
            Grassroots Leadership &amp; Volunteer Directory
          </span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-xl text-display-lg-mobile md:text-display-xl text-primary font-bold tracking-tight mb-6">
          The People Behind Kadam
        </h1>
        <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed mb-8">
          A decentralized, youth-led collective uniting collegiate fellows, grassroots organizers, and community mentors across India. Driven by shared dignity, transparency, and hands-on solidarity.
        </p>
        <div className="flex items-center gap-3 p-3.5 bg-surface-raised border border-border-subtle rounded-xl text-text-secondary text-body-sm font-body-sm shadow-sm mb-10">
          <Icon name="verified_user" className="material-symbols-outlined text-status-success shrink-0" />
          <span>
            <strong>
              Ethical Safeguarding:
            </strong>
            {' '}Volunteer privacy safeguarded: Direct contact channels are routed through official Kadam chapter desks.
          </span>
        </div>
      </div>
      <div className="pt-4">
        <span className="block font-label-md text-label-md text-text-secondary mb-3 font-semibold">
          Jump to directory section:
        </span>
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 custom-scroll-hide">
          <a className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-clay-soft border border-border-subtle text-text-primary text-label-md font-label-md transition-colors shadow-sm" href="#central-leadership">
            <Icon name="account_balance" className="material-symbols-outlined text-base mr-1.5" />
            {' '}Central Management
          </a>
          <a className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-clay-soft border border-border-subtle text-text-primary text-label-md font-label-md transition-colors shadow-sm" href="#department-teams">
            <Icon name="corporate_fare" className="material-symbols-outlined text-base mr-1.5" />
            {' '}Department Teams
          </a>
          <a className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-clay-soft border border-border-subtle text-text-primary text-label-md font-label-md transition-colors shadow-sm" href="#project-shiksha">
            <Icon name="auto_stories" className="material-symbols-outlined text-base mr-1.5" />
            {' '}Project Shiksha Teams
          </a>
          <a className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-clay-soft border border-border-subtle text-text-primary text-label-md font-label-md transition-colors shadow-sm" href="#project-samanvay">
            <Icon name="groups" className="material-symbols-outlined text-base mr-1.5" />
            {' '}Project Samanvay Teams
          </a>
          <a className="inline-flex items-center whitespace-nowrap px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-clay-soft border border-border-subtle text-text-primary text-label-md font-label-md transition-colors shadow-sm" href="#specialized-programs">
            <Icon name="extension" className="material-symbols-outlined text-base mr-1.5" />
            {' '}Specialized Program Teams
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-16 md:py-20 border-b border-border-subtle" id="central-leadership">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
            <Icon name="stars" className="material-symbols-outlined text-sm" />
            {' '}Executive Core
          </div>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
            Central Leadership &amp; Governance
          </h2>
          <p className="text-text-secondary font-body-md text-body-md mt-1">
            Stewarding institutional accountability, strategic direction, and grassroots fellowship.
          </p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-surface-peach border border-border-subtle text-text-secondary self-start md:self-auto font-medium">
          4 Executive Offices
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 shadow-sm">
          <div>
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-surface-peach border border-border-subtle">
              <img className="w-full h-full object-cover" data-alt="Dignified warm documentary editorial portrait of a young Indian community organizer and collegiate nonprofit founder in their early twenties, looking forward with quiet confidence and warmth. The background is a soft-lit community library with natural terracotta tones, natural diffused window light, and deep sepia earthy textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTdfLMOR8ro-mQCwmpRHBgXu2P15W1whMPZB22zjeSYd6AfLne5zaV7RAXZ8wD5g5hkqMAzWWc0OLXpNgpu4w5qu7QMfRPwO8l5-to8GLpV0l48wUNvMdmNpWsLmMpNeX-cstZnX7MP30qOlaEqUA-LpTp7SsaWXFF2acvrmkReYTtKWO6HKA1KqiZS5gyVmaLrfj5FxBdpcIoQCy1jF072Z6iOrXX-YROn6jSZgFe53qrgT2wYPPo" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-raised/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary border border-border-subtle">
                Core Lead
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Executive Directorate
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
              [Placeholder: Founder Name]
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-3">
              Founder &amp; Executive Director
            </p>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Collegiate youth mobilization &amp; grassroots mission lead. Founded Kadam in 2021 to channel university talent toward structural community learning.
            </p>
          </div>
          <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between text-xs text-text-secondary">
            <span className="flex items-center gap-1 font-medium">
              <Icon name="location_on" className="material-symbols-outlined text-sm" />
              {' '}New Delhi HQ
            </span>
            <span className="inline-flex items-center text-primary font-semibold hover:underline">
              Official Desk{' '}
              <Icon name="arrow_forward" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 shadow-sm">
          <div>
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-surface-peach border border-border-subtle">
              <img className="w-full h-full object-cover" data-alt="Editorial portrait of an organized young Indian female field operations director holding a clipboard with notes, smiling warmly. Natural soft daylight in an urban community learning pavilion, wearing cotton apparel. Baked peach and clay warmth dominates the subtle blurred background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkKp63CQV6sumc-KDUvHQR1jxyM5VFQ3Wla7O9-djDllrIhcnj3aZuwSyl6ywkk38W4wx5wj7fba4yHgjgHtDoYSlcnLc_dEnjAtKEEOkJPQy43wlfiElYVwreqcWrC8usVCFMiu4slv_eTKXLUEe0OwL9vXEFCwEF_P3ffEI7Owgj7BY37qs27gw2dmrJeNuRbiA5iJMgKFUS1FIsE0cqBf4omnLMDCVO-2uJI9sO4vR3PklACvgn" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-raised/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary border border-border-subtle">
                Field Operations
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Operational Logistics
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
              [Placeholder: Operations Lead]
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-3">
              Head of Field Operations
            </p>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Decentralized logistics &amp; cluster coordinator across 15+ cities. Specializes in safety protocol, rapid volunteer dispatch, and civic material supply pipelines.
            </p>
          </div>
          <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between text-xs text-text-secondary">
            <span className="flex items-center gap-1 font-medium">
              <Icon name="location_on" className="material-symbols-outlined text-sm" />
              {' '}NCR &amp; North Hubs
            </span>
            <span className="inline-flex items-center text-primary font-semibold hover:underline">
              Official Desk{' '}
              <Icon name="arrow_forward" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 shadow-sm">
          <div>
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-surface-peach border border-border-subtle">
              <img className="w-full h-full object-cover" data-alt="A candid editorial portrait of an Indian educator and community programs director in their twenties sitting outdoors near an open-air school shelter. Gentle golden hour illumination, with students in the distant background. Warm terracotta, sage, and parchment tones dominate the composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-_dmiwF2nAzQWgLGj9_utHqbf6upGm8dPHuBc6Y8dL7QwkaRPSnxXWYQHPUya3NifX7mLE24RnfYUwkm9SAFld4I39f69EYTfpi2OYg3q4haiaUdiojlIF2d4Gvf2BBuadK1TYRb0e1qZthUEeExRa7P8XWWc30qGA2CZuhkrU4ADZtlImWnIGuC00PIG6JuirPdCmMazBJDii-L1eiLr1zwVSoD8Oe9NGRDkVqIUC0I9fhWMXRoP" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-raised/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary border border-border-subtle">
                Pedagogy
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Curriculum &amp; Design
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
              [Placeholder: Programs Lead]
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-3">
              Director of Community Programs
            </p>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Curriculum development for Shiksha &amp; Women Empowerment pods. Designs foundational learning boxes, vernacular lesson modules, and mentor guides.
            </p>
          </div>
          <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between text-xs text-text-secondary">
            <span className="flex items-center gap-1 font-medium">
              <Icon name="location_on" className="material-symbols-outlined text-sm" />
              {' '}Delhi / Lucknow
            </span>
            <span className="inline-flex items-center text-primary font-semibold hover:underline">
              Official Desk{' '}
              <Icon name="arrow_forward" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 shadow-sm">
          <div>
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-surface-peach border border-border-subtle">
              <img className="w-full h-full object-cover" data-alt="Distinguished portrait of a senior Indian academic and civic advisory mentor wearing eyeglasses and traditional linen shirt in a study with vintage wooden bookshelves. Soft warm natural light reflecting off paper documents, conveying integrity, governance, and ethical stewardship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUuq--Vyc_56PjBmE7tsNB0YCxBxeyVcRZ0czojzawykjFL8dMwYkq7KdOa1N8vY0D2wQD2Qry1N4i0xiVm8-5Gv4Dbfky6Dt1_kb9CFRzAJ70aIaiXCIKpmCx7yRiTiFqJsSxL0t80uEqXeGh-hm_oAQ7pcaI9LwxmKHa3W4LYsVT_QKfatLcQ5etbMT4IAF4Sqcbe6mRKfzf3kltGzTqjseGnkycl-olqOGRwaeOylEnATdLFPm5" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-raised/90 backdrop-blur-sm rounded-full text-xs font-semibold text-text-primary border border-border-subtle">
                Governance
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Institutional Trust
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1">
              [Placeholder: Institutional Advisor]
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-3">
              Advisory &amp; Governance Mentor
            </p>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed">
              Youth civic policy, legal compliance &amp; ethics steward. Provides independent oversight ensuring total financial transparency and strict non-partisan standards.
            </p>
          </div>
          <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between text-xs text-text-secondary">
            <span className="flex items-center gap-1 font-medium">
              <Icon name="location_on" className="material-symbols-outlined text-sm" />
              {' '}Advisory Council
            </span>
            <span className="inline-flex items-center text-primary font-semibold hover:underline">
              Official Desk{' '}
              <Icon name="arrow_forward" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-16 md:py-20 border-b border-border-subtle bg-surface-peach/40" id="department-teams">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          <Icon name="settings" className="material-symbols-outlined text-sm" />
          {' '}Internal Backbone
        </div>
        <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
          Core Functional Departments
        </h2>
        <p className="text-text-secondary font-body-md text-body-md mt-1">
          The operational engines supporting field logistics, public communications, and digital infrastructure.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-7 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-clay-soft flex items-center justify-center text-primary mb-5 border border-border-subtle">
              <Icon name="event_note" className="material-symbols-outlined text-2xl" />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">
              Event &amp; Field Operations Team
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-6">
              Coordinates campus orientations, volunteer onboarding camps, and neighborhood drives across regional chapters with absolute adherence to local consent.
            </p>
            <div className="p-3.5 bg-surface-canvas rounded-xl border border-border-subtle mb-6">
              <div className="text-xs uppercase font-semibold text-text-secondary tracking-wider mb-1">
                Functional Lead
              </div>
              <div className="font-bold text-text-primary text-sm flex items-center justify-between">
                <span>
                  [Placeholder: Ops Coordinator]
                </span>
                <span className="text-xs font-normal text-text-secondary">
                  Lead Facilitator
                </span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-xs uppercase font-semibold text-text-secondary tracking-wider mb-2.5">
                Field Staff Specialists
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 01] • Onboarding
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 02] • Permits
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 03] • Safety Lead
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 04] • Materials
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-surface-clay-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Drive Logistics
            </span>
            <span className="px-2.5 py-1 bg-surface-clay-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Venue Safeguarding
            </span>
            <span className="px-2.5 py-1 bg-surface-clay-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Field Safety Kits
            </span>
          </div>
        </div>
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-7 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-olive-soft/60 flex items-center justify-center text-primary mb-5 border border-border-subtle">
              <Icon name="campaign" className="material-symbols-outlined text-2xl" />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">
              Sponsorship &amp; PR Team
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-6">
              Builds transparent institutional alliances, corporate CSR dialogues, and public chronicles preserving authentic stories without performative pity.
            </p>
            <div className="p-3.5 bg-surface-canvas rounded-xl border border-border-subtle mb-6">
              <div className="text-xs uppercase font-semibold text-text-secondary tracking-wider mb-1">
                Functional Lead
              </div>
              <div className="font-bold text-text-primary text-sm flex items-center justify-between">
                <span>
                  [Placeholder: Alliances Lead]
                </span>
                <span className="text-xs font-normal text-text-secondary">
                  Partnership Lead
                </span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-xs uppercase font-semibold text-text-secondary tracking-wider mb-2.5">
                Communications Pod
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 01] • Dispatches
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 02] • Ethics Copy
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 03] • CSR Audits
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 04] • Press Liaison
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-surface-olive-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              CSR Compliance
            </span>
            <span className="px-2.5 py-1 bg-surface-olive-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Press Dispatches
            </span>
            <span className="px-2.5 py-1 bg-surface-olive-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Donor Transparency
            </span>
          </div>
        </div>
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-7 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-12 h-12 rounded-xl bg-surface-blue-soft/70 flex items-center justify-center text-primary mb-5 border border-border-subtle">
              <Icon name="terminal" className="material-symbols-outlined text-2xl" />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">
              Technical &amp; Digital Team
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-6">
              Maintains our digital volunteer portals, field data systems, and web accessibility standards with strict end-to-end data stewardship and low-bandwidth resilience.
            </p>
            <div className="p-3.5 bg-surface-canvas rounded-xl border border-border-subtle mb-6">
              <div className="text-xs uppercase font-semibold text-text-secondary tracking-wider mb-1">
                Functional Lead
              </div>
              <div className="font-bold text-text-primary text-sm flex items-center justify-between">
                <span>
                  [Placeholder: Digital Lead]
                </span>
                <span className="text-xs font-normal text-text-secondary">
                  Systems Architect
                </span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-xs uppercase font-semibold text-text-secondary tracking-wider mb-2.5">
                Engineers &amp; Designers
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 01] • Frontend Lead
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 02] • Volunteer DB
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 03] • Accessibility
                </div>
                <div className="p-2 bg-surface-peach/50 rounded-lg border border-border-subtle text-text-secondary truncate">
                  [Associate 04] • Privacy Guard
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-surface-blue-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Next.js Platform
            </span>
            <span className="px-2.5 py-1 bg-surface-blue-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Open Data Systems
            </span>
            <span className="px-2.5 py-1 bg-surface-blue-soft/50 rounded-full text-xs font-medium text-text-primary border border-border-subtle">
              Field Record Security
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-16 md:py-20 border-b border-border-subtle" id="project-shiksha">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
            <Icon name="menu_book" className="material-symbols-outlined text-sm" />
            {' '}Foundational Education
          </div>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
            Project Shiksha — Area Learning Pods
          </h2>
          <p className="text-text-secondary font-body-md text-body-md mt-1">
            Weekend teaching pods and foundational literacy units embedded within informal settlements and peri-urban clusters.
          </p>
        </div>
        <span className="text-xs px-3.5 py-1.5 rounded-full bg-surface-clay-soft border border-border-subtle text-text-primary font-semibold self-start md:self-auto">
          12 Active Teaching Pods
        </span>
      </div>
      <div className="bg-surface-raised p-4 md:p-6 rounded-2xl border border-border-subtle mb-10 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <Icon name="search" className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary text-lg" />
          <input className="w-full pl-10 pr-4 py-2 bg-surface-canvas border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-text-primary transition-colors" placeholder="Search by city, pod or area name..." type="text" />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 custom-scroll-hide">
          <button className="px-3.5 py-1.5 rounded-full bg-primary text-text-inverse text-xs font-medium shadow-sm">
            All Zones
          </button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-canvas hover:bg-surface-peach text-text-primary border border-border-subtle text-xs font-medium transition-colors">
            North Zone
          </button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-canvas hover:bg-surface-peach text-text-primary border border-border-subtle text-xs font-medium transition-colors">
            Central Zone
          </button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-canvas hover:bg-surface-peach text-text-primary border border-border-subtle text-xs font-medium transition-colors">
            NCR Clusters
          </button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-canvas hover:bg-surface-peach text-text-primary border border-border-subtle text-xs font-medium transition-colors">
            Western Hubs
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 01
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Delhi NCR
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Yamuna Bank Cluster
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 01]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  6 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  35 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Foundational Literacy &amp; Remedial Math.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 02
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Delhi NCR
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Seelampur Learning Circle
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 02]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  5 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  28 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Vernacular Reading &amp; Library Boxes.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 03
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Delhi NCR
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Tughlakabad Settlement
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 03]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  7 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  42 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Weekend Math Circles &amp; Stationery Access.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 04
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Gurugram
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Sector 16 Basti Pod
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 04]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  4 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  24 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Remedial Basic Arithmetic &amp; Activity Pods.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 05
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Noida
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Khora Colony Learning Center
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 05]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  6 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  38 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Evening Reading Pod &amp; Peer Mentorship.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 06
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Jaipur
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Mansarovar Slum Cluster
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 06]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  5 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  30 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Foundational English &amp; Creative Arts.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 07
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Jaipur
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Sanganer Community Pod
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 07]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  4 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  22 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Primary School Re-enrollment Assistance.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 08
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Chandigarh
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Maloya Settlement Pod
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 08]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  5 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  26 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Digital Tablet Reading &amp; Phonics.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 09
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Lucknow
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Gomti Nagar Outreach Unit
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 09]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  6 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  32 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Mother-Child Literacy &amp; Study Camps.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 10
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Dehradun
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Bindal Bridge Basti
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 10]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  4 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  20 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Winter Learning Camps &amp; Book Drives.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 11
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Mumbai
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Govandi Youth Pod
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 11]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  8 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  45 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Vernacular Storytelling &amp; Educational Trips.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle hover:border-text-primary/40 transition-colors shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-surface-clay-soft font-mono text-xs font-bold text-text-primary">
                POD 12
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Bengaluru
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              DJ Halli Community Pod
            </h3>
            <p className="text-xs font-semibold text-text-secondary mb-4">
              Coordinator: [Pod Coordinator 12]
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs mb-4 p-3 bg-surface-canvas rounded-xl border border-border-subtle">
              <div>
                <span className="text-text-secondary">
                  Fellows:
                </span>
                <strong className="text-text-primary">
                  6 Teaching
                </strong>
              </div>
              <div>
                <span className="text-text-secondary">
                  Children:
                </span>
                <strong className="text-text-primary">
                  36 Enrolled
                </strong>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-3">
              <strong className="text-text-primary">
                Core Focus:
              </strong>
              {' '}Peer Tutoring &amp; Holistic School Readiness.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs">
              <span className="text-text-secondary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-status-success"></span>
                Active Weekends
              </span>
              <a className="font-semibold text-text-primary hover:underline" href="#">
                Pod Dossier →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-16 md:py-20 border-b border-border-subtle bg-surface-peach/30" id="project-samanvay">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
            <Icon name="hub" className="material-symbols-outlined text-sm" />
            {' '}Collegiate Fellowship
          </div>
          <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
            Project Samanvay — Civic &amp; Campus Chapters
          </h2>
          <p className="text-text-secondary font-body-md text-body-md mt-1">
            Collegiate leadership pods bridging university campuses with neighborhood civic councils.
          </p>
        </div>
        <span className="text-xs px-3.5 py-1.5 rounded-full bg-surface-clay-soft border border-border-subtle text-text-primary font-semibold self-start md:self-auto">
          10 Active Fellowship Chapters
        </span>
      </div>
      <div className="bg-surface-raised p-4 md:p-6 rounded-2xl border border-border-subtle mb-10 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <Icon name="search" className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary text-lg" />
          <input className="w-full pl-10 pr-4 py-2 bg-surface-canvas border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-secondary/70 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-text-primary transition-colors" placeholder="Search collegiate chapters or team numbers..." type="text" />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 custom-scroll-hide">
          <button className="px-3.5 py-1.5 rounded-full bg-primary text-text-inverse text-xs font-medium shadow-sm">
            All Chapters
          </button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-canvas hover:bg-surface-peach text-text-primary border border-border-subtle text-xs font-medium transition-colors">
            Campus Pods
          </button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-canvas hover:bg-surface-peach text-text-primary border border-border-subtle text-xs font-medium transition-colors">
            Municipal Action Units
          </button>
          <button className="px-3.5 py-1.5 rounded-full bg-surface-canvas hover:bg-surface-peach text-text-primary border border-border-subtle text-xs font-medium transition-colors">
            Youth Leadership
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 01
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                8 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Central Delhi Universities Chapter
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 01]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Ward Waste Segregation, Solid Waste Dialogues &amp; Youth Civic Participation Forums.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: University of Delhi Central Campus
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 02
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                12 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              North Campus Consortium, Delhi
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 02]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Public Transport Accessibility Mapping, Night-Time Safety Audits &amp; Campus Bootcamps.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Consortium of 4 North Delhi Colleges
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 03
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                7 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Noida Regional Technical Hub
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 03]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Civic Tech Solutions, Open Community GIS Mapping &amp; Public Grievance Tracking.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Gautam Buddha Nagar Engineering Pods
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 04
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                6 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Gurugram Suburban Municipal Pod
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 04]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Water Harvesting Awareness, Peri-Urban Water Table Studies &amp; Sanitation Forums.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Southern Haryana Universities Pod
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 05
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                9 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Chandigarh Tri-City Collegiate Network
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 05]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Youth Deliberative Democracy, Urban Green Spaces Preservation &amp; Youth Parliaments.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Panjab University &amp; Tri-City Colleges
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 06
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                7 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Jaipur University Inter-Campus Wing
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 06]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Heritage Neighborhood Preservation, Artisan Welfare Rights &amp; Peri-Urban Advocacy.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Rajasthan University Coalition
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 07
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                8 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Lucknow Civic &amp; Social Action Circle
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 07]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Youth Local Governance Forums, Ward Councilor Open Houses &amp; RTI Literacy Workshops.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Lucknow Central Campus Hub
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 08
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                5 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Dehradun Foothills Environmental Pod
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 08]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Ecological Stream Restoration, Seasonal Landslide Awareness &amp; Forest Guardianship.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Doon Valley Student Collective
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 09
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                10 Collegiate Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              Bengaluru Central Student Collective
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 09]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Urban Lakes Revival &amp; Monitoring, Community Composting &amp; Civic Hackathons.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: Bengaluru Inter-University Alliance
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
        <div className="bg-surface-raised p-6 rounded-2xl border border-border-subtle shadow-sm flex flex-col justify-between hover:border-text-primary/30 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-surface-peach text-xs font-mono font-bold text-text-primary">
                TEAM SAMANVAY 10
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-clay-soft text-text-primary font-medium">
                6 Senior Fellows
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
              National Coordination Cell
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              Chapter Coordinator:{' '}
              <strong className="text-text-primary font-semibold">
                [Fellowship Lead 10]
              </strong>
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary block mb-1">
                Core Civic Agenda
              </span>
              <p className="text-xs text-text-primary font-medium">
                Inter-State Youth Exchanges, Cross-Chapter Mentorship &amp; Annual Fellowship Assemblies.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-text-secondary">
            <span>
              Host: All-India Fellowship Secretariat
            </span>
            <span className="text-primary font-semibold flex items-center">
              View Chapter Record{' '}
              <Icon name="chevron_right" className="material-symbols-outlined text-xs ml-0.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-16 md:py-20 border-b border-border-subtle" id="specialized-programs">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
          <Icon name="psychology" className="material-symbols-outlined text-sm" />
          {' '}Specialized Interventions
        </div>
        <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
          Specialized Initiative Teams
        </h2>
        <p className="text-text-secondary font-body-md text-body-md mt-1">
          Modular operational units designed to expand as new grassroots initiatives scale.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-7 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-full bg-surface-lilac-soft flex items-center justify-center text-primary mb-5 border border-border-subtle">
              <Icon name="self_improvement" className="material-symbols-outlined text-xl" />
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-surface-peach rounded text-text-secondary uppercase">
              Initiative Pod 01
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mt-2 mb-2">
              Heal with Kadam Peer-Support Council
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary mb-4 leading-relaxed">
              Facilitates non-clinical psychological first-aid, safe peer-decompression spaces, and confidential listening pods for youth volunteers and adolescents.
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4 text-xs">
              <div className="text-text-secondary font-medium">
                Listening Pod Lead:
              </div>
              <div className="font-bold text-text-primary">
                [Listening Pod Lead] • 8 Trained Youth Listeners
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-border-subtle text-xs text-text-secondary">
            <span className="flex items-center gap-1 font-medium">
              <Icon name="lock" className="material-symbols-outlined text-sm text-status-success" />
              {' '}Confidential Peer Space Protocol
            </span>
          </div>
        </div>
        <div className="bg-surface-raised rounded-2xl border border-border-subtle p-7 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-full bg-surface-olive-soft flex items-center justify-center text-primary mb-5 border border-border-subtle">
              <Icon name="diversity_1" className="material-symbols-outlined text-xl" />
            </div>
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-surface-peach rounded text-text-secondary uppercase">
              Initiative Pod 02
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mt-2 mb-2">
              Women Empowerment Vocational Pod
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary mb-4 leading-relaxed">
              Connects peri-urban women's self-help groups with digital banking cooperatives, artisanal tailoring workshops, and independent micro-grants.
            </p>
            <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle mb-4 text-xs">
              <div className="text-text-secondary font-medium">
                Livelihoods Lead:
              </div>
              <div className="font-bold text-text-primary">
                [Livelihoods Lead] • 6 Grassroots Mentors
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-border-subtle text-xs text-text-secondary">
            <span className="flex items-center gap-1 font-medium">
              <Icon name="volunteer_activism" className="material-symbols-outlined text-sm text-status-success" />
              {' '}Community Cooperative Network
            </span>
          </div>
        </div>
        <div className="bg-surface-canvas rounded-2xl border-2 border-dashed border-border-subtle p-7 flex flex-col justify-between text-center items-center hover:bg-surface-peach/40 transition-colors">
          <div className="w-full flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-surface-raised flex items-center justify-center text-primary mb-4 border border-border-subtle shadow-sm">
              <Icon name="add" className="material-symbols-outlined text-2xl" />
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">
              Propose or Launch a New Program Pod
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary leading-relaxed mb-6">
              Have a community intervention you want to lead? Propose a specialized Kadam initiative with our collegiate incubation committee. We provide logistical stewardship and volunteer networks.
            </p>
          </div>
          <a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-surface-raised hover:bg-surface-clay-soft border border-border-subtle text-text-primary text-label-md font-label-md transition-colors shadow-sm w-full" href="#">
            <span>
              Submit Pod Proposal
            </span>
            <Icon name="send" className="material-symbols-outlined ml-1.5 text-sm" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full py-20 bg-surface-peach relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-space-lg md:px-margin text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-canvas border border-border-subtle mb-6">
        <span className="font-eyebrow text-eyebrow tracking-widest text-text-primary uppercase">
          Get Involved Today
        </span>
      </div>
      <h2 className="font-display-lg-mobile md:font-headline-xl text-display-lg-mobile md:text-headline-xl text-primary font-bold mb-6">
        Find Your Place in Our Mission
      </h2>
      <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
        Whether you have two hours on a Sunday to teach, want to coordinate your campus's civic chapter, or bring technical expertise to our operations, every footprint counts.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-text-inverse px-8 py-3.5 rounded-full font-label-md text-label-md hover:bg-action-hover transition-transform active:scale-95 duration-150 shadow-md" href="#">
          <span>
            Volunteer With a Team
          </span>
          <Icon name="north_east" className="material-symbols-outlined ml-2 text-base" />
        </a>
        <a className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-primary text-text-primary px-8 py-3.5 rounded-full font-label-md text-label-md hover:bg-surface-raised transition-colors" href="#">
          <span>
            Explore Open Coordinator Roles
          </span>
        </a>
      </div>
    </div>
  </section>
</main>
  );
}
