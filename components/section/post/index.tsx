import Link from "next/link";
import { PostType } from "../../../models";
import useTranslation from "next-translate/useTranslation";

export default function Post({ post }: PostType) {
  const { t } = useTranslation("index");
  return (
    <Link
      className="no-underline text-grey-darker hover:text-red-dark"
      href={`/blog/${post.slug}`}
    >
      <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="container overflow-hidden border-2 rounded-lg shadow-lg dark:hover:border-violet-700 hover:border-black dark:bg-slate-800">
          <a href={`/blog${post.slug}`}>
            <img
              alt="Placeholder"
              className="block w-full h-auto"
              src={post.frontmatter.cover_image}
            />
          </a>
          <div className="container">
            <header className="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 className="text-lg">
                <a
                  href={`/blog/${post.slug}`}
                  className="hover:underline dark:text-white"
                >
                  {post.frontmatter.title}
                </a>
              <div className="flex items-center">
                <button title="Badge" className="flex items-center p-1 border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  <span className="flex-grow text-xs">{post.frontmatter.tags1}</span>
                </button>
                <span className="inline-block mx-1 text-sm"> </span>
                <button title="Badge" className="flex items-center p-1 border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  <span className="flex-grow text-xs">{post.frontmatter.tags2}</span>
                </button>
              </div>
              <p className="text-sm text-grey-darker">
                {post.frontmatter.date}
              </p>
              </h1>
            </header>
          </div>
        </article>
      </div>
    </Link>
  );
}
