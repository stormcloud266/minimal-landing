import { PropsWithChildren } from "react";

const Tag = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-sm pt-[1px] bg-gray-700 text-gray-300 px-5 rounded-full">
      {children}
    </span>
  );
};

export default Tag;
