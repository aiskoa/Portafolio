import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
import { About } from '../components';
import { config } from "../config/index";

const Home: NextPage = (): ReactElement => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>AISKOA - Cybersecurity</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.ico" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com;"
        />
        <meta name="theme-color" content="#8e52f5" />
        <meta property="og:image" content={config.github.url} />
        <meta name="description" content="IT consultant and web application developer, focused on results." />
        <meta property="og:description" content="IT consultant and web application developer, focused on results." />
        <meta property="og:title" content="AISKOA - Cybersecurity" />
        <meta property="og:url" content="https://aiskoa.vercel.app" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  );
};

export default Home;
