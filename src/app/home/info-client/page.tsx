"use client";
import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import Navbar from "@/app/components/navbar";
import { FiEdit3 } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { PiCity } from "react-icons/pi";
import { Chip } from "primereact/chip";
import Purchase from "@/app/components/purchase";
import { TabView, TabPanel } from "primereact/tabview";
import { useState } from "react";
import Table from "@/app/components/Table";

export default function InfoClient() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <Navbar />
      <section className="flex flex-auto">
        <aside className="flex flex-col flex-shrink-0  px-10 border-r-2 border-r-slate-100/50 max-h-[700px] overflow-y-auto no-scroll-cursor">
          <header className="pt-10 border-b-2">
            <div className="flex justify-between gap-40">
              <div className="flex gap-4 items-center">
                <Avatar className="relative bg-blue-600 size-20" shape="circle">
                  <Badge
                    severity="danger"
                    className="absolute bottom-0 right-0 size-8 bg-green-500 rounded-full border-2 border-white"
                  />
                </Avatar>
                <div>
                  <h3>Cliente</h3>
                  <h2 className="text-2xl font-bold">John Hill</h2>
                </div>
              </div>
              <button className="bg-[#ebedf0ff] my-5 px-3  rounded-full">
                <FiEdit3 className="text-xl" />
              </button>
            </div>
            <span className="flex gap-5 py-5">
              <button className="flex gap-2 items-center px-3 py-2 text-[#129cffff] font-normal bg-[#f0f9ffff] rounded-xl">
                <BiMessageSquareDetail className="text-xl" />
                Abrir chat
              </button>
              <button className="flex gap-2 items-center px-3 py-2 border-2 border-[#e1e4e8ff] rounded-xl">
                <FaPlus className="text-xl" />
                Nueva ticket
              </button>
              <button className="px-3 py-2 border-2 border-[#e1e4e8ff] rounded-xl">
                <MdKeyboardArrowDown className="text-xl" />
              </button>
            </span>
          </header>
          <main>
            <section className="flex flex-col gap-3 py-5 border-b-2">
              <div className="flex gap-3 items-center">
                <span>@</span>
                <p>myemail@gmail.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <span>
                  <FiPhone />
                </span>
                <p>8956-9717</p>
              </div>
              <div className="flex gap-3 items-center">
                <span>
                  <PiCity />
                </span>
                <p>Hill Commercial Company Limited</p>
              </div>
            </section>
            <section className="flex flex-col gap-5 border-b-2 py-5">
              <div className="flex gap-3 items-center">
                <label htmlFor="">Etiquetas</label>
                <span className="flex gap-3">
                  <Chip
                    label="Lead"
                    className="bg-[#129cffff] text-white rounded-3xl px-3 py-1"
                  />
                  <Chip
                    label="Lead"
                    className="bg-[#129cffff] text-white rounded-3xl px-3 py-1"
                  />
                  <Chip
                    label="Lead"
                    className="bg-[#129cffff] text-white rounded-3xl px-3 py-1"
                  />
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="">Zona horaria</label>
                <p>UTC-7</p>
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="">Seguidor</label>
                <p>English (United States)</p>
              </div>
            </section>
            <section className="py-5">
              <div className="flex gap-3 items-end pb-4">
                <h2 className="font-bold">HISTORIAL DE COMPRAS</h2>
                <span className="text-sm bg-slate-100/50">05</span>
              </div>
              <article className="flex flex-col gap-5">
                <Purchase />
                <Purchase />
              </article>
              <div className="flex justify-end pt-5">
                <button className="text-[#129cffff]">ver más</button>
              </div>
            </section>
          </main>
        </aside>
        <main className="flex ">
          <TabView
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
            className="flex flex-col"
          >
            <TabPanel header="Ticket (22)">
              <section className="">
                <Table maxHeigth={700}/>
              </section>
            </TabPanel>
            <TabPanel header="Actividades">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel header="Configuración de seguridad">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </TabPanel>
          </TabView>
        </main>
      </section>
    </>
  );
}
