import Icon from '@/components/Icon';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { CONTACT_INFO } from '@/lib/site-config';

export default function HomePage() {
  return (
    <main className="flex-grow">
    
    <section className="relative pt-12 pb-16 md:py-20 px-space-lg md:px-margin max-w-7xl mx-auto overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
    
    <div className="lg:col-span-7 flex flex-col items-start space-y-6">
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-raised border border-border-subtle shadow-sm">
    <Icon name="spa" className="text-[16px] text-text-secondary" />
    <span className="font-eyebrow text-eyebrow tracking-widest text-text-primary uppercase font-semibold">Youth-Led Nonprofit Organization</span>
    </div>
    <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary font-semibold tracking-tight leading-[1.08]">
                Young Steps Towards the Nation
              </h1>
    <p className="font-body-lg text-body-lg text-text-secondary max-w-xl">
                Empowering communities through grassroots action, education, and collective youth leadership across India. We believe generational change begins at the grassroots level.
              </p>
    
    <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
    <a className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#3F2C2E] text-text-inverse font-label-md text-label-md hover:bg-[#2F2022] hover:translate-x-0.5 transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-focus-ring" href="#volunteer">
                  Join Our Mission
                  <Icon name="arrow_forward" className="text-[18px]" />
    </a>
    <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-text-primary text-text-primary font-label-md text-label-md hover:bg-surface-raised transition-all duration-150 active:scale-95 focus:ring-2 focus:ring-focus-ring" href="#stories">
    <Icon name="play_circle" className="text-[20px]" />
                  Watch Our Story
                </a>
    </div>
    
    <div className="w-full pt-8 mt-2 border-t border-border-subtle">
    <div className="flex items-center gap-2 mb-3">
    <Icon name="verified" className="text-[18px] text-status-success" filled style={{ fontVariationSettings: '\'FILL\' 1' }} />
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">Verified Grassroots Metrics (2024 Audit)</span>
    </div>
    <div className="grid grid-cols-3 gap-4 sm:gap-8">
    <div>
    <p className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">300+</p>
    <p className="font-body-sm text-body-sm text-text-secondary">Active Volunteers</p>
    </div>
    <div className="border-l border-border-subtle pl-4 sm:pl-8">
    <p className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">15</p>
    <p className="font-body-sm text-body-sm text-text-secondary">Cities Reached</p>
    </div>
    <div className="border-l border-border-subtle pl-4 sm:pl-8">
    <p className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">1,000</p>
    <p className="font-body-sm text-body-sm text-text-secondary">Lives Impacted</p>
    </div>
    </div>
    </div>
    </div>
    
    <div className="lg:col-span-5 relative">
    <div className="relative rounded-[22px] overflow-hidden border border-border-subtle shadow-sm bg-surface-raised p-2">
    <div className="rounded-[18px] overflow-hidden aspect-[4/5] relative">
    <ImagePlaceholder alt="Photo placeholder for the homepage community drive; approved Kadam volunteer photograph pending." />
    <div className="absolute inset-0 bg-gradient-to-t from-[#281819]/60 via-transparent to-transparent"></div>
    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface-raised/95 backdrop-blur-sm border border-border-subtle">
    <p className="font-label-md text-label-md text-text-primary font-semibold flex items-center gap-1.5">
    <Icon name="location_on" className="text-status-success text-[18px]" />
                      Community Drive • New Delhi
                    </p>
    <p className="font-body-sm text-body-sm text-text-secondary mt-0.5">Youth fellows distributing learning resources</p>
    </div>
    </div>
    </div>
    
    <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-2 p-3 bg-surface-peach rounded-2xl border border-border-subtle shadow-sm">
    <Icon name="diversity_1" className="text-[#3F2C2E] text-2xl" />
    <span className="font-eyebrow text-eyebrow font-bold text-text-primary">100% YOUTH-LED</span>
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-16 md:py-24 bg-surface-raised border-y border-border-subtle" id="programs">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
    <div className="max-w-2xl">
    <div className="inline-flex items-center gap-1.5 mb-2.5">
    <Icon name="interests" className="text-[16px] text-text-secondary" />
    <span className="font-eyebrow text-eyebrow tracking-widest text-text-secondary uppercase">What We Do</span>
    </div>
    <h2 className="font-headline-xl text-headline-xl text-primary font-bold">Our Core Focus Areas</h2>
    <p className="font-body-md text-body-md text-text-secondary mt-2">
                  Grassroots initiatives designed, managed, and executed by young changemakers tackling foundational community challenges.
                </p>
    </div>
    <div className="mt-4 md:mt-0">
    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:underline" href="#volunteer">
                  Explore All Initiatives
                  <Icon name="arrow_outward" className="text-[18px]" />
    </a>
    </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
    
    <div className="group flex flex-col justify-between p-6 rounded-[20px] bg-surface-canvas border border-border-subtle hover:shadow-sm transition-all duration-200">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-raised flex items-center justify-center border border-border-subtle mb-5 text-primary">
    <Icon name="school" className="text-2xl" />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary tracking-widest uppercase">Pillar 01</span>
    <h3 className="font-headline-lg text-headline-lg text-primary font-semibold mt-1 mb-2">Education</h3>
    <p className="font-body-sm text-body-sm text-text-secondary">
                    Foundational learning, remedial support, and youth mentorship for underprivileged children across urban settlements.
                  </p>
    </div>
    <div className="pt-6 mt-4 border-t border-border-subtle/60 flex items-center justify-between">
    <span className="font-label-md text-label-md font-medium text-text-primary">Learn more</span>
    <div className="h-8 w-8 rounded-full bg-[#3F2C2E] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[16px]" />
    </div>
    </div>
    </div>
    
    <div className="group flex flex-col justify-between p-6 rounded-[20px] bg-surface-clay-soft border border-border-subtle hover:shadow-sm transition-all duration-200">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-canvas flex items-center justify-center border border-border-subtle mb-5 text-primary">
    <Icon name="front_hand" className="text-2xl" />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary tracking-widest uppercase">Pillar 02</span>
    <h3 className="font-headline-lg text-headline-lg text-primary font-semibold mt-1 mb-2">Women Empowerment</h3>
    <p className="font-body-sm text-body-sm text-text-secondary">
                    Skill building, vocational workshops, hygiene awareness, and financial literacy circles for self-reliance.
                  </p>
    </div>
    <div className="pt-6 mt-4 border-t border-[#3F2C2E]/10 flex items-center justify-between">
    <span className="font-label-md text-label-md font-medium text-text-primary">Learn more</span>
    <div className="h-8 w-8 rounded-full bg-[#3F2C2E] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[16px]" />
    </div>
    </div>
    </div>
    
    <div className="group flex flex-col justify-between p-6 rounded-[20px] bg-surface-blue-soft border border-border-subtle hover:shadow-sm transition-all duration-200">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-canvas flex items-center justify-center border border-border-subtle mb-5 text-primary">
    <Icon name="bolt" className="text-2xl" />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary tracking-widest uppercase">Pillar 03</span>
    <h3 className="font-headline-lg text-headline-lg text-primary font-semibold mt-1 mb-2">Youth Welfare</h3>
    <p className="font-body-sm text-body-sm text-text-secondary">
                    Civic engagement fellowships, leadership incubators, and mental wellness dialogue forums for collegiate youth.
                  </p>
    </div>
    <div className="pt-6 mt-4 border-t border-[#3F2C2E]/10 flex items-center justify-between">
    <span className="font-label-md text-label-md font-medium text-text-primary">Learn more</span>
    <div className="h-8 w-8 rounded-full bg-[#3F2C2E] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[16px]" />
    </div>
    </div>
    </div>
    
    <div className="group flex flex-col justify-between p-6 rounded-[20px] bg-surface-olive-soft border border-border-subtle hover:shadow-sm transition-all duration-200">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-canvas flex items-center justify-center border border-border-subtle mb-5 text-primary">
    <Icon name="eco" className="text-2xl" />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary tracking-widest uppercase">Pillar 04</span>
    <h3 className="font-headline-lg text-headline-lg text-primary font-semibold mt-1 mb-2">Environment</h3>
    <p className="font-body-sm text-body-sm text-text-secondary">
                    Urban afforestation drives, neighborhood waste segregation, community cleanups, and plastic-free advocacy.
                  </p>
    </div>
    <div className="pt-6 mt-4 border-t border-[#3F2C2E]/10 flex items-center justify-between">
    <span className="font-label-md text-label-md font-medium text-text-primary">Learn more</span>
    <div className="h-8 w-8 rounded-full bg-[#3F2C2E] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[16px]" />
    </div>
    </div>
    </div>
    
    <div className="group flex flex-col justify-between p-6 rounded-[20px] bg-surface-lilac-soft border border-border-subtle hover:shadow-sm transition-all duration-200">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-canvas flex items-center justify-center border border-border-subtle mb-5 text-primary">
    <Icon name="pets" className="text-2xl" />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary tracking-widest uppercase">Pillar 05</span>
    <h3 className="font-headline-lg text-headline-lg text-primary font-semibold mt-1 mb-2">Animal Welfare</h3>
    <p className="font-body-sm text-body-sm text-text-secondary">
                    Street animal rescue coordination, emergency medical aid kits, reflective collar tagging, and feeding drives.
                  </p>
    </div>
    <div className="pt-6 mt-4 border-t border-[#3F2C2E]/10 flex items-center justify-between">
    <span className="font-label-md text-label-md font-medium text-text-primary">Learn more</span>
    <div className="h-8 w-8 rounded-full bg-[#3F2C2E] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
    <Icon name="arrow_forward" className="text-[16px]" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="clay-grain text-text-inverse py-16 md:py-24 border-b border-border-subtle relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    <div className="lg:col-span-6 space-y-6">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F2C2E]/60 border border-white/20 text-[#FFF7F2]">
    <Icon name="public" className="text-[16px]" />
    <span className="font-eyebrow text-eyebrow tracking-widest uppercase">Nationwide Movement</span>
    </div>
    <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-text-inverse leading-tight">
                  Making a Difference Across 15 Cities
                </h2>
    <p className="font-body-lg text-body-lg text-text-inverse/90">
                  From street-level literacy drives in Delhi to coastal cleanups in Mumbai, our decentralized student network acts where need is immediate and lasting change is possible.
                </p>
    
    <div className="pt-2">
    <p className="font-eyebrow text-eyebrow uppercase text-text-inverse/70 mb-3 tracking-widest">Active Volunteer Hubs [Founder Verified]:</p>
    <div className="flex flex-wrap gap-2">
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">New Delhi</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">Noida</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">Gurugram</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">Jaipur</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">Chandigarh</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">Lucknow</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">Dehradun</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">Bengaluru</span>
    <span className="px-3 py-1 rounded-full bg-white/10 text-white font-body-sm text-body-sm border border-white/20">+ 7 More Regional Hubs</span>
    </div>
    </div>
    
    <div className="p-4 rounded-xl bg-[#281819]/40 border border-white/20 flex items-start gap-3 mt-6">
    <Icon name="policy" className="text-[#F2E3DC] text-xl mt-0.5" />
    <p className="font-body-sm text-body-sm text-text-inverse/90">
    <strong className="text-white">Strict Transparency Commitment:</strong> Impact metrics are independently verified through our 2024 grassroots audits. All volunteer hours and donor contributions are publicly documented.
                  </p>
    </div>
    </div>
    
    <div className="lg:col-span-6">
    <div className="bg-surface-raised/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[24px]">
    <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
    <div>
    <h4 className="font-headline-md text-headline-md font-semibold text-white">Geographic Footprint</h4>
    <p className="font-body-sm text-body-sm text-text-inverse/70">Grassroots distribution &amp; presence</p>
    </div>
    <span className="px-3 py-1 rounded-full bg-white/20 text-white font-eyebrow text-eyebrow">INDIA HUB MAP</span>
    </div>
    
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#3F2C2E]/60 border border-white/15 flex items-center justify-center p-4">
    <ImagePlaceholder alt="India chapter map placeholder; verified organizational map pending." label="Map pending" className="bg-primary-container text-text-inverse opacity-85" />
    
    <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
    <div className="flex justify-end">
    <div className="bg-[#3F2C2E]/90 border border-border-subtle p-2.5 rounded-lg text-left backdrop-blur-sm shadow-md">
    <p className="text-xs font-semibold text-white">Central Operations Hub</p>
    <p className="text-[11px] text-[#E6C8B8]">New Delhi / NCR Region</p>
    </div>
    </div>
    <div className="flex justify-start">
    <div className="bg-[#3F2C2E]/90 border border-border-subtle p-2.5 rounded-lg text-left backdrop-blur-sm shadow-md">
    <p className="text-xs font-semibold text-white">Southern Expansion</p>
    <p className="text-[11px] text-[#CDD0D2]">Karnataka Chapter</p>
    </div>
    </div>
    </div>
    </div>
    <p className="text-center font-eyebrow text-eyebrow text-text-inverse/70 mt-4 tracking-wider">
                    [DATA STORE: FOUNDER AUDITED CHAPTER REGISTER 2024]
                  </p>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-16 md:py-24 px-space-lg md:px-margin max-w-7xl mx-auto" id="stories">
    <div className="max-w-3xl mx-auto text-center mb-12">
    <div className="inline-flex items-center gap-1.5 mb-2.5">
    <Icon name="format_quote" className="text-[16px] text-text-secondary" />
    <span className="font-eyebrow text-eyebrow tracking-widest text-text-secondary uppercase">Grassroots Voices</span>
    </div>
    <h2 className="font-headline-xl text-headline-xl text-primary font-bold">Voices from Our Community</h2>
    <p className="font-body-md text-body-md text-text-secondary mt-2">
              Genuine, unvarnished stories of growth and mutual empowerment from our fellowship participants.
            </p>
    </div>
    
    <div className="max-w-4xl mx-auto bg-surface-raised rounded-[24px] border border-border-subtle p-6 md:p-10 shadow-sm relative">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    
    <div className="md:col-span-5">
    <div className="relative rounded-2xl overflow-hidden aspect-square border border-border-subtle bg-surface-clay-soft">
    <ImagePlaceholder alt="Photo placeholder for the community participant story; approved participant image pending." />
    <div className="absolute bottom-3 left-3 bg-[#3F2C2E] text-white px-3 py-1 rounded-full text-xs font-medium">
                    Participant Voice
                  </div>
    </div>
    </div>
    
    <div className="md:col-span-7 flex flex-col justify-between space-y-6">
    <Icon name="format_quote" className="text-4xl text-border-subtle" />
    <blockquote className="font-headline-lg text-headline-md md:text-headline-lg text-primary italic leading-snug">
                  “The mentorship and community support helped me gain the confidence to pursue higher education and give back to my neighborhood.”
                </blockquote>
    <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
    <div>
    <p className="font-label-md text-label-md font-bold text-primary">Aarti Sharma</p>
    <p className="font-body-sm text-body-sm text-text-secondary">[Community Participant, New Delhi Chapter]</p>
    </div>
    <div className="flex items-center gap-2">
    <button aria-label="Previous story" className="h-9 w-9 rounded-full border border-border-subtle bg-surface-canvas hover:bg-surface-peach flex items-center justify-center transition-colors">
    <Icon name="arrow_back" className="text-[18px]" />
    </button>
    <button aria-label="Next story" className="h-9 w-9 rounded-full border border-border-subtle bg-surface-canvas hover:bg-surface-peach flex items-center justify-center transition-colors">
    <Icon name="arrow_forward" className="text-[18px]" />
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="py-16 md:py-24 bg-surface-peach/40 border-t border-border-subtle" id="volunteer">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="text-center max-w-2xl mx-auto mb-14">
    <span className="font-eyebrow text-eyebrow tracking-widest text-text-secondary uppercase">Take Action Today</span>
    <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary font-bold mt-2">
                Be a Part of the Change
              </h2>
    <p className="font-body-lg text-body-lg text-text-secondary mt-3">
                Whether through personal time, financial assistance, or organizational solidarity, every step fuels national progress.
              </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <div className="bg-surface-raised rounded-[22px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all duration-200">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-canvas flex items-center justify-center border border-border-subtle text-primary mb-6">
    <Icon name="group_add" className="text-2xl" />
    </div>
    <h3 className="font-headline-lg text-headline-lg font-bold text-primary mb-3">Volunteer</h3>
    <p className="font-body-md text-body-md text-text-secondary">
                    Lend your voice and hands to upcoming grassroots drives. Join weekend teaching sessions, tree planting, or relief distribution.
                  </p>
    </div>
    <div className="pt-8">
    <a className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#3F2C2E] text-text-inverse font-label-md text-label-md hover:bg-[#2F2022] transition-colors focus:ring-2 focus:ring-focus-ring" href="#contact">
                    Register as Volunteer
                  </a>
    </div>
    </div>
    
    <div className="bg-surface-raised rounded-[22px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all duration-200 ring-2 ring-[#3F2C2E]/10" id="donate">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-clay-soft flex items-center justify-center border border-border-subtle text-primary mb-6">
    <Icon name="volunteer_activism" className="text-2xl" />
    </div>
    <h3 className="font-headline-lg text-headline-lg font-bold text-primary mb-3">Donate</h3>
    <p className="font-body-md text-body-md text-text-secondary">
                    Directly fund student stationery kits, animal rescue medicine, and urban saplings with 100% transparent tracking.
                  </p>
    </div>
    <div className="pt-8">
    <a className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#8F6E64] text-text-inverse font-label-md text-label-md hover:bg-[#76574e] transition-colors focus:ring-2 focus:ring-focus-ring" href="#donate">
                    Support Our Work
                  </a>
    </div>
    </div>
    
    <div className="bg-surface-raised rounded-[22px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all duration-200" id="contact">
    <div>
    <div className="h-12 w-12 rounded-full bg-surface-canvas flex items-center justify-center border border-border-subtle text-primary mb-6">
    <Icon name="handshake" className="text-2xl" />
    </div>
    <h3 className="font-headline-lg text-headline-lg font-bold text-primary mb-3">Partner With Us</h3>
    <p className="font-body-md text-body-md text-text-secondary">
                    Collaborate with college societies, CSR programs, and civic groups to co-create sustainable city-level interventions.
                  </p>
    </div>
    <div className="pt-8">
    <a className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent border border-text-primary text-text-primary font-label-md text-label-md hover:bg-surface-canvas transition-colors focus:ring-2 focus:ring-focus-ring" href={CONTACT_INFO.emailHref}>
                    Get in Touch
                  </a>
    </div>
    </div>
    </div>
    </div>
    </section>
    </main>
  );
}
