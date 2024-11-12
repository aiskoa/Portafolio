import React, { ReactElement } from "react";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";

/**
 * @description               Change the language of the application
 * @returns { ReactElement }  ChangeLanguage component which is used to change the language of the current application
 */

const ChangeLanguage: React.FC = (): ReactElement => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={async () =>
          await setLanguage(router.locale === "en" ? "es" : "en")
        }
      >
        {router.locale === "en" ? "🇺🇸" : "🇪🇸"}
      </button>
    </>
  );
}

export default ChangeLanguage;
