import Link from 'next/link';
import Icon from '@/components/Icon';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { VOLUNTEER_FORM_URL } from '@/lib/site-config';
import { STORY_POSTS } from '@/lib/stories';

function StoryCard({ post }: { post: (typeof STORY_POSTS)[number] }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border border-border-subtle bg-surface-raised transition-shadow hover:shadow-sm">
      <div className="h-48 overflow-hidden bg-surface-clay-soft">
        <ImagePlaceholder alt={`Photo for ${post.title}`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full border border-border-subtle bg-surface-clay-soft px-3 py-1 font-label-md text-xs font-semibold text-text-primary">
            {post.category}
          </span>
          <time className="font-body-sm text-body-sm text-text-secondary" dateTime={post.publishedAt}>
            {post.date}
          </time>
        </div>
        <h3 className="mb-3 font-headline-md text-headline-md font-semibold text-text-primary">
          {post.title}
        </h3>
        <p className="mb-5 flex-1 font-body-sm text-body-sm leading-relaxed text-text-secondary">
          {post.excerpt}
        </p>
        <Link
          className="group inline-flex items-center gap-1 border-t border-border-subtle pt-4 font-label-md text-label-md font-semibold text-primary hover:text-text-secondary"
          href={`/stories/${post.slug}`}
        >
          Read story
          <Icon
            name="arrow_forward"
            className="text-base transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

export default function StoriesPage() {
  const [featuredPost, ...archivePosts] = STORY_POSTS;

  return (
    <main className="flex-grow">
      <section className="mx-auto max-w-7xl px-space-lg pb-12 pt-12 md:px-margin md:pb-16 md:pt-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-clay-soft px-3.5 py-1.5 font-eyebrow text-eyebrow uppercase text-text-primary">
            <Icon name="menu_book" className="text-[16px]" />
            <span>FIELD NOTES &amp; COMMUNITY STORIES</span>
          </div>
          <h1 className="mb-6 font-display-lg text-display-lg md:font-display-xl md:text-display-xl text-text-primary">
            Stories from the ground
          </h1>
          <p className="font-body-lg text-body-lg leading-relaxed text-text-secondary">
            Reports, program updates, community voices, and reflections from Kadam Foundation’s
            grassroots work.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="featured-story-heading"
        className="mx-auto max-w-7xl px-space-lg pb-14 md:px-margin md:pb-20"
      >
        <p className="mb-4 font-eyebrow text-eyebrow uppercase tracking-widest text-text-secondary">
          Latest field report
        </p>
        <article className="grid overflow-hidden rounded-[24px] border border-border-subtle bg-surface-raised md:grid-cols-2">
          <div className="min-h-64 bg-surface-clay-soft md:min-h-96">
            <ImagePlaceholder alt={`Photo for ${featuredPost.title}`} />
          </div>
          <div className="flex flex-col items-start justify-center p-7 md:p-10 lg:p-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-surface-clay-soft px-3 py-1 font-label-md text-xs font-semibold text-text-primary">
                {featuredPost.category}
              </span>
              <time
                className="font-body-sm text-body-sm text-text-secondary"
                dateTime={featuredPost.publishedAt}
              >
                {featuredPost.date}
              </time>
            </div>
            <h2
              className="font-display-md text-display-md-mobile md:text-display-md text-text-primary"
              id="featured-story-heading"
            >
              {featuredPost.title}
            </h2>
            <p className="mt-4 font-body-md text-body-md leading-relaxed text-text-secondary">
              {featuredPost.excerpt}
            </p>
            <Link
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-container px-6 py-3 font-label-md text-label-md font-semibold text-text-inverse transition-colors hover:bg-action-hover"
              href={`/stories/${featuredPost.slug}`}
            >
              Read story
              <Icon name="arrow_forward" className="text-base" />
            </Link>
          </div>
        </article>
      </section>

      <section
        aria-labelledby="archive-heading"
        className="mx-auto max-w-7xl px-space-lg pb-16 md:px-margin md:pb-24"
      >
        <div className="mb-8 border-b border-border-subtle pb-5">
          <h2
            className="font-headline-xl text-headline-xl font-semibold text-text-primary"
            id="archive-heading"
          >
            From the archive
          </h2>
          <p className="mt-2 font-body-md text-body-md text-text-secondary">
            Dated reports and stories from our programs and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archivePosts.map((post) => (
            <StoryCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-space-lg pb-20 md:px-margin">
        <div className="rounded-[24px] border border-border-subtle bg-surface-raised p-8 text-center md:p-14">
          <Icon
            name="volunteer_activism"
            className="mb-4 text-3xl text-primary"
            filled
          />
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-text-primary">
            Help shape the next story
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body-md text-body-md text-text-secondary">
            Join a community initiative or support the work behind these stories.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-primary-container px-6 py-3 font-label-md text-label-md font-semibold text-text-inverse hover:bg-action-hover"
              href={VOLUNTEER_FORM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Volunteer
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary hover:bg-surface-canvas"
              href="/donate"
            >
              Support our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
