import React, { MouseEventHandler, ReactNode } from "react";
import "./Modal.css";
interface Props {
  children: ReactNode;
  close: MouseEventHandler;
}
export const Modal: React.FC<Props> = ({ children, close }) => {
  return (
    <div className="modal">
      <Backdrop onNavigateBack={close}>{children}</Backdrop>
    </div>
  );
};

const Backdrop = ({
  children,
  onNavigateBack,
}: {
  children: ReactNode;
  onNavigateBack: MouseEventHandler;
}) => {
  return (
    <>
      <div onClick={onNavigateBack} className="backdrop"></div>
      {children}
    </>
  );
};
