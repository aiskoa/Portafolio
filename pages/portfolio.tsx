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
      <h1 className="flex justify-center text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">Portfolio</h1>
      <p className="flex justify-center font-bold text-black-900 dark:text-white">Here are some of my most recent projects and contributions.</p>
      <br />
        <div className='flex justify-center items-center leading-tight p-2 md:p-4'>
          <div className='flex justify-center items-center'>
            <article className="overflow-hidden rounded-lg shadow-lg border-2 dark:hover:border-violet-800 hover:border-yellow-500 grayscale hover:grayscale-0">
                <a href="https://github.com/Rawierdt/Tidex" target={'_blank'}><img className="block h-auto w-full" draggable="false" loading="lazy" src="https://i.ibb.co/y6VgstT/tidex.gif" width="800" height="400" alt='Tidex' title='Tidex Ransomware'></img></a>
            </article>
            </div>
            <div className='flex justify-center items-center'>
              <article className="overflow-hidden rounded-lg shadow-lg border-2 dark:hover:border-violet-800 hover:border-yellow-500 grayscale hover:grayscale-0">
              <a href="https://github.com/Rawierdt/Metacrawler-IPTracker" target={'_blank'}><img className="block h-auto w-full" draggable="false" loading="lazy" src="https://i.ibb.co/FKnL9r1/M-iptrack.gif" width="800" height="400" alt='Rawier' title='Metacrawler & IPTracker'></img></a>
              </article>
            </div>
            <div className='flex justify-center items-center'>
              <article className="overflow-hidden rounded-lg shadow-lg border-2 dark:hover:border-violet-800 hover:border-yellow-500 grayscale hover:grayscale-0">
              <a href="https://github.com/Rawierdt" target={'_blank'}><img className="block h-auto w-full" draggable="false" loading="lazy" src="https://i.ibb.co/f16Mt2R/rawierID.gif" width="800" height="400" alt='Rawier' title='Rawier'></img></a>
              </article>
            </div>            
        </div>
    </div>
    </>
  );
};


export default Portfolio;