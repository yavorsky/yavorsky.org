import type { Metadata } from 'next';
import Link from 'next/link';
import { Figure } from '@/app/components/figure';
import { DOSES } from '@/app/components/sand';

export const metadata: Metadata = {
  title: 'The sand is dopamine',
  description:
    'A note on the plate of sand on the first page: what it shows, what the sand stands for, and the six substances.',
};

// Index-aligned with DOSES: what the substance does in fact, and on the plate.
const PLATES = [
  {
    section: 'About',
    fact: 'Cocaine, under its chemical name. It blocks the transporter that clears dopamine away, so dopamine piles up where it was released.',
    here: 'Nothing is cleared. The lines grow wide.',
  },
  {
    section: 'Research',
    fact: 'Makes dopamine cells fire in short bursts. A pulse, then nothing, then the wish for another.',
    here: 'The sand is thrown off the lines in three quick waves, then left alone to find them again.',
  },
  {
    section: 'Build',
    fact: 'Blocks the same transporter as cocaine, slowly and evenly. Prescribed for attention.',
    here: 'Nothing is cleared. The widest and stillest lines of the six.',
  },
  {
    section: 'Read',
    fact: 'Does not touch dopamine at all. It blocks adenosine, the signal for tiredness, which otherwise holds dopamine’s receptors back.',
    here: 'The thinnest lines. Every grain trembles a little and none of them stop.',
  },
  {
    section: 'Play',
    fact: 'MDMA, under its official name. It runs the transporters backwards, pushing out serotonin above all, and dopamine with it.',
    here: 'Nothing is cleared and nothing rests. The figure is there but never settles.',
  },
  {
    section: 'Cook',
    fact: 'The raw material. The body makes dopamine out of it. The standard treatment for Parkinson’s disease.',
    here: 'More sand: 46,000 grains where the others have 30,000.',
  },
];

function Formula({ formula }: { formula: string }) {
  return (
    <span className="wall-formula" aria-label={formula}>
      {[...formula.matchAll(/([A-Z][a-z]?)(\d*)/g)].map(([, atom, count]) => (
        <span key={atom}>
          {atom}
          {count && <i>{count}</i>}
        </span>
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <article className="wall">
      <header className="wall-label">
        <h1>The sand is dopamine</h1>
        <p>Artem Yavorsky, 2026</p>
        <p>Simulated sand on a vibrating plate. 30,000 to 46,000 grains.</p>
      </header>

      <div className="wall-text">
        <section>
          <h2>The plate</h2>
          <p>
            In 1787 Ernst Chladni scattered sand on a metal plate and drew a
            violin bow down its edge. The plate rang. The sand jumped away from
            every part that moved and came to rest on the lines that stayed
            still. A different pitch draws a different figure.
          </p>
          <p>
            The plate on the <Link href="/">first page</Link> is that
            experiment, computed. The sand settles where
          </p>
          <p className="wall-rule">cos nπx · cos mπy ± cos mπx · cos nπy = 0</p>
        </section>
        <section>
          <h2>The sand</h2>
          <p>
            Here the sand stands for dopamine, the chemical a brain releases
            when something is worth doing again. It is released, it lingers for
            a moment, and it is cleared away.
          </p>
          <p>
            A drug changes one of those three steps. So does each section of
            this site: each is something I do, shown as the substance it most
            feels like.
          </p>
        </section>
      </div>

      <ol className="wall-plates">
        {PLATES.map((plate, index) => (
          <li key={plate.section}>
            <Figure dose={index} />
            <Formula formula={DOSES[index].formula} />
            <h3>{DOSES[index].what}</h3>
            <Link
              className="wall-section"
              href={`/#${plate.section.toLowerCase()}`}
            >
              {plate.section}
            </Link>
            <dl>
              <dt>In fact</dt>
              <dd>{plate.fact}</dd>
              <dt>Here</dt>
              <dd>{plate.here}</dd>
            </dl>
          </li>
        ))}
      </ol>

      <p className="wall-note">
        The figures are physics. The pairing is not science. It is one person’s
        guess about his own head, and none of it is advice.
      </p>
    </article>
  );
}
