import clsx from "clsx";
import { HTMLProps } from "react";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  top?: boolean;
  bottom?: boolean;
}

const Section = ({
  children,
  top = true,
  bottom = true,
  ...rest
}: SectionProps) => {
  return (
    <section
      className={clsx("w-full", {
        "pt-36": top,
        "pb-36": bottom,
      })}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
