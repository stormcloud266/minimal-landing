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
      <Wrapper>
        <div className="flex justify-between">
          <p className="font-semibold text-lg text-white uppercase">
            <span className="text-accent">Tawnee</span>.DEV
          </p>
          <nav>
            {links.map(({ href, text }) => (
              <Link
                href={href}
                key={href}
                className="pl-8 uppercase text-sm tracking-wider"
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
