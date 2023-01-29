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
        "inline-flex items-center",
        accent ? "text-accent" : "text-white"
      )}
    >
      <span className="mr-4">{children}</span> <ArrowRightIcon />
    </Link>
  );
};

export default TextLink;
