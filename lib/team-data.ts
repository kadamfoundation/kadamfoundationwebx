export type TeamProfile = {
  name?: string;
  honorific?: 'Ms.' | 'Mr.';
  image?: string;
  role?: string;
  bio?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};

export type CentralLeader = {
  id: string;
  role: 'Founder' | 'Director';
  member: TeamProfile;
};

export type DepartmentId =
  | 'project-siksha'
  | 'project-samanvay'
  | 'social-media'
  | 'sponsorship-pr'
  | 'volunteer-management';

export type CityDepartment = {
  id: DepartmentId;
  name: string;
  coordinators: TeamProfile[];
};

export type CityTeamData = {
  slug: string;
  name: string;
  cityHead?: TeamProfile;
  departments?: CityDepartment[];
};

type CityDefinition = {
  slug: string;
  name: string;
  cityHead?: TeamProfile;
  coordinators?: Partial<Record<DepartmentId, TeamProfile[]>>;
};

export const CENTRAL_LEADERSHIP: CentralLeader[] = [
  {
    id: 'founder',
    role: 'Founder',
    member: { name: 'Ms. Prachi Dwivedi', image: '/images/leadership/founder.jpg' },
  },
  {
    id: 'director-1',
    role: 'Director',
    member: { name: 'Dr. Pradeep Dwivedi' },
  },
  {
    id: 'director-2',
    role: 'Director',
    member: { name: 'Mrs. Shachi Dwivedi' },
  },
];

export const ADVISORS = ['CA Gautam Jain', 'CA Shreya Jain'] as const;

const CITIES: CityDefinition[] = [
  {
    slug: 'bhopal',
    name: 'Bhopal',
    cityHead: {
      honorific: 'Ms.',
      name: 'Rashi Shukla',
      image: '/images/team/bhopal-city-head.jpg',
    },
  },
  {
    slug: 'indore',
    name: 'Indore',
    cityHead: {
      honorific: 'Ms.',
      name: 'Tanisha Wade',
      image: '/images/team/indore-city-head.jpeg',
    },
  },
  { slug: 'sehore', name: 'Sehore' },
  {
    slug: 'rewa',
    name: 'Rewa',
    cityHead: {
      honorific: 'Ms.',
      name: 'Vaishnavi Mishra',
      image: '/images/team/rewa-city-head.jpeg',
    },
  },
  {
    slug: 'ujjain',
    name: 'Ujjain',
    cityHead: {
      honorific: 'Ms.',
      name: 'Atshi Meshram',
      image: '/images/team/ujjain-city-head.jpeg',
    },
  },
  {
    slug: 'tikamgarh',
    name: 'Tikamgarh',
    cityHead: {
      honorific: 'Ms.',
      name: 'Nahid Khan',
      image: '/images/team/tikamgarh-city-head.jpeg',
    },
  },
  { slug: 'guna', name: 'Guna' },
  {
    slug: 'delhi',
    name: 'Delhi',
    cityHead: {
      honorific: 'Ms.',
      name: 'Vaishnavi Gupta',
      image: '/images/team/delhi-city-head.jpeg',
    },
  },
  {
    slug: 'hubli-karnataka',
    name: 'Hubli, Karnataka',
    cityHead: {
      honorific: 'Mr.',
      name: 'Mahammad Akram Ranebennur',
      image: '/images/team/hubli-karnataka-city-head.jpeg',
    },
  },
  { slug: 'pune', name: 'Pune' },
  { slug: 'gwalior', name: 'Gwalior' },
  { slug: 'jabalpur', name: 'Jabalpur' },
  { slug: 'satna', name: 'Satna' },
  { slug: 'sagar', name: 'Sagar' },
  {
    slug: 'vidisha',
    name: 'Vidisha',
    cityHead: {
      honorific: 'Ms.',
      name: 'Naini Kirar',
      image: '/images/team/vidisha-city-head.jpeg',
    },
  },
];

const DEPARTMENTS: { id: DepartmentId; name: string }[] = [
  { id: 'project-siksha', name: 'Project Siksha' },
  { id: 'project-samanvay', name: 'Project Samanvay' },
  { id: 'social-media', name: 'Social Media' },
  { id: 'sponsorship-pr', name: 'Sponsorship & PR' },
  { id: 'volunteer-management', name: 'Volunteer Management' },
];

export const CITY_TEAMS: CityTeamData[] = CITIES.map(({ cityHead, coordinators, ...city }) => ({
  ...city,
  cityHead: cityHead ?? {},
  departments: DEPARTMENTS.map((department) => ({
    ...department,
    coordinators: coordinators?.[department.id] ?? [],
  })),
}));