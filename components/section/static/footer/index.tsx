import useTranslation from "next-translate/useTranslation";
import React, { ReactElement } from "react";
import { SiDevdotto, SiDiscord, SiGithub, SiHackerone, SiHackthebox, SiInstagram, SiLinkedin, SiPlatzi, SiSteam, SiTelegram, SiTwitter } from "react-icons/si";
import { config } from "../../../../config/index";
import { SkillsIcon } from "../../../";
/**
 * @description Footer contains links to socials and important stuff
 * @returns { ReactElement } Footer component
 */

const Footer: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="py-6 mt-12 lg:mt-18 sm:pb-36 sm:py-12">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p>{t("footer")}</p>
          <div className="flex flex-wrap pt-2 space-x-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href={config.socials.twitter}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Twitter" children={<SiTwitter />} />
            </a>
            <a
              href={config.socials.linkedin}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Linkedin" children={<SiLinkedin />} />
            </a>
            <a
              href={config.socials.github}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="GitHub" children={<SiGithub />} />
            </a>
            <a
              href={config.socials.hackerone}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="HackerOne" children={<SiHackerone />} />
            </a>
            {/* <a
              href={config.socials.platzi}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Platzi" children={<SiPlatzi />} />
            </a> */}
            <a
              href={config.socials.discord}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Discord" children={<SiDiscord />} />
            </a>
            <a
              href={config.socials.Hackthebox}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="HackTheBox" children={<SiHackthebox />} />
            </a>
            <a
              href={config.socials.instagram}
              className={"transition-colors dark:hover:border-violet-800 hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Instagram" children={<SiInstagram />} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
