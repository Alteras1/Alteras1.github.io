import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";

import styles from "styles/Home.module.scss";
import Title from "components/Title";
import { GetStaticProps } from "next";

interface IProps {
  slugs: any[];
}

const blog: React.FC<IProps> = (prop: IProps) => (
  <div className={styles.container}>
    <Head>
      <title>Alteras1: Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <div>
        {prop.slugs.map((slug) => {
          return (
            <div key={slug}>
              <Link href="/blog/[slug]" as={"/blog/" + slug}>
                <a>{"/blog/" + slug}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default blog;
