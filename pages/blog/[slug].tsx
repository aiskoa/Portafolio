import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'; // Este es el plugin que necesitas
import Link from "next/link";
import Head from "next/head";
import { config } from "../../config";
import styles from "./post.module.css";

export default function PostPage({
  frontmatter: { title, date, cover_image, alt, excerpt },
  content,
}) {
  return (
    <>
      <Head>
        <title>Rawier - Blog</title>
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="../Rawier-icon.png"
        />
        <meta property="og:image" content={config.github.url} />
        <meta name="description" content={excerpt} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://Rawier.vercel.app" />
      </Head>
      <div className="container mx-auto">
        <div className="flex justify-start text-center">
          <Link href="/blog">
            <button
              type="button"
              className="me-5 mt-3 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              🢀
            </button>
          </Link>
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-3xl">{title}</h1>
            <div className="text-xl">{date}</div>
            <img src={cover_image} alt={alt} />
          </div>
          <div className={`py-3 mt-3 text-base ${styles.markdownContent}`}>
            {/* Procesa el contenido Markdown */}
            <ReactMarkdown
  remarkPlugins={[gfm]} // Añade el plugin aquí
  className={styles.markdownContent}
  components={{
    blockquote: BlockquoteComponent,
    code: CodeComponent,
  }}
>
  {content}
</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

const BlockquoteComponent = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

const CodeComponent = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <pre className={styles.code}>
      <code className={`language-${match[1]}`} {...props}>
        {String(children).replace(/\n$/, "")}
      </code>
    </pre>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export async function getStaticPaths({ locales }) {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.flatMap((filename) => {
    return locales.map((locale) => {
      return {
        params: {
          slug: filename.replace(".md", ""),
        },
        locale,
      };
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string; locale: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
