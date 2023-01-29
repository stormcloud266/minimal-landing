import Wrapper from "@components/ui/wrapper";
import Link from "next/link";

const links = [
  { href: "/#about", text: "About" },
  { href: "/#work", text: "Work" },
  { href: "/#contact", text: "Contact" },
];

const Footer = () => {
  return (
    <footer className="py-4 w-full">
      <Wrapper>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-white uppercase">
            <span className="text-accent">Tawnee</span>.DEV
          </p>
          <p className="text-sm text-gray-400">Copyright &copy; 2023</p>
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
    </footer>
  );
};

export default Footer;
