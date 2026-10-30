import Icon from '@/components/Icon';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function ProgramsPage() {
  return (
    <main>
    
    <section className="w-full pt-12 md:pt-20 pb-12 border-b border-border-subtle">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="max-w-3xl">
    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-surface-raised border border-border-subtle">
    <span className="w-2 h-2 rounded-full bg-status-success"></span>
    <span className="text-eyebrow font-eyebrow text-text-secondary tracking-widest uppercase">COMMUNITY-LED INITIATIVES</span>
    </div>
    <h1 className="text-display-lg md:text-display-xl font-display-xl text-primary mb-6 leading-tight">
                Our Programs, Our Impact
              </h1>
    <p className="text-body-lg font-body-lg text-text-secondary leading-relaxed">
                How youth mobilization and grassroots solidarity transform local communities through targeted, empathy-driven community pods. We build sustained civic architecture that bridges historical inequities and puts frontline ownership into young hands.
              </p>
    </div>
    
    <div className="mt-10 pt-6 border-t border-border-subtle/60 flex flex-wrap items-center gap-3">
    <span className="text-label-md font-label-md text-text-secondary mr-2 flex items-center gap-1.5">
    <Icon name="filter_alt" className="material-symbols-outlined text-[18px]" /> Jump to Pod:
              </span>
    <a className="px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-peach text-text-primary border border-border-subtle text-label-md font-label-md transition-colors flex items-center gap-2" href="#project-shiksha">
    <span className="w-2 h-2 rounded-full bg-amber-700"></span>
                Project Shiksha
              </a>
    <a className="px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-blue-soft text-text-primary border border-border-subtle text-label-md font-label-md transition-colors flex items-center gap-2" href="#project-samanvay">
    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                Project Samanvay
              </a>
    <a className="px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-lilac-soft text-text-primary border border-border-subtle text-label-md font-label-md transition-colors flex items-center gap-2" href="#heal-with-kadam">
    <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                Heal with Kadam
              </a>
    <a className="px-4 py-2 rounded-full bg-surface-raised hover:bg-surface-clay-soft text-text-primary border border-border-subtle text-label-md font-label-md transition-colors flex items-center gap-2" href="#women-empowerment">
    <span className="w-2 h-2 rounded-full bg-amber-900"></span>
                Women Empowerment
              </a>
    </div>
    </div>
    </section>
    
    <section className="w-full py-16 md:py-24 border-b border-border-subtle" id="project-shiksha">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="bg-surface-raised rounded-[22px] border border-border-subtle p-6 md:p-12 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
    
    <div className="lg:col-span-7 flex flex-col justify-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-peach text-text-primary border border-border-subtle text-eyebrow font-eyebrow w-max mb-4">
    <Icon name="menu_book" className="material-symbols-outlined text-[16px]" />
    <span>EDUCATION &amp; CHILD LITERACY</span>
    </div>
    <h2 className="text-headline-xl md:text-display-lg-mobile font-headline-xl text-primary mb-3">Project Shiksha</h2>
    <p className="text-body-md font-body-md text-text-secondary mb-6 leading-relaxed">
                    Teaching children in underserved urban settlements and informal communities. Our volunteer educators build resilient learning environments right where children live, unlocking their innate curiosity while keeping schools accountable.
                  </p>
    
    <div className="mb-6">
    <h3 className="text-label-md font-label-md uppercase tracking-wider text-text-primary font-semibold mb-3">Core Objectives</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    <div className="flex items-start gap-2.5 bg-surface-canvas/60 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Bridge foundational literacy &amp; arithmetic gaps</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-canvas/60 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Cultivate daily regular study habits</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-canvas/60 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Distribute essential student learning kits</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-canvas/60 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Prevent secondary school dropout cycles</span>
    </div>
    </div>
    </div>
    
    <div className="mb-8 border-t border-border-subtle/60 pt-4">
    <h3 className="text-label-md font-label-md uppercase tracking-wider text-text-primary font-semibold mb-2">Key Activities in the Pod</h3>
    <p className="text-body-sm font-body-sm text-text-secondary leading-relaxed">
                      Weekend learning camps, remedial reading and math circles, student stationery drives, and quarterly community parent-teacher dialogues.
                    </p>
    </div>
    
    <div className="flex flex-wrap items-center gap-4">
    <a className="inline-flex items-center justify-center bg-primary-container text-text-inverse px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-action-hover transition-transform active:scale-95 duration-150" href="#volunteer">
    <span>Volunteer to Teach</span>
    <Icon name="arrow_forward" className="material-symbols-outlined ml-2 text-[18px]" />
    </a>
    <a className="inline-flex items-center justify-center bg-transparent border border-primary-container text-primary-container px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-surface-peach transition-colors" href="#support-shiksha">
    <span>Support Shiksha Learning Pods</span>
    </a>
    </div>
    </div>
    
    <div className="lg:col-span-5 order-first lg:order-last">
    <div className="relative rounded-[18px] overflow-hidden border border-border-subtle aspect-[4/3] lg:aspect-[5/6] bg-surface-clay-soft">
    <ImagePlaceholder alt="Photo placeholder for Project Shiksha; approved learning-pod photograph pending." />
    <div className="absolute bottom-4 left-4 right-4 p-3 bg-surface-raised/95 backdrop-blur-sm rounded-lg border border-border-subtle flex items-center justify-between">
    <div>
    <p className="text-label-md font-label-md font-semibold text-text-primary">12 Active Pods</p>
    <p className="text-body-sm font-body-sm text-text-secondary">420+ Children supported weekly</p>
    </div>
    <Icon name="school" className="material-symbols-outlined text-text-secondary text-[24px]" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full py-16 md:py-24 border-b border-border-subtle bg-surface-canvas" id="project-samanvay">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="bg-surface-blue-soft/35 rounded-[22px] border border-border-subtle p-6 md:p-12 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
    
    <div className="lg:col-span-5">
    <div className="relative rounded-[18px] overflow-hidden border border-border-subtle aspect-[4/3] lg:aspect-[5/6] bg-surface-blue-soft">
    <ImagePlaceholder alt="Photo placeholder for Project Samanvay; approved chapter or community workshop photograph pending." />
    <div className="absolute bottom-4 left-4 right-4 p-3 bg-surface-raised/95 backdrop-blur-sm rounded-lg border border-border-subtle flex items-center justify-between">
    <div>
    <p className="text-label-md font-label-md font-semibold text-text-primary">18 Campus Chapters</p>
    <p className="text-body-sm font-body-sm text-text-secondary">Cross-institutional fellowship</p>
    </div>
    <Icon name="groups" className="material-symbols-outlined text-text-secondary text-[24px]" />
    </div>
    </div>
    </div>
    
    <div className="lg:col-span-7 flex flex-col justify-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised text-text-primary border border-border-subtle text-eyebrow font-eyebrow w-max mb-4">
    <Icon name="diversity_3" className="material-symbols-outlined text-[16px]" />
    <span>YOUTH LEADERSHIP &amp; CIVIC ENGAGEMENT</span>
    </div>
    <h2 className="text-headline-xl md:text-display-lg-mobile font-headline-xl text-primary mb-3">Project Samanvay</h2>
    <p className="text-body-md font-body-md text-text-secondary mb-6 leading-relaxed">
                    Connecting youth across educational institutions with local communities through structured orientation, workshops, networking, and collaborative grassroots development. We replace performative volunteering with long-term empathetic accountability.
                  </p>
    
    <div className="mb-6">
    <h3 className="text-label-md font-label-md uppercase tracking-wider text-text-primary font-semibold mb-3">Core Objectives</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Foster deep youth civic empathy &amp; agency</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Dismantle academic-community ivory towers</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Cultivate frontline problem solvers</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Build sustained collegiate fellowship pods</span>
    </div>
    </div>
    </div>
    
    <div className="mb-8 border-t border-border-subtle/60 pt-4">
    <h3 className="text-label-md font-label-md uppercase tracking-wider text-text-primary font-semibold mb-2">Key Activities in the Pod</h3>
    <p className="text-body-sm font-body-sm text-text-secondary leading-relaxed">
                      Inter-collegiate orientation bootcamps, immersive community field weekends, grassroots fellowship circles, and collaborative social action hackathons.
                    </p>
    </div>
    
    <div className="flex flex-wrap items-center gap-4">
    <a className="inline-flex items-center justify-center bg-primary-container text-text-inverse px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-action-hover transition-transform active:scale-95 duration-150" href="#join-pod">
    <span>Join Collegiate Pod</span>
    <Icon name="arrow_forward" className="material-symbols-outlined ml-2 text-[18px]" />
    </a>
    <a className="inline-flex items-center justify-center bg-transparent border border-primary-container text-primary-container px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-surface-raised transition-colors" href="#partner">
    <span>Partner With Us</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full py-16 md:py-24 border-b border-border-subtle" id="heal-with-kadam">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="bg-surface-lilac-soft/30 rounded-[22px] border border-border-subtle p-6 md:p-12">
    <div className="max-w-4xl mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-10">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised text-text-primary border border-border-subtle text-eyebrow font-eyebrow mb-4">
    <Icon name="self_improvement" className="material-symbols-outlined text-[16px]" />
    <span>EMOTIONAL WELLBEING &amp; LISTENING CIRCLES</span>
    </div>
    <h2 className="text-headline-xl md:text-display-lg font-headline-xl text-primary mb-3">Heal with Kadam</h2>
    <p className="text-body-md font-body-md text-text-secondary leading-relaxed">
                    Compassionate peer-listening and emotional support spaces for youth and community members experiencing distress, academic pressure, or isolation.
                  </p>
    </div>
    
    <div className="bg-surface-raised border border-border-subtle rounded-xl p-4 md:p-5 mb-10 flex items-start gap-4 shadow-sm">
    <Icon name="info" className="material-symbols-outlined text-secondary text-[26px] mt-0.5 shrink-0" />
    <div>
    <p className="text-label-md font-label-md font-semibold text-text-primary mb-1">Peer Listening &amp; Ethical Boundary Statement</p>
    <p className="text-body-sm font-body-sm text-text-secondary leading-relaxed">
                      Heal with Kadam is an empathetic community initiative providing non-judgmental peer listening and emotional first-aid. <strong>This initiative is explicitly not a substitute for clinical psychiatric care, formal therapy, or medical diagnosis.</strong> We maintain direct escalation channels to certified mental healthcare professionals and distress hotlines when advanced support is needed.
                    </p>
    </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
    
    <div className="bg-surface-raised/90 p-6 rounded-xl border border-border-subtle flex flex-col justify-between">
    <div>
    <div className="flex items-center gap-2 mb-4 text-text-primary">
    <Icon name="psychology" className="material-symbols-outlined text-[22px]" />
    <h3 className="text-headline-md font-headline-md">Core Objectives</h3>
    </div>
    <ul className="space-y-3">
    <li className="flex items-start gap-3">
    <Icon name="favorite" className="material-symbols-outlined text-secondary text-[18px] mt-1 shrink-0" />
    <span className="text-body-md font-body-md text-text-primary">Create safe, stigma-free listening spaces for vulnerable youth</span>
    </li>
    <li className="flex items-start gap-3">
    <Icon name="favorite" className="material-symbols-outlined text-secondary text-[18px] mt-1 shrink-0" />
    <span className="text-body-md font-body-md text-text-primary">Encourage honest expression of anxieties without judgment</span>
    </li>
    <li className="flex items-start gap-3">
    <Icon name="favorite" className="material-symbols-outlined text-secondary text-[18px] mt-1 shrink-0" />
    <span className="text-body-md font-body-md text-text-primary">Cultivate empathetic community solidarity &amp; mutual care</span>
    </li>
    </ul>
    </div>
    </div>
    
    <div className="bg-surface-raised/90 p-6 rounded-xl border border-border-subtle flex flex-col justify-between">
    <div>
    <div className="flex items-center gap-2 mb-4 text-text-primary">
    <Icon name="forum" className="material-symbols-outlined text-[22px]" />
    <h3 className="text-headline-md font-headline-md">Key Activities</h3>
    </div>
    <ul className="space-y-3">
    <li className="flex items-start gap-3">
    <Icon name="spa" className="material-symbols-outlined text-secondary text-[18px] mt-1 shrink-0" />
    <span className="text-body-md font-body-md text-text-primary">Bi-weekly guided peer-listening circles (online &amp; physical)</span>
    </li>
    <li className="flex items-start gap-3">
    <Icon name="spa" className="material-symbols-outlined text-secondary text-[18px] mt-1 shrink-0" />
    <span className="text-body-md font-body-md text-text-primary">Stress-management and campus decompression workshops</span>
    </li>
    <li className="flex items-start gap-3">
    <Icon name="spa" className="material-symbols-outlined text-secondary text-[18px] mt-1 shrink-0" />
    <span className="text-body-md font-body-md text-text-primary">Mental wellness awareness and emotional literacy forums</span>
    </li>
    </ul>
    </div>
    </div>
    </div>
    
    <div className="flex flex-wrap items-center justify-center gap-4">
    <a className="inline-flex items-center justify-center bg-primary-container text-text-inverse px-7 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-action-hover transition-transform active:scale-95 duration-150" href="#attend-circle">
    <span>Attend a Listening Circle</span>
    <Icon name="calendar_month" className="material-symbols-outlined ml-2 text-[18px]" />
    </a>
    <a className="inline-flex items-center justify-center bg-transparent border border-primary-container text-primary-container px-7 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-surface-raised transition-colors" href="#peer-volunteer">
    <span>Join as a Peer Volunteer</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full py-16 md:py-24 border-b border-border-subtle bg-surface-canvas" id="women-empowerment">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="bg-surface-clay-soft/40 rounded-[22px] border border-border-subtle p-6 md:p-12 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
    
    <div className="lg:col-span-7 flex flex-col justify-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised text-text-primary border border-border-subtle text-eyebrow font-eyebrow w-max mb-4">
    <Icon name="handshake" className="material-symbols-outlined text-[16px]" />
    <span>SELF-RELIANCE &amp; DIGNITY</span>
    </div>
    <h2 className="text-headline-xl md:text-display-lg-mobile font-headline-xl text-primary mb-3">Women Empowerment</h2>
    <p className="text-body-md font-body-md text-text-secondary mb-6 leading-relaxed">
                    Supporting underprivileged women through targeted empowerment and self-reliance initiatives in peri-urban clusters. We co-create dignified livelihoods that put financial autonomy and household decision-making directly into women's hands.
                  </p>
    
    <div className="mb-6">
    <h3 className="text-label-md font-label-md uppercase tracking-wider text-text-primary font-semibold mb-3">Core Objectives</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Build vocational craftsmanship &amp; confidence</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Facilitate digital &amp; basic banking literacy</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Foster neighborhood mutual-aid pods</span>
    </div>
    <div className="flex items-start gap-2.5 bg-surface-raised/80 p-3 rounded-lg border border-border-subtle/50">
    <Icon name="check_circle" className="material-symbols-outlined text-text-primary text-[20px] mt-0.5" />
    <span className="text-body-sm font-body-sm text-text-primary">Enhance family economic resilience</span>
    </div>
    </div>
    </div>
    
    <div className="mb-8 border-t border-border-subtle/60 pt-4">
    <h3 className="text-label-md font-label-md uppercase tracking-wider text-text-primary font-semibold mb-2">Key Activities in the Pod</h3>
    <p className="text-body-sm font-body-sm text-text-secondary leading-relaxed">
                      Practical vocational and handicraft workshops, basic financial numeracy classes, menstrual hygiene awareness drives, and cooperative savings self-help pods.
                    </p>
    </div>
    
    <div className="flex flex-wrap items-center gap-4">
    <a className="inline-flex items-center justify-center bg-primary-container text-text-inverse px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-action-hover transition-transform active:scale-95 duration-150" href="#support-women">
    <span>Support Women Changemakers</span>
    <Icon name="arrow_forward" className="material-symbols-outlined ml-2 text-[18px]" />
    </a>
    <a className="inline-flex items-center justify-center bg-transparent border border-primary-container text-primary-container px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-surface-raised transition-colors" href="#volunteer-mentor">
    <span>Volunteer as a Mentor</span>
    </a>
    </div>
    </div>
    
    <div className="lg:col-span-5 order-first lg:order-last">
    <div className="relative rounded-[18px] overflow-hidden border border-border-subtle aspect-[4/3] lg:aspect-[5/6] bg-surface-clay-soft">
    <ImagePlaceholder alt="Photo placeholder for the Women Empowerment program; approved program photograph pending." />
    <div className="absolute bottom-4 left-4 right-4 p-3 bg-surface-raised/95 backdrop-blur-sm rounded-lg border border-border-subtle flex items-center justify-between">
    <div>
    <p className="text-label-md font-label-md font-semibold text-text-primary">160+ Women</p>
    <p className="text-body-sm font-body-sm text-text-secondary">Trained across 5 community pods</p>
    </div>
    <Icon name="workspace_premium" className="material-symbols-outlined text-text-secondary text-[24px]" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section className="w-full py-16 md:py-24 bg-surface-peach/50 border-b border-border-subtle">
    <div className="max-w-7xl mx-auto px-space-lg md:px-margin">
    <div className="text-center max-w-2xl mx-auto mb-12">
    <span className="text-eyebrow font-eyebrow text-text-secondary tracking-widest uppercase mb-2 block">TAKE MEANINGFUL ACTION</span>
    <h2 className="text-headline-xl md:text-display-lg font-headline-xl text-primary mb-4">Be a Part of the Change</h2>
    <p className="text-body-md font-body-md text-text-secondary leading-relaxed">
                Real impact happens through consistent presence. Choose the pathway that aligns with your time, skills, and solidarity.
              </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <div className="bg-surface-raised rounded-[20px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all">
    <div>
    <div className="w-12 h-12 rounded-full bg-surface-clay-soft flex items-center justify-center text-text-primary mb-6">
    <Icon name="person_raised_hand" className="material-symbols-outlined text-[24px]" />
    </div>
    <h3 className="text-headline-md font-headline-md text-primary mb-2">Volunteer in a Program</h3>
    <p className="text-body-sm font-body-sm text-text-secondary mb-6 leading-relaxed">
                    Commit 2 to 4 hours over weekends teaching students, organizing civic dialogues, or guiding peer circles.
                  </p>
    </div>
    <a className="inline-flex items-center justify-center bg-primary-container text-text-inverse px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-action-hover transition-colors w-full" href="#volunteer">
    <span>Apply as Volunteer</span>
    <Icon name="east" className="material-symbols-outlined ml-2 text-[18px]" />
    </a>
    </div>
    
    <div className="bg-surface-raised rounded-[20px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all">
    <div>
    <div className="w-12 h-12 rounded-full bg-surface-blue-soft flex items-center justify-center text-text-primary mb-6">
    <Icon name="corporate_fare" className="material-symbols-outlined text-[24px]" />
    </div>
    <h3 className="text-headline-md font-headline-md text-primary mb-2">Explore Partnership</h3>
    <p className="text-body-sm font-body-sm text-text-secondary mb-6 leading-relaxed">
                    Connect your collegiate society, NGO pod, or CSR initiative with established community operational channels.
                  </p>
    </div>
    <a className="inline-flex items-center justify-center bg-primary-container text-text-inverse px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-action-hover transition-colors w-full" href="#partner">
    <span>Connect With Us</span>
    <Icon name="east" className="material-symbols-outlined ml-2 text-[18px]" />
    </a>
    </div>
    
    <div className="bg-surface-raised rounded-[20px] p-8 border border-border-subtle flex flex-col justify-between hover:shadow-sm transition-all">
    <div>
    <div className="w-12 h-12 rounded-full bg-surface-lilac-soft flex items-center justify-center text-text-primary mb-6">
    <Icon name="volunteer_activism" className="material-symbols-outlined text-[24px]" />
    </div>
    <h3 className="text-headline-md font-headline-md text-primary mb-2">Donate to a Pod</h3>
    <p className="text-body-sm font-body-sm text-text-secondary mb-6 leading-relaxed">
                    Directly fund learning materials, reading library pods, or vocational supplies with complete financial reporting.
                  </p>
    </div>
    <a className="inline-flex items-center justify-center bg-primary-container text-text-inverse px-6 py-3 rounded-full text-label-md font-label-md font-medium hover:bg-action-hover transition-colors w-full" href="#donate">
    <span>Make a Contribution</span>
    <Icon name="favorite" className="material-symbols-outlined ml-2 text-[18px]" />
    </a>
    </div>
    </div>
    </div>
    </section>
    </main>
  );
}
