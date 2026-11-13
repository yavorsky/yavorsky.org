// Everything the homepage lists is one kind of thing: a work. Adding a paper,
// a game or a recipe is one entry here (posts come from their MDX files).

export const sections = ['Research', 'Build', 'Read', 'Play', 'Cook'] as const;
export type Section = (typeof sections)[number];

export type Work = {
  section: Section;
  title: string;
  note?: string;
  href: string;
};

export const works: Work[] = [
  {
    section: 'Research',
    title: 'The Harness Effect',
    note: 'How orchestration design sets the token economics of enterprise agentic AI. arXiv, 2026',
    href: 'https://arxiv.org/abs/2607.06906',
  },
  {
    section: 'Build',
    title: 'unbuilt.app',
    note: 'Reads a live website and names the stack it was built with',
    href: 'https://unbuilt.app',
  },
  {
    section: 'Build',
    title: 'simr',
    note: 'Recipes without the life stories',
    href: 'https://simr.app',
  },
  {
    section: 'Build',
    title: 'Babel',
    note: 'The JavaScript compiler. Team member',
    href: 'https://babeljs.io',
  },
  {
    section: 'Read',
    title: 'Agents That Work While You Don’t',
    note: 'Workshop: building ambient AI from scratch. WAWTech Live, 2026',
    href: 'https://www.youtube.com/watch?v=JCwf9Lf1TR4',
  },
  {
    section: 'Read',
    title: 'Engineering in the Age of Uncertainty',
    note: 'Talk, WAWTech 2025',
    href: 'https://www.youtube.com/watch?v=XBzDgGKE7Bo',
  },
  {
    section: 'Play',
    title: 'Blackout',
    note: 'A browser game for two about the datacenters behind AI',
    href: 'https://www.black-out.space',
  },
  {
    section: 'Cook',
    title: 'Lyon Onion Soup',
    note: 'French',
    href: 'https://simr.app/r/bPGWhI0Nfs',
  },
  {
    section: 'Cook',
    title: 'Buldak Ramen with IKEA Meatballs',
    note: 'Fusion',
    href: 'https://simr.app/r/ruOqwMfUlS',
  },
  {
    section: 'Cook',
    title: 'Beef Borscht with Smoky Flavor',
    note: 'Ukrainian',
    href: 'https://simr.app/r/Nn7DeC3mLW',
  },
];
