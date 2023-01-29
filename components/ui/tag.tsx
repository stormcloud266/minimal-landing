import { PropsWithChildren } from "react";

interface TagProps extends PropsWithChildren {}

const Tag = ({ children }: TagProps) => {
  return (
    <span className="text-sm bg-gray-700 text-gray-300 px-5 rounded-full">
      {children}
    </span>
  );
};

export default Tag;
