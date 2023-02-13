import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "submit";
  accent?: boolean;
  className?: string;
}

const Button = ({
  href,
  to,
  onClick,
  type,
  accent,
  className,
  children,
}: ButtonProps) => {
  const commonProps = {
    className: clsx(
      "button-hover shadow-accent inline-block px-10 py-2 rounded-sm border border-gray-1000  transition hover:border-accent hover:bg-gray-1000 hover:text-accent",
      accent ? "bg-accent text-gray-1000" : "bg-white/5 text-white",
      className
    ),
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link href={to} {...commonProps}>
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
