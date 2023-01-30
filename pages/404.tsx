import type { NextPage } from 'next'
import Link from 'next/link';
import { ReactElement } from 'react'
import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from 'next/head'

const NotFound: NextPage = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <>
    <noscript>
      <h1>
        You need to enable JavaScript to run this app.
      </h1>
    </noscript>
    <Head>
        <title>Rawier - 404</title>
        <link rel="shortcut icon" type="image/png" href="./Rawier-icon.png" />
        <meta name="description"
          content="Rawier 404 Not Found."></meta>
        <meta property="og:description"
          content="Rawier 404 Not Found." />
        <meta property="og:title" content="Rawier - Not Found" />
        <meta property="og:url" content="https://Rawier.vercel.app" />
    </Head>
    <div className='not_found'>
      {/* No consigo que se traduzca */}
      <p className="flex justify-center">{t("404")}</p>
      <br />
      <div className="flex justify-around hover:justify-evenly">
        <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://media.tenor.com/o-0LaJK3qWcAAAAC/yamada-ryou-yamada-ryo.gif" width="400" height="400"></img>
      </div>
      <br />
      <h1 className="flex justify-center text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">Ooops....</h1>
      <p className="flex justify-center font-bold text-black-900 dark:text-white">La pagina no existe, pero puedes seguir aqui haciendo que siempre haces, perder el tiempo.</p>
      <p className="flex justify-center">Regresar a &nbsp;<Link href="/"><a className='font-bold text-purple-500 dark:text-pink'>Home</a></Link></p>
    </div>
    </>
  );
};


export default NotFound;