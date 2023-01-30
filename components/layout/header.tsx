import Link from "next/link";
import Wrapper from "@components/ui/wrapper";

const links = [
  { href: "/#about", text: "About" },
  { href: "/#work", text: "Work" },
  { href: "/#contact", text: "Contact" },
];

const Header = () => {
  return (
    <header className="py-4 absolute w-full">
      <Wrapper noBreak>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-semibold text-lg text-white uppercase hover:opacity-80 transition-opacity"
          >
            <span className="text-accent">Tawnee</span>.DEV
          </Link>
          <nav>
            {links.map(({ href, text }) => (
              <Link
                href={href}
                key={href}
                className="pl-8 uppercase text-sm tracking-wider transition-colors hover:text-accent"
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
