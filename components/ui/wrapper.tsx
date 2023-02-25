import clsx from "clsx";
import { PropsWithChildren } from "react";

interface WrapperProps extends PropsWithChildren {
  noBreak?: boolean;
}

const Wrapper = ({ noBreak, children }: WrapperProps) => {
  return (
    <div
      className={clsx(
        "w-full px-4 mx-auto",
        noBreak ? "max-w-8xl" : "max-w-2xl md:max-w-8xl"
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
