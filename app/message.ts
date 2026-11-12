// The homepage message: a picture sent as one line of bits. Its length is the
// product of two primes, so there is exactly one width at which the line folds
// into a picture. The method is the Arecibo message's (1974, 1,679 bits,
// 23 x 73); the picture is this site's.

export const COLS = 41;
export const ROWS = 67;

const FONT: Record<string, string[]> = {
  A: ['.#.', '#.#', '###', '#.#', '#.#'],
  R: ['##.', '#.#', '##.', '#.#', '#.#'],
  T: ['###', '.#.', '.#.', '.#.', '.#.'],
  Y: ['#.#', '#.#', '.#.', '.#.', '.#.'],
  V: ['#.#', '#.#', '#.#', '#.#', '.#.'],
  O: ['###', '#.#', '#.#', '#.#', '###'],
  S: ['###', '#..', '###', '..#', '###'],
  K: ['#.#', '#.#', '##.', '#.#', '#.#'],
};

// Glyphs side by side, `gap` empty columns between them.
function join(glyphs: string[][], gap: number) {
  return glyphs[0].map((_, row) =>
    glyphs.map((glyph) => glyph[row]).join('.'.repeat(gap))
  );
}

const word = (text: string) =>
  join(
    text.split('').map((letter) => FONT[letter]),
    1
  );

const LT = ['...#', '..#.', '.#..', '#...', '#...', '.#..', '..#.', '...#'];
const GT = LT.map((row) => row.split('').reverse().join(''));
const SLASH = ['...#', '...#', '..#.', '..#.', '.#..', '.#..', '#...', '#...'];

// One picture per section of the index, eight rows each.
const PICTURES: { section: string; art: string[] }[] = [
  {
    // One harness, three agents.
    section: 'Research',
    art: [
      '...........###...........',
      '...........###...........',
      '............#............',
      '....#################....',
      '....#.......#.......#....',
      '...###.....###.....###...',
      '...###.....###.....###...',
      '.........................',
    ],
  },
  { section: 'Build', art: join([LT, SLASH, GT], 3) },
  {
    // A paragraph.
    section: 'Read',
    art: [
      '#####.########.###.######',
      '.........................',
      '###.######.####.#########',
      '.........................',
      '########.###.#####.######',
      '.........................',
      '####.#######.............',
      '.........................',
    ],
  },
  {
    // A board with two sites on it.
    section: 'Play',
    art: [
      '#.#.#.#.#.#.#.#.#.#.#.#.#',
      '.........................',
      '#.#.###.#.#.#.#.#.#.#.#.#',
      '....###..................',
      '#.#.###.#.#.#.#.###.#.#.#',
      '................###......',
      '#.#.#.#.#.#.#.#.###.#.#.#',
      '.........................',
    ],
  },
  {
    // A pot, on.
    section: 'Cook',
    art: [
      '......#...#...#......',
      '.....#...#...#.......',
      '.....................',
      '.###################.',
      '...#.............#...',
      '...#.............#...',
      '...#.............#...',
      '...###############...',
    ],
  },
];

const FIGURE = [
  '..###..',
  '..###..',
  '...#...',
  '#######',
  '#.###.#',
  '#.###.#',
  '..#.#..',
  '..#.#..',
  '.##.##.',
];

export type Band = { section: string; from: number; to: number };

function build() {
  const grid = Array.from({ length: ROWS }, () => new Array<number>(COLS).fill(0));
  const stamp = (art: string[], row: number, col: number) =>
    art.forEach((line, r) =>
      line.split('').forEach((cell, c) => {
        if (cell === '#') grid[row + r][col + c] = 1;
      })
    );
  const centred = (art: string[]) => Math.floor((COLS - art[0].length) / 2);

  const name = word('YAVORSKY');
  stamp(word('ART'), 1, centred(name));
  stamp(name, 7, centred(name));

  const bands: Band[] = [];
  PICTURES.forEach(({ section, art }, index) => {
    const row = 13 + index * 9;
    // The section's number, in binary, read top to bottom.
    const number = (index + 1).toString(2).padStart(3, '0').split('');
    stamp(
      number.map((bit) => (bit === '1' ? '#' : '.')),
      row + 2,
      2
    );
    stamp(art, row, centred(art) + 2);
    bands.push({ section, from: row, to: row + art.length - 1 });
  });

  stamp(FIGURE, ROWS - FIGURE.length, centred(FIGURE));
  bands.push({ section: 'Connect', from: ROWS - FIGURE.length, to: ROWS - 1 });

  return { bits: grid.flat(), bands };
}

export const { bits, bands } = build();
