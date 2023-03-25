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
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 pointer-events-none focus:pointer-events-auto flex-shrink-0 lg:mt-12 lg:px-4 mb-10" draggable="false">
          <Image
            src={config.github.url}
            alt="Profile"
            loading="lazy"
            className="rounded-full"
            draggable="false"
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
          <p className="flex justify-evenly select-none cursor-no-drop">{t("whoiam")}</p>
          <br />
          {/* Evita que las imagenes sean copiadas. */}
          <div className="flex justify-around hover:justify-evenly">
            <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://i.ibb.co/1zJ9fW3/UC-d2e58f0b-eb62.jpg" width="300"></img>
          </div>
          <br />
          {/* <div className="flex justify-around hover:justify-evenly">
            <img className="pointer-events-none focus:pointer-events-auto" draggable="false" loading="lazy" src="https://avatarfiles.alphacoders.com/336/336559.png" width="300"></img>
          </div>
          <br /> */}
          <p className="flex justify-evenly select-none cursor-no-drop">{t("text_mail")}</p>
          <a className="flex justify-evenly" href="mailto:lwnadev@gmail.com?Subject=DUDA%20_%20GENERAL">Rawierdt@gmail.com</a>
          <br />
          <p className="text-center text-2xl">Freelance</p>
          <p className="flex justify-evenly select-none cursor-no-drop">{t("freelance")}</p>
          <br />
          <p className="flex justify-evenly select-all">{t("pdfdoc")}</p>
          <br />
          <p className="flex justify-evenly">{t("pdfdoc2")}</p>
          <br />
          <p className="text-center text-2xl">FAQ</p>
          <p className="flex justify-evenly select-none">{t("faq")}</p>
          {/* <SiMetrodelaciudaddemexico /> */}
          <br />
          <p className="text-center text-2xl">CLAVES</p>
          <small className="flex justify-evenly select-all">
-----BEGIN PGP PRIVATE KEY BLOCK-----

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
=NxMz
-----END PGP PRIVATE KEY BLOCK-----</small>
        </div>
      </div>
    </>
  );
};

export default Contact;
