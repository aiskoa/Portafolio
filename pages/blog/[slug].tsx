import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'; // Este es el plugin que necesitas
import Link from "next/link";
import Head from "next/head";
import { config } from "../../config";
import styles from "./post.module.css";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c';
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql';
import php from 'react-syntax-highlighter/dist/cjs/languages/prism/php';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import batch from 'react-syntax-highlighter/dist/cjs/languages/prism/batch';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import ignore from 'react-syntax-highlighter/dist/cjs/languages/prism/ignore';
import powershell from 'react-syntax-highlighter/dist/cjs/languages/prism/powershell';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useTranslation from "next-translate/useTranslation";

// Registra el lenguaje Python
SyntaxHighlighter.registerLanguage('c', c);
SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('nx', ignore);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('yaml', yaml);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('batch', batch);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('powershell', powershell);
SyntaxHighlighter.registerLanguage('javascript', javascript);

interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
  alt: string;
  excerpt: string;
  tags1: string;
  tags2: string;
}

interface Props {
  frontmatter: Frontmatter;
  content: string;
}

export default function PostPage({ frontmatter, content }: Props) {
  const { title, date, cover_image, alt, excerpt, tags1, tags2 } = frontmatter;
  const { t } = useTranslation("index");
  return (
    <>
      <Head>
        <title>Rawier - Blog</title>
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="../Rawier-icon.png"
        />
        <meta name="description" content={excerpt} />
        <meta property="og:site_name" content="Rawier Cybersecurity"/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://rawier.vercel.app" />
        <meta property="og:image" content={cover_image}/>
        <meta name="theme-color:" content="#8e52f5"></meta>
      </Head>
      <div className="container mx-auto">
        <div className="flex justify-start text-center">
          <Link href="/blog">
            <button
              type="button"
              className="me-5 mt-3 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
              </svg>
            </button>
          </Link>
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-3xl">{title}</h1>
            <div className="text-xl">{excerpt}</div>
            <div className="text-xl">{date}</div>
            <div className="text-sm">{tags1}, {tags2}</div>
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

interface BlockquoteProps {
  children?: React.ReactNode;
}

const BlockquoteComponent: React.FC<BlockquoteProps> = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

interface CodeComponentProps {
  node?: any; // Hacer la prop 'node' opcional
  inline?: boolean;
  className?: string; // Hacer la prop 'className' opcional
  children?: React.ReactNode; // Hacer la prop 'children' opcional
}

const CodeComponent: React.FC<CodeComponentProps> = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  return !inline && match ? (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          padding: "0.1em 0.5em",
          background: "#333",
          color: "#fff",
          fontSize: "0.7em",
          borderRadius: "0.25em",
          zIndex: 1,
        }}
      >
        #{language.toUpperCase()}
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            padding: "0.5em",
            background: "rgba(255, 255, 255, 0.8)",
            color: "black",
            borderRadius: "0.25em",
          }}
        >
          {copied ? (
            <span style={{ color: "violet" }}>Copied!</span>
          ) : (
            <CopyToClipboard text={String(children)} onCopy={() => setCopied(true)}>
              <button style={{ cursor: "pointer" }}>Copy</button>
            </CopyToClipboard>
          )}
        </div>
        <SyntaxHighlighter language={language} style={okaidia}>
          {String(children)}
        </SyntaxHighlighter>
      </div>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export async function getStaticPaths({ locales }: { locales: string[] }) {
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

interface Params {
  params: { slug: string; locale: string };
}

export async function getStaticProps({ params }: Params) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", params.slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
