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
        <article className="container flex flex-col overflow-hidden border-2 rounded-lg shadow-lg h-80 dark:hover:border-violet-700 hover:border-black dark:bg-slate-800">
          <a href={`/blog${post.slug}`}>
            <img
              alt="Placeholder"
              className="block object-cover w-full h-40"
              src={post.frontmatter.cover_image}
            />
          </a>
          <div className="flex flex-col justify-between h-full p-2">
            <header className="flex flex-col justify-between h-full leading-tight md:p-4">
              <h1 className="mb-2 text-lg font-semibold dark:text-white line-clamp-2">
                <a href={`/blog/${post.slug}`} className="hover:underline">
                  {post.frontmatter.title}
                </a>
              </h1>
              <div className="flex items-center mt-2 space-x-2">
                <button title="Badge" className="flex items-center px-2 py-1 text-xs border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  {post.frontmatter.tags1}
                </button>
                <button title="Badge" className="flex items-center px-2 py-1 text-xs border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  {post.frontmatter.tags2}
                </button>
              </div>
              <p className="mt-2 text-sm text-grey-darker">
                {post.frontmatter.date}
              </p>
            </header>
          </div>
        </article>
      </div>
    </Link>
  );
}
