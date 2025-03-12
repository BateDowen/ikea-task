import React, { Dispatch, SetStateAction } from "react";
import Logo from "../Logo/Logo";
import Search from "../Icons/Search/Search";
import Photo from "../Icons/Photo/Photo";
import Truck from "../Icons/Truck/Truck";
import Heart from "../Icons/Heart/Heart";
import ShoppingCart from "../Icons/ShoppingCart/ShoppingCart";
import Profile from "../Icons/Profile/Profile";
import Hamburger from "../Icons/Hamburger/Hamburger";
import IconButton from "../IconButton/IconButton";

const Navbar = ({setIsOpen}:{ setIsOpen: Dispatch<SetStateAction<boolean>>;}) => {
  return (
    <div className="flex gap-6 w-full">
      {/* Left section: Menu */}
      <div className="flex gap-6 items-center mx-4">
        <div className="flex flex-col" onClick={() => setIsOpen(true)}>
          <IconButton>
            <Hamburger />
          </IconButton>
          <span className="text-[12px] font-normal cursor-pointer">Меню</span>
        </div>
      </div>

      <div className="border-b-1 border-b-gray-100 w-full ">
        <nav className="relative flex items-center justify-between w-full gap-6 py-4 bg-white ">
          <Logo />
          {/* Search Bar */}
          <div className=" md:relative md:top-0 md:left-0 absolute top-[100px] left-0  flex flex-1 gap-1 py-2 px-4 items-center w-full md:max-w-[550px] min-w-[345px] rounded-full bg-gray-100 ">
            <Search />
            <input
              type="text"
              placeholder="Търсете продукти, стаи, идеи..."
              className="w-full px-1 rounded-full bg-gray-100 focus:outline-none"
            />
            <div className="rounded-full hover:bg-gray-300 ">
              <input type="file" id="uploadFile" className="hidden" />
              <label htmlFor="uploadFile" className="  cursor-pointer ">
                <Photo />
              </label>
            </div>
          </div>

          {/* Right section: Icons */}
          <div className="flex items-center gap-3 ">
            <div className="flex items-center rounded-full px-4 cursor-pointer hover:bg-gray-300 text-sm text-gray-700">
              <IconButton>
                <Profile />
              </IconButton>
              <span className="hidden md:inline-block pr-2 text-[12px]">
                Вход/Регистрация
              </span>
            </div>
            <IconButton>
              <Truck />
            </IconButton>
            <IconButton>
              <Heart />
            </IconButton>
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </div>
        </nav>
        {/* Second nav */}
        <div>
          <nav className="flex gap-10">
            <p className=" font-bold text-[14px] hover:underline cursor-pointer">
              Продукти
            </p>
            <p className=" font-bold text-[14px] hover:underline cursor-pointer">
              Стаи
            </p>
            <p className=" font-bold text-[14px] hover:underline cursor-pointer">
              Вдъхновение
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
