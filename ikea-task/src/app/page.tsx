'use client'
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import Navbar from "@/components/Navbar/Navbar";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar setIsOpen={setIsOpen}  />
      <ImageSlider />
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
