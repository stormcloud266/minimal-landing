import { useEffect, useState } from "react";
import Link from "next/link";
import { m as motion } from "framer-motion";

import Wrapper from "@components/ui/wrapper";
import Fade from "@components/animations/fade";
import CloseIcon from "@components/icons/closeIcon";
import HamburgerIcon from "@components/icons/hamburgerIcon";
import useCurrentWidth from "hooks/useCurrentWidth";

const links = [
  { href: "/#about", text: "About" },
  { href: "/#work", text: "Work" },
  { href: "#contact", text: "Contact" },
];

const navVariants = {
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    opacity: 1,
    display: "flex",
  },
};

const BREAK_POINT = 640;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useCurrentWidth();

  useEffect(() => {
    if (width < BREAK_POINT) {
      setIsOpen(false);
    }
  }, [width]);

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

            {width < BREAK_POINT ? (
              <div className="block sm:hidden absolute top-0 left-0 w-full z-1">
                <motion.nav
                  variants={navVariants}
                  animate={isOpen ? "open" : "closed"}
                  className=" pt-14 pb-4 px-2  flex-col items-center bg-gray-800 text-white text-center"
                >
                  {links.map(({ href, text }) => (
                    <Link
                      href={href}
                      key={href}
                      className="py-2 px-8 my-2 uppercase text-lg tracking-wider transition-colors rounded-lg hover:text-accent hover:bg-black"
                    >
                      {text}
                    </Link>
                  ))}
                </motion.nav>
              </div>
            ) : (
              <nav className="hidden sm:block">
                {links.map(({ href, text }) => (
                  <Link
                    href={href}
                    key={href}
                    className="ml-8 uppercase text-sm tracking-wider transition-colors hover:text-accent"
                  >
                    {text}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </Wrapper>
      </Fade>
    </header>
  );
};

export default Header;
