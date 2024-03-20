import type { NextPage } from 'next'
import Link from 'next/link';
import { ReactElement } from 'react'
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from 'next/head'

const Portfolio: NextPage = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <>
    <noscript>
      <h1>
        You need to enable JavaScript to run this app.
      </h1>
    </noscript>
    <Head>
        <title>Rawier - Portfolio</title>
        <link rel="shortcut icon" type="image/png" href="./Rawier-icon.png" />
        <meta name="description"
          content="Rawier's Portfolio."></meta>
        <meta property="og:description"
          content="Rawier's Portfolio." />
        <meta property="og:title" content="Rawier - Portfolio" />
        <meta property="og:url" content="https://Rawier.vercel.app/portfolio" />
    </Head>
    <div className='portfolio'>
      {/* No consigo que se traduzca */}
      <br />
      <div className="flex justify-around hover:justify-evenly">
        <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="../Rawier-icon.png" width="90" height="90"></img>
      </div>
      <br />
      <h1 className="flex justify-center text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">PROJECTS</h1>
      <p className="flex justify-center font-bold text-black-900 dark:text-white"><em>Here are some of my most recent projects and contributions.</em></p>
      <br />
      
      {/* Aqui comienzan los proyectos mostrados en tablas */}



{/* Penultima tabla de proyectos */}

  <div className="flex justify-center">
  <div className="flex items-center justify-center w-full p-2 leading-tight md:w-1/2 md:mx-4 md:p-4'">
  <div className="w-full overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
      <div>
      <a href="https://nexdrak.surge.sh" target="_blank" rel="noopener noreferrer" className="inline-block">
        <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" clip-rule="evenodd"/>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline">NexDrak - Artist Landing Page</span>
      </a>
      </div>
      <div>
        <span className="mr-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
          React
        </span>
      </div>
    </div>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        An artist landing page for NexDrak, in there you can find information about his works.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Project made in React, hosting on Surge, the project is still in development but you can check it out for now, the link is below.
      </p>
      <br />
      <p className="text-xs text-yellow-500">
        Ago 18, 2023
      </p>
    </div>
  </div>
</div>

<div className="flex items-center justify-center w-full p-2 leading-tight md:w-1/2 md:mx-4 md:p-4'">
  <div className="w-full overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
      <div>
      <a href="https://github.com/Rawierdt/Tidex" target="_blank" rel="noopener noreferrer" className="inline-block">
        <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline">Tidex Ransomware</span>
      </a>
      </div>
      <div>
        <span className="mr-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
          Python
        </span>
      </div>
    </div>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Simple little Ransomware written in Python, only works to encrypt files in the directory path Desktop and subdirectories.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        At the moment it can only be executed on Linux machines. it lacks decryption function, the KEY is: hkpykiiqftupr3okl04azj
      </p>
      <br />
      <p className="text-xs text-yellow-500">
        Jan 30, 2023
      </p>
    </div>
  </div>
</div>
</div>

{/* Ultima linea de proyectos */}

<div className="flex justify-center">
  <div className="flex items-center justify-center w-full p-2 leading-tight md:w-1/2 md:mx-4 md:p-4'">
  <div className="w-full overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
      <div>
      <a href="https://github.com/Rawierdt/Portafolio" target="_blank" rel="noopener noreferrer" className="inline-block">
        <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline">Rawier's Portafolio</span>
      </a>
      </div>
      <div>
        <span className="mr-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
          TypeScript
        </span>
      </div>
    </div>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Here is my portfolio build using TypeScript and Tailwind CSS, in there i publish my own projects and other toughts about web development.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        You can build your own using my templete here.
      </p>
      <br />
      <p className="text-xs text-yellow-500">
        Dec 27, 2022
      </p>
    </div>
  </div>
</div>

<div className="flex items-center justify-center w-full p-2 leading-tight md:w-1/2 md:mx-4 md:p-4'">
  <div className="w-full overflow-hidden bg-gray-100 border-2 rounded-lg shadow-lg cursor-pointer dark:bg-gray-800 dark:hover:border-violet-800 hover:border-yellow-500">
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
      <div>
      <a href="https://github.com/Rawierdt/Metacrawler-IPTracker" target="_blank" rel="noopener noreferrer" className="inline-block">
        <svg className="inline-block w-6 h-6 text-gray-800 align-middle dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline">Metacrawler && IPTracker</span>
      </a>
      </div>
      <div>
        <span className="mr-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
          Python
        </span>
      </div>
    </div>
    <div className="px-4 py-2">
      <p className="text-sm text-gray-600 dark:text-gray-400">
      Metacrawler: Erases metadata in any image or photo file.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
      IPTracker: Finds the location of an IP address provided by URL (optional) and finds its open ports as well as generates malicious IP address report.
      </p>
      <br />
      <p className="text-xs text-yellow-500">
        Apr 23, 2023
      </p>
    </div>
  </div>
</div>
</div>

        {/* 𝕽♛ */}
    </div>
    </>
  );
};


export default Portfolio;