"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Navbar from "@/app/components/navbar";
import { GiRedCarpet } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { TiTicket } from "react-icons/ti";
import { BsMenuButton } from "react-icons/bs";
import { useState } from "react";

export default function EmailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [clicButton, setClicButton] = useState<number | null>(null);

  const toggleButton = (i: number) => {
    if (clicButton === i) {
      setClicButton(null);
    } else {
      setClicButton(i);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-auto h-auto">
        <aside className="bg-slate-50 h-full  rounded-t-2xl">
          <div>
            <div className=" border-b-2 border-slate-500/20 py-5">
              <div className="flex justify-between px-5 items-center">
                <h1 className="text-xl font-bold">Vistas</h1>
                <BsMenuButton className="size-5" />
              </div>
            </div>

            <ul className="flex flex-col gap-3 p-5 w-full">
              <li>
                <Link
                  href=""
                  className="flex justify-between items-center text-black/70  hover:bg-sky-500/20 hover:text-sky-500  pr-3 pl-3 py-2 rounded-2xl gap-10"
                >
                  <div className="flex items-center gap-3 w-full">
                    <GiRedCarpet className="size-7" />
                    Tickets sin resolver
                  </div>
                  <p className="text-end">5</p>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex justify-between items-center text-black/70  hover:bg-sky-500/20 hover:text-sky-500  pr-3 pl-3 py-2 rounded-2xl gap-10"
                >
                  <div className="flex items-center gap-3 w-full">
                    <GiRedCarpet className="size-7" />
                    Grupos de tickets
                  </div>
                  <p className="text-end">120</p>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex justify-between items-center text-black/70  hover:bg-sky-500/20 hover:text-sky-500  pr-3 pl-3 py-2 rounded-2xl gap-10"
                >
                  <div className="flex items-center gap-3 ">
                    <GiRedCarpet className="size-7" />
                    Tickets no asignadas
                  </div>
                  <p className="text-end">300</p>
                </Link>
              </li>
              <li>
                <Link
                  href="pending-email"
                  className="flex justify-between items-center text-black/70  hover:bg-sky-500/20 hover:text-sky-500 pr-3 pl-3 py-2 rounded-2xl gap-10"
                >
                  <div className="flex items-center gap-3 ">
                    <GiRedCarpet className="size-7" />
                    Tickets pendientes
                  </div>
                  <p className="text-end">1</p>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex justify-between items-center text-black/70  hover:bg-sky-500/20 hover:text-sky-500 pr-3 pl-3 py-2 rounded-2xl gap-10"
                >
                  <div className="flex items-center gap-3 w-full">
                    <GiRedCarpet className="size-7" />
                    Tickets resueltos
                  </div>
                  <p className="text-end">800</p>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex justify-between items-center text-black/70  hover:bg-sky-500/20 hover:text-sky-500 pr-3 pl-3 py-2 rounded-2xl gap-10"
                >
                  <div className="flex items-center gap-3 w-full">
                    <GiRedCarpet className="size-7" />
                    Tickets eliminados
                  </div>
                  <p className="text-end">1,500</p>
                </Link>
              </li>
            </ul>

            <div>
              <Link
                href="send-email"
                className="flex items-center gap-3 text-yellow-500 px-8"
              >
                Administrar vistas
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </aside>
        <main className="flex flex-auto flex-col">
          {children}
        </main>
      </div>
    </>
  );
}
