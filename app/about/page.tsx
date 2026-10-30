import Image from 'next/image';
import Icon from '@/components/Icon';

export default function AboutPage() {
  return (
    <main className="w-full">
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin pt-12 md:pt-16 pb-16 md:pb-20">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
    
    <div className="lg:col-span-7 flex flex-col items-start space-y-6">
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-raised border border-border-subtle shadow-sm">
    <Icon name="footprint" className="material-symbols-outlined text-primary text-base" />
    <span className="font-eyebrow text-eyebrow text-text-secondary">ABOUT KADAM FOUNDATION • YOUTH-LED NONPROFIT</span>
    </div>
    <h1 className="font-display-lg-mobile md:font-display-xl text-display-lg-mobile md:text-display-xl text-text-primary tracking-tight">
                Young Steps Towards a Better Tomorrow
              </h1>
    <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl leading-relaxed">
                Kadam Foundation mobilizes collective youth leadership to spark sustainable grassroots change across marginalized communities and underserved regions in India. We bridge empathy with civic action, proving that collegiate energy and community trust can dismantle systemic vulnerabilities step by step.
              </p>
    <div className="flex flex-wrap items-center gap-4 pt-2">
    <a className="bg-primary-container text-text-inverse font-label-md text-label-md font-semibold px-6 py-3 rounded-full hover:bg-action-hover transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring flex items-center gap-2 group" href="#approach">
    <span>Explore Our Approach</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform" />
    </a>
    <a className="bg-transparent border border-border-subtle text-text-primary font-label-md text-label-md font-semibold px-6 py-3 rounded-full hover:bg-surface-raised transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#story">
                  Read Our Story
                </a>
    </div>
    <div className="flex items-center gap-4 pt-4 text-text-secondary font-label-md text-label-md">
    <div className="flex -space-x-2">
    <span className="w-8 h-8 rounded-full bg-surface-clay-soft border-2 border-surface-canvas flex items-center justify-center font-bold text-xs text-text-primary">300+</span>
    <span className="w-8 h-8 rounded-full bg-surface-olive-soft border-2 border-surface-canvas flex items-center justify-center font-bold text-xs text-text-primary">50</span>
    <span className="w-8 h-8 rounded-full bg-surface-lilac-soft border-2 border-surface-canvas flex items-center justify-center font-bold text-xs text-text-primary">1k</span>
    </div>
    <span>Ground-level youth network across Indian universities</span>
    </div>
    </div>
    
    <div className="lg:col-span-5">
    <div className="relative rounded-3xl overflow-hidden border border-border-subtle bg-surface-raised p-2 shadow-sm">
    <div className="rounded-2xl overflow-hidden relative aspect-[4/5] bg-surface-clay-soft">
    <Image
      src="/images/about/about-planning-photo.jpg"
      alt="Kadam Foundation team gathered for a community planning activity"
      fill
      sizes="(min-width: 1024px) 40vw, 100vw"
      className="object-cover"
    />
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full bg-surface-raised border-y border-border-subtle py-16 md:py-24" id="story">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="flex flex-col mb-12">
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">ORIGIN &amp; JOURNEY</span>
    <h2 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-text-primary mt-2">
                Kadam Foundation: One Step That Travelled Miles
              </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    
    <div className="lg:col-span-7 space-y-6">
    <p className="font-body-lg text-body-lg text-text-primary leading-relaxed">
                  On 20 March 2020, I saw children near my home searching for food in a dustbin. I went downstairs and brought them food from my own home. When I asked if they went to school, they told me they did not.
                </p>
    <blockquote className="rounded-xl border-l-4 border-primary-container bg-surface-canvas p-5">
    <p className="font-headline-md text-headline-md font-semibold text-text-primary">
                  “Didi, bhookh lagi hai. Humne kuch nahi khaya.”
                </p>
    <p className="mt-2 font-body-sm text-body-sm italic text-text-secondary">
                  “Sister, we are hungry. We haven&apos;t eaten anything.”
                </p>
    <p className="mt-4 border-t border-border-subtle pt-4 font-body-sm text-body-sm text-text-secondary">
                  When I asked whether they went to school, they said, “Hum school nahi jaate” — “We don&apos;t go to school.”
                </p>
    </blockquote>
    <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  I was a schoolgirl myself, with no organisation, team, funding, or roadmap. But I could not let that encounter become just a memory. On 21 March 2020, Kadam began.
                </p>
    
    <div className="mt-8 space-y-6 border-l-2 border-border-subtle pl-6">
    <div className="relative">
    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-text-primary"></span>
    <span className="font-headline-md text-headline-md font-semibold text-text-primary">21 March 2020: Barande Wali Kaksha</span>
    <p className="font-body-sm text-body-sm text-text-secondary mt-1">
                      I started a classroom in our veranda with 10 children. We began with the space and resources we had.
                    </p>
    </div>
    <div className="relative">
    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-secondary"></span>
    <span className="font-headline-md text-headline-md font-semibold text-text-primary">2022: Beyond the Original Veranda</span>
    <p className="font-body-sm text-body-sm text-text-secondary mt-1">
                      I moved away from the original location and began thinking about children in other communities. Kadam gradually expanded beyond Bhopal as volunteers and others joined the effort.
                    </p>
    </div>
    </div>
    </div>
    
    <div className="lg:col-span-5">
    <div className="clay-grain rounded-2xl border border-border-subtle p-7 text-text-inverse shadow-sm md:p-9">
    <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-surface-peach">A Small Beginning</span>
    <p className="mt-5 font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
                  “I could not simply stand there and watch.”
                </p>
    <p className="mt-5 font-body-md text-body-md text-text-inverse/90">
                  I started with what I had, where I was: a classroom in our veranda and 10 children ready to learn.
                </p>
    <div className="mt-8 border-t border-white/20 pt-5">
    <p className="font-label-md text-label-md font-semibold">Prachi Dwivedi</p>
    <p className="mt-1 font-body-sm text-body-sm text-text-inverse/80">Founder &amp; Director</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin py-16 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div className="bg-surface-raised rounded-2xl border border-border-subtle p-8 md:p-10 shadow-sm flex flex-col justify-between">
    <div>
    <div className="w-12 h-12 rounded-full bg-surface-clay-soft border border-border-subtle flex items-center justify-center text-text-primary mb-6">
    <Icon name="volunteer_activism" className="material-symbols-outlined text-2xl" filled style={{ fontVariationSettings: '\'FILL\' 1' }} />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">CORE PURPOSE</span>
    <h3 className="font-headline-xl text-headline-xl text-text-primary mt-1 mb-4">Our Mission</h3>
    <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
                  To empower grassroots communities through youth-led initiatives in education, ecological action, and social welfare—building transparent, decentralized models of empathy and self-reliance that foster generational dignity.
                </p>
    </div>
    <div className="mt-8 pt-6 border-t border-border-subtle/60 flex items-center gap-2 text-text-primary font-label-md text-label-md">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-lg" />
    <span>Empathetic, youth-governed, and participatory</span>
    </div>
    </div>
    
    <div className="bg-surface-raised rounded-2xl border border-border-subtle p-8 md:p-10 shadow-sm flex flex-col justify-between">
    <div>
    <div className="w-12 h-12 rounded-full bg-surface-peach border border-border-subtle flex items-center justify-center text-text-primary mb-6">
    <Icon name="wb_twilight" className="material-symbols-outlined text-2xl" filled style={{ fontVariationSettings: '\'FILL\' 1' }} />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">HORIZON GOAL</span>
    <h3 className="font-headline-xl text-headline-xl text-text-primary mt-1 mb-4">Our Vision</h3>
    <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed">
                  A resilient, equitable India where every young citizen possesses the agency, resources, and civic platform to uplift their neighborhood and build a dignified future for all, free from systemic neglect and ecological degradation.
                </p>
    </div>
    <div className="mt-8 pt-6 border-t border-border-subtle/60 flex items-center gap-2 text-text-primary font-label-md text-label-md">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-lg" />
    <span>Nationwide youth empowerment for sustainable progress</span>
    </div>
    </div>
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin pb-16 md:pb-24">
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">GUIDING ETHOS</span>
    <h2 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-text-primary mt-2">
              Values Rooted in Grassroots Dignity
            </h2>
    <p className="font-body-md text-body-md text-text-secondary mt-3">
              Our guiding principles keep us firmly tethered to ground realities, preventing youth idealism from detaching from practical community realities.
            </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div className="bg-surface-raised border border-border-subtle rounded-2xl p-7 shadow-sm transition-all hover:shadow-md">
    <div className="w-11 h-11 rounded-xl bg-surface-canvas border border-border-subtle flex items-center justify-center text-text-primary mb-5">
    <Icon name="diversity_3" className="material-symbols-outlined text-2xl" />
    </div>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mb-2">1. Inclusion</h4>
    <p className="font-body-md text-body-md text-text-secondary">
                Unconditional access for every marginalized group and vulnerable voice. We construct spaces where background or economic status never dictates human value.
              </p>
    </div>
    
    <div className="bg-surface-clay-soft border border-border-subtle rounded-2xl p-7 shadow-sm transition-all hover:shadow-md">
    <div className="w-11 h-11 rounded-xl bg-surface-canvas border border-border-subtle flex items-center justify-center text-text-primary mb-5">
    <Icon name="favorite_border" className="material-symbols-outlined text-2xl" />
    </div>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mb-2">2. Compassion</h4>
    <p className="font-body-md text-body-md text-text-primary">
                Ground-level empathy that listens deeply before acting. We believe genuine aid is born out of shared respect rather than condescending charity.
              </p>
    </div>
    
    <div className="bg-surface-blue-soft border border-border-subtle rounded-2xl p-7 shadow-sm transition-all hover:shadow-md">
    <div className="w-11 h-11 rounded-xl bg-surface-canvas border border-border-subtle flex items-center justify-center text-text-primary mb-5">
    <Icon name="psychology" className="material-symbols-outlined text-2xl" />
    </div>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mb-2">3. Empowerment</h4>
    <p className="font-body-md text-body-md text-text-primary">
                Equipping youth and communities with lasting skills and autonomous agency. Sustainable transformation occurs when communities steer their own progress.
              </p>
    </div>
    
    <div className="bg-surface-olive-soft border border-border-subtle rounded-2xl p-7 shadow-sm transition-all hover:shadow-md">
    <div className="w-11 h-11 rounded-xl bg-surface-canvas border border-border-subtle flex items-center justify-center text-text-primary mb-5">
    <Icon name="eco" className="material-symbols-outlined text-2xl" />
    </div>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mb-2">4. Sustainability</h4>
    <p className="font-body-md text-body-md text-text-primary">
                Ecological mindfulness and generational continuity. Every initiative is assessed for environmental longevity and circular resource management.
              </p>
    </div>
    
    <div className="bg-surface-lilac-soft border border-border-subtle rounded-2xl p-7 shadow-sm transition-all hover:shadow-md md:col-span-2 lg:col-span-1">
    <div className="w-11 h-11 rounded-xl bg-surface-canvas border border-border-subtle flex items-center justify-center text-text-primary mb-5">
    <Icon name="handshake" className="material-symbols-outlined text-2xl" />
    </div>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mb-2">5. Community</h4>
    <p className="font-body-md text-body-md text-text-primary">
                Transparent, collective solidarity that belongs to the people. We remain entirely accountable to the volunteers who labor and the families we stand with.
              </p>
    </div>
    </div>
    </section>
    
    <section className="w-full bg-surface-raised border-y border-border-subtle py-16 md:py-24" id="approach">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="flex flex-col mb-14">
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">HOW WE WORK</span>
    <h2 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-text-primary mt-2">
                A Three-Pillar Methodology for Lasting Change
              </h2>
    <p className="font-body-lg text-body-lg text-text-secondary max-w-3xl mt-3">
                Sustainable transformation requires structured continuity. Our operations unite academic inquiry with boots-on-the-ground volunteer mobilization.
              </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div className="bg-surface-canvas border border-border-subtle rounded-2xl p-8 flex flex-col justify-between shadow-sm">
    <div>
    <span className="font-eyebrow text-eyebrow text-text-secondary block mb-3">PILLAR 01</span>
    <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-3">Education &amp; Awareness</h3>
    <p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-6">
                    Experiential workshops, evening remedial learning centers, mentorship circles, and foundational skill building for underprivileged children and youth in municipal and peri-urban wards.
                  </p>
    </div>
    <ul className="space-y-2 border-t border-border-subtle pt-4 text-sm text-text-primary font-body-sm">
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Weekend learning camps</span>
    </li>
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Foundational stationery drives</span>
    </li>
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Adolescent digital literacy</span>
    </li>
    </ul>
    </div>
    
    <div className="bg-surface-canvas border border-border-subtle rounded-2xl p-8 flex flex-col justify-between shadow-sm">
    <div>
    <span className="font-eyebrow text-eyebrow text-text-secondary block mb-3">PILLAR 02</span>
    <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-3">Youth Participation</h3>
    <p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-6">
                    Collegiate chapters, localized fellowship pods, and active youth leadership circles giving young changemakers real civic ownership and actionable governance experience.
                  </p>
    </div>
    <ul className="space-y-2 border-t border-border-subtle pt-4 text-sm text-text-primary font-body-sm">
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Campus fellowship networks</span>
    </li>
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Civic leadership bootcamps</span>
    </li>
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Decentralized pod autonomy</span>
    </li>
    </ul>
    </div>
    
    <div className="bg-surface-canvas border border-border-subtle rounded-2xl p-8 flex flex-col justify-between shadow-sm">
    <div>
    <span className="font-eyebrow text-eyebrow text-text-secondary block mb-3">PILLAR 03</span>
    <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-3">Community Action</h3>
    <p className="font-body-md text-body-md text-text-secondary leading-relaxed mb-6">
                    On-ground direct drives, ecological tree-planting cleanups, animal welfare emergency interventions, winter blanket distributions, and women's self-reliance solidarity circles.
                  </p>
    </div>
    <ul className="space-y-2 border-t border-border-subtle pt-4 text-sm text-text-primary font-body-sm">
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Direct frontline relief</span>
    </li>
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Stray feeding &amp; medical triage</span>
    </li>
    <li className="flex items-center gap-2">
    <Icon name="check" className="material-symbols-outlined text-xs text-status-success" />
    <span>Urban sapling afforestation</span>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin my-12">
    <div className="bg-[#8F6E64] text-text-inverse rounded-3xl p-8 md:p-14 shadow-md border border-border-subtle">
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
    <span className="font-eyebrow text-eyebrow text-surface-peach uppercase tracking-widest">VERIFIED GRASSROOTS FOOTPRINT</span>
    <h2 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-text-inverse mt-2">
                Accountability and Grounded Outcomes
              </h2>
    <p className="font-body-md text-body-md text-surface-raised/90 mt-3">
                Every statistic represents a face, a family, or an urban ecosystem touched by youth solidarity. We maintain founder-confirmed metrics verified by ground logs.
              </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-surface-peach/20">
    <div className="pt-6 md:pt-0 md:px-6">
    <span className="font-display-xl text-display-xl text-surface-peach font-bold block mb-1">300+</span>
    <span className="font-headline-md text-headline-md text-text-inverse font-semibold block mb-2">Active Volunteers</span>
    <p className="font-body-sm text-body-sm text-surface-raised/80">Across collegiate chapters, regional coordinator councils, and local city hubs.</p>
    </div>
    <div className="pt-6 md:pt-0 md:px-6">
    <span className="font-display-xl text-display-xl text-surface-peach font-bold block mb-1">15</span>
    <span className="font-headline-md text-headline-md text-text-inverse font-semibold block mb-2">Cities Reached</span>
    <p className="font-body-sm text-body-sm text-surface-raised/80">Grassroots mobilization, municipal drives, and youth engagement clusters in India.</p>
    </div>
    <div className="pt-6 md:pt-0 md:px-6">
    <span className="font-display-xl text-display-xl text-surface-peach font-bold block mb-1">1,000+</span>
    <span className="font-headline-md text-headline-md text-text-inverse font-semibold block mb-2">Lives Impacted</span>
    <p className="font-body-sm text-body-sm text-surface-raised/80">Direct beneficiaries of child education, emergency relief, and community welfare programs.</p>
    </div>
    </div>
    
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin py-16 md:py-20">
    <div className="flex flex-col mb-12">
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">OUR LEADERSHIP</span>
    <h2 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-text-primary mt-2">
              Stewards of the Vision
            </h2>
    <p className="font-body-md text-body-md text-text-secondary max-w-2xl mt-2">
              Central leadership for Kadam Foundation.
            </p>
    </div>
    
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <article className="bg-surface-raised border border-border-subtle rounded-2xl p-5 shadow-sm">
    <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-surface-clay-soft">
    <Image
      src="/images/leadership/founder.jpg"
      alt="Prachi Dwivedi, Founder of Kadam Foundation"
      fill
      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      className="object-cover"
    />
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">FOUNDER</span>
    <h3 className="font-headline-md text-headline-md text-text-primary font-semibold mt-1">Prachi Dwivedi</h3>
    </article>

    <article className="bg-surface-raised border border-border-subtle rounded-2xl p-5 shadow-sm">
    <div className="mb-4 flex aspect-square items-center justify-center rounded-xl bg-surface-clay-soft text-text-secondary" role="img" aria-label="Director portrait pending">
    <div className="flex flex-col items-center gap-2">
    <Icon name="diversity_1" className="text-4xl" />
    <span className="font-eyebrow text-eyebrow uppercase">Portrait Pending</span>
    </div>
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">DIRECTOR</span>
    <h3 className="font-headline-md text-headline-md text-text-primary font-semibold mt-1">Dr. Pradeep Dwivedi</h3>
    <p className="mt-2 font-body-sm text-body-sm text-text-secondary">Portrait pending</p>
    </article>

    <article className="bg-surface-raised border border-border-subtle rounded-2xl p-5 shadow-sm">
    <div className="mb-4 flex aspect-square items-center justify-center rounded-xl bg-surface-clay-soft text-text-secondary" role="img" aria-label="Director portrait pending">
    <div className="flex flex-col items-center gap-2">
    <Icon name="diversity_1" className="text-4xl" />
    <span className="font-eyebrow text-eyebrow uppercase">Portrait Pending</span>
    </div>
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">DIRECTOR</span>
    <h3 className="font-headline-md text-headline-md text-text-primary font-semibold mt-1">Mrs. Shachi Dwivedi</h3>
    <p className="mt-2 font-body-sm text-body-sm text-text-secondary">Portrait pending</p>
    </article>
    </div>
    
    </section>
    
    <section className="w-full bg-surface-peach/50 border-t border-border-subtle py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="text-center max-w-2xl mx-auto mb-12">
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">GET INVOLVED</span>
    <h2 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-text-primary mt-2">
                Be a Part of the Change
              </h2>
    <p className="font-body-lg text-body-lg text-text-secondary mt-3">
                Whether through your time as a youth volunteer, community partnerships, or financial solidarity, every step helps build a resilient nation.
              </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <div className="bg-surface-raised rounded-2xl border border-border-subtle p-8 flex flex-col justify-between shadow-sm">
    <div>
    <div className="w-10 h-10 rounded-full bg-surface-clay-soft flex items-center justify-center text-text-primary mb-4">
    <Icon name="groups" className="material-symbols-outlined text-xl" />
    </div>
    <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-2">Volunteer</h3>
    <p className="font-body-md text-body-md text-text-secondary mb-6">
                    Join upcoming grassroots drives and collegiate fellowship chapters. Lend your voice, hours, and passion to frontline projects.
                  </p>
    </div>
    <a className="bg-primary-container text-text-inverse font-label-md text-label-md font-semibold px-6 py-3 rounded-full hover:bg-action-hover transition-colors text-center shadow-sm" href="#">
                  Join as Volunteer
                </a>
    </div>
    
    <div className="bg-surface-raised rounded-2xl border border-border-subtle p-8 flex flex-col justify-between shadow-sm">
    <div>
    <div className="w-10 h-10 rounded-full bg-surface-blue-soft flex items-center justify-center text-text-primary mb-4">
    <Icon name="menu_book" className="material-symbols-outlined text-xl" />
    </div>
    <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-2">Explore Programs</h3>
    <p className="font-body-md text-body-md text-text-secondary mb-6">
                    Learn more about our 5 focus pillars, on-ground educational syllabus, and localized village interventions.
                  </p>
    </div>
    <a className="bg-transparent border border-text-primary text-text-primary font-label-md text-label-md font-semibold px-6 py-3 rounded-full hover:bg-surface-canvas transition-colors text-center" href="#">
                  Explore Programs
                </a>
    </div>
    
    <div className="bg-surface-raised rounded-2xl border border-border-subtle p-8 flex flex-col justify-between shadow-sm">
    <div>
    <div className="w-10 h-10 rounded-full bg-surface-olive-soft flex items-center justify-center text-text-primary mb-4">
    <Icon name="payments" className="material-symbols-outlined text-xl" />
    </div>
    <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-2">Donate</h3>
    <p className="font-body-md text-body-md text-text-secondary mb-6">
                    Support student stationery kits, rescue medicine, and sapling drives with 100% transparent tracking and digital receipts.
                  </p>
    </div>
    <a className="bg-primary-container text-text-inverse font-label-md text-label-md font-semibold px-6 py-3 rounded-full hover:bg-action-hover transition-colors text-center shadow-sm" href="#">
                  Make a Donation
                </a>
    </div>
    </div>
    </div>
    </section>
    </main>
  );
}
