import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(path.join("posts", slug + ".md")).toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString: htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
