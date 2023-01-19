import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import easyAsPie from '@site/static/img/easy_as_pie.svg';
import svelteLogo from '@site/static/img/svelte_logo.svg';
import tailwindLogo from '@site/static/img/tailwindcss_mark.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy As Pie',
    Svg: easyAsPie,
    description: (
      <>
        Developer experience takes a front-seat in AgilRAD 2.0. Our goal is to ensure the project is enjoyable to use
        so developers will enjoy writing and maintaining the projects derived from AgilRAD.
      </>
    ),
  },
  {
    title: 'Powered by Svelte',
    Svg: svelteLogo,
    description: (
      <>
        <p>
          Svelte is a radical new approach to building user interfaces. Svelte shifts that work into a compile step that happens when you build your app.
        </p>
        <p>
          Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.
        </p>
      </>
    ),
  },
  {
    title: 'Powered by Tailwind',
    Svg: tailwindLogo,
    description: (
      <>
        Tailwind is a utility-first CSS framework with mobile-first responsive classes, state variants, easy extensibility,
        a tiny package size from removing unused CSS on production build, and much, much more.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
