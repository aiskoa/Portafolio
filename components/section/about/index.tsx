import React, { ReactElement } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { config } from "../../../config/index";
import Link from "next/link";

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");

  return (
    <div
      className="container px-4 mx-auto bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('https://i.ibb.co/ts2c1Y7/chess.gif')",
      }}
    >
      <noscript>
        <div>
          <h1>You need to enable JavaScript to run this app.</h1>
        </div>
      </noscript>
      <div className="flex flex-col-reverse text-center lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-black-900 lg:text-5xl dark:text-white">
            Alejandro Aguilar
          </h1>
          <h2 className="text-2xl font-bold lg:text-3xl">
            <span className="text-transparent bg-gradient-to-r from-zinc-800 to-slate-400 dark:from-slate-200 dark:to-zinc-600 bg-clip-text">
              {t("job")}
            </span>
          </h2>
          <div className="flex items-center justify-center mt-2 space-x-2 md:justify-center lg:justify-start">
            <Link href={t("resume-link")} passHref>
              <button className="button-styles">{t("resume")}</button>
            </Link>
          </div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 select-none">{t("about-me")}</p>
          </div>
        </div>
        <div className="flex-shrink-0 mb-10 pointer-events-none lg:mt-12 lg:px-4" draggable="false">
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
      <div className="flex flex-row justify-center space-x-2">
        {/* Buttons section */}
      </div>
    </div>
  );
};

export default About;
