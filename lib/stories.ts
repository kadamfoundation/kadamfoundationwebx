export type StoryPost = {
  slug: string;
  category: string;
  date: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  location: string;
  body: string;
  impact: string;
};

export const STORY_POSTS: StoryPost[] = [
  {
    slug: 'weekend-math-literacy-circles',
    category: 'Field report',
    date: 'October 2024',
    publishedAt: '2024-10',
    title: 'Weekend Math & Literacy Circles in Peri-Urban Basti',
    excerpt:
      'Volunteer educators and local families are building study corners and regular homework habits for children in North Delhi.',
    location: 'Cluster Pod 4, North Delhi',
    body:
      'At Cluster Pod 4 in North Delhi, volunteer educators work with local families to create quiet places to study and make time for regular homework. The weekend math and literacy circles offer children a consistent space to practise foundational skills.',
    impact: '32 students regularly attending',
  },
  {
    slug: 'inter-collegiate-civic-immersion-bootcamp',
    category: 'Program update',
    date: 'September 2024',
    publishedAt: '2024-09',
    title: 'Inter-Collegiate Civic Immersion Bootcamp',
    excerpt:
      'Undergraduate students connect with municipal ward councillors and sanitation staff to work through local waste challenges.',
    location: 'University Hub, Bengaluru',
    body:
      'The civic immersion bootcamp connects undergraduate students with municipal ward councillors and local sanitation staff. Together, they examine community waste bottlenecks and explore practical ways to address them.',
    impact: '18 campus chapters engaged',
  },
  {
    slug: 'safe-spaces-listening-circles',
    category: 'Community voice',
    date: 'August 2024',
    publishedAt: '2024-08',
    title: 'Safe Spaces: Establishing Bi-Weekly Listening Circles',
    excerpt:
      'Youth peer-listeners host supportive, non-judgmental spaces for first-generation college students experiencing academic anxiety and isolation.',
    location: 'Student Center, Jaipur',
    body:
      'In Jaipur, youth peer-listeners host bi-weekly listening circles for first-generation college students. The conversations offer a non-judgmental space to discuss academic anxiety and social isolation. The field log records an anonymized audio story to protect participants’ privacy.',
    impact: 'More than 60 youth participants',
  },
  {
    slug: 'looms-of-dignity-weaving-collective',
    category: 'Impact story',
    date: 'July 2024',
    publishedAt: '2024-07',
    title: 'Looms of Dignity: Traditional Weaving Collective',
    excerpt:
      'Equipment support and financial literacy workshops help women artisans sell handwoven textiles directly to neighborhood markets.',
    location: 'Artisan Basti, Lucknow',
    body:
      'In Lucknow, the weaving collective combines equipment support with financial literacy workshops. The aim is to help women artisans bring handwoven textiles directly to neighborhood markets.',
    impact: '15 women’s cooperatives established',
  },
  {
    slug: 'community-library-mobile-reading-pod',
    category: 'Program update',
    date: 'June 2024',
    publishedAt: '2024-06',
    title: 'Community Library Box & Mobile Reading Pod',
    excerpt:
      'A neighborhood reading initiative brings illustrated vernacular storybooks and solar-powered reading lamps to Gurugram.',
    location: 'Informal Settlement, Gurugram',
    body:
      'The community library initiative brings illustrated storybooks in local languages into the neighborhood and sets up solar-powered reading lamps for evening reading hours.',
    impact: 'More than 200 books cataloged',
  },
  {
    slug: 'youth-participatory-budgeting-civic-dialogue',
    category: 'Field report',
    date: 'May 2024',
    publishedAt: '2024-05',
    title: 'Youth Participatory Budgeting & Civic Dialogue',
    excerpt:
      'Youth fellows bring informal-sector workers and municipal representatives together to prioritize a drinking-water repair.',
    location: 'Community Hall, Chandigarh',
    body:
      'In Chandigarh, youth fellows facilitate open dialogue between informal-sector workers and municipal representatives. The group’s discussion focused on prioritizing a drinking-water repair in the neighborhood.',
    impact: 'Three neighborhood improvements approved',
  },
  {
    slug: 'emotional-first-aid-workshops',
    category: 'Program update',
    date: 'April 2024',
    publishedAt: '2024-04',
    title: 'Emotional First-Aid Workshops for Student Volunteers',
    excerpt:
      'Field volunteers learn active listening, how to recognize burnout, and when to refer someone to professional mental-health support.',
    location: 'Collegiate Chapter, Dehradun',
    body:
      'The workshops prepare grassroots volunteers to listen actively, recognize signs of emotional burnout, and follow ethical referral protocols when professional mental-health support is needed.',
    impact: '45 volunteers trained in peer first aid',
  },
  {
    slug: 'digital-banking-household-financial-resilience',
    category: 'Impact story',
    date: 'March 2024',
    publishedAt: '2024-03',
    title: 'Digital Banking & Household Financial Resilience',
    excerpt:
      'Hands-on smartphone workshops introduce UPI payments, fraud prevention, and government small-savings schemes to local residents.',
    location: 'Women Center, Noida',
    body:
      'At the Women Center in Noida, hands-on smartphone workshops cover UPI payments, fraud prevention, and government small-savings schemes for homemakers and street vendors.',
    impact: 'More than 50 bank accounts activated',
  },
];
