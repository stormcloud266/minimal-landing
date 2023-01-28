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
        "pt-28": top,
        "pb-28": bottom,
      })}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
