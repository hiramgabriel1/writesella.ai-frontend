"use client"
import "primereact/resources/themes/saga-blue/theme.css";
import Table from "@/app/components/Table";
import { Paginator } from "primereact/paginator";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";

export default function PendingEmail(){
    return(
        <section>
            <div className="container relative flex flex-col bg-white px-5">
                <header className="py-10">
                    <h1 className="text-2xl font-bold">Correos pendientes por enviar</h1>
                </header>
                <main>
                <section className="relative flex flex-col ">
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
                  <Table  maxHeigth={400} />
                </section>
                </main>
            </div>
        </section>
    );
}
