import { Dropdown, Navbar } from "flowbite-react";
import { Flag } from "./component/Flag";
import React, { useState } from "react";
import "./i18n";
import { useTranslation } from "react-i18next";

interface LanguageProps {
  value: string;
  label: string;
  flag: React.ReactNode;
}

const Language = {
  EN: {
    value: "en",
    label: "English (US)",
    flag: <Flag.US />,
  },
  ZH: {
    value: "zh",
    label: "简体中文",
    flag: <Flag.CN />,
  },
};

function App() {
  const { t, i18n } = useTranslation();

  const [lng, setLng] = useState<LanguageProps>(Language.EN);

  function handleLanguageChange(language: LanguageProps) {
    setLng(language);
    i18n.changeLanguage(language.value);
  }

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="relative mx-5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <>
                {lng.flag}
                {lng.label}
              </>
            }
            theme={{
              inlineWrapper:
                "inline-flex items-center font-medium justify-center, px-4 py-2 text-sm text-gray-900 rounded-lg hover:bg-gray-100",
            }}
          >
            <Dropdown.Item
              onClick={() => {
                handleLanguageChange(Language.EN);
              }}
            >
              <Flag.US width={3.5} />
              English (US)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                handleLanguageChange(Language.ZH);
              }}
            >
              <Flag.CN width={3.5} />
              简体中文
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            {t("nav.home")}
          </Navbar.Link>
          <Navbar.Link href="#">{t("nav.about")}</Navbar.Link>
          <Navbar.Link href="#">{t("nav.services")}</Navbar.Link>
          <Navbar.Link href="#">{t("nav.pricing")}</Navbar.Link>
          <Navbar.Link href="#">{t("nav.contact")}</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default App;
