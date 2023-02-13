import ArrowRightIcon from "@components/icons/arrowRightIcon";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  href?: string;
  to?: string;
  accent?: boolean;
}

const TextLink = ({ children, href, to, accent }: LinkProps) => {
  const commonProps = {
    className: clsx(
      "arrow-link inline-flex items-center transition-colors",
      accent ? "text-accent hover:text-white" : "text-white hover:text-accent"
    ),
  };

  if (to) {
    return (
      <Link href={to} {...commonProps}>
        <span className="mr-4">{children}</span> <ArrowRightIcon />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        <span className="mr-4">{children}</span> <ArrowRightIcon />
      </a>
    );
  }

  return null;
};

export default TextLink;
