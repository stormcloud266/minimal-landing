import Link from "next/link";
import Wrapper from "@components/ui/wrapper";
import Fade from "@components/animations/fade";
import { useState } from "react";
import CloseIcon from "@components/icons/closeIcon";
import HamburgerIcon from "@components/icons/hamburgerIcon";

const links = [
  { href: "/#about", text: "About" },
  { href: "/#work", text: "Work" },
  { href: "#contact", text: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 absolute w-full">
      <Fade>
        <Wrapper noBreak>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="font-semibold text-lg text-white uppercase hover:opacity-80 transition-opacity relative z-10"
            >
              <span className="text-accent">Tawnee</span>.DEV
            </Link>

            <button
              className="sm:hidden relative z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            <nav className="absolute sm:static pt-12 sm:pt-0 pb-2 sm:pb-0 px-2 sm:px-0 top-0 left-0 w-full sm:w-min flex flex-col items-center sm:block z-1 bg-gray-800 sm:bg-transparent text-white sm:text-gray-400 text-center sm:text-right">
              {links.map(({ href, text }) => (
                <Link
                  href={href}
                  key={href}
                  className="py-2 px-8 sm:px-0 sm:py-0 sm:ml-8 my-2 sm:my-0 uppercase text-sm tracking-wider transition-colors rounded-lg hover:text-accent hover:bg-black"
                >
                  {text}
                </Link>
              ))}
            </nav>
          </div>
        </Wrapper>
      </Fade>
    </header>
  );
};

export default Header;
