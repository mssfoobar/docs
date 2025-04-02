import '@fontsource-variable/geist';
import { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <ThemedImage
          width="215"
          alt="AGIL Ops Hub Logo"
          sources={{
            dark: useBaseUrl('/img/logo.png'),
            light: useBaseUrl('/img/logo.png'),
          }}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <Heading as="h2" className="hero__subtitle">
          {siteConfig.tagline}
        </Heading>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/2.0.0/overview/features/scope">
            Let's Go
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Command & Control For Your Domain">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
