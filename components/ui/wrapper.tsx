import { PropsWithChildren } from "react";

interface WrapperProps extends PropsWithChildren {}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="w-full max-w-8xl px-4 mx-auto">{children}</div>;
};

export default Wrapper;
