import React, { useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../../components/section/post/index";
import { sortByDate } from "../../utils/index";
import { IPost, PostsType } from "../../models";
import { config } from "../../config";
import useTranslation from "next-translate/useTranslation";

export default function Blog({ posts }: PostsType) {  
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredPosts = posts.filter((post) => {
      return (
        post.frontmatter.title.toLowerCase().includes(lowerCaseQuery) ||
        post.frontmatter.date.includes(query) ||
        (post.frontmatter.tags1 && post.frontmatter.tags1.toLowerCase().includes(lowerCaseQuery)) ||
        (post.frontmatter.tags2 && post.frontmatter.tags2.toLowerCase().includes(lowerCaseQuery))
      );
    });
    setFilteredPosts(filteredPosts);
  };

  const { t } = useTranslation("index");

  return (
    <div>
      <Head>
        <title>Rawier - Blog</title>
        <link rel="shortcut icon" type="image/jpg" href="../favicon.ico" />
        <noscript>
          <h1>You need to enable JavaScript to run this app.</h1>
        </noscript>
        <meta property="og:image" content={config.github.url} />
        <meta name="theme-color:" content="#8e52f5"></meta>
        <meta
          name="description"
          content="Blog section - Here I have all the blog posts I had written in the past"
        ></meta>
        <meta
          property="og:description"
          content="Blog section - Here I have all the blog posts I had written in the past"
        />
        <meta property="og:title" content="Rawier - Blog" />
        <meta property="og:url" content="https://rawier.vercel.app" />
      </Head>
      
      <div className="container px-4 mx-auto my-12 md:px-12">
        <div className='max-w-md mx-auto'>
          <div className="relative flex items-center w-full h-12 overflow-hidden border rounded-lg bg-zinc-200 dark:bg-violet-800 focus-within:shadow-lg dark:focus-within:shadow-violet-900 border-zinc-200 dark:border-violet-800">
            <div className="grid w-12 h-full place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="w-full h-full pr-2 text-sm outline-none peer"
              type="text"
              id="search"
              placeholder=" Search something..."
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {currentPosts.map((post: IPost) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>

        
        <div className="flex justify-between mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-block px-4 py-2 text-xs font-bold leading-tight text-white uppercase transition duration-150 ease-in-out bg-black rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
          >
            <svg className="inline-block w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 8-4 4 4 4"/>
            </svg>
            <span className="inline-block">Previous</span>
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastPost >= posts.length}
            className="inline-block px-4 py-2 text-xs font-bold leading-tight text-white uppercase transition duration-150 ease-in-out bg-black rounded rounded-r shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
          >
            <span className="inline-block">Next</span>
            <svg className="inline-block w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 16 4-4-4-4"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
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
