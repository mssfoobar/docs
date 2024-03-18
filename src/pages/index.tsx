import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Image from '@theme/ThemedImage';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Image
          width="400"
          alt="AGIL Ops Hub Logo"
          sources={{
            dark: useBaseUrl('/img/logo.png'),
            light: useBaseUrl('/img/logo.png')
          }} />
        <div className='hero__title' style={{ color: 'white' }}>
          OPERATIONS HUB
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/introduction">
            Read the Overview
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/development/introduction">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="AgilRAD 2.0">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
