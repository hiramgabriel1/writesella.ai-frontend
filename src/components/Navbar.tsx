"use client";

import { Logo } from "../../public/img/logo";
import { IoMenu } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";


export function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className=" bg-slate-950/90 backdrop-blur-md flex flex-col filter  px-10 py-5  border-b-2 border-b-slate-50/10 lg:flex-row lg:justify-between lg:items-center ">

      <div className="text-white flex flex-auto  items-center justify-between">

        <div className="flex gap-5 items-center">
          <Logo />
          <h1 className="font-semibold text-xl">WriteAndSell.IA </h1>
        </div>

        <button id="menu" onClick={toggleMenu} className="lg:hidden text-white border rounded-lg px-3 py-2 ">
          <IoMenu className="size-5" />
        </button>
      </div>

        <div className={`flex flex-col justify-center items-center py-10 gap-10 ${menuOpen ? "flex" : "hidden"} lg:flex lg:flex-row lg:p-0 xl:gap-72 lg:static lg:w-auto lg:items-center transition-all `}>
        <ul className="flex flex-col text-slate-50/50 gap-10 text-center lg:flex-row">
          <a href="/" key="producto" className="hover:text-white" >producto</a>
          <a href="/" key="caso-de-usos" className="hover:text-white" >Caso de usos</a>
          <a href="/" key="beneficios" className="hover:text-white" >Beneficios</a>
          <a href="/" key="precios" className="hover:text-white" >Precios</a>
          <a href="/" key="faq" className="hover:text-white" >FAQ</a>
        </ul>

        <a href="/auth/register" className="flex text-white border-[#3B3242] border px-4 py-3 rounded-lg  gap-4 items-center">
            Obtener prueba
            <FiArrowUpRight className="size-5 " />
          </a>

      </div>
    </nav>
  );
}