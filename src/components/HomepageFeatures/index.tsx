import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Activity, Cpu, Pickaxe } from 'lucide-react';

type FeatureItem = {
  title: string;
  ImageComponent: typeof Activity;
  color: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sense',
    ImageComponent: Activity,
    color: "#E21F1C",
    description: (
      <>
        We integrate, aggregate and contextualize data from disparate sources in real-time, enabling
        a holistic view of the domain.
      </>
    ),
  },
  {
    title: 'Process',
    ImageComponent: Cpu,
    color: "#E21F1C",
    description: (
      <>
        Your data is analyzed through a suite of customizable modules to produce optimal results.
      </>
    ),
  },
  {
    title: 'Act',
    ImageComponent: Pickaxe,
    color: "#E21F1C",
    description: (
      <>
        Get powerful visualizations and actionable insights to make quick, effective decisions now.
      </>
    ),
  },
];

function Feature({ title, ImageComponent, description, color }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ImageComponent className={styles.featureSvg} style={{ color }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
