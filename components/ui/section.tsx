import clsx from "clsx";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  top?: boolean;
  bottom?: boolean;
}

const Section = ({ children, top = true, bottom = true }: SectionProps) => {
  return (
    <section
      className={clsx({
        "pt-28": top,
        "pb-28": bottom,
      })}
    >
      {children}
    </section>
  );
};

export default Section;
