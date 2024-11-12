import { config } from "../../config/index";
import { NextPage } from "next";
import Head from "next/head";
import { Skills } from "../../components";
import { ReactElement } from "react";

const SkillsSection: NextPage = (): ReactElement => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Rawier - Skills</title>
        <link rel="shortcut icon" type="image/jpg" href="../Rawier-icon.png" />
        <meta name="theme-color:" content="#8e52f5"></meta>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com;"
        />
        <meta property="og:image"
          content={config.github.url} />
        <meta name="description"
          content="Skills section - Here I list most of the skills I use in my daily basis and my personal projects"></meta>
        <meta property="og:description"
          content="Skills section - Here I list most of the skills I use in my daily basis and my personal projects"/>
        <meta property="og:title" content="Rawier - Cybersecurity" />
        <meta property="og:url" content="https://Rawier.vercel.app/skills" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Skills />
      </main>
    </div>
  );
};

export default SkillsSection;
