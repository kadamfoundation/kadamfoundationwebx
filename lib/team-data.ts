export type TeamProfile = {
  name?: string;
  image?: string;
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
    member: { name: 'Prachi Dwivedi', image: '/images/leadership/founder.jpg' },
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

const CITIES: CityDefinition[] = [
  {
    slug: 'bhopal',
    name: 'Bhopal',
    cityHead: { name: 'Rashi Shukla', image: '/images/team/bhopal-city-head.jpg' },
  },
  { slug: 'indore', name: 'Indore' },
  { slug: 'sehore', name: 'Sehore' },
  { slug: 'rewa', name: 'Rewa' },
  { slug: 'ujjain', name: 'Ujjain' },
  { slug: 'tikamgarh', name: 'Tikamgarh' },
  { slug: 'guna', name: 'Guna' },
  { slug: 'delhi', name: 'Delhi' },
  { slug: 'hubli-karnataka', name: 'Hubli, Karnataka' },
  { slug: 'pune', name: 'Pune' },
  { slug: 'gwalior', name: 'Gwalior' },
  { slug: 'jabalpur', name: 'Jabalpur' },
  { slug: 'satna', name: 'Satna' },
  { slug: 'sagar', name: 'Sagar' },
  { slug: 'vidisha', name: 'Vidisha' },
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
    coordinators: coordinators?.[department.id] ?? [{}],
  })),
}));