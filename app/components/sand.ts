// One plate of sand per section. The sand gathers on the still lines of a
// vibrating square plate (a Chladni figure), and it also behaves as dopamine
// does: each section changes one thing about how it arrives, rests or leaves.
export type Dose = {
  what: string;
  formula: string;
  // The plate's mode numbers and sign: which figure the sand settles into.
  mode: [number, number, number];
  // 1: resting grains are now and then taken up and set down elsewhere.
  taken?: number;
  // The taking-up comes in three waves, then a pause.
  burst?: boolean;
  // Sand is turned away from the still lines instead of drawn to them.
  shut?: boolean;
  // How far from a still line sand comes to rest.
  band?: number;
  // Movement that never dies down.
  rest?: number;
  grains?: number;
};

export const DOSES: Dose[] = [
  // Ego. Cocaine under its chemical name: nothing is cleared away, so the lines swell.
  {
    what: 'Benzoylmethylecgonine',
    formula: 'C17H21NO4',
    mode: [1, 2, 1],
    taken: 0,
    band: 0.3,
  },
  { what: 'Nicotine', formula: 'C10H14N2', mode: [2, 3, -1], burst: true },
  {
    what: 'Methylphenidate',
    formula: 'C14H19NO2',
    mode: [1, 4, 1],
    taken: 0,
    band: 0.42,
  },
  // A mild, steady lift: the figure holds and never quite stops moving.
  {
    what: 'Caffeine',
    formula: 'C8H10N4O2',
    mode: [3, 4, -1],
    rest: 0.0009,
    band: 0.04,
  },
  // MDMA under its official name: sand is pushed out and never settles.
  {
    what: 'Midomafetamine',
    formula: 'C11H15NO2',
    mode: [2, 5, 1],
    taken: 0,
    rest: 0.0032,
    band: 0.12,
  },
  { what: 'Levodopa', formula: 'C9H11NO4', mode: [3, 6, -1], grains: 46000 },
];

export const FULL = 46000;
export const USUAL = 30000;
export const SAND = '#e9dfc7';

// A plate's worth of sand. `scale` makes a smaller plate with less sand on it.
export function makeSand(scale = 1) {
  const x = new Float32Array(FULL);
  const y = new Float32Array(FULL);
  const pinch = Math.ceil(40 * scale);
  let n = 0;
  let band = 0;
  let clock = 0;

  const add = (count: number) => {
    for (let k = 0; k < count && n < FULL; k++) {
      x[n] = Math.random();
      y[n++] = Math.random();
    }
  };

  const step = (dose: Dose) => {
    const [m, nn, sign] = dose.mode;
    const taken = dose.taken ?? 1;
    const grains = Math.round((dose.grains ?? USUAL) * scale);
    const P = Math.PI;
    const dt = 1 / 60;
    clock += dt;
    band += ((dose.band ?? 0) - band) * 0.012;
    // Sand is sprinkled on or brushed off a little at a time.
    if (n < grains) add(Math.min(pinch, grains - n));
    else {
      for (let c = Math.min(pinch, n - grains); c > 0; c--) {
        const i = (Math.random() * n) | 0;
        const last = --n;
        x[i] = x[last];
        y[i] = y[last];
      }
    }
    const wave = clock % 3.6;
    const rate = dose.burst
      ? wave < 1.2 && wave % 0.4 < 0.16
        ? 0.2
        : 0.002
      : 0.022;
    const lift = taken * rate * dt;
    const rest = dose.rest ?? 0;
    for (let i = 0; i < n; i++) {
      const a = Math.abs(
        Math.cos(nn * P * x[i]) * Math.cos(m * P * y[i]) +
          sign * Math.cos(m * P * x[i]) * Math.cos(nn * P * y[i])
      );
      const loose = dose.shut ? Math.max(0, 1.45 - a) : Math.max(0, a - band);
      if (!loose && lift && Math.random() < lift) {
        x[i] = Math.random();
        y[i] = Math.random();
        continue;
      }
      const r = Math.min(1, loose) * 0.014 + rest;
      const t = Math.random() * 6.2832;
      const nx = x[i] + Math.cos(t) * r;
      const ny = y[i] + Math.sin(t) * r;
      x[i] = nx < 0 ? -nx : nx > 1 ? 2 - nx : nx;
      y[i] = ny < 0 ? -ny : ny > 1 ? 2 - ny : ny;
    }
  };

  add(Math.round(USUAL * scale));

  return {
    x,
    y,
    step,
    get n() {
      return n;
    },
  };
}
