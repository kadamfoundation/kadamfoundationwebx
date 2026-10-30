import Image from 'next/image';

const GALLERY_IMAGES = [
  {
    src: '/images/homepage/home-page-main-photo.jpg',
    alt: 'Kadam Foundation education drive and community learning activities',
  },
  {
    src: '/images/about/about-planning-photo.jpg',
    alt: 'Kadam Foundation team gathered for a community planning activity',
  },
  {
    src: '/images/programs/project-shiksha.jpg',
    alt: 'Project Shiksha learning activities',
  },
  {
    src: '/images/programs/project-samanvay.jpg',
    alt: 'Project Samanvay community activities',
  },
  {
    src: '/images/programs/women-empowerment.jpg',
    alt: 'Kadam Foundation women empowerment initiative',
  },
  {
    src: '/images/volunteer/volunteer-page-photo.jpg',
    alt: 'Kadam Foundation volunteers taking part in community work',
  },
  {
    src: '/images/leadership/founder.jpg',
    alt: 'Prachi Dwivedi, Founder of Kadam Foundation',
  },
  {
    src: '/images/team/bhopal-city-head.jpg',
    alt: 'Bhopal city team leadership',
  },
  {
    src: '/images/gallery/learning-circle.jpg',
    alt: 'A volunteer leads a learning circle with children in their neighborhood',
  },
  {
    src: '/images/gallery/classroom-session.jpg',
    alt: 'Children taking part in a community classroom session',
  },
  {
    src: '/images/gallery/classroom-celebration.jpg',
    alt: 'Children and volunteers celebrating together after a learning activity',
  },
  {
    src: '/images/gallery/community-class.jpg',
    alt: 'Children gathered for an outdoor learning activity',
  },
  {
    src: '/images/gallery/book-distribution.jpg',
    alt: 'Volunteers distributing books and learning materials to children',
  },
  {
    src: '/images/gallery/children-learning-together.jpg',
    alt: 'Children learning and playing together at a community activity',
  },
  {
    src: '/images/gallery/learning-community.jpg',
    alt: 'Kadam volunteers and children gathered at a community learning session',
  },
  {
    src: '/images/gallery/founder-speaking.jpg',
    alt: 'Kadam Foundation founder speaking at an event',
  },
  {
    src: '/images/gallery/community-volunteers.jpg',
    alt: 'Kadam volunteers and community members at an outdoor gathering',
  },
  {
    src: '/images/gallery/lake-cleanup-team.jpg',
    alt: 'Volunteers working together during a lake cleanup drive',
  },
  {
    src: '/images/gallery/lake-cleanup-action.jpg',
    alt: 'A volunteer taking part in a lakeside cleanup activity',
  },
  {
    src: '/images/gallery/community-gathering.jpg',
    alt: 'Kadam volunteers gathered together at a community event',
  },
];

export default function GalleryPage() {
  return (
    <main className="flex-grow">
      <section className="mx-auto max-w-7xl px-space-lg pb-12 pt-12 md:px-margin md:pb-16 md:pt-16">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary">
          Photo Gallery
        </h1>
      </section>
      <section
        aria-label="Kadam Foundation photo gallery"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-space-lg pb-20 sm:grid-cols-2 md:px-margin lg:grid-cols-3"
      >
        {GALLERY_IMAGES.map(({ src, alt }) => (
          <figure
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-clay-soft"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
          </figure>
        ))}
      </section>
    </main>
  );
}
