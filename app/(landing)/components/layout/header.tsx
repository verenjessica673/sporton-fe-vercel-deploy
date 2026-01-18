"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";

const Header = () => {
  const [isCartOpen, setIsCartPopupOpen] = useState(false);

  return (
    <header className="fixed w-full z-20 backdrop-blur-xl bg-white/50">
      <div className="flex justify-between gap-10 container mx-auto py-7">
      <Image
        src="/img/logo.svg"
        alt="SportOn logo"
        width={127}
        height={30}
      />
      <nav className="flex gap-44">
        <Link 
        href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">Home</Link>
        <Link href="#">Category</Link>
        <Link href="#">Explore Products</Link>
      </nav>
      
      <div className="relative flex gap-10">
  <FiSearch size={24} />
  <button
    className="relative cursor-pointer"
    onClick={() => setIsCartPopupOpen(!isCartOpen)}
  >
    <FiShoppingBag size={24} />
    <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
      {/* isi badge kalau mau ditampilkan angka */}
    </div>
  </button>
  {isCartOpen && <CartPopup />}
</div>
      </div>
    </header>
  );
};

export default Header;
