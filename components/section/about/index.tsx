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
        backgroundImage: "url('https://i.ibb.co/JkjGyRj/chess1-ezgif-com-optimize.gif')",
      }}
    >
      <noscript>
        <div>
          <h1>You need to enable JavaScript to run this app.</h1>
        </div>
      </noscript>
      
      {/* Agregamos un fondo semitransparente detrás del contenido */}
      <div className="p-6 bg-black rounded-lg bg-opacity-60">
        <div className="flex flex-col-reverse items-center text-center lg:space-x-5 lg:flex lg:flex-row lg:-mx-4 lg:text-left">
          <div className="lg:px-4 lg:mt-12">
            <h1 className="text-2xl font-bold text-white lg:text-5xl">
              Alejandro Aguilar
            </h1>
            <h2 className="text-2xl font-bold lg:text-3xl">
              <span className="text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text">
                {t("job")}
              </span>
            </h2>
            <div className="flex items-center justify-center mt-2 space-x-2 lg:justify-start">
              <Link href={t("resume-link")} passHref>
                <button className="text-white bg-yellow-600 button-styles hover:bg-yellow-700">
                  {t("resume")}
                </button>
              </Link>
            </div>
            <div className="mt-6 text-gray-200">
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
        
        {/* Sección de botones */}
        <div className="flex flex-row justify-center mt-4 space-x-2 lg:justify-start">
          <Link href="/skills" passHref>
            <button className="mt-2 px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-yellow-700 transition duration-150 ease-in-out">
              {t("button_skills")}
            </button>
          </Link>
          <Link href="/blog" passHref>
            <button className="mt-2 px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-yellow-700 transition duration-150 ease-in-out">
              {t("button_blog")}
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="mt-2 px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-yellow-700 transition duration-150 ease-in-out">
              {t("me")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
