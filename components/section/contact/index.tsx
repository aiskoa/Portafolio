import { config } from "../../../config";
import Image from "next/image";
import Box from "../../common/box";
import { SiDiscord, SiHackthebox } from "react-icons/si";
import useTranslation from "next-translate/useTranslation";
import { ReactElement, useState, useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { SkillsIcon } from "../..";

/**
 * @description Contac section
 * @returns { ReactElement } A preview of the skills section
 */

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const images = [
    "./providers/ipn.webp",
    "./providers/aiep.webp",
    "./providers/humble.webp",
    "./providers/soundraw.webp",
    "./providers/plug-patches.webp",
    "./providers/carnes-domicilio.webp"
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-64 overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 h-full min-w-full px-2">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-contain w-auto h-full mx-auto"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-black rounded-full top-1/2"
      >
        <FiArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-black rounded-full top-1/2"
      >
        <FiArrowRight size={24} />
      </button>
    </div>
  );
};

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
            width={250}
            height={250}
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

          <ImageCarousel/>
          <br />

          <div className="flex text-xs border-2 border-gray-300 border-solid rounded-md justify-evenly dark:border-white">
          <p className="font-bold text-yellow-500">
            BTC
          </p>
          1sPVqrtZNvAF8NawLHvVSGCP4aNWvUuTf
          <br />
          <p className="font-bold text-sky-500">
            ETH/BSC
          </p>
          0xcdf8d202be9876afcdb727d36a10d1ac1d0df52b    
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
