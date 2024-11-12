import React, { useState, useEffect } from "react";
import type { NextPage } from 'next';
import Head from 'next/head'
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'; // Importamos Link de Next.js

interface Item {
  title: string;
  language: string;
  language2: string;
  date: string;
  image: string;
  altText: string;
  githubLink: string;
  description1: string;
  description2: string;
  readMoreLink: string;
  GoToLink: string;
}

const Portfolio: NextPage = () => {
  const { t } = useTranslation("index");
  const [data, setData] = useState<Item[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/_pr/projects.json');
      const json: Item[] = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  const filteredData = data ? data.filter((item: Item) => {
    const searchTermMatches =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.language2.toLowerCase().includes(searchTerm.toLowerCase());

    const sortOrderMatches =
      sortOrder === "" ||
      (sortOrder === "asc" || sortOrder === "desc"
        ? true
        : (item[sortOrder as keyof Item] || "").toLowerCase().includes(searchTerm.toLowerCase()));

    return searchTermMatches && sortOrderMatches;
  }).sort((a, b) => {
    switch (sortOrder) {
      case "asc":
        return a.date.localeCompare(b.date);
      case "desc":
        return b.date.localeCompare(a.date);
      case "titleAsc":
        return a.title.localeCompare(b.title);
      case "titleDesc":
        return b.title.localeCompare(a.title);
      case "langAsc":
        return a.language.localeCompare(b.language);
      case "langDesc":
        return b.language.localeCompare(a.language);
      default:
        return 0;
    }
  }) : [];

  return (
    <>
      <noscript>
        <h1>
          You need to enable JavaScript to run this app.
        </h1>
      </noscript>
      <Head>
        <title>Rawier - Portfolio</title>
        <link rel="shortcut icon" type="image/png" href="../Rawier-icon.png" />
        <meta name="description"
          content="Rawier's Portfolio."></meta>
        <meta property="og:description"
          content="Rawier's Proyects and portfolio." />
        <meta property="og:title" content="Rawier - Portfolio" />
        <meta name="theme-color:" content="#8e52f5"></meta>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com;"
        />
        <meta property="og:url" content="https://Rawier.vercel.app/portfolio" />
      </Head>
      <div className='portfolio'>
        <br />
        <div className="flex justify-around hover:justify-evenly">
          <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="../Rawier-icon.png" width="90" height="90" />
        </div>
        <br />
        <h1 className="flex justify-center text-2xl font-bold lg:text-3xl">
          <span className="text-transparent bg-gradient-to-r from-zinc-900 to-slate-500 dark:from-violet-600 dark:to-zinc-600 bg-clip-text">PROJECTS</span>
        </h1>
        <p className="flex justify-center font-semibold text-center">Here are some of my most recent projects and contributions</p>
        <br />

        <div className='flex items-center justify-center max-w-md mx-auto'>
          <div className="relative flex items-center h-12 overflow-hidden rounded-lg bg-zinc-200 dark:bg-violet-800 focus-within:shadow-lg dark:focus-within:shadow-violet-900">
            <div className="grid w-12 h-full place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="w-full h-full pr-2 text-sm outline-none peer"
              type="text"
              id="search"
              placeholder=" Search something..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative flex items-center h-12 ml-2 overflow-hidden rounded-lg bg-zinc-200 dark:bg-violet-800 focus-within:shadow-lg dark:focus-within:shadow-violet-900">
            <select
              className="block px-2 py-2 pr-8 leading-tight text-gray-700 border rounded-lg appearance-none bg-zinc-200 dark:bg-violet-800 border-zinc-200 dark:border-violet-800 dark:text-slate-200 focus:outline-none focus:bg-white focus:border-gray-500"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">No Filter</option>
              <option value="asc">Date (Asc)</option>
              <option value="desc">Date (Desc)</option>
              <option value="titleAsc">Title (Asc)</option>
              <option value="titleDesc">Title (Desc)</option>
              <option value="langAsc">Language (Asc)</option>
              <option value="langDesc">Language (Desc)</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none dark:text-slate-200">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.586L4.707 7.293a1 1 0 0 1 1.414-1.414L10 10.758l4.879-4.879a1 1 0 0 1 1.414 1.414L10 12.586z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <br />
        {/* Cada proyecto es un elemento, mostrados tres por fila para pantallas grandes y uno para dispositivos moviles */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredData.map((item: Item, index: number) => (
            <div key={index} className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
                <img className="relative object-cover w-full h-64" src={item.image} alt={item.altText} />
                <div className="p-4">
                  <div className="absolute top-2 right-2">
                    <Link href={item.githubLink} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-900 dark:text-slate-300 hover:text-gray-500 dark:hover:text-violet-300" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">{item.language}, {item.language2}</p>
                    <p className="mt-2 text-base text-gray-700 dark:text-gray-400">{item.description1}</p>
                    <div className="mt-4 text-center">
                      <Link href={item.GoToLink} passHref>
                        <button className="px-6 py-2 text-lg font-medium text-white rounded-lg shadow-md bg-violet-500 hover:bg-violet-600 dark:bg-violet-800 dark:hover:bg-violet-700 focus:outline-none">
                          {t("portfolio:GoToLink")}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
