import { config } from "../../../config";
import Image from "next/image";
import Box from "../../common/box";
import {
  SiDiscord,
  SiHackthebox,
  SiMetrodelaciudaddemexico,
} from "react-icons/si";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";
import { SkillsIcon } from "../..";

/**
 * @description Contac section
 * @returns { ReactElement } A preview of the skills section
 */


const Contact: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <>
      <div className="flex justify-center place-items-center">
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
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
      {/* <h2 className="ml-5 text-2xl">{t("contact")}</h2> */}
      <div>
        <noscript>
          <h1>
            You need to enable JavaScript to run this app.
          </h1>
        </noscript>
        <div className="font-thin m-5 flex-column rounded-2xl dark:hover:border-purple-700 hover:border-blue-700 border-2 border-gray-900 dark:border-white p-2">
          <p className="text-center text-2xl">{t("contact")}</p>
          {/* Evita que las palabras y textos sean copiados */}
          <p className="flex justify-evenly select-none">{t("whoiam")}</p>
          <br />
          {/* Evita que las imagenes sean copiadas. */}
          <div className="flex justify-around hover:justify-evenly">
            <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://i.ibb.co/1zJ9fW3/UC-d2e58f0b-eb62.jpg" width="300"></img>
          </div>
          <br />
          <div className="flex justify-around hover:justify-evenly">
            <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://avatarfiles.alphacoders.com/336/336559.png" width="300"></img>
          </div>
          <br />
          <p className="flex justify-evenly select-none">{t("text_mail")}</p>
          <a className="flex justify-evenly" href="mailto:lwnadev@gmail.com?Subject=DUDA%20_%20GENERAL">Rawierdt@gmail.com</a>
          <br />
          <p className="text-center text-2xl">Freelance</p>
          <p className="flex justify-evenly select-none">{t("freelance")}</p>
          <br />
          <p className="flex justify-evenly">{t("pdfdoc")}</p>
          <br />
          <p className="flex justify-evenly">{t("pdfdoc2")}</p>
          <br />
          <p className="text-center text-2xl">FAQ</p>
          <p className="flex justify-evenly select-none">{t("faq")}</p>
          {/* <SiMetrodelaciudaddemexico /> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
