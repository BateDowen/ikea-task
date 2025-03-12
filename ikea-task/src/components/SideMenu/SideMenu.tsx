import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "../Modal/Modal";
import Logo from "../Logo/Logo";
import IconButton from "../IconButton/IconButton";
import Cross from "../Icons/Cross/Cross";

const SideMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {isOpen && (
        <Modal close={() => setIsOpen(false)}>
          <div
            style={{
              animation: "modalSlideFromLeft",
              animationDuration: "200ms",
              animationTimingFunction: "ease-in",
            }}
            className="absolute z-[4001] max-w-[480px] w-full h-full bg-white"
          >
            <div onClick={() => setIsOpen(false)} className="flex px-4 py-2 gap-10 border-b-1 border-b-gray-100 my-4">
              <IconButton >
                <Cross />
              </IconButton>
              <Logo />
            </div>
            <div className="pt-7 px-6 mx-auto max-w-[340px] ">
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[24px] hover:underline cursor-pointer">
                  Продукти
                </span>
                <span className="font-bold text-[24px] hover:underline cursor-pointer">
                  Стаи
                </span>
                <span className="font-bold text-[24px] hover:underline cursor-pointer">
                  Вдъхновение
                </span>
              </div>
              <div className="mt-12 flex flex-col gap-4">
                <span  className="font-bold text-[14px] hover:underline cursor-pointer">Услуги на ИКЕА</span>
                <span  className="font-bold text-[14px] hover:underline cursor-pointer">Оферти</span>
                <span  className="font-bold text-[14px] hover:underline cursor-pointer">Свържете се с нас</span>
                <span  className="font-bold text-[14px] hover:underline cursor-pointer">Ваучер за подарък ИКЕА</span>
                <span  className="font-bold text-[14px] hover:underline cursor-pointer">IKEA Live Shopping</span>
              </div>
              <div className="mt-12 flex flex-col gap-4">
                <span  className=" text-[14px] hover:underline cursor-pointer">ΙΚΕΑ Family</span>
                <span  className=" text-[14px] hover:underline cursor-pointer">ИКЕА за бизнеса</span>
                <span  className=" text-[14px] hover:underline cursor-pointer">ИКЕА Храни и напитки</span>
                <span  className=" text-[14px] hover:underline cursor-pointer">Магазини</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SideMenu;
