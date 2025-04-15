import React, { useState, useEffect } from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import useTranslation from "next-translate/useTranslation";

interface Item {
  title: string;
  platform: string;
  os: string;
  difficulty: string;
  image: string;
  altText: string;
  githubLink: string;
  description: string;
  GoToLink: string;
}

const WriteUp: NextPage = () => {
  const { t } = useTranslation("index");
  const [data, setData] = useState<Item[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/_pr/machines.json'); // Asegúrate que la ruta y nombre sean correctos.
      const json: Item[] = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  const filteredData = data
    ? data.filter((item: Item) => {
        const lowerSearch = searchTerm.toLowerCase();
        // Se filtra en base a title, platform, os, difficulty y description
        return (
          searchTerm === "" ||
          item.title.toLowerCase().includes(lowerSearch) ||
          item.platform.toLowerCase().includes(lowerSearch) ||
          item.os.toLowerCase().includes(lowerSearch) ||
          item.difficulty.toLowerCase().includes(lowerSearch) ||
          item.description.toLowerCase().includes(lowerSearch)
        );
      }).sort((a, b) => {
        switch (sortOrder) {
          case "titleAsc":
            return a.title.localeCompare(b.title);
          case "titleDesc":
            return b.title.localeCompare(a.title);
          case "difficultyAsc":
            return a.difficulty.localeCompare(b.difficulty);
          case "difficultyDesc":
            return b.difficulty.localeCompare(a.difficulty);
          default:
            return 0;
        }
      })
    : [];

  return (
    <>
      <noscript>
        <h1>Debes habilitar JavaScript para ver el contenido.</h1>
      </noscript>
      <Head>
        <title>AISKOA - WriteUps</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.ico" />
        <meta name="description" content="Aiskoa's Portfolio." />
        <meta property="og:description" content="Aiskoa's WriteUps." />
        <meta property="og:title" content="AISKOA - WriteUps" />
        <meta name="theme-color:" content="#8e52f5" />
        <meta property="og:url" content="https://aiskoa.vercel.app/writeup" />
      </Head>
      <div className='portfolio'>
        <br />
        <div className="flex justify-around hover:justify-evenly">
          <img className="pointer-events-none" draggable="false" loading="lazy" src="../logo.png" width="90" height="90" alt="Logo" />
        </div>
        <br />
        <h1 className="flex justify-center text-2xl font-bold lg:text-3xl">
          <span className="text-transparent bg-gradient-to-r from-zinc-900 to-slate-500 dark:from-violet-600 dark:to-zinc-600 bg-clip-text">
            WRITE UPS
          </span>
        </h1>
        <p className="flex justify-center font-semibold text-center">
          Machine write-ups de desafíos y vulnerabilidades, usando plataformas como TryHackMe, Hack The Box y más.
        </p>
        <br />
        <div className='flex items-center justify-center max-w-md mx-auto'>
          <div className="relative flex items-center h-12 overflow-hidden border rounded-lg bg-zinc-200 dark:bg-violet-800 focus-within:shadow-lg dark:focus-within:shadow-violet-900 border-zinc-200 dark:border-violet-800">
            <div className="grid w-12 h-full place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="w-full h-full pr-2 text-sm outline-none"
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative flex items-center h-12 ml-2 overflow-hidden rounded-lg bg-zinc-200 dark:bg-violet-800 focus-within:shadow-lg dark:focus-within:shadow-violet-900">
            <select
              className="block px-2 py-2 pr-8 leading-tight text-gray-700 border rounded-lg bg-zinc-200 dark:bg-violet-800 border-zinc-200 dark:border-violet-800 dark:text-slate-200 focus:outline-none focus:bg-white focus:border-gray-500"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sin filtro</option>
              <option value="titleAsc">Título (Ascendente)</option>
              <option value="titleDesc">Título (Descendente)</option>
              <option value="difficultyAsc">Dificultad (Ascendente)</option>
              <option value="difficultyDesc">Dificultad (Descendente)</option>
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
        <div className="flex flex-wrap justify-center gap-6">
          {filteredData.map((item: Item, index: number) => (
            <div key={index} className="w-full p-2 sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
                <img className="object-cover w-full h-48 md:h-60" loading="lazy" src={item.image} alt={item.altText} />
                <div className="p-4">
                  <div>
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <svg className="inline-block w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                      </svg>
                      <span className="ml-1 text-lg font-medium text-gray-800 dark:text-gray-200 hover:underline">{item.title}</span>
                    </a>
                  </div>
                  <div className="flex items-center mt-2 space-x-2">
                    <button title="Plataforma" className="px-2 py-1 text-xs text-gray-800 border border-gray-400 rounded-md dark:text-gray-200">
                      {item.platform}
                    </button>
                    <button title="Sistema Operativo" className="px-2 py-1 text-xs text-gray-800 border border-gray-400 rounded-md dark:text-gray-200">
                      {item.os}
                    </button>
                    <button title="Dificultad" className="px-2 py-1 text-xs text-gray-800 border border-gray-400 rounded-md dark:text-gray-200">
                      {item.difficulty}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={() => window.open(item.GoToLink, '_blank')}
                      className="px-4 py-2 text-sm font-medium border rounded-md text-lime-400 bg-lime-900 border-lime-400 hover:brightness-110"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
      </div>
    </>
  );
};

export default WriteUp;
