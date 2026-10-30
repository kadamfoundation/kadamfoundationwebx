import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import { STORY_POSTS } from '@/lib/stories';

export function generateStaticParams() {
  return STORY_POSTS.map(({ slug }) => ({ slug }));
}

export default async function StoryPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = STORY_POSTS.find((story) => story.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-grow">
      <article className="mx-auto max-w-4xl px-space-lg pb-20 pt-10 md:px-margin md:pb-28 md:pt-16">
        <Link
          className="mb-10 inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:underline"
          href="/stories"
        >
          <Icon name="arrow_back" className="text-base" />
          Back to stories
        </Link>
        <header className="border-b border-border-subtle pb-8 md:pb-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border-subtle bg-surface-clay-soft px-3 py-1 font-label-md text-xs font-semibold text-text-primary">
              {post.category}
            </span>
            <time className="font-body-sm text-body-sm text-text-secondary" dateTime={post.publishedAt}>
              {post.date}
            </time>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary">
            {post.title}
          </h1>
          <p className="mt-5 font-body-lg text-body-lg leading-relaxed text-text-secondary">
            {post.excerpt}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 font-body-sm text-body-sm text-text-secondary">
            <Icon name="location_on" className="text-base" />
            {post.location}
          </p>
        </header>
        <div className="mx-auto max-w-3xl py-8 md:py-10">
          <p className="font-body-lg text-body-lg leading-relaxed text-text-primary">
            {post.body}
          </p>
          <div className="mt-8 rounded-xl border border-border-subtle bg-surface-canvas p-5">
            <p className="font-eyebrow text-eyebrow uppercase tracking-widest text-text-secondary">
              Reported outcome
            </p>
            <p className="mt-2 font-headline-md text-headline-md font-semibold text-text-primary">
              {post.impact}
            </p>
          </div>
        </div>
        <footer className="border-t border-border-subtle pt-6">
          <Link
            className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-primary hover:underline"
            href="/stories"
          >
            <Icon name="arrow_back" className="text-base" />
            Return to the archive
          </Link>
        </footer>
      </article>
    </main>
  );
}
