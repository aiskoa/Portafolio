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
        <div className="flex-shrink-0 mb-10 pointer-events-none lg:mt-12 lg:px-4 focus:pointer-events-auto" draggable="false">
          <Image
            src={config.github.url}
            alt="Profile"
            loading="lazy"
            className="rounded-full"
            draggable="false"
            width={250}  // Cambia de "250" (string) a 250 (número)
            height={250} // Cambia de "250" (string) a 250 (número)
          />
        </div>
      </div>
      {/* <h2 className="ml-5 text-2xl">{t("contact")}</h2> */}
      <div>
        <noscript>
          <h1>
          𝕽♛ You need to enable JavaScript to run this app.
          </h1>
        </noscript>
        <div className="p-2 m-5 font-thin border-2 border-gray-900 flex-column rounded-2xl dark:hover:border-purple-700 hover:border-blue-700 dark:border-white">
          <p className="text-2xl text-center">{t("contact")}</p>
          {/* Evita que las palabras y textos sean copiados */}
          <p className="flex select-none justify-evenly cursor-no-drop">{t("whoiam")}</p>
          <br />
          {/* Evita que las imagenes sean copiadas. */}
          {/* <div className="flex justify-around hover:justify-evenly">
            <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://i.ibb.co/W5jGmsM/asesor-crestomatia.jpg" width="300"></img>
          </div> */}
          <br />
          {/* <div className="flex justify-around hover:justify-evenly">
            <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://avatarfiles.alphacoders.com/336/336559.png" width="300"></img>
          </div>
          <br /> */}
          <p className="flex select-none justify-evenly cursor-no-drop">{t("text_mail")}</p>
          <a className="flex justify-evenly" href="mailto:rawierdt@gmail.com?Subject=DUDA%20_%20GENERAL"><strong>rawierdt@gmail.com</strong></a>
          <br />
          <p className="text-2xl text-center">Freelance</p>
          <p className="flex select-none justify-evenly cursor-no-drop">{t("freelance")}</p>
          <br />
          <p className="flex select-all justify-evenly">{t("pdfdoc")}</p>
          <br />
          <p className="flex justify-evenly">{t("pdfdoc2")}</p>
          <br />
          <p className="text-2xl text-center">FAQ</p>
          <p className="flex select-none justify-evenly">{t("faq")}</p>
{/* 𝕽♛ */}
        </div>
      </div>
    </>
  );
};

export default Contact;
