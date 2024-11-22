import { NextPage } from 'next';
import Link from 'next/link'; // Asegúrate de importar Link
import { ReactElement, useRef, useState } from 'react';
import useTranslation from "next-translate/useTranslation";
import Head from 'next/head';
import { FaHome } from "react-icons/fa";
import { motion, HTMLMotionProps } from "framer-motion";

const MotionButton: React.FC<HTMLMotionProps<"button">> = motion.button;

const NotFound: NextPage = (): ReactElement => {
  const { t } = useTranslation("index");

  const TARGET_TEXT = "Go back Home";
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;

  const CHARS = "!@#$%^&*():{};|,.<>/?";

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    // Si ya hay un intervalo en ejecución, limpiarlo antes de iniciar uno nuevo
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setText(TARGET_TEXT);
  };

  return (
    <>
      <noscript>
        <h1>
          È necessario abilitare JavaScript per eseguire questa applicazione.
        </h1>
      </noscript>
      <Head>
        <title>Rawier - 404</title>
        <link rel="shortcut icon" type="image/png" href="./favicon.ico" />
        <meta name="description" content="Rawier 404 Not Found." />
        <meta property="og:description" content="Rawier 404 Not Found." />
        <meta name="theme-color" content="#8e52f5" />
        <meta property="og:title" content="Rawier - Not Found" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: *; font-src 'self'; connect-src 'self' https://vitals.vercel-insights.com;"
        />
        <meta property="og:url" content="https://Rawier.vercel.app" />
      </Head>
      <div className="flex flex-col">
        <img
          src="https://i.ibb.co/PtTThks/lis.gif"
          loading="lazy"
          draggable="false"
          alt="Life Is Strange"
          className="object-cover w-full h-64 filter blur-sm"
        />
        <br />
        <div className="flex justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
              Time bends, but this page remains lost.
            </h1>
            <p className="mt-4 text-gray-500">
              Rewind your search, or journey back home to the beginning.
            </p>
            <br />
            <Link href="/" passHref>
              <MotionButton
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onMouseEnter={scramble}
                onMouseLeave={stopScramble}
                className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-black px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300 leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg duration-150 ease-in-out dark:bg-purple-600"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <FaHome />
                  <span>{text}</span>
                </div>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "-100%" }}
                  transition={{ repeat: Infinity, repeatType: "mirror", duration: 1, ease: "linear" }}
                  className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
                />
              </MotionButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
