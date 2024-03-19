import Link from "next/link";
import React, { ReactElement } from "react";
import { Language, Theme } from "../../..";
import useTranslation from "next-translate/useTranslation";

/**
 * @description Here goes the theme button, music and home buttons
 * @returns { ReactElement } Navigation Component
 */

const Navigation: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container flex items-center justify-between px-4 mx-auto lg:max-w-4xl">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="../favicon.png" width={30} height={30} alt="Rawier Home"></img>
          </a>
        </Link>
        <Theme />
        <Link href="/portfolio">PROJETS</Link>
        <Language />
      </div>
    </div>
  );
};

export default Navigation;
