import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  href?: string;
  onClick?: () => void;
  type?: "submit";
  accent?: boolean;
  className?: string;
}

const Button = ({
  href,
  onClick,
  type,
  accent,
  className,
  children,
}: ButtonProps) => {
  const commonProps = {
    className: clsx(
      "inline-block px-10 py-2 rounded-sm border border-gray-1000 transition hover:border-accent hover:bg-gray-1000 hover:text-accent",
      accent ? "bg-accent text-gray-1000" : "bg-white/5 text-white",
      className
    ),
  };

  if (href) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  if (onClick || type) {
    return (
      <button onClick={onClick} type={type} {...commonProps}>
        {children}
      </button>
    );
  }

  return null;
};

export default Button;
