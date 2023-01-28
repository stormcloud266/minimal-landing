import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  href?: string;
  onClick?: () => void;
  accent?: boolean;
  className?: string;
}

const Button = ({
  href,
  onClick,
  accent,
  className,
  children,
}: ButtonProps) => {
  const commonProps = {
    className: clsx(
      " inline-block px-10 py-2 rounded-lg",
      accent ? "bg-accent text-black/90" : "bg-white/5 text-white",
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

  if (onClick) {
    return (
      <button onClick={onClick} {...commonProps}>
        {children}
      </button>
    );
  }

  return null;
};

export default Button;
