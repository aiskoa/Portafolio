import Link from "next/link";
import { PostType } from "../../../models";
import useTranslation from "next-translate/useTranslation";

export default function Post({ post }: PostType) {
  const { t } = useTranslation("index");
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="w-full px-4 my-4 md:px-6 lg:w-1/3">
        <article className="container overflow-hidden border-2 rounded-lg shadow-lg dark:hover:border-violet-700 hover:border-black dark:bg-slate-800">
          <a href={`/blog/${post.slug}`}>
            <img
              alt="Placeholder"
              className="block w-full h-64" // Adjusted height to be larger
              src={post.frontmatter.cover_image}
            />
          </a>
          <div className="container">
            <header className="flex items-center justify-between p-4 leading-tight md:p-6">
              <h1 className="text-2xl font-bold">
                <a href={`/blog/${post.slug}`} className="hover:underline dark:text-white">
                  {post.frontmatter.title}
                </a>
              </h1>
              <div className="flex items-center mt-2">
                <button title="Badge" className="flex items-center px-2 py-1 border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  <span className="flex-grow text-sm">{post.frontmatter.tags1}</span>
                </button>
                <span className="inline-block mx-1 text-lg"> </span>
                <button title="Badge" className="flex items-center px-2 py-1 border-2 rounded-md dark:border-b-violet-300 dark:bg-zinc-900 border-b-zinc-500 border-l-zinc-400">
                  <span className="flex-grow text-sm">{post.frontmatter.tags2}</span>
                </button>
              </div>
              <p className="mt-2 text-md text-grey-darker">
                {post.frontmatter.date}
              </p>
            </header>
          </div>
        </article>
      </div>
    </Link>
  );
}
