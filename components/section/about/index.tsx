import React, { ReactElement } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { config } from "../../../config/index";
import Link from "next/link";

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="container relative px-4 mx-auto">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://i.ibb.co/JkjGyRj/chess1-ezgif-com-optimize.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          mixBlendMode: "multiply",
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10">
        <noscript>
          <div>
            <h1>You need to enable JavaScript to run this app.</h1>
          </div>
        </noscript>
        <div className="flex flex-col-reverse items-center text-center lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 lg:text-left">
          <div className="lg:px-4 lg:mt-12">
            <h1 className="text-2xl font-bold text-black-900 lg:text-5xl dark:text-white">
              Alejandro Aguilar
            </h1>
            <h2 className="text-2xl font-bold lg:text-3xl">
              <span className="text-transparent bg-gradient-to-r from-zinc-800 to-slate-400 dark:from-slate-200 dark:to-zinc-600 bg-clip-text">
                {t("job")}
              </span>
            </h2>

            {/* Botones */}
            <div className="flex items-center justify-center mt-2 space-x-2 md:justify-center lg:justify-start">
              <Link href={t("resume-link")} passHref>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 focus:bg-yellow-600 transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  <span>{t("resume")}</span>
                </button>
              </Link>
              <Link href="/skills" passHref>
                <button
                  type="button"
                  className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 focus:bg-yellow-600 transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  <span>{t("button_skills")}</span>
                </button>
              </Link>
              <Link href="/blog" passHref>
                <button
                  type="button"
                  className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 focus:bg-yellow-600 transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                  <span>{t("button_blog")}</span>
                </button>
              </Link>
            </div>

            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4 select-none">{t("about-me")}</p>
            </div>
          </div>
          <div className="flex-shrink-0 mb-10 pointer-events-none lg:mt-12 lg:px-4">
            <Image
              src={config.github.url}
              priority={true}
              alt="Profile"
              className="rounded-full"
              width="250"
              height="250"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
