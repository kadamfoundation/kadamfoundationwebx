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
    <img className="w-full h-full object-cover" data-alt="A warm, authentic editorial documentary photograph showing young Indian youth volunteers collaborating warmly with village elders and young students under a banyan tree. The scene is illuminated by soft late-afternoon golden sunlight with a warm terracotta and sun-baked peach palette. The mood is empathetic, respectful, and deeply grounded in grassroots community service." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj9UkuaNxxsHujBCt0zT0HkowXeWSuTV8Frwr5o0o6pQ-Dp708jbU6I2G3nD_C9H0liwbIDlR_QdU-ct9dXFDg7ZxgOgtHxjmVErbKK2xgLaOjNwRrMtKhzB69HR6TcGiDJdubNRPlKzjO1LUzTSSqmphVRvG0Dykd-8GeVp8w2Y8P2ZmBWWZuJKqifbi_nT3egjYhPJXDAhpbk7Y5vbxp28TeQSdqFkVizNE7KRBIlt9kN81rmm6p"/>
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent p-6 text-text-inverse">
    <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-surface-peach">Grassroots Field Log</span>
    <p className="font-headline-md text-headline-md font-semibold mt-1">Community Fellowship in Action</p>
    <p className="font-body-sm text-body-sm text-surface-raised/90 mt-1">Youth volunteers facilitating decentralized learning circles in rural peri-urban centers.</p>
    </div>
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
                From College Campuses to Community Action
              </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    
    <div className="lg:col-span-7 space-y-6">
    <p className="font-body-lg text-body-lg text-text-primary leading-relaxed">
                  Kadam Foundation was ignited by university students who looked past academic theory and saw pressing societal needs in their immediate neighborhoods. What began as emergency relief drives, student-led stationary distributions, and stray animal vaccinations soon crystallized into an enduring grassroots youth movement.
                </p>
    <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
                  Recognizing that localized communities understand their challenges best, we eschewed top-down paternalism. Instead, we established autonomous youth pods that work alongside village panchayats, informal basti committees, and school heads to build resilient, community-owned solutions.
                </p>
    
    <div className="mt-10 space-y-6 border-l-2 border-border-subtle pl-6">
    <div className="relative">
    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-text-primary"></span>
    <div className="flex items-center gap-2">
    <span className="font-headline-md text-headline-md font-semibold text-text-primary">2021: Grassroots Inception</span>
    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-peach text-text-primary border border-border-subtle">Founder Verified Origin</span>
    </div>
    <p className="font-body-sm text-body-sm text-text-secondary mt-1">
                      First cohort of passionate university students mobilized localized flood relief and emergency winter clothing drives in Northern India.
                    </p>
    </div>
    <div className="relative">
    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-secondary"></span>
    <span className="font-headline-md text-headline-md font-semibold text-text-primary">2022: Expanding Beyond Borders</span>
    <p className="font-body-sm text-body-sm text-text-secondary mt-1">
                      Establishment of collegiate volunteer pods spanning 12 higher education institutions, expanding into weekly remedial teaching programs.
                    </p>
    </div>
    <div className="relative">
    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-status-success"></span>
    <span className="font-headline-md text-headline-md font-semibold text-text-primary">2023: Institutional Recognition</span>
    <p className="font-body-sm text-body-sm text-text-secondary mt-1">
                      Formal adoption of the 5-pillar grassroots operational framework and initial formal registry under the Indian Societies Registration Act.
                    </p>
    </div>
    <div className="relative">
    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-primary-container"></span>
    <span className="font-headline-md text-headline-md font-semibold text-text-primary">2024: Nationwide Movement</span>
    <p className="font-body-sm text-body-sm text-text-secondary mt-1">
                      Active footprint crossing 50 cities, delivering integrated interventions across basic literacy, environmental stewardship, and emergency animal rescue.
                    </p>
    </div>
    </div>
    </div>
    
    <div className="lg:col-span-5">
    <div className="bg-surface-canvas rounded-2xl border border-border-subtle p-5 shadow-sm">
    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-surface-clay-soft relative">
    <img className="w-full h-full object-cover" data-alt="A candid photojournalism image depicting Indian university students in simple volunteer t-shirts conducting a community meeting with local women in a village square. Natural warm sunlight filters through earthenware tiles, illuminating notes, sketchpads, and handmade posters. The mood is honest, hopeful, and focused on collective decision-making." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBa7-_BtXkDSCWrYW2EsLCO-oFwI94avcN7JjBhbdCBvumMc6goXJahDnfxACaSgD0CKeJFrDUu6Z2Q4S0_LTOaFSoEoK5T6wtAL7nfmM8FViwNuKSiz05xim4UBQvrJCcZCZc5AamZHGy-5gyj42Cei_EwNlUekA7NriqCTovdSDJA4JTpdw6kxhsgr7AcFPupoHzX4OT6e3sgjyfnLoJH8SUNAFw5SKqiNZUnM2LXTG41z0uDJkP"/>
    <div className="absolute top-3 left-3 bg-primary-container/85 text-text-inverse px-3 py-1 rounded-full text-xs font-mono">
                      [FIELD ARCHIVE: COMMUNITY OUTREACH CAMPAIGN]
                    </div>
    </div>
    <div className="mt-4">
    <h4 className="font-headline-md text-headline-md font-semibold text-text-primary">Participatory Grassroots Planning</h4>
    <p className="font-body-sm text-body-sm text-text-secondary mt-1">
                      Field volunteers coordinate with local neighborhood representatives before launching ecological sapling drives and student stationery supply pods.
                    </p>
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
    <span className="font-display-xl text-display-xl text-surface-peach font-bold block mb-1">50</span>
    <span className="font-headline-md text-headline-md text-text-inverse font-semibold block mb-2">Cities Reached</span>
    <p className="font-body-sm text-body-sm text-surface-raised/80">Grassroots mobilization, municipal drives, and youth engagement clusters in India.</p>
    </div>
    <div className="pt-6 md:pt-0 md:px-6">
    <span className="font-display-xl text-display-xl text-surface-peach font-bold block mb-1">1,000+</span>
    <span className="font-headline-md text-headline-md text-text-inverse font-semibold block mb-2">Lives Impacted</span>
    <p className="font-body-sm text-body-sm text-surface-raised/80">Direct beneficiaries of child education, emergency relief, and community welfare programs.</p>
    </div>
    </div>
    
    <div className="mt-12 pt-8 border-t border-surface-peach/20 text-center flex flex-col md:flex-row items-center justify-center gap-3 text-surface-raised/90 text-sm">
    <Icon name="verified" className="material-symbols-outlined text-surface-peach text-base" />
    <span className="font-body-sm">
                Independent 2024 Grassroots Audit • Founder Verified Registry. We track every volunteer hour and community intervention with full financial and operational transparency.
              </span>
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
              Guided by youth leaders, community organizers, and advisory mentors dedicated to collective impact and operational integrity.
            </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="bg-surface-raised border border-border-subtle rounded-2xl p-5 shadow-sm flex flex-col">
    <div className="rounded-xl overflow-hidden aspect-square bg-surface-clay-soft mb-4 relative">
    <img className="w-full h-full object-cover" data-alt="A dignified, warm black and white portrait of an Indian youth activist leader dressed in simple handloom attire, captured against a clean neutral paper background with soft ambient studio lighting. The expression is thoughtful, empathetic, and resolved." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBISA6UzUF5Xsr511cvVbQXwzw3gX1xidbQN22XuPzisVQd-HdCnRhtE9J5a4EfEmM3UwDS7BkooyUcc-oydFfpw4ek688o6ve61cH2Su6vazeEjejO_bgJaXyatEdZlUkYojIApfq_Aaw9Y_qkpX96Zds61LN--Y3TMTLrRShuaxCm_jajtrATvsK8q-NIWIy40ahpVvJg2_WS8gw7ju9AnPkXM3OvN6dMAP2kxOxyAdnepySahCB_"/>
    <div className="absolute bottom-2 left-2 bg-primary-container/90 text-text-inverse px-2 py-0.5 rounded text-[10px] font-mono">
                  [CONFIRMED ROLE]
                </div>
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">LEADERSHIP COUNCIL</span>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mt-1">Founder &amp; Executive Director</h4>
    <p className="font-body-sm text-body-sm text-text-secondary mt-2 flex-grow">
                [Placeholder: Founder Profile awaiting final bio confirmation for public archive]. Steers overall strategic direction and youth mobilization partnerships.
              </p>
    <div className="mt-4 pt-3 border-t border-border-subtle/60 text-xs text-text-secondary flex items-center justify-between">
    <span>Executive Committee</span>
    <Icon name="badge" className="material-symbols-outlined text-sm" />
    </div>
    </div>
    
    <div className="bg-surface-raised border border-border-subtle rounded-2xl p-5 shadow-sm flex flex-col">
    <div className="rounded-xl overflow-hidden aspect-square bg-surface-peach mb-4 relative">
    <img className="w-full h-full object-cover" data-alt="A natural documentary portrait of a young Indian woman community organizer holding field clipboards outdoors in a sunlit courtyard. Warm natural daylight with a soft terracotta wash background. The portrait conveys approachable authority and ground-level energy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRSo0uA7MsNWwwk-y2j_C4ydh_wxUjFmnGUfd7aFQPesQmoiiKPWJpq0sl4Zk_9eqtqzp7g06GfJ5C3P3_hL3BaluBZtNbe8BSyYDv59oYW9tQk-3nUze1SLiOK1Zi5i3mTUwyAzWob46r-7k3OvO3nH7u2C-dJcawk_PWFistUez7JE22tso9EB2i8XruIAZXsY-iFIDLItYMbUy1-SrBpHXObuyPrCQvusl6j0shpJ5XOtOBos6B"/>
    <div className="absolute bottom-2 left-2 bg-primary-container/90 text-text-inverse px-2 py-0.5 rounded text-[10px] font-mono">
                  [EDITORIAL ROLE]
                </div>
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">OPERATIONS</span>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mt-1">Head of Grassroots Operations</h4>
    <p className="font-body-sm text-body-sm text-text-secondary mt-2 flex-grow">
                [Placeholder: Regional Chapter Director]. Coordinates 50 city pods, volunteer safety standards, and regional supply chain logistics during emergency relief.
              </p>
    <div className="mt-4 pt-3 border-t border-border-subtle/60 text-xs text-text-secondary flex items-center justify-between">
    <span>Field Management</span>
    <Icon name="hub" className="material-symbols-outlined text-sm" />
    </div>
    </div>
    
    <div className="bg-surface-raised border border-border-subtle rounded-2xl p-5 shadow-sm flex flex-col">
    <div className="rounded-xl overflow-hidden aspect-square bg-surface-olive-soft mb-4 relative">
    <img className="w-full h-full object-cover" data-alt="An authentic headshot of a collegiate youth educator smiling warmly, standing in an outdoor community library space with books visible in the soft background blur. Soft natural light, warm beige tones, and a genuine, inspiring presence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnnzyIWpRme9XVHSSDV1hU5by1teP9EQZc8AS7RM_IlIT7x-7zls9MkyX8z0EZ4OfDpVlWsFoT291yYaMCFgUy5c6mxWvmDALo9mompefMHB48qP-QPV1vOX07BA810sGAByksm77Hg9JpXXpdOBuAp8-ECg9QS2sn6ocy_1ks5yRjzZtBdX08xg9Uho9T04T_jIC3n5T1XfW8FqNPyZCCVY_Zi6xzNOsA1BWJjVGXtc_XoOL1NCCZ"/>
    <div className="absolute bottom-2 left-2 bg-primary-container/90 text-text-inverse px-2 py-0.5 rounded text-[10px] font-mono">
                  [EDITORIAL ROLE]
                </div>
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">PROGRAMS</span>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mt-1">Director of Community Programs</h4>
    <p className="font-body-sm text-body-sm text-text-secondary mt-2 flex-grow">
                [Placeholder: Education &amp; Women Welfare Lead]. Curates the literacy curriculum and monitors holistic community metrics across informal education centers.
              </p>
    <div className="mt-4 pt-3 border-t border-border-subtle/60 text-xs text-text-secondary flex items-center justify-between">
    <span>Curriculum &amp; Impact</span>
    <Icon name="auto_stories" className="material-symbols-outlined text-sm" />
    </div>
    </div>
    
    <div className="bg-surface-raised border border-border-subtle rounded-2xl p-5 shadow-sm flex flex-col">
    <div className="rounded-xl overflow-hidden aspect-square bg-surface-lilac-soft mb-4 relative">
    <img className="w-full h-full object-cover" data-alt="A portrait of a senior Indian mentor and legal advisor in an office setting surrounded by architectural and social research books. Warm neutral lighting, thoughtful and reassuring demeanor, emphasizing governance and institutional guidance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJZ9fLQBASafb3d09dOYq-_4WyIeakitI12Lkh1dLLYE0Nzl3sdzPHD1hW6KVQ4YI53oamL2w_DBC6c-rfqVlaKy46ZbxVbxfAezNg0vHlS75MOH0dIzkL3QWW67m4KjUVcX7Amzf3ptHFpeInTReRVn5lgcgqc0X_JSw1aD6dmNUiP8l81Yps4th_Pvwj-cWiWqNepfml3MGUaXbwdp2b0MNHJXJO50So1_W8NcCrm1yBexA-tnDN"/>
    <div className="absolute bottom-2 left-2 bg-primary-container/90 text-text-inverse px-2 py-0.5 rounded text-[10px] font-mono">
                  [GOVERNANCE]
                </div>
    </div>
    <span className="font-eyebrow text-eyebrow text-text-secondary uppercase">ADVISORY</span>
    <h4 className="font-headline-md text-headline-md text-text-primary font-semibold mt-1">Advisory Mentor &amp; Governance</h4>
    <p className="font-body-sm text-body-sm text-text-secondary mt-2 flex-grow">
                [Placeholder: Civic Strategy &amp; Legal Advisor]. Provides institutional oversight, compliance auditing, and long-term legal sustainability mentorship.
              </p>
    <div className="mt-4 pt-3 border-t border-border-subtle/60 text-xs text-text-secondary flex items-center justify-between">
    <span>Governance Council</span>
    <Icon name="gavel" className="material-symbols-outlined text-sm" />
    </div>
    </div>
    </div>
    
    <div className="mt-8 p-4 rounded-xl bg-surface-raised border border-border-subtle flex items-center gap-3 text-text-secondary text-sm">
    <Icon name="info" className="material-symbols-outlined text-primary text-base" />
    <span>Notice: Full governance council and coordinator registry available in our annual transparency report and registered society filings.</span>
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
