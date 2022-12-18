import useTranslation from "next-translate/useTranslation";
import React, { ReactElement } from "react";
import { SiCodewars, SiDevdotto, SiDiscord, SiGithub, SiHackthebox, SiInstagram, SiLinkedin, SiPlatzi, SiSteam, SiTwitter } from "react-icons/si";
import { config } from "../../../../config/index";
import { SkillsIcon } from "../../../";
/**
 * @description Footer contains links to socials and important stuff
 * @returns { ReactElement } Footer component
 */

const Footer: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>{t("footer")}</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href={config.socials.twitter}
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Twitter" children={<SiTwitter />} />
            </a>
            <a
              href={config.socials.linkedin}
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Linkedin" children={<SiLinkedin />} />
            </a>
            <a
              href={config.socials.github}
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="GitHub" children={<SiGithub />} />
            </a>
            <a
              href={config.socials.dev}
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Dev" children={<SiDevdotto />} />
            </a>
            <a
              href={config.socials.platzi}
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Platzi" children={<SiPlatzi />} />
            </a>
            <a
              href={config.socials.discord}
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="Discord" children={<SiDiscord />} />
            </a>
            <a
              href={config.socials.Hackthebox}
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <SkillsIcon text="HackTheBox" children={<SiHackthebox />} />
            </a>
            <a
              href={config.socials.instagram}
              className={"transition-colors hover:text-yellow-500"}
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
