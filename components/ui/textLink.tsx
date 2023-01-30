import ArrowRightIcon from "@components/icons/arrowRightIcon";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  href: string;
  accent?: boolean;
}

const TextLink = ({ children, href, accent }: LinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "arrow-link inline-flex items-center transition-colors",
        accent ? "text-accent hover:text-white" : "text-white hover:text-accent"
      )}
    >
      <span className="mr-4">{children}</span> <ArrowRightIcon />
    </Link>
  );
};

export default TextLink;
