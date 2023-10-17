import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import easyAsPie from '@site/static/img/easy_as_pie.svg';
import svelteLogo from '@site/static/img/svelte_logo.svg';
import tailwindLogo from '@site/static/img/tailwindcss_mark.svg';
import graphQlLogo from '@site/static/img/graphql_logo.svg';
import hasuraLogo from '@site/static/img/hasura_logo.svg';
import keyIcon from '@site/static/img/key_icon.svg';
import gearIcon from '@site/static/img/gear_icon.svg'

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
        Developer experience takes a front-seat in AGIL Ops Hub. Our goal is to ensure the project is enjoyable to use
        so developers will enjoy writing and maintaining the projects derived from AGIL Ops Hub.
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
  {
    title: 'Powered by GraphQL',
    Svg: graphQlLogo,
    description: (
      <>
        GraphQL allows us to query for exactly what we need, straight in the front-end. With GraphQL's powerful
        introspection, we can easily write and test type-safe queries using <i>graphql-tag</i> and <i>graphql-codegen</i>.
      </>
    )
  },
  {
    title: 'Powered by Hasura',
    Svg: hasuraLogo,
    description: (
      <>
        Replace simple back-end services with Hasura - create your schema and get your GraphQL API instantly. Merge
        larger services into your GraphQL API with Hasura's <i>actions</i> feature.
      </>
    )
  },
  {
    title: 'Identity & Access Management',
    Svg: keyIcon,
    description: (
      <>
        Identity and access management (provided with Keycloak) - giving us many features including OpenID Connect,
        Single Sign-On, LDAP, and Active Directory as well as social logins.
      </>
    )
  },
  {
    title: 'Ready for Testing',
    Svg: gearIcon,
    description: (
      <>
        Write end-to-end tests with Playwright and manage them with Allure for test report generation and viewing.
        Manage your code coverage and unit tests with Vitest and C8 for nodejs applications.
      </>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ padding: "2rem" }}>
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
