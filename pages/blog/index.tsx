import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../../components/section/post/index";
import { sortByDate } from "../../utils/index";
import { Key } from "react";
import { IPost, PostsType } from "../../models";
import { config } from "../../config";

export default function Blog({ posts }: PostsType) {
  return (
    <div>
      <Head>
        <title>Rawier - Blog</title>
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="../Rawier-icon.png"
        />
        <noscript>
          <h1>
            You need to enable JavaScript to run this app.
          </h1>
        </noscript>
        <meta property="og:image" content={config.github.url} />
        <meta
          name="description"
          content="Blog section - Here I have all the blog posts I had written in the past"
        ></meta>
        <meta
          property="og:description"
          content="Blog section - Here I have all the blog posts I had written in the past"
        />
        <meta property="og:title" content="Rawier - Blog" />
        <meta property="og:url" content="https://Rawier.vercel.app" />
      </Head>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {posts.map((post: IPost, index: Key | null | undefined) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      // @ts-ignore
      posts: posts.sort(sortByDate),
    },
  };
}
