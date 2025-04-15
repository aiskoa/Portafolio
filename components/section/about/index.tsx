import React, { ReactElement } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { config } from "../../../config/index";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Tooltip } from "@material-tailwind/react";
import {
  SiReact, SiNextdotjs,
  SiNodedotjs, SiVercel, SiGnubash, SiPython, SiMysql, SiKalilinux,
  SiMicrosoftazure, SiPlatzi, SiUdemy, SiLinkedin, SiTwitter,
  SiDiscord, SiJavascript, SiMicrosoftsqlserver, SiCisco,
  SiFigma, SiPhp, SiMicrosoft, SiGit, SiSqlite, SiCplusplus,
  SiPostgresql,
  SiCloudflare,
  SiCss3,
  SiHtml5,
  SiMarkdown,
  SiAstro,
  SiBootstrap,
  SiElectron,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiTauri,
  SiVite,
  SiApache,
  SiApachemaven,
  SiDebian,
  SiDocker,
  SiNginx,
  SiNotion,
  SiObsstudio,
  SiTrello,
  SiUbuntu,
  SiVisualstudiocode,
  SiAmazonaws,
  SiGithub,
  SiMongodb,
  SiOvh,
  SiVmware,
  SiBluetooth,
  SiRaspberrypi,
} from "react-icons/si";

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");

  const skillsData = [
    {
      title: t("languages"),
      icons: [
        { key: "bash", text: "Bash", icon: <SiGnubash size={16}/> },
        { key: "css3", text: "CSS", icon: <SiCss3 size={16}/> },
        { key: "cplusplus", text: "C++", icon: <SiCplusplus size={16}/> },
        { key: "html5", text: "HTML", icon: <SiHtml5 size={16}/> },
        { key: "javascript", text: "JavaScript", icon: <SiJavascript size={16} /> },
        { key: "markdown", text: "Markdown", icon: <SiMarkdown size={16}/> },
        { key: "python", text: "Python", icon: <SiPython size={16} /> },
        { key: "sql", text: "SQL", icon: <SiMysql size={16}/> },
        { key: "php", text: "PHP", icon: <SiPhp size={16}/> },
      ],
    },
    {
      title: t("frameworks_lib"),
      icons: [
        { key: "astro", text: "Astro", icon: <SiAstro size={16}/> },
        { key: "bootstrap", text: "Bootstrap", icon: <SiBootstrap size={16}/> },
        { key: "electron", text: "Electron", icon: <SiElectron size={16}/> },
        { key: "express", text: "Express", icon: <SiExpress size={16}/> },
        { key: "nextjs", text: "Next.js", icon: <SiNextdotjs size={16} /> },
        { key: "react", text: "React", icon: <SiReact size={16} /> },
        { key: "socketio", text: "Socket.IO", icon: <SiSocketdotio size={16}/> },
        { key: "tailwindcss", text: "Tailwind CSS", icon: <SiTailwindcss size={16}/>},
        { key: "tauri", text: "Tauri", icon: <SiTauri size={16}/> },
        { key: "vite", text: "Vite", icon: <SiVite size={16}/> },
      ],
    },
    {
      title: t("tools"),
      icons: [
        { key: "apache", text: "Apache", icon: <SiApache size={16}/> },
        { key: "apachemaven", text: "Apache Maven", icon: <SiApachemaven size={16}/> },
        { key: "debian", text: "Debian", icon: <SiDebian size={16}/> },
        { key: "docker", text: "Docker", icon: <SiDocker size={16}/> },
        { key: "git", text: "Git", icon: <SiGit size={16} /> },
        { key: "nginx", text: "Nginx", icon: <SiNginx size={16}/> },
        { key: "notion", text: "Notion", icon: <SiNotion size={16}/> },
        { key: "obs", text: "OBS", icon: <SiObsstudio size={16}/> },
        { key: "trello", text: "Trello", icon: <SiTrello size={16}/> },
        { key: "ubuntu", text: "Ubuntu", icon: <SiUbuntu size={16}/> },
        { key: "vscode", text: "Visual Studio Code", icon: <SiVisualstudiocode size={16}/> },
        { key: "kalilinux", text: "Kali Linux", icon: <SiKalilinux size={16}/> },
        { key: "vmware", text: "VMware", icon: <SiVmware size={16}/> },
      ],
    },
    {
      title: t("clouds_bd"),
      icons: [
        { key: "azure", text: "Azure", icon: <SiMicrosoftazure size={16}/> }, 
        { key: "aws", text: "AWS", icon: <SiAmazonaws size={16}/> },
        { key: "cloudflare", text: "Cloudflare", icon: <SiCloudflare size={16} /> },
        { key: "cisco", text: "Cisco", icon: <SiCisco size={16}/> },
        { key: "github", text: "GitHub", icon: <SiGithub size={16}/> },
        { key: "mongodb", text: "MongoDB", icon: <SiMongodb size={16}/> },
        { key: "mysql", text: "MySQL", icon: <SiMysql size={16} /> },
        { key: "postgresql", text: "PostgreSQL", icon: <SiPostgresql size={16}/> },
        { key: "ovh", text: "OVH", icon: <SiOvh size={16}/> },
        { key: "vercel", text: "Vercel", icon: <SiVercel size={16}/> },
      ],
    },
    // {
    //   title: "Hardware",
    //   icons: [
    //     { key: "bluetooth", text: "Bluetooth", icon: <SiBluetooth size={16}/> },
    //     { key: "raspberrypi", text: "Raspberrypi", icon: <SiRaspberrypi size={16}/> },
    //   ],
    // },
  ];

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
  
        {/* Sección de Skills como etiquetas */}
        <div className="mt-10">
          <h2 className="ml-5 text-2xl">{t("skills")}</h2>
          <div className="ml-5">
            {skillsData.map((category) => (
              <div key={category.title} className="mb-4">
                <h3 className="font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                {category.icons.map((skill) => (
                  <Tooltip
                    key={skill.key}
                    placement="top"
                    className="mt-0.3 p-1 bg-gray-800 text-white text-xs rounded animate-fadeIn"
                    content={skill.text}
                    // Añade las propiedades faltantes
                    nonce=""
                    onResize={() => {}}
                    onResizeCapture={() => {}}
                  >
                    <span className="inline-flex items-center rounded-full bg-gray-200 text-gray-800 text-xs py-0.5 px-2">
                      {skill.icon}
                      <span className="ml-1">{skill.text}</span>
                    </span>
                  </Tooltip>
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;