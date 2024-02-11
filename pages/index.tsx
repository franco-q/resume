import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Info from "../components/Info";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Menu from "../components/Menu";
import Story from "../components/Story";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 print:p-0 text-gray-600 body-font overflow-hidden">
      <Head>
        <title>Franco Q</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏾‍💻</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&family=Quicksand:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col space-y-14 max-w-5xl w-full px-10 sm:space-y-20 print:space-y-5">
        <div className="w-full">
          <Menu />
        </div>
        <div className="w-full">
          <div className="flex flex-col space-y-4 max-w-xs mx-auto sm:max-w-full sm:flex-row sm:space-y-0 sm:space-x-14 sm:align-center sm:divide-x">
            <div className="sm:max-w-xs print:w-64">
              <Intro />
            </div>
            <div className="flex sm:items-center sm:pl-14">
              <Info />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Story />
        </div>
        <div className="w-full">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "Intro",
      "Info",
      "Skills",
      "Story",
    ])),
  },
});

export default Home;
