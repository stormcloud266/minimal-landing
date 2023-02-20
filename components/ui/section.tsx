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
        "pt-24 lg:pt-52": top,
        "pb-24 lg:pb-52": bottom,
      })}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
