import React, { ReactElement } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { config } from "../../../config/index";
import Link from "next/link";

/**
 * @description            About Section
 * @returns {ReactElement} The about section which contains most of the information
 */

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-black-900 lg:text-5xl dark:text-white">
            Rawier
          </h1>
          <noscript>
            <h1>
            You need to enable JavaScript to run this app.
            </h1>
            </noscript>
          <h3 className="text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">
            {t("job")}
          </h3>
          <div className="flex items-center justify-center md:justify-center lg:justify-start xsm:justify-center sm:justify-center space-x-2 mt-2">
            <a href={t("resume-link")} target={"_blank"}>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
              >
                {t("resume")}
              </button>
            </a>
          </div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 select-none">{t("about-me")}</p>
          </div>
        </div>
        <div className="pointer-events-none focus:pointer-events-auto flex-shrink-0 lg:mt-12 lg:px-4 mb-10" draggable="false">
          <Image
            src={config.github.url}
            alt="Profile"
            loading="lazy"
            className="rounded-full"
            width="250"
            height="250"            
          />
        </div>
      </div>
      <div className="flex flex-row">
        <Link href={"/skills"}>
          <div className="flex items-center justify-center md:justify-center lg:justify-start xsm:justify-center sm:justify-center space-x-2 mt-2">
            <button
              type="button"
              className="me-5 mt-3 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              {t("button_skills")}
            </button>
          </div>
        </Link>
        <Link href={"/blog"}>
          <div className="flex items-center justify-center md:justify-center lg:justify-start xsm:justify-center sm:justify-center space-x-2 mt-2">
            <button
              type="button"
              className="mx-5 mt-3 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              {t("button_blog")}
            </button>
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="flex items-center justify-center md:justify-center lg:justify-start xsm:justify-center sm:justify-center space-x-2 mt-2">
            <button
              type="button"
              className="me-5 mt-3 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              {t("me")}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
