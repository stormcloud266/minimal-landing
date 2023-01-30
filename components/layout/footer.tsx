import Wrapper from "@components/ui/wrapper";
import clsx from "clsx";
import Link from "next/link";

const links = [
  { href: "/#about", text: "About" },
  { href: "/#work", text: "Work" },
  { href: "/#contact", text: "Contact" },
];

const Footer = () => {
  return (
    <footer className="py-4 w-full">
      <Wrapper noBreak>
        <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
          <p className="font-semibold text-lg text-white uppercase">
            <span className="text-accent">Tawnee</span>.DEV
          </p>
          <p className="text-sm text-gray-400">Copyright &copy; 2023</p>
          <nav>
            {links.map(({ href, text }, i) => (
              <Link
                href={href}
                key={href}
                className={clsx("uppercase text-sm tracking-wider", {
                  "ml-8": i != 0,
                })}
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
