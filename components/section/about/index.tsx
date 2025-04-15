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
} from "react-icons/si";

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");

  const skillsData = [
    {
      title: t("languages"),
      icons: [
        { key: "bash", text: "Bash", icon: <i className="text-sm devicon-bash-plain colored" /> },
        { key: "csharp", text: "C#", icon: <i className="text-sm devicon-csharp-plain colored" /> },
        { key: "css3", text: "CSS", icon: <i className="text-sm devicon-css3-plain colored" /> },
        { key: "html5", text: "HTML", icon: <i className="text-sm devicon-html5-plain colored" /> },
        { key: "java", text: "Java", icon: <i className="text-sm devicon-java-plain colored" /> },
        { key: "javascript", text: "JavaScript", icon: <SiJavascript size={16} /> },
        { key: "markdown", text: "Markdown", icon: <i className="text-sm devicon-markdown-original colored" /> },
        { key: "python", text: "Python", icon: <SiPython size={16} /> },
        { key: "rust", text: "Rust", icon: <i className="text-sm devicon-rust-plain colored" /> },
        { key: "sass", text: "Sass", icon: <i className="text-sm devicon-sass-original colored" /> },
        { key: "sql", text: "SQL", icon: <i className="text-sm devicon-mysql-plain colored" /> },
      ],
    },
    {
      title: "Frameworks and Libraries",
      icons: [
        { key: "apollo", text: "Apollo", icon: <i className="text-sm devicon-apollo-original colored" /> },
        { key: "bootstrap", text: "Bootstrap", icon: <i className="text-sm devicon-bootstrap-plain colored" /> },
        { key: "bun", text: "Bun", icon: <i className="text-sm devicon-bun-sh colored" /> },
        { key: "chakraui", text: "Chakra UI", icon: <i className="text-sm devicon-chakraui-colored" /> },
        { key: "dotnet", text: ".NET", icon: <i className="text-sm devicon-dotnetcore-plain colored" /> },
        { key: "electron", text: "Electron", icon: <i className="text-sm devicon-electron-original colored" /> },
        { key: "express", text: "Express", icon: <i className="text-sm devicon-express-original colored" /> },
        { key: "githubactions", text: "GitHub Actions", icon: <i className="text-sm devicon-github-original colored" /> },
        { key: "graphql", text: "GraphQL", icon: <i className="text-sm devicon-graphql-plain colored" /> },
        { key: "hono", text: "Hono", icon: <i className="text-sm devicon-hono-icon colored" /> },
        { key: "junit", text: "JUnit", icon: <i className="text-sm devicon-junit-plain colored" /> },
        { key: "jwt", text: "JWT", icon: <span className="text-sm">JWT</span> },
        { key: "nestjs", text: "NestJS", icon: <i className="text-sm devicon-nestjs-plain colored" /> },
        { key: "nextjs", text: "Next.js", icon: <SiNextdotjs size={16} /> },
        { key: "passport", text: "Passport", icon: <i className="text-sm devicon-passport-original colored" /> },
        { key: "react", text: "React", icon: <SiReact size={16} /> },
        { key: "socketio", text: "Socket.IO", icon: <i className="text-sm devicon-socketio-original colored" /> },
        { key: "tailwindcss", text: "Tailwind CSS", icon: <i className="text-sm devicon-tailwindcss-plain colored" /> },
        { key: "tauri", text: "Tauri", icon: <i className="text-sm devicon-tauri-plain colored" /> },
        { key: "unity", text: "Unity", icon: <i className="text-sm devicon-unity-original colored" /> },
        { key: "vite", text: "Vite", icon: <i className="text-sm devicon-vitejs-plain colored" /> },
      ],
    },
    {
      title: "Tools",
      icons: [
        { key: "apache", text: "Apache", icon: <i className="text-sm devicon-apache-plain colored" /> },
        { key: "apachemaven", text: "Apache Maven", icon: <i className="text-sm devicon-apachemaven-plain colored" /> },
        { key: "debian", text: "Debian", icon: <i className="text-sm devicon-debian-plain colored" /> },
        { key: "docker", text: "Docker", icon: <i className="text-sm devicon-docker-plain colored" /> },
        { key: "git", text: "Git", icon: <SiGit size={16} /> },
        { key: "gradle", text: "Gradle", icon: <i className="text-sm devicon-gradle-plain colored" /> },
        { key: "insomnia", text: "Insomnia", icon: <i className="text-sm devicon-insomnia-plain colored" /> },
        { key: "jenkins", text: "Jenkins", icon: <i className="text-sm devicon-jenkins-plain colored" /> },
        { key: "nginx", text: "Nginx", icon: <i className="text-sm devicon-nginx-original colored" /> },
        { key: "nation", text: "Nation", icon: <span className="text-sm">N</span> }, // Placeholder - replace with actual icon if available
        { key: "obs", text: "OBS", icon: <i className="text-sm devicon-obsstudio-plain colored" /> },
        { key: "trello", text: "Trello", icon: <i className="text-sm devicon-trello-plain colored" /> },
        { key: "ubuntu", text: "Ubuntu", icon: <i className="text-sm devicon-ubuntu-plain colored" /> },
        { key: "vscode", text: "Visual Studio Code", icon: <i className="text-sm devicon-vscode-plain colored" /> },
      ],
    },
    {
      title: "Clouds and Providers",
      icons: [
        { key: "atlas", text: "Atlas", icon: <i className="text-sm devicon-mongodb-plain colored" /> }, // Assuming Atlas is related to MongoDB
        { key: "aws", text: "AWS", icon: <i className="text-sm devicon-amazonwebservices-plain colored" /> },
        { key: "cloudflare", text: "Cloudflare", icon: <SiCloudflare size={16} /> },
        { key: "cloudflareworkers", text: "Cloudflare Workers", icon: <SiCloudflare size={16} /> }, // Using same icon, adjust if needed
        { key: "github", text: "GitHub", icon: <i className="text-sm devicon-github-original colored" /> },
        { key: "githubpages", text: "GitHub Pages", icon: <i className="text-sm devicon-github-original colored" /> }, // Using same icon, adjust if needed
        { key: "mariadb", text: "MariaDB", icon: <i className="text-sm devicon-mariadb-plain colored" /> },
        { key: "mongodb", text: "MongoDB", icon: <i className="text-sm devicon-mongodb-plain colored" /> },
        { key: "mysql", text: "MySQL", icon: <SiMysql size={16} /> },
        { key: "ovh", text: "OVH", icon: <span className="text-sm">OVH</span> }, // Placeholder - replace with actual icon if available
        { key: "railway", text: "Railway", icon: <span className="text-sm">R</span> }, // Placeholder - replace with actual icon if available
      ],
    },
    // You can add more categories like "Hardware" if you have relevant icons
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