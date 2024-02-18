import { Dropdown, Navbar } from "flowbite-react";
import { Flag } from "./component/Flag";
import React, { useState } from "react";

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
  const [lng, setLng] = useState<LanguageProps>(Language.EN);

  function handleLanguageChange(language: LanguageProps) {
    setLng(language);
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
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default App;
