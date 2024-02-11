import React from "react";
import { useTranslation } from "next-i18next";
const Info = () => {
  const { t } = useTranslation("Info");

  const items = [
    {
      svg: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </>
      ),
      _link: {
        text: "franco.n.quintana@gmail.com",
        href: "mailto: franco.n.quintana@gmail.com",
      },
    },
    {
      svg: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </>
      ),

      _link: {
        text: t("location"),
        href: "https://maps.app.goo.gl/GvjJ8Fj23awLpYQx8",
      },
    },
    {
      svg: (
        <>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
        </>
      ),
      _link: {
        text: "github.com/franco-q",
        href: "https://github.com/franco-q",
      },
    },
    {
      svg: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </>
      ),
      _link: {
        text: "inkedin.com/in/franco-q",
        href: "https://www.linkedin.com/in/franco-q",
      },
    },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-mono text-gray-900 text-center sm:text-left">
        Franco Nicolás Quintana
      </h2>
      <div className="flex flex-col space-y-2 w-full">
        {items.map((item, key) => (
          <div
            className="bg-gray-100 rounded flex p-2 h-full items-center max-w-xs"
            key={key}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
            >
              {item.svg}
            </svg>
            <a
              href={item._link.href}
              className="title-font font-medium print:text-sm"
              target="_blank"
            >
              {item._link.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
