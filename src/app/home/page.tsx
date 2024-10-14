"use client";
import "primereact/resources/themes/saga-blue/theme.css"; // Tema PrimeReact
import Navbar from "../components/navbar";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { LiaThumbtackSolid } from "react-icons/lia";
import { AiOutlineEllipsis } from "react-icons/ai";
import { TfiClip } from "react-icons/tfi";
import { Avatar } from "primereact/avatar";
import { LiaBullhornSolid } from "react-icons/lia";
import { Paginator } from "primereact/paginator";
import Table from "../components/Table";
import CardTicker from "../components/CardTicket";
import { Card } from "primereact/card";
import { Badge } from "primereact/badge";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { PiLineVerticalLight } from "react-icons/pi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoFilterSharp } from "react-icons/io5";

export function HomePage() {
  const [dates, setDates] = useState<any | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="flex flex-auto  ">
          {
            // Section is message
          }
          <aside className="relative flex flex-col p-5 bg-[#f7f9faff] rounded-t-xl gap-5 ">
            <section>
              <header className="flex justify-between items-center ">
                <h2 className="flex gap-3 items-center text-xl font-bold">
                  <LiaThumbtackSolid className="size-6" />
                  Fijados
                </h2>
                <button>
                  <AiOutlineEllipsis className="size-5" />
                </button>
              </header>

              <article className="p-3">
                <section className="flex gap-3 bg-white rounded-xl  px-5 py-3">
                  <div>
                    <Avatar
                      className="bg-blue-600 text-white  "
                      label="JO"
                      shape="circle"
                    ></Avatar>
                  </div>
                  <main className="flex flex-col gap-2">
                    <div className="flex justify-between gap-5">
                      <div className=" flex gap-3 items-center text-sm">
                        <p>Javier Ortiz</p>
                        <p className="text-black/50">Repile to you</p>
                      </div>
                      <div className="flex gap-2">
                        <TfiClip className="size-5" />
                        <p className="text-black/50">45s</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center ">
                      <p className="font-bold">Hey, how are you doing?</p>
                      <div className="bg-blue-400 rounded-full size-4" />
                    </div>
                    <p className="text-sm">Email all sent through but ...</p>
                  </main>
                </section>
              </article>
            </section>

            <section>
              <header className="flex justify-between items-center ">
                <h2 className="flex gap-3 items-center text-xl font-bold">
                  <LiaBullhornSolid className="flex size-6" />
                  Recientes
                </h2>
                <button>
                  <AiOutlineEllipsis className="size-5" />
                </button>
              </header>

              <article className="p-3">
                <section className="flex gap-3 bg-white rounded-xl  px-5 py-3">
                  <div>
                    <Avatar
                      className="bg-blue-600 text-white "
                      label="JO"
                      shape="circle"
                    >
                      {/*}
                            <Badge className='overflow-visible bg-green-50' value="3" severity="danger"/>
                        {*/}
                    </Avatar>
                  </div>
                  <main className="flex flex-col gap-2">
                    <div className="flex justify-between gap-5">
                      <div className=" flex gap-3 items-center text-sm">
                        <p>Javier Ortiz</p>
                        <p className="text-black/50">Repile to you</p>
                      </div>
                      <div className="flex gap-2">
                        <TfiClip className="size-5" />
                        <p className="text-black/50">45s</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center ">
                      <p className="font-bold">Hey, how are you doing?</p>
                      <div className="bg-blue-400 rounded-full size-4" />
                    </div>
                    <p className="text-sm">Email all sent through but ...</p>
                  </main>
                </section>
              </article>
            </section>
          </aside>

          {
            //page content
          }
          <section className="flex-auto">
            <div className="container relative flex flex-col px-5 max-h-[714px] overflow-y-auto no-scroll-cursor">
              
              <section className="flex flex-col w-full items-center">
                <header className="flex justify-between w-full  py-10 items-center">
                  <h2 className="font-bold text-3xl">Análisis</h2>
                  <Calendar
                    className="flex items-center text-sm gap-3 py-2 px-3 border rounded-xl"
                    placeholder="jul 13, 2022 - jul 20, 2022"
                    showIcon
                    dateFormat=" M dd, y"
                    value={dates}
                    onChange={(e: any) => setDates(e.value)}
                    selectionMode="range"
                  />
                </header>

                <div className="flex gap-5">
                  <CardTicker
                    title="Total de tickets"
                    total={164}
                    percentage={15}
                  />
                  <CardTicker
                    title="Total de tickets"
                    total={164}
                    percentage={15}
                  />
                  <CardTicker
                    title="Total de tickets"
                    total={164}
                    percentage={15}
                  />
                </div>
              
              </section>

              <section className="flex flex-col w-full items-center pb-10">
                <header className="w-full pt-16 pb-5">
                  <h2 className="font-bold text-3xl">Enviados</h2>
                </header>

                <section className=" flex flex-col ">
                  <header className="flex justify-between">
                    <div className="flex gap-3 items-center py-8">
                      <div className="flex gap-1 items-center  ">
                        <h3 className="text-xl font-semibold">
                          Sin asignar (3)
                        </h3>
                        <LuDot className="size-5 text-slate-300" />
                        <p className="text-sky-400">(1) seleccionado</p>
                      </div>

                      <PiLineVerticalLight className="text-slate-300" />

                      <div className="flex gap-3">
                        <button>
                          <AiOutlineUserAdd className="size-5" />
                        </button>
                        <button>
                          <IoMdInformationCircleOutline className="size-5" />
                        </button>
                        <button>
                          <MdOutlineDeleteOutline className="size-5" />
                        </button>
                      </div>
                    </div>
                    <div>
                        <Paginator first={0} rows={10} totalRecords={120} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
                    </div>
                  </header>
                  <Table />
                </section>

                <section className=" flex flex-col pt-16 ">
                  <header className="flex justify-between">
                    <div className="flex gap-3 items-center py-8">
                      <div className="flex gap-1 items-center  ">
                        <h3 className="text-xl font-semibold">
                          Asignados (3)
                        </h3>
                        <LuDot className="size-5 text-slate-300" />
                        <p className="text-sky-400">(1) seleccionado</p>
                      </div>

                      <PiLineVerticalLight className="text-slate-300" />

                      <div className="flex gap-3">
                        <button>
                          <AiOutlineUserAdd className="size-5" />
                        </button>
                        <button>
                          <IoMdInformationCircleOutline className="size-5" />
                        </button>
                        <button>
                          <MdOutlineDeleteOutline className="size-5" />
                        </button>
                      </div>
                    </div>
                    <div>
                        <Paginator first={0} rows={10} totalRecords={120} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
                    </div>
                  </header>
                  <Table />
                </section>

              </section>

              <footer>
                <div className="flex justify-between items-center py-5 text-slate-400">
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-black">Privacidad</a>
                        <a href="#" className="hover:text-black">Términos</a>
                        <a href="#" className="hover:text-black">Política</a>
                    </div>
                    <div className="flex gap-2">
                        <p>Última actividad:</p>
                        <p>Hace 1 minuto</p>
                    </div>
                </div>
              </footer>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HomePage;
