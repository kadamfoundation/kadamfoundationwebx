import Icon from '@/components/Icon';

export default function PartnersPage() {
  return (
    <main className="flex flex-grow items-center justify-center px-space-lg py-20 md:px-margin md:py-32">
      <section className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border-subtle bg-surface-clay-soft text-primary">
          <Icon name="handshake" className="text-3xl" />
        </div>
        <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-text-secondary">
          Growing together
        </p>
        <h1 className="mt-3 font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary">
          Our Partners
        </h1>
        <p className="mt-4 font-body-lg text-body-lg leading-relaxed text-text-secondary">
          This page is coming soon. We look forward to introducing the organizations and
          communities working alongside Kadam.
        </p>
      </section>
    </main>
  );
}
