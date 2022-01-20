import "tailwindcss/tailwind.css";
import { appWithTranslation } from "next-i18next";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    process.env.HJID && hotjar.initialize(process.env.HJID, 6);
  }, []);
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
