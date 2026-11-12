// Everything the site lists is one kind of thing: a work. Adding a paper, a
// game or a recipe is one entry here (posts come from their MDX files).

export const sections = ['Research', 'Build', 'Read', 'Play', 'Cook'] as const;
export type Section = (typeof sections)[number];

export type Work = {
  section: Section;
  title: string;
  note?: string;
  meta: string;
  href: string;
};

export const works: Work[] = [
  {
    section: 'Research',
    title:
      'The Harness Effect: How Orchestration Design Sets the Token Economics of Enterprise Agentic AI',
    note: 'arXiv:2607.06906',
    meta: 'Jul 2026',
    href: 'https://arxiv.org/abs/2607.06906',
  },
  {
    section: 'Build',
    title: 'unbuilt.app',
    note: 'Reads a live website and names the stack it was built with. Open source',
    meta: '2024 –',
    href: 'https://unbuilt.app',
  },
  {
    section: 'Build',
    title: 'simr',
    note: 'Recipes without the life stories',
    meta: '2025 –',
    href: 'https://simr.app',
  },
  {
    section: 'Build',
    title: 'Babel',
    note: 'The JavaScript compiler. Team member',
    meta: 'Open source',
    href: 'https://babeljs.io',
  },
  {
    section: 'Read',
    title:
      'Engineering in the Age of Uncertainty: Building Systems Without Determinism',
    note: 'Talk, WAWTech',
    meta: '2025',
    href: 'https://www.youtube.com/watch?v=XBzDgGKE7Bo',
  },
  {
    section: 'Play',
    title: 'Blackout',
    note: 'A browser game for two about the datacenters behind AI',
    meta: 'Nov 2026',
    href: 'https://www.black-out.space',
  },
  {
    section: 'Cook',
    title: 'Lyon Onion Soup',
    note: 'Caramelized onions, rich beef broth, crusty bread and melted Gruyère',
    meta: 'French',
    href: 'https://simr.app/r/bPGWhI0Nfs',
  },
  {
    section: 'Cook',
    title: 'Buldak Ramen with IKEA Meatballs, Shrimp, and Egg',
    note: 'A spicy stir-fry built on buldak ramen',
    meta: 'Fusion',
    href: 'https://simr.app/r/ruOqwMfUlS',
  },
  {
    section: 'Cook',
    title: 'Ukrainian Beef Borscht with Smoky Flavor',
    note: 'Traditional borscht with smoked paprika and smoked cherry tomatoes',
    meta: 'Ukrainian',
    href: 'https://simr.app/r/Nn7DeC3mLW',
  },
];

// Number the works in reading order.
export function catalogue(all: Work[]) {
  return sections
    .flatMap((section) => all.filter((work) => work.section === section))
    .map((work, index) => ({ ...work, no: String(index + 1).padStart(2, '0') }));
}

export type Entry = ReturnType<typeof catalogue>[number];
