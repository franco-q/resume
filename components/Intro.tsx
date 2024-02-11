import React from "react";
import { useTranslation } from "next-i18next";

const Intro = () => {
  const { t } = useTranslation("Intro");
  return (
    <div className="space-y-4 text-center">
      <div className="w-48 h-48 mx-auto print:w-40 print:h-40">
        <img src="/img.png" alt="" />
      </div>
      <p className="text-base print:text-sm">
        {t("line1")} {t("line2")} {t("line3")}
      </p>
    </div>
  );
};
export default Intro;
