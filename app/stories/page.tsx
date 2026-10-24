import Icon from '@/components/Icon';

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
    <div className="bg-surface-raised border border-border-subtle rounded-[22px] overflow-hidden shadow-sm transition hover:border-text-secondary/40">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
    
    <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] bg-surface-peach overflow-hidden">
    <img className="w-full h-full object-cover" data-alt="A warm, candid documentary-style photograph of Indian youth volunteers sitting in an open terracotta-brick courtyard with children in an informal settlement pod. Sunlight streams through morning trees, casting golden highlights on handmade notebooks, wooden benches, and slate chalkboards. The earthy color palette of warm clay, peach, and soft charcoal creates an intimate, dignified atmosphere of peer literacy and quiet focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb8tAV8gpTTyJWuNJ_EqdOagGsETvKK5PYKvopoBEZPQGZx0MDAlbxS-1KBQJk9usXHCGOceU6ADm4Flrv9y1K9VVT158nIwZBIueK8JhCEBayqL4wqUpmgAEOt3d18efuMoyfFIurLuPN2EC72wBOIY5v-pfwNs6zjguPEZk1ALdiMkecV-mdOzfxazKaZcr4AqaThlFCZfnogcgw0uUxlhRIwilO4mgx6sDA9oUVqvXV_wPH6ABk"/>
    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
    <span className="bg-primary text-text-inverse px-3 py-1 rounded-full text-label-md font-label-md font-semibold text-xs tracking-wide uppercase">
                    Featured Story
                  </span>
    <span className="bg-surface-raised/95 text-text-primary backdrop-blur-sm px-3 py-1 rounded-full text-label-md font-label-md font-medium text-xs border border-border-subtle flex items-center gap-1.5">
    <Icon name="photo_camera" className="material-symbols-outlined text-xs" />
                    6 Field Photos • 1 Audio Note
                  </span>
    </div>
    </div>
    
    <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between bg-surface-raised">
    <div>
    
    <div className="flex flex-wrap items-center gap-2 mb-4">
    <span className="bg-surface-clay-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold">
                      Project Shiksha • Learning Pods
                    </span>
    <span className="text-text-secondary text-body-sm font-body-sm flex items-center gap-1">
    <Icon name="schedule" className="material-symbols-outlined text-sm" />
                      Recent Field Milestone
                    </span>
    </div>
    
    <div className="flex items-center gap-1.5 text-text-secondary font-label-md text-label-md text-xs mb-3">
    <Icon name="location_on" className="material-symbols-outlined text-sm text-status-warning" />
    <span>Urban Settlement Pod, Delhi NCR</span>
    </div>
    
    <h2 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-text-primary leading-tight mb-4">
                    From Sidewalk Learning to School Enrollment: The Transformation of an Informal Settlement Pod
                  </h2>
    
    <p className="font-body-md text-body-md text-text-secondary mb-6 leading-relaxed">
                    Student volunteers established weekend literacy circles in an open residential courtyard, bridging foundational arithmetic and language gaps for over 40 neighborhood children through sustained community mentorship.
                  </p>
    
    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-surface-canvas rounded-xl border border-border-subtle mb-6">
    <div>
    <div className="font-headline-md text-headline-md text-text-primary font-bold">40+</div>
    <div className="font-label-md text-label-md text-xs text-text-secondary">Children Supported</div>
    </div>
    <div className="border-l border-border-subtle pl-2">
    <div className="font-headline-md text-headline-md text-text-primary font-bold">8</div>
    <div className="font-label-md text-label-md text-xs text-text-secondary">Volunteer Mentors</div>
    </div>
    <div className="border-l border-border-subtle pl-2">
    <div className="font-headline-md text-headline-md text-text-primary font-bold">6 Mo</div>
    <div className="font-label-md text-label-md text-xs text-text-secondary">Continuous Pods</div>
    </div>
    </div>
    </div>
    
    <div className="flex flex-wrap items-center gap-4 pt-2">
    <a className="inline-flex items-center gap-2 bg-primary text-text-inverse px-6 py-3 rounded-full font-label-md text-label-md font-medium hover:bg-action-hover group transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring" href="#">
    <span>Read Full Story</span>
    <Icon name="arrow_forward" className="material-symbols-outlined text-lg transition-transform duration-150 group-hover:translate-x-1" />
    </a>
    <button className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-primary text-primary font-label-md text-label-md font-medium hover:bg-surface-canvas transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-focus-ring" type="button">
    <Icon name="share" className="material-symbols-outlined text-lg" />
    <span>Share Story</span>
    </button>
    </div>
    </div>
    </div>
    </div>
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="An editorial documentary photo of college volunteers and young students gathered in an open community space in North Delhi. The children are sitting on woven jute mats with vibrant open notebooks, practicing math exercises with enthusiastic gestures under soft natural daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaM8O3NOByYTcA6P4nIP5p5CWk0svZXQNz0lkB7lVuH6_7Jjn6o-9KCyDFtJTE31VDnbFdpdbO26NtNnloeQFNAThil4zN8wZas1IzWhAZ7HP0AcSPR9Evp7vRFcg27uxQ0zpnu_GalbzvtcN5h538msp-SCLTIzSUdQCzNmAIccsFVt8IfLaJngktwUx5GTuPz0r_MX4hwAW2ahAQ_wtS-KSr93oWLwnS0czguL7ila1RUA08an3T"/>
    <div className="absolute top-3 left-3">
    <span className="bg-surface-clay-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Shiksha
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="image" className="material-symbols-outlined text-[13px]" />
                  4 Photos
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="Editorial candid photography showing young Indian college students engaged in an active outdoor townhall meeting with municipal ward workers in Bengaluru. Clipboard notes, informal conversational circles, and authentic street-level urban engagement captured in earthy tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnJHUfKLEXPCdh4KwwM_l-FtngyRZj-KYD2tUg9y8lxo2n2Md90ImFtvdGG89Lm7VtrHyhtw1KdDMPOHRl5g3nmuOt_DixMdRparBM2Fr9eYws6g6mbPXnXnAf51qbzvxy67XkkFGonNDr5OVcyVix59ewQynVK7jPlSm7up3lgqvqAxWP39i27rsN4coAgXp8kNxm0nmFC7uPYqg_881CStnBDHEbyJCOCyLJITdY5XIijoi80R6Q"/>
    <div className="absolute top-3 left-3">
    <span className="bg-surface-blue-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Samanvay
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="description" className="material-symbols-outlined text-[13px]" />
                  8 Photos • Field Log PDF
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="An authentic, quiet photograph of a small group of university students sitting in a circle on woven floor cushions inside a sunlit university hall in Jaipur. One student speaks while others listen with empathetic expressions, embodying mental wellness and peer support in a warm editorial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmNh9kAnHrMTPFEQa592cqax6HDrCi38e76c3uWeTdLYy_7X2VMQBpNfj81_kWXI9ncVTtQaWula_M4VCplRqvzzlORGz4vrgFiwfsGvS3-N1WxkgcRKQCHrO98ZjrxzZK3YJyjNGOZxHrW4_tzr3Eck2lySvj7R5s5bEKPCWJ9_O6A_HX0Bk6txN-lcDovtM_ivkTlskVtiVr4jACXztZRYlyMGAh6qJi_Izg9695FwD2P9G0HEXN"/>
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="Editorial portrait-style photograph of Indian women artisans working together at traditional handloom machines in Lucknow. Sunlight reflects off vibrant terracotta threads and intricate geometric patterns, conveying financial self-reliance, craftsmanship, and community solidarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkxEv_L_kJgwALGGNUlI-iS9jsVpMOTJ0kmqKWUjMvUgvmqE4DSNK3rLBO_lFdZud2QlZq9WsIoXfchjFNHrEIZn5CvwNEM0kKLknmXn-jbvd83Lb19TEgcev_UY8mouCiti4gTv5ZhZB1Y0CBdJ2CUwx9sC84UbzIvMeNzw8XHCt7nMcdX9A0woOpHwqyy0t_g-2so8DIMIFbbAwNmlj2LsR7icc-mCuBnoRFCzkKJCeWzleddU1"/>
    <div className="absolute top-3 left-3">
    <span className="bg-surface-lilac-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Women Empowerment
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="videocam" className="material-symbols-outlined text-[13px]" />
                  6 Photos • Video Dispatch
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="A warm, grounded documentary scene of an informal community library in Gurugram. Brightly painted wooden book crates filled with illustrated Hindi and English storybooks are surrounded by neighborhood children and a youth volunteer reading aloud under a solar lamp." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7-P4uu3QO-VBdGwccgcLFqiAM3e1BNOlpPycFqEUMk59IuMlw_sztvRgpstcerF-EagTFt-in7XMN4zD1jQQ-76795NHT1MWC5MGuSg1Ch4e9UezblMzzbXzZaE5mGHVtPtUc1ReSkSq0iE7Ubb3w59fYLuY8naZWIwG76vHQwX0BX8TVvEXz0HS9cAnuHuFIG-XjJIa3eF0YRC3KZZTXFISE1F2uNZmQwI_JAIqguDGlj6nohEu8"/>
    <div className="absolute top-3 left-3">
    <span className="bg-surface-clay-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Shiksha
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="image" className="material-symbols-outlined text-[13px]" />
                  5 Photos
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="A participatory community meeting in Chandigarh inside a brightly lit municipal hall. Youth moderators facilitate a discussion on local water infrastructure, using whiteboard diagrams and handwritten feedback sheets with community elders and local workers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkMgSNApFAJiUCbODzYj2G1sZywCOM7EajRKFnnz-pvcK5pL7n2qkjFNm8xILFP9qEg7ryOWY0PbejppIhK08ac6J9Aqu6oNBKJAwCpXM1BGvGOhE9jNBZLk9wCKF7FMKuuQNNloogsCJ2j_7PLK7iqaM8Ud67kF_RQ5bltS7iIsHNa30lfhKL-3SnS3mXWYFDre6a1sMycz_YpRydqpLZrSNA7XH8Jl3nXrjR3k7t-OCXFzVWzaBA"/>
    <div className="absolute top-3 left-3">
    <span className="bg-surface-blue-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Project Samanvay
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="summarize" className="material-symbols-outlined text-[13px]" />
                  3 Photos • Civic Summary
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="An earnest educational workshop setting in Dehradun where young student volunteers participate in role-playing exercises on active listening and emotional first-aid. Terracotta walls, warm natural light, and supportive expressions highlight peer learning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQbHe-jEEGivxQBte3VDWdVTHUBG4Cr2EHFg0Z47j0fAA35D1PKvEprOIJ4ZEEm-khk-9ocJTI0B3-CMGBxIoURu4-FcrpHHItiI-AOYjk9Ik-YeLeYQqTU30z3-nieZx_KpNTMqOqrODkZCeK1fvLyMofXlvCAc-Yxm8nLpWsJOteOYmR3zQXYvNheAkfH3ZKdeQ-6y5b62WWnbsSUOx8tBKYLLwlMi8j6ieHpPVs51loWsGCA17G"/>
    <div className="absolute top-3 left-3">
    <span className="bg-surface-olive-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Heal with Kadam
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="school" className="material-symbols-outlined text-[13px]" />
                  Training Kit • 4 Photos
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
    <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-alt="A focused digital literacy circle in Noida where women homemakers and local vendors learn digital banking on basic smartphones. A friendly youth volunteer points to a step-by-step paper flipchart explaining safe mobile payments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvXh4dPoV3fHVm1bN5cnANLCrJ2PSTLIITy_yIJQ_QrMLYL_8HYS_bPv-QQGD0WQke2rvjDILd5Nr8rBOtCdna1rOoVP0MeLbNAzR-_m-Gdi1PmoFNrgUyW3aNBC1VNkMkbcAt1dfRbaR9vIpEoCH9FFQdxrqxeCerWOVJyuCVyQH4mFYuplcqB8RPqFZRGKdRv5gNBKT_GXwRc-YoUJfJPjYrIyC_T-yLdq5EWYMIZJhfbBf9IoDK"/>
    <div className="absolute top-3 left-3">
    <span className="bg-surface-lilac-soft text-text-primary px-3 py-1 rounded-full font-label-md text-label-md text-xs font-semibold border border-border-subtle">
                    Women Empowerment
                  </span>
    </div>
    <div className="absolute bottom-3 right-3 bg-surface-raised/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-label-md text-text-secondary border border-border-subtle flex items-center gap-1">
    <Icon name="image" className="material-symbols-outlined text-[13px]" />
                  7 Photos
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
