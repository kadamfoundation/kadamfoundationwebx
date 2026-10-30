import Icon from '@/components/Icon';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function StoriesPage() {
  return (
    <main className="flex-grow">
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin pt-12 md:pt-16 pb-12 border-b border-border-subtle">
    <div className="max-w-3xl">
    
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-clay-soft text-text-primary font-eyebrow text-eyebrow uppercase mb-5 border border-border-subtle">
    <Icon name="menu_book" className="material-symbols-outlined text-[16px]" />
    <span>GRASSROOTS CHRONICLES &amp; IMPACT</span>
    </div>
    
    <h1 className="font-display-lg md:font-display-xl text-display-lg md:text-display-xl text-text-primary tracking-tight mb-6">
              Stories of Change
            </h1>
    
    <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed mb-6">
              Participatory community documentation from the ground: capturing unvarnished, authentic moments of youth action, community resilience, and shared dignity across India. Every log reflects regular field footprints by dedicated fellows and neighborhood volunteers.
            </p>
    
    <div className="flex items-start sm:items-center gap-2.5 text-text-secondary bg-surface-raised px-4 py-2.5 rounded-lg border border-border-subtle w-fit text-body-sm font-body-sm">
    <Icon name="verified_user" className="material-symbols-outlined text-status-success text-lg flex-shrink-0" filled />
    <span>All stories, media, and quotes adhere to strict beneficiary safeguarding and consent protocols.</span>
    </div>
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin py-12 md:py-16">
    <article className="bg-surface-raised border border-border-subtle rounded-[22px] overflow-hidden shadow-sm">
    <div className="border-b border-border-subtle bg-surface-clay-soft/40 px-6 py-7 md:px-10 md:py-9">
    <div className="flex flex-wrap items-center gap-2 mb-4">
    <span className="bg-primary text-text-inverse px-3 py-1 rounded-full font-label-md text-xs font-semibold uppercase tracking-wide">
                    Founder Story
                  </span>
    <span className="text-text-secondary text-body-sm font-body-sm">20 March 2020</span>
    </div>
    <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary leading-tight">
                  Kadam Foundation: One Step That Travelled Miles
                </h2>
    <p className="mt-3 font-label-md text-label-md text-text-secondary">
                  By Prachi Dwivedi, Founder &amp; Director
                </p>
    </div>

    <div className="max-w-3xl px-6 py-7 md:px-10 md:py-9">
    <div className="space-y-5 font-body-md text-body-md text-text-secondary leading-relaxed">
    <p>
                  On 20 March 2020, I saw children near my home searching for food in a dustbin. I went down and brought them food from my own home. As we spoke, I asked whether they went to school. They told me they did not.
                </p>
    <blockquote className="border-l-4 border-primary-container pl-5 text-text-primary">
    <p className="font-headline-md text-headline-md font-semibold">
                    “Didi, bhookh lagi hai. Humne kuch nahi khaya.”
                  </p>
    <p className="mt-2 italic">“Sister, we are hungry. We haven&apos;t eaten anything.”</p>
    </blockquote>
    <p>
                  I was a schoolgirl myself. I had no organisation, team, funding, or roadmap, but I could not let that encounter become just a memory. On 21 March 2020, Kadam began.
                </p>
    <h3 className="pt-2 font-headline-lg text-headline-lg font-semibold text-text-primary">
                  Barande Wali Kaksha
                </h3>
    <p>
                  We started Barande Wali Kaksha, a classroom in our veranda, with 10 children. We began with the space and resources we had, creating a place where they could learn.
                </p>
    <h3 className="pt-2 font-headline-lg text-headline-lg font-semibold text-text-primary">
                  Beyond Bhopal
                </h3>
    <p>
                  In 2022, I moved away from the original location. I began thinking about children in other communities who also needed access to learning. Kadam gradually grew beyond Bhopal as volunteers and people who shared the purpose joined the effort.
                </p>
    <p>
                  I began by asking what I could do right where I was. Sometimes, all it takes is the courage to take one Kadam.
                </p>
    </div>
    <footer className="mt-8 border-t border-border-subtle pt-5">
    <p className="font-label-md text-label-md font-semibold text-text-primary">
                  Prachi Dwivedi
                </p>
    <p className="font-body-sm text-body-sm text-text-secondary">Founder &amp; Director</p>
    <p className="mt-4 font-headline-md text-headline-md font-semibold text-primary">
                  One step made miles more.
                </p>
    </footer>
    </div>
    </article>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin mb-10">
    <div className="bg-surface-raised p-4 rounded-2xl border border-border-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
    
    <div aria-label="Story categories" className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
    
    <button aria-selected="true" className="bg-primary text-inverse-primary px-4 py-2 rounded-full font-label-md text-label-md font-medium shadow-sm transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-focus-ring" role="tab" type="button">
                All Stories
              </button>
    <button aria-selected="false" className="bg-transparent hover:bg-surface-canvas text-text-secondary hover:text-text-primary px-4 py-2 rounded-full font-label-md text-label-md font-medium border border-transparent hover:border-border-subtle transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-focus-ring" role="tab" type="button">
                Project Shiksha
              </button>
    <button aria-selected="false" className="bg-transparent hover:bg-surface-canvas text-text-secondary hover:text-text-primary px-4 py-2 rounded-full font-label-md text-label-md font-medium border border-transparent hover:border-border-subtle transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-focus-ring" role="tab" type="button">
                Project Samanvay
              </button>
    <button aria-selected="false" className="bg-transparent hover:bg-surface-canvas text-text-secondary hover:text-text-primary px-4 py-2 rounded-full font-label-md text-label-md font-medium border border-transparent hover:border-border-subtle transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-focus-ring" role="tab" type="button">
                Heal with Kadam
              </button>
    <button aria-selected="false" className="bg-transparent hover:bg-surface-canvas text-text-secondary hover:text-text-primary px-4 py-2 rounded-full font-label-md text-label-md font-medium border border-transparent hover:border-border-subtle transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-focus-ring" role="tab" type="button">
                Women Empowerment
              </button>
    </div>
    
    <div className="flex items-center gap-3">
    
    <div className="relative w-full md:w-56">
    <Icon name="search" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-lg pointer-events-none" />
    <input className="w-full bg-surface-canvas pl-9 pr-3 py-2 text-label-md font-label-md text-text-primary rounded-lg border border-border-subtle focus:border-text-primary focus:ring-1 focus:ring-focus-ring outline-none" placeholder="Search stories..." type="text"/>
    </div>
    
    <div className="relative flex-shrink-0">
    <select className="appearance-none bg-surface-canvas text-text-secondary font-label-md text-label-md pl-3 pr-8 py-2 rounded-lg border border-border-subtle focus:border-text-primary focus:ring-1 focus:ring-focus-ring outline-none cursor-pointer">
    <option>Most Recent</option>
    <option>Verified Outcomes</option>
    </select>
    <Icon name="expand_more" className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-text-secondary text-sm pointer-events-none" />
    </div>
    </div>
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin pb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-peach overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the North Delhi story Weekend Math and Literacy Circles; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-clay-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Shiksha
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="image" className="material-symbols-outlined text-[13px]" />
                  Photos pending
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log Oct 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    Cluster Pod 4, North Delhi
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Weekend Math &amp; Literacy Circles in Peri-Urban Basti
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#FoundationalLiteracy</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#ChildhoodEducation</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Volunteer educators collaborate with local families to build quiet study corners and regular homework habits.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">32 Students regularly attending</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-blue-soft overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the Bengaluru story Inter-Collegiate Civic Immersion Bootcamp; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-blue-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Samanvay
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="description" className="material-symbols-outlined text-[13px]" />
                  Photos pending
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log Sep 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    University Hub, Bengaluru
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Inter-Collegiate Civic Immersion Bootcamp
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#YouthLeadership</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#CivicAction</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Connecting undergraduate students directly with municipal ward councillors and local sanitation staff to solve community waste bottlenecks.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">18 Campus chapters engaged</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-olive-soft overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the Jaipur story Safe Spaces: Establishing Bi-Weekly Listening Circles; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-olive-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Heal with Kadam
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="mic" className="material-symbols-outlined text-[13px]" />
                  Audio Story • Anonymized Transcript
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log Aug 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    Student Center, Jaipur
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Safe Spaces: Establishing Bi-Weekly Listening Circles
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#PeerSupport</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#MentalWellness</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Youth peer-listeners host non-judgmental decompression forums addressing academic anxiety and social isolation among first-generation college students.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">60+ Youth participants</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-lilac-soft overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the Lucknow story Looms of Dignity: Traditional Weaving Collective; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-lilac-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Women Empowerment
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="videocam" className="material-symbols-outlined text-[13px]" />
                  Photos pending
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log Jul 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    Artisan Basti, Lucknow
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Looms of Dignity: Traditional Weaving Collective
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#Livelihoods</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#FinancialAutonomy</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Providing micro-grant equipment and financial literacy workshops to help women artisans sell handwoven textiles directly to neighborhood markets.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">15 Women cooperatives established</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-peach overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the Gurugram story Community Library Box and Mobile Reading Pod; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-clay-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Shiksha
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="image" className="material-symbols-outlined text-[13px]" />
                  Photos pending
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log Jun 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    Informal Settlement, Gurugram
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Community Library Box &amp; Mobile Reading Pod
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#BookDrive</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#CuriosityBuilding</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Distributing over 200 illustrated vernacular storybooks and setting up solar-powered reading lamps for evening reading hours.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">200+ Books cataloged</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-blue-soft overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the Chandigarh story Youth Participatory Budgeting and Civic Dialogue; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-blue-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Samanvay
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="summarize" className="material-symbols-outlined text-[13px]" />
                  Photos pending
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log May 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    Community Hall, Chandigarh
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Youth Participatory Budgeting &amp; Civic Dialogue
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#LocalGovernance</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#ActiveCitizenship</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Youth fellows facilitate open dialogues between informal sector workers and municipal representatives to prioritize drinking water repair.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">3 Neighborhood improvements approved</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-olive-soft overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the Dehradun story Emotional First-Aid Workshops for Student Volunteers; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-olive-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Heal with Kadam
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="school" className="material-symbols-outlined text-[13px]" />
                  Photos pending
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log Apr 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    Collegiate Chapter, Dehradun
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Emotional First-Aid Workshops for Student Volunteers
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#PeerSupport</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#EthicalBoundaries</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Training grassroots field volunteers on active listening, recognizing emotional burnout, and ethical referral protocols for professional mental healthcare.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">45 Volunteers certified in peer-first-aid</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    
    <article className="bg-surface-raised border border-border-subtle rounded-[20px] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-sm hover:border-text-secondary">
    <div className="relative h-48 bg-surface-lilac-soft overflow-hidden">
    <ImagePlaceholder alt="Photo placeholder for the Noida story Digital Banking and Household Financial Resilience; approved field photo pending." />
    <div className="absolute top-3 left-3">
    <span className="bg-surface-lilac-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Women Empowerment
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="image" className="material-symbols-outlined text-[13px]" />
                  Photos pending
                </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
    
    <div className="flex items-center justify-between text-xs font-label-md text-text-secondary mb-2">
    <span className="flex items-center gap-1">
    <Icon name="calendar_today" className="material-symbols-outlined text-[14px]" />
                    Verified Field Log Mar 2024
                  </span>
    <span className="flex items-center gap-1">
    <Icon name="location_on" className="material-symbols-outlined text-[14px] text-status-warning" />
                    Women Center, Noida
                  </span>
    </div>
    
    <h3 className="font-headline-md text-headline-md text-text-primary mb-2 line-clamp-2">
                  Digital Banking &amp; Household Financial Resilience
                </h3>
    
    <div className="flex flex-wrap gap-1.5 mb-3">
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#DigitalLiteracy</span>
    <span className="text-xs text-text-secondary bg-surface-canvas px-2 py-0.5 rounded-full border border-border-subtle">#SelfReliance</span>
    </div>
    
    <p className="font-body-sm text-body-sm text-text-secondary mb-4 flex-grow">
                  Hands-on smartphone workshops demystifying UPI payments, fraud prevention, and government small-savings schemes for homemakers and street vendors.
                </p>
    
    <div className="bg-surface-canvas p-2.5 rounded-lg border border-border-subtle flex items-center gap-2 mb-4">
    <Icon name="check_circle" className="material-symbols-outlined text-status-success text-base" filled />
    <span className="text-xs font-label-md text-text-primary font-medium">50+ Bank accounts activated</span>
    </div>
    
    <a className="inline-flex items-center gap-1 text-label-md font-label-md text-primary font-semibold hover:text-text-secondary transition-colors group pt-2 border-t border-border-subtle" href="#">
    <span>Read Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" />
    </a>
    </div>
    </article>
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin pb-20">
    <div className="flex flex-col items-center gap-4 py-8 border-t border-b border-border-subtle">
    
    <p className="text-body-sm font-body-sm text-text-secondary">
              Showing <span className="font-semibold text-text-primary">8</span> of <span className="font-semibold text-text-primary">24</span> Verified Chronicles
            </p>
    
    <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary font-label-md text-label-md font-medium hover:bg-surface-raised transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring active:scale-95" type="button">
    <span>Load More Stories</span>
    <Icon name="expand_more" className="material-symbols-outlined text-lg" />
    </button>
    
    <div className="flex items-center gap-2 mt-2">
    <button aria-label="Previous page" className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:bg-surface-raised transition text-body-sm font-body-sm" type="button">
    <Icon name="chevron_left" className="material-symbols-outlined text-base" />
    </button>
    <button aria-current="page" className="w-9 h-9 rounded-full flex items-center justify-center bg-primary text-text-inverse text-body-sm font-body-sm font-semibold shadow-xs" type="button">
                1
              </button>
    <button className="w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:bg-surface-raised transition text-body-sm font-body-sm" type="button">
                2
              </button>
    <button className="w-9 h-9 rounded-full flex items-center justify-center text-text-primary hover:bg-surface-raised transition text-body-sm font-body-sm" type="button">
                3
              </button>
    <button aria-label="Next page" className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:bg-surface-raised transition text-body-sm font-body-sm" type="button">
    <Icon name="chevron_right" className="material-symbols-outlined text-base" />
    </button>
    </div>
    </div>
    </section>
    
    <section className="max-w-7xl mx-auto px-space-lg md:px-margin pb-20">
    <div className="bg-surface-raised border border-border-subtle rounded-[24px] p-8 md:p-14 text-center max-w-4xl mx-auto relative overflow-hidden shadow-sm">
    
    <div className="absolute -top-16 -right-16 w-48 h-48 bg-surface-clay-soft rounded-full opacity-30 blur-2xl pointer-events-none"></div>
    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-surface-peach rounded-full opacity-40 blur-2xl pointer-events-none"></div>
    <div className="relative z-10">
    
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-clay-soft mb-6 border border-border-subtle">
    <Icon name="volunteer_activism" className="material-symbols-outlined text-primary text-2xl" filled />
    </div>
    <h2 className="font-display-lg md:font-display-lg text-display-lg md:text-display-lg text-text-primary mb-4">
                Be Part of the Next Story
              </h2>
    <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                Whether through volunteering your weekends, sponsoring a pod's learning materials, or partnering your college society, every step leaves a lasting footprint.
              </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-text-inverse px-8 py-3.5 rounded-full font-label-md text-label-md font-medium hover:bg-action-hover transition-transform active:scale-95 duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#">
    <span>Apply as a Volunteer</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-lg" />
    </a>
    <a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-primary text-primary font-label-md text-label-md font-medium hover:bg-surface-canvas transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#">
                  Explore Programs
                </a>
    </div>
    </div>
    </div>
    </section>
    </main>
  );
}
