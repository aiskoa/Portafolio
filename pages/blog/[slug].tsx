import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import Link from "next/link";
import Head from "next/head";
import { config } from "../../config";
import styles from "./post.module.css";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import c from 'react-syntax-highlighter/dist/cjs/languages/prism/c';
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import php from 'react-syntax-highlighter/dist/cjs/languages/prism/php';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import batch from 'react-syntax-highlighter/dist/cjs/languages/prism/batch';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import ignore from 'react-syntax-highlighter/dist/cjs/languages/prism/ignore';
import powershell from 'react-syntax-highlighter/dist/cjs/languages/prism/powershell';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import rehypeSlug from 'rehype-slug';

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

// Definir el tipo Frontmatter
interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
  alt: string;
  excerpt: string;
  tags1: string;
  tags2: string;
}

// Definir el tipo de Props para el componente
interface Props {
  frontmatter: Frontmatter;
  content: string;
}

// Definir el tipo Heading para `headings`
interface Heading {
  id: string;
  text: string;
}

export default function PostPage({ frontmatter, content }: Props) {
  const { title, date, cover_image, alt, excerpt, tags1, tags2 } = frontmatter;
  const router = useRouter(); // Inicializar el hook useRouter

  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"));
    const headingsData: Heading[] = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.innerText,
    }));
    setHeadings(headingsData);
  }, [content]);

  const scrollTo = (id: string) => {
    scroller.scrollTo(id, {
      smooth: true,
      offset: -100,
    });
  };

  return (
    <>
      <Head>
        <title>Rawier - Blog</title>
        <link rel="shortcut icon" type="image/jpg" href="../Rawier-icon.png" />
        <meta name="description" content={excerpt} />
        <meta property="og:site_name" content="Rawier Cybersecurity" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://rawier.vercel.app" />
        <meta property="og:image" content={cover_image} />
        <meta name="theme-color:" content="#8e52f5"></meta>
      </Head>
      <div className="container mx-auto">
        <div className="flex justify-start ml-5 text-center">
          <Link href="/blog">
            <button
              type="button"
              className="me-5 mt-3 inline-block px-6 py-2.5 bg-purple-600 text-white dark:text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
              </svg>
            </button>
          </Link>
        </div>
      {/* Contenedor principal */}
      <div className="container flex flex-col px-4 mx-auto md:px-0 md:flex-row">
        {/* Índice flotante, oculto en pantallas pequeñas */}
        <aside className="z-10 hidden w-full p-4 bg-white rounded-lg shadow-lg dark:bg-slate-800 md:block md:fixed md:w-1/4 top-20 right-10">
          <h3 className="justify-center mb-2 font-bold">--- Índice ---</h3>
          <ul>
            {headings.map((heading) => (
              <li key={heading.id}>
                <button
                  onClick={() => scrollTo(heading.id)}
                  className="font-semibold text-blue-500 dark:text-violet-300 hover:underline"
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {/* Contenido del post */}
        <div className={`flex-1 mt-5 md:mt-0 post-content ${styles.markdownContent}`}>
          <div className="px-2 text-center md:px-0">
            <h1 className="text-2xl md:text-3xl">{title}</h1>
            <div className="text-lg md:text-xl">{excerpt}</div>
            <div className="text-base md:text-xl">{date}</div>
            <div className="mb-4 text-xs md:text-sm">
              {tags1}, {tags2}
            </div>
            <img src={cover_image} alt={alt} className="w-full mx-auto mb-4 md:w-auto" />
          </div>
          <div className="py-3 mt-3 text-sm md:text-base">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              rehypePlugins={[rehypeSlug]}
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
      </div>
    </>
  );
}

// Componente de blockquote
interface BlockquoteProps {
  children?: React.ReactNode;
}

const BlockquoteComponent: React.FC<BlockquoteProps> = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

// Define las props para el componente CodeComponent
interface CodeComponentProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CodeComponent: React.FC<CodeComponentProps> = ({
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
      {/* Indicar el lenguaje de programación en la esquina superior izquierda */}
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
        {/* Botón de copiar en la esquina superior derecha */}
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
        {/* Componente de resaltado de sintaxis */}
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

// Definir el tipo para los parámetros en getStaticPaths y getStaticProps
interface Params {
  slug: string;
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.flatMap((filename) => {
    return locales.map((locale) => ({
      params: { slug: filename.replace(".md", "") },
      locale,
    }));
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Params }) {
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