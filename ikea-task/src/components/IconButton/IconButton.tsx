import React, { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return (
    <div className="p-2 rounded-full cursor-pointer hover:bg-gray-300 ">
      {children}
    </div>
  );
};

export default IconButton;
