import React from 'react';
import Head from 'next/head';

import styles from 'styles/Home.module.scss';
import Title from 'components/Title';

const Home: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Title />

      <p className={styles.description}>
        Get started by editing <code>src/pages/index.js</code>
      </p>

      <p className={styles.description}>This is not an official starter!</p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with ZEIT Now.
          </p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a href="https://zeit.co" target="_blank" rel="noopener noreferrer">
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

  </div>
);

export default Home;