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
        Yowo nowod towo enablowo Javascriptowo towo rowon thowo epicowo websitowo.
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
    <div className="bg-fixed bg-center bg-no-repeat bg-cover bg-dvd">
    <div className='not_found cursor-crosshair'>
      {/* No consigo que se traduzca */}
      <p className="flex justify-center">{t("404")}</p>
      <br />
      <div className="flex justify-around invert-0 hover:invert">
        <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://media.tenor.com/o-0LaJK3qWcAAAAC/yamada-ryou-yamada-ryo.gif" width="400" height="400"></img>
      </div>
      <br />
      <h1 className="flex justify-center text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">Ooops...</h1>
      <p className="flex justify-center font-bold text-black-900 dark:text-white">Don't look for it anymore, it no longer exists.</p>
      <p className="flex justify-center text-black-900 dark:text-white">Don't worry here are some of my favorite rock songs 𝕽♛</p>
      <br />
      <p className="flex justify-center">Regresar a &nbsp;<Link href="/"><a className='font-bold text-purple-500 dark:text-pink'>Home</a></Link></p>
      <br />
      <div className='flex justify-center'>
      <table className="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AMOUR</td>
      <td>The Warning</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>Satellite</td>
      <td>Cyan Kicks</td>
      <td>2019</td>
    </tr>
    <tr>
      <td>Let It Burn</td>
      <td>Citizen Soldier</td>
      <td>2017</td>
    </tr>
    <tr>
      <td>Doomed</td>
      <td>BMTH</td>
      <td>2016</td>
    </tr>
    <tr>
      <td>I Fooled You</td>
      <td>Awaken the Giant</td>
      <td>2015</td>
    </tr>
    <tr>
      <td>All These Things I Hate</td>
      <td>Bullet For My Valentine</td>
      <td>2008</td>
    </tr>
  </tbody>
</table>
      </div>
      <br />
    </div>
    </div>
    </>
  );
};


export default NotFound;