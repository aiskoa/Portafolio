import { config } from "../../../config";
import Image from "next/image";
import Box from "../../common/box";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiLinux,
  SiDigitalocean,
  SiGnubash,
  SiPython,
  SiCplusplus,
  SiElectron,
  SiMysql,
  SiKalilinux,
  SiMicrosoftazure,
  SiPlatzi,
  SiUdemy,
  SiLinkedin,
  SiTwitter,
  SiDiscord,
  SiHackthebox,
  SiJavascript,
  SiJava,
  SiMicrosoftsqlserver,
  SiCisco,
  SiFigma,
  SiSpring,
  SiPhp,
  SiWindowsterminal,
  SiVim,
  SiMicrosoft,
} from "react-icons/si";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";
import { SkillsIcon } from "../..";

/**
 * @description Skills section
 * @returns { ReactElement } A preview of the skills section
 */

const Skills: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <>
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
          <SkillsIcon text="Javascript" children={<SiJavascript />} />,
          <SkillsIcon text="Python" children={<SiPython />} />,
          <SkillsIcon text="Java" children={<SiJava />} />,
          // <SkillsIcon text="C++" children={<SiCplusplus />} />,
        ]}
        />
        <Box
          title="Frontend"
          icons={[
            <SkillsIcon text="React" children={<SiReact />} />,
            <SkillsIcon text="Nextjs" children={<SiNextdotjs />} />,
            <SkillsIcon text="Figma" children={<SiFigma />} />,
            // <SkillsIcon text="Material UI" children={<SiMaterialui />} />,
          ]}
        />
        <Box
          title="Backend"
          icons={[
            <SkillsIcon text="Nodejs" children={<SiNodedotjs />} />,
            <SkillsIcon text="PHP" children={<SiPhp />} />,
            <SkillsIcon text="Spring" children={<SiSpring />} />,
          ]}
        />
        <Box
          title="DBs"
          icons={[
            // <SkillsIcon text="MongoDB" children={<SiMongodb />} />,
            // <SkillsIcon text="PostgreSQL" children={<SiPostgresql />} />,
            <SkillsIcon text="SQL Server" children={<SiMicrosoftsqlserver />} />,
            <SkillsIcon text="MySQL" children={<SiMysql />} />,
          ]}
        />
        <Box
          title={t("other")}
          icons={[
            <SkillsIcon text="Kali Linux" children={<SiKalilinux />} />,
            // <SkillsIcon text="Docker" children={<SiDocker />} />,
            <SkillsIcon text="Vim" children={<SiVim />} />,
            <SkillsIcon text="Terminal" children={<SiWindowsterminal/>} />,
            <SkillsIcon text="Bash" children={<SiGnubash />} />,
          ]}
        />
        <Box
          title={t("cloud")}
          icons={[
            // <SkillsIcon text="Heroku" children={<SiHeroku />} />,
            <SkillsIcon text="Vercel" children={<SiVercel />} />,
            <SkillsIcon text="Azure" children={<SiMicrosoftazure />} />,
            <SkillsIcon text="Cisco" children={<SiCisco />} />,
          ]}
        />
        <Box
          title={t("education")}
          icons={[
            <a href="https://www.linkedin.com/groups/14079083/"><SkillsIcon text="MS Aleph" children={<SiMicrosoft />} /></a>,
            <a href="https://app.hackthebox.com/users/1280543"><SkillsIcon text="HacTheBox" children={<SiHackthebox />} /></a>,
            <a href="https://platzi.com/p/alejandro-aguilar74/"><SkillsIcon text="PLatzi" children={<SiPlatzi />} /></a>,
            <a href="https://www.udemy.com/user/alejandro-aguilar-120/"><SkillsIcon text="Udemy" children={<SiUdemy />} /></a>,
          ]}
        />
        <Box
          title={t("comunication")}
          icons={[
            <a href="https://discord.gg/VFg9SSmPFy"><SkillsIcon text="Discord" children={<SiDiscord />} /></a>,
            <a href="https://twitter.com/Rawierdt"><SkillsIcon text="Twitter" children={<SiTwitter />} /></a>,
            <a href="https://www.linkedin.com/in/rawier/"><SkillsIcon text="Linkedin" children={<SiLinkedin />} /></a>,
          ]}
        />
        {/* 𝕽♛ */}
      </div>
    </>
  );
};

export default Skills;
