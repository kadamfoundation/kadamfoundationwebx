import Icon from '@/components/Icon';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/site-config';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Contact',
  'Contact Kadam SOS Foundation by phone or email, or find the foundation’s office in Bhopal.',
  '/contact',
);

export default function ContactPage() {
  return (
<main className="flex-grow">
  <section className="w-full px-space-lg md:px-margin max-w-7xl mx-auto pt-12 md:pt-16 pb-12">
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-peach/70 border border-border-subtle mb-6">
        <span className="w-2 h-2 rounded-full bg-status-success animate-pulse"></span>
        <span className="font-eyebrow text-eyebrow text-text-primary tracking-widest uppercase">
          GET IN TOUCH • GRASSROOTS DIALOGUE &amp; OUTREACH
        </span>
      </div>
      <h1 className="font-display-xl text-display-xl md:text-display-xl font-bold text-primary mb-6 tracking-tight">
        Let’s Connect
      </h1>
      <p className="font-body-lg text-body-lg text-text-secondary mb-8 leading-relaxed">
        Whether you represent a collegiate partner, community youth group, local panchayat, or prospective volunteer, direct conversations fuel our work. Reach out directly through our verified operational desks.
      </p>
      <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-raised border border-border-subtle text-text-secondary">
        <Icon name="location_on" className="material-symbols-outlined text-primary text-xl" />
        <p className="font-body-sm text-body-sm text-primary font-medium">
          <span className="font-semibold text-primary">Office address: </span>
          {CONTACT_INFO.officeAddress}
        </p>
      </div>
    </div>
  </section>
  <section className="w-full px-space-lg md:px-margin max-w-7xl mx-auto pb-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-surface-raised rounded-[22px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all duration-200">
        <div>
          <div className="w-12 h-12 rounded-full bg-surface-clay-soft flex items-center justify-center text-primary mb-6">
            <Icon name="call" className="material-symbols-outlined text-2xl" />
          </div>
          <span className="font-eyebrow text-eyebrow text-text-secondary uppercase tracking-wider block mb-1">
            Direct Voice Desk
          </span>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-3">
            Direct Voice Helpline
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-6 leading-relaxed">
            For general queries, community alerts, emergency field assistance, and pod coordinator support.
          </p>
          <div className="p-3.5 rounded-lg bg-surface-canvas/80 border border-border-subtle mb-6">
            <span className="font-label-md text-label-md text-primary font-semibold block tracking-tight">
              {CONTACT_INFO.phone}
            </span>
          </div>
        </div>
        <a className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full border border-primary text-primary font-label-md text-label-md font-medium hover:bg-surface-peach transition-colors active:scale-95 duration-150" href={CONTACT_INFO.phoneHref}>
          <Icon name="phone_forwarded" className="material-symbols-outlined text-lg" />
          <span>
            Call Our Desk
          </span>
        </a>
      </div>
      <div className="bg-surface-peach rounded-[22px] p-8 border border-border-subtle flex flex-col justify-between shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary-container text-text-inverse px-4 py-1 rounded-bl-xl font-eyebrow text-[10px] tracking-wider uppercase font-semibold">
          Fastest Channel
        </div>
        <div>
          <div className="w-12 h-12 rounded-full bg-surface-raised flex items-center justify-center text-primary mb-6">
            <Icon name="forum" className="material-symbols-outlined text-2xl" />
          </div>
          <span className="font-eyebrow text-eyebrow text-text-secondary uppercase tracking-wider block mb-1">
            Rapid Messaging
          </span>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-3">
            WhatsApp Community
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-6 leading-relaxed">
            Join the official Kadam Foundation WhatsApp community.
          </p>
          <div className="p-3.5 rounded-lg bg-surface-raised border border-border-subtle mb-6">
            <span className="font-label-md text-label-md text-primary font-semibold block tracking-tight">
              Kadam Foundation Community
            </span>
          </div>
        </div>
        <a className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full bg-primary-container text-text-inverse font-label-md text-label-md font-medium hover:bg-action-hover transition-colors shadow-sm active:scale-95 duration-150" href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="chat" className="material-symbols-outlined text-lg" />
          <span>
            Join WhatsApp Community
          </span>
        </a>
      </div>
      <div className="bg-surface-raised rounded-[22px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all duration-200">
        <div>
          <div className="w-12 h-12 rounded-full bg-surface-blue-soft flex items-center justify-center text-primary mb-6">
            <Icon name="mail" className="material-symbols-outlined text-2xl" />
          </div>
          <span className="font-eyebrow text-eyebrow text-text-secondary uppercase tracking-wider block mb-1">
            Formal Correspondence
          </span>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-3">
            Official Email Correspondence
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-6 leading-relaxed">
            Formal documentation, institutional partnership proposals, research clearances, and governance queries.
          </p>
          <div className="p-3.5 rounded-lg bg-surface-canvas/80 border border-border-subtle mb-6">
            <span className="font-label-md text-label-md text-primary font-semibold block tracking-tight">
              {CONTACT_INFO.email}
            </span>
          </div>
        </div>
        <a className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full border border-primary text-primary font-label-md text-label-md font-medium hover:bg-surface-peach transition-colors active:scale-95 duration-150" href={CONTACT_INFO.emailHref}>
          <Icon name="send" className="material-symbols-outlined text-lg" />
          <span>
            Send an Email
          </span>
        </a>
      </div>
    </div>
  </section>
  <section className="w-full px-space-lg md:px-margin max-w-7xl mx-auto pb-20">
    <div className="bg-surface-raised rounded-[24px] border border-border-subtle overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-clay-soft text-text-primary mb-6">
              <Icon name="pin_drop" className="material-symbols-outlined text-sm" />
              <span className="font-eyebrow text-eyebrow tracking-widest uppercase">
                REGISTERED SECRETARIAT &amp; HUB
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-6">
              Office Desk
            </h2>
            <div className="space-y-6 text-text-secondary">
              <div className="flex items-start gap-3.5">
                <Icon name="domain" className="material-symbols-outlined text-primary mt-1" />
                <div>
                  <h4 className="font-label-md text-label-md font-semibold text-primary">
                    Office Address
                  </h4>
                  <p className="font-body-sm text-body-sm mt-0.5 leading-relaxed">
                    {CONTACT_INFO.officeAddress}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <Icon name="call" className="material-symbols-outlined text-primary mt-1" />
                <div>
                  <h4 className="font-label-md text-label-md font-semibold text-primary">Phone</h4>
                  <p className="font-body-sm text-body-sm mt-0.5 leading-relaxed">
                    <a className="hover:underline" href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <Icon name="mail" className="material-symbols-outlined text-primary mt-1" />
                <div>
                  <h4 className="font-label-md text-label-md font-semibold text-primary">Email</h4>
                  <p className="font-body-sm text-body-sm mt-0.5 leading-relaxed">
                    <a className="break-all hover:underline" href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-surface-canvas border border-border-subtle flex items-start gap-3">
              <Icon name="shield" className="material-symbols-outlined text-status-warning mt-0.5" />
              <p className="font-body-sm text-[13px] leading-relaxed text-text-secondary">
                <strong className="text-primary font-semibold">
                  Trust &amp; Safety Notice:
                </strong>
                {' '}To ensure safeguarding of student volunteers and beneficiaries, walk-in visits to active learning pods require prior chapter registration and security clearance.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
            <span className="font-body-sm text-body-sm text-text-secondary">
              Coordinate visits directly with desk officers.
            </span>
            <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold hover:underline" href="/volunteer#code-of-conduct">
              <span>
                View Visitor Protocols
              </span>
              <Icon name="arrow_forward" className="material-symbols-outlined text-base" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 bg-surface-peach p-8 flex flex-col justify-between items-center text-center relative border-t lg:border-t-0 lg:border-l border-border-subtle min-h-[380px]">
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D6B56E_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 w-full flex justify-end">
            <span className="px-3 py-1 bg-surface-raised rounded-full text-[11px] font-eyebrow font-medium text-text-secondary border border-border-subtle">
              Office Location
            </span>
          </div>
          <div className="relative z-10 my-auto px-4">
            <div className="w-16 h-16 rounded-full bg-surface-raised mx-auto mb-4 flex items-center justify-center text-primary shadow-sm border border-border-subtle">
              <Icon name="location_on" className="material-symbols-outlined text-3xl text-status-error" />
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Bhopal Office
            </h3>
            <p className="font-body-sm text-body-sm text-text-secondary max-w-sm mx-auto mb-6">
              {CONTACT_INFO.officeAddress}
            </p>
            <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-container text-text-inverse font-label-md text-label-md font-medium hover:bg-action-hover transition-colors shadow-sm" href={CONTACT_INFO.mapUrl} target="_blank" rel="noopener noreferrer">
              <span>
                Open in Google Maps
              </span>
              <Icon name="north_east" className="material-symbols-outlined text-sm" />
            </a>
          </div>
          <div className="relative z-10 text-xs font-eyebrow text-text-secondary/80">
            Open the supplied office address in Google Maps
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="w-full px-space-lg md:px-margin max-w-7xl mx-auto pb-20">
    <div className="text-left mb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-olive-soft/60 border border-border-subtle mb-4">
        <span className="font-eyebrow text-eyebrow text-primary tracking-widest uppercase">
          Functional Pod Desks
        </span>
      </div>
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-bold mb-3">
        Direct Channels by Purpose
      </h2>
      <p className="font-body-md text-body-md text-text-secondary max-w-2xl">
        Connect directly with the specialized functional team best equipped to assist your request without administrative delays.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-surface-raised rounded-[20px] p-6 border border-border-subtle flex flex-col justify-between hover:border-primary/40 transition-colors">
        <div>
          <div className="w-10 h-10 rounded-full bg-surface-clay-soft flex items-center justify-center text-primary mb-4">
            <Icon name="diversity_3" className="material-symbols-outlined text-xl" />
          </div>
          <span className="font-eyebrow text-[11px] text-text-secondary tracking-wider uppercase block mb-1">
            Volunteering &amp; Pod Admissions
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Volunteer Coordination Desk
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-4 leading-relaxed">
            Pod inductions, chapter onboarding, college credits, attendance queries, and student mentor certificates.
          </p>
          <div className="text-xs font-mono bg-surface-canvas p-2.5 rounded-lg border border-border-subtle text-primary mb-4 break-all">
            {CONTACT_INFO.email}
          </div>
        </div>
        <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold hover:text-action-hover group" href={`${CONTACT_INFO.emailHref}?subject=Volunteer%20Coordination`}>
          <span>
            Email Volunteer Desk
          </span>
          <Icon name="north_east" className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
      <div className="bg-surface-raised rounded-[20px] p-6 border border-border-subtle flex flex-col justify-between hover:border-primary/40 transition-colors">
        <div>
          <div className="w-10 h-10 rounded-full bg-surface-olive-soft flex items-center justify-center text-primary mb-4">
            <Icon name="menu_book" className="material-symbols-outlined text-xl" />
          </div>
          <span className="font-eyebrow text-[11px] text-text-secondary tracking-wider uppercase block mb-1">
            Programs &amp; Learning Pods
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Program Directorate (Shiksha &amp; Samanvay)
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-4 leading-relaxed">
            Pod curriculum, university chapter alliances, learning materials, stationery drives, and syllabus integration.
          </p>
          <div className="text-xs font-mono bg-surface-canvas p-2.5 rounded-lg border border-border-subtle text-primary mb-4 break-all">
            {CONTACT_INFO.email}
          </div>
        </div>
        <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold hover:text-action-hover group" href={`${CONTACT_INFO.emailHref}?subject=Programs`}>
          <span>
            Connect with Programs
          </span>
          <Icon name="north_east" className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
      <div className="bg-surface-raised rounded-[20px] p-6 border border-border-subtle flex flex-col justify-between hover:border-primary/40 transition-colors">
        <div>
          <div className="w-10 h-10 rounded-full bg-surface-peach flex items-center justify-center text-primary mb-4">
            <Icon name="handshake" className="material-symbols-outlined text-xl" />
          </div>
          <span className="font-eyebrow text-[11px] text-text-secondary tracking-wider uppercase block mb-1">
            Corporate &amp; Philanthropy
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Sponsorships &amp; CSR Alliances
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-4 leading-relaxed">
            Corporate CSR partnerships, seed grants, statutory audit reports, library kits, and foundation endorsements.
          </p>
          <div className="text-xs font-mono bg-surface-canvas p-2.5 rounded-lg border border-border-subtle text-primary mb-4 break-all">
            {CONTACT_INFO.email}
          </div>
        </div>
        <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold hover:text-action-hover group" href={`${CONTACT_INFO.emailHref}?subject=Partnerships`}>
          <span>
            Inquire About Partnerships
          </span>
          <Icon name="north_east" className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
      <div className="bg-surface-raised rounded-[20px] p-6 border border-border-subtle flex flex-col justify-between hover:border-primary/40 transition-colors">
        <div>
          <div className="w-10 h-10 rounded-full bg-surface-blue-soft flex items-center justify-center text-primary mb-4">
            <Icon name="campaign" className="material-symbols-outlined text-xl" />
          </div>
          <span className="font-eyebrow text-[11px] text-text-secondary tracking-wider uppercase block mb-1">
            Dispatches &amp; Press
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Press &amp; Grassroots Storytelling
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-4 leading-relaxed">
            Press kits, photo journalism permissions, ethical child safeguarding clearances, and university media visits.
          </p>
          <div className="text-xs font-mono bg-surface-canvas p-2.5 rounded-lg border border-border-subtle text-primary mb-4 break-all">
            {CONTACT_INFO.email}
          </div>
        </div>
        <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold hover:text-action-hover group" href={`${CONTACT_INFO.emailHref}?subject=Media%20Inquiry`}>
          <span>
            Media Inquiries
          </span>
          <Icon name="north_east" className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
      <div className="bg-surface-raised rounded-[20px] p-6 border border-border-subtle flex flex-col justify-between hover:border-primary/40 transition-colors lg:col-span-2">
        <div>
          <div className="w-10 h-10 rounded-full bg-surface-lilac-soft flex items-center justify-center text-primary mb-4">
            <Icon name="balance" className="material-symbols-outlined text-xl" />
          </div>
          <span className="font-eyebrow text-[11px] text-text-secondary tracking-wider uppercase block mb-1">
            Ombudsman &amp; Ethics
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            Grievance &amp; Advisory Council
          </h3>
          <p className="font-body-sm text-body-sm text-text-secondary mb-4 leading-relaxed">
            Institutional governance oversight, compliance as a Section 8 Company with 12A and 80G certifications, internal ombudsman complaints, and community feedback.
          </p>
          <div className="text-xs font-mono bg-surface-canvas p-2.5 rounded-lg border border-border-subtle text-primary mb-4 inline-block">
            {CONTACT_INFO.email}
          </div>
        </div>
        <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold hover:text-action-hover group mt-2" href={`${CONTACT_INFO.emailHref}?subject=Governance`}>
          <span>
            Contact Governance Office
          </span>
          <Icon name="north_east" className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </section>
  <section className="w-full px-space-lg md:px-margin max-w-7xl mx-auto pb-20">
    <div className="text-left mb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-peach/80 border border-border-subtle mb-4">
        <span className="font-eyebrow text-eyebrow text-primary tracking-widest uppercase">
          COMMUNITY PULSE
        </span>
      </div>
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-bold mb-3">
        Follow Our Footprints Online
      </h2>
      <p className="font-body-md text-body-md text-text-secondary max-w-2xl">
        Engage with live field logs, weekend pod highlights, student stories, and official announcements across verified channels.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {SOCIAL_LINKS.map(({ name, href, icon }) => (
        <a
          key={name}
          className="bg-surface-raised p-6 rounded-[18px] border border-border-subtle hover:border-primary transition-all group flex flex-col justify-between"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-headline-md text-headline-md text-primary font-bold">{name}</span>
            <Icon name={icon} className="text-primary group-hover:translate-x-0.5 transition-transform text-xl" />
          </div>
          <p className="font-body-sm text-body-sm text-text-secondary">
            Visit the official Kadam Foundation {name} channel.
          </p>
        </a>
      ))}
    </div>
  </section>
  <section className="w-full px-space-lg md:px-margin max-w-7xl mx-auto pb-24">
    <div className="bg-surface-clay-soft rounded-[24px] p-8 md:p-12 border border-border-subtle relative overflow-hidden">
      <div className="max-w-3xl">
        <span className="font-eyebrow text-eyebrow text-text-primary tracking-widest uppercase block mb-3 font-semibold">
          Institutional Accountability
        </span>
        <h2 className="font-headline-xl text-headline-xl text-primary font-bold mb-4">
          Have questions about our Section 8 status, 12A and 80G certifications, or how your donation is spent?
        </h2>
        <p className="font-body-md text-body-md text-text-primary mb-8 leading-relaxed">
          Kadam SOS Foundation is a Section 8 Company with 12A and 80G certifications. Downloadable annual reports will be added here when they are ready. For current financial or compliance document requests, contact us directly.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-container text-text-inverse font-label-md text-label-md font-medium hover:bg-action-hover transition-colors shadow-sm" href={`${CONTACT_INFO.emailHref}?subject=Financial%20and%20Compliance%20Documents`}>
            <Icon name="description" className="material-symbols-outlined text-base" />
            <span>Request Financial &amp; Compliance Documents</span>
          </a>
          <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-label-md text-label-md font-medium hover:bg-surface-raised transition-colors" href="/volunteer#faq">
            <Icon name="help_outline" className="material-symbols-outlined text-base" />
            <span>
              Explore Frequently Asked Questions
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>
  );
}
