import React from "react";
import Check from "./Check";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Skills = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const translations: any = i18n.getResourceBundle(router.locale, "Skills");

  return (
    <div className="pt-5 space-y-4">
      <div className="sm:text-center print:mb-1">
        <h1 className="block font-semibold title-font text-lg text-gray-700 mb-2 md:m-0">
          Technical skills
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          {translations.intro}
        </p>
      </div>
      <div
        className="flex flex-wrap"
      >
        {translations.skills.map(
          (categ: { title: string; links: string[] }, i: number) => (
            <div
              className="w-1/2 sm:w-1/4 w-full print:px-0 mb-3"
              style={{ flex: "1 0 auto" }}
              key={i + categ.title}
            >
              <h2 className="font-mono font-medium title-font tracking-widest text-gray-900 mb-2 text-sm">
                {categ.title}
              </h2>
              <nav className="flex flex-col sm:items-start -mb-1 space-y-2.5 print:text-xs print:space-y-1.5">
                {categ.links.map((txt: string, j: number) => (
                  <span key={i + categ.title + j}>
                    <Check />
                    {txt}
                  </span>
                ))}
              </nav>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
