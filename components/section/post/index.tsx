import Link from "next/link";
import { PostType } from "../../../models";

export default function Post({ post }: PostType) {
  return (
    <Link
      className="no-underline text-grey-darker hover:text-red-dark"
      href={`/blog/${post.slug}`}
    >
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="container overflow-hidden rounded-lg shadow-lg border-2 dark:hover:border-violet-700 hover:border-black dark:bg-slate-800">
          <a href={`/blog${post.slug}`}>
            <img
              alt="Placeholder"
              className="block h-auto w-full"
              src={post.frontmatter.cover_image}
            />
          </a>
          <div className="container">
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a
                  href={`/blog/${post.slug}`}
                  className="hover:underline dark:text-white"
                >
                  {post.frontmatter.title}
                </a>
                <p className="text-grey-darker text-sm">
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
