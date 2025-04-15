import React, { ReactElement } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { config } from "../../../config/index";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Box from "../../common/box";
import {
  SiReact, SiNextdotjs,
  SiNodedotjs, SiVercel, SiGnubash, SiPython, SiMysql, SiKalilinux,
  SiMicrosoftazure, SiPlatzi, SiUdemy, SiLinkedin, SiTwitter,
  SiDiscord, SiJavascript, SiMicrosoftsqlserver, SiCisco,
  SiFigma, SiPhp, SiMicrosoft, SiGit, SiSqlite, SiCplusplus,
  SiPostgresql,
  SiCloudflare,
} from "react-icons/si";
import { SkillsIcon } from "../..";

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="container relative px-4 mx-auto">
      {/* background image gif */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('../bgChess.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
          opacity: 0.2,
          mixBlendMode: "multiply",
        }}
      />
      {/* principal content */}
      <div className="relative z-10">
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
            <div className="flex items-center justify-center mt-2 space-x-2 md:justify-center lg:justify-start xsm:justify-center sm:justify-center">
              <Link href={t("resume-link")} passHref>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
                >
                  <span className="animate-spin inline-block w-2 h-2 border-[2px] border-current border-t-transparent rounded-full mr-2"></span>
                  <span>{t("resume")}</span>
                </button>
              </Link>
            </div>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4 select-none">{t("about-me")}</p>
            </div>
          </div>
          <div className="flex-shrink-0 mx-auto mb-10 pointer-events-none focus:pointer-events-auto lg:mt-12 lg:px-4" draggable="false">
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
        <div className="flex flex-row justify-center space-x-2 md:justify-center lg:justify-start xsm:justify-center sm:justify-center">
          <Link href="/skills" passHref>
            <button
              type="button"
              className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              <span>{t("button_skills")}</span>
            </button>
          </Link>
          <Link href="/blog" passHref>
            <button
              type="button"
              className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              <span>{t("button_blog")}</span>
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button
              type="button"
              className="mt-2 inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-700 active:shadow-lg transition duration-150 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 dark:active:bg-purple-800 dark:focus:bg-purple-700"
            >
              <span>{t("me")}</span>
            </button>
          </Link>
        </div>

        {/* Sección de Skills integrada */}
        <div className="mt-10">
          <div className="flex justify-center place-items-center">
            <div className="flex-shrink-0 mb-10 lg:mt-12 lg:px-4" draggable="false">
              <Image
                src={config.github.url}
                alt="Profile"
                priority={true}
                className="rounded-full"
                draggable="false"
                width={250}
                height={250}
              />
            </div>
          </div>
          <h2 className="ml-5 text-2xl">{t("skills")}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Box
              title={t("languages")}
              icons={[
                <SkillsIcon key={"javascript"} text="Javascript" children={<SiJavascript />} />,
                <SkillsIcon key={"python"} text="Python" children={<SiPython />} />,
                <SkillsIcon key={"cplusplus"} text="C++" children={<SiCplusplus />} />,
              ]}
            />
            <Box
              title="Frontend"
              icons={[
                <SkillsIcon key={"react"} text="React" children={<SiReact />} />,
                <SkillsIcon key={"next"} text="Nextjs" children={<SiNextdotjs />} />,
                <SkillsIcon key={"figma"} text="Figma" children={<SiFigma />} />,
              ]}
            />
            <Box
              title="Backend"
              icons={[
                <SkillsIcon key={"node"} text="Nodejs" children={<SiNodedotjs />} />,
                <SkillsIcon key={"php"} text="PHP" children={<SiPhp />} />,
                <SkillsIcon key={"sql"} text="SQL" children={<SiSqlite />} />,
              ]}
            />
            <Box
              title="DBs"
              icons={[
                <SkillsIcon key={"postgreSQL"} text="PostgreSQL" children={<SiPostgresql />} />,
                <SkillsIcon key={"sqlServer"} text="SQL Server" children={<SiMicrosoftsqlserver />} />,
                <SkillsIcon key={"mysql"} text="MySQL" children={<SiMysql />} />,
              ]}
            />
            <Box
              title={t("other")}
              icons={[
                <SkillsIcon key={"kali"} text="Kali Linux" children={<SiKalilinux />} />,
                // <SkillsIcon text="Docker" children={<SiDocker />} />,
                <SkillsIcon key={"git"} text="Git" children={<SiGit />} />,
                <SkillsIcon key={"bash"} text="Bash" children={<SiGnubash />} />,
              ]}
            />
            <Box
              title={t("cloud")}
              icons={[
                // <SkillsIcon text="Heroku" children={<SiHeroku />} />,
                <SkillsIcon key={"vercel"} text="Vercel" children={<SiVercel />} />,
                <SkillsIcon key={"azure"} text="Azure" children={<SiMicrosoftazure />} />,
                <SkillsIcon key={"cisco"} text="Cisco" children={<SiCloudflare />} />,
              ]}
            />
            <Box
              title={t("education")}
              icons={[
                <a key="microsoft" href="https://www.linkedin.com/groups/14079083/">
                  <SkillsIcon text="MS Aleph" children={<SiMicrosoft />} />
                </a>,
                <a key="platzi" href="https://platzi.com/p/alejandro-aguilar74/">
                  <SkillsIcon text="PLatzi" children={<SiPlatzi />} />
                </a>,
                <a key="udemy" href="https://www.udemy.com/user/alejandro-aguilar-120/">
                  <SkillsIcon text="Udemy" children={<SiUdemy />} />
                </a>,
              ]}
            />
            <Box
              title={t("comunication")}
              icons={[
                <a key="discord" href="https://discord.com/users/1035181000872951838">
                  <SkillsIcon text="Discord" children={<SiDiscord />} />
                </a>,
                <a key="twitter" href="https://twitter.com/Rawierdt">
                  <SkillsIcon text="X" children={<SiTwitter />} />
                </a>,
                <a key="linkedin" href="https://www.linkedin.com/in/rawier/">
                  <SkillsIcon text="Linkedin" children={<SiLinkedin />} />
                </a>,
              ]}
            />
            {/* 𝕽♛ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;