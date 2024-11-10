"use client";
import "primereact/resources/themes/saga-blue/theme.css";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from "react";
import UserTable from "@/app/components/UserTable";

const image = require("../../../../public//img/HeaderRecurrent.jpg");

export default function RecurrentPage() {

  const [data, setData]= useState<any | null>([
    {client: {image: "https://th.bing.com/th/id/OIP.csKI3mTv1bIwR80C3RhcAgHaE8?rs=1&pid=ImgDetMain", name: "Angélica ramos"}, email: "Angélica@gmail.com", phone: "8956-9717", tags: "lead", lastContact: "jul 22, 2022"},
    {client: {image: "https://th.bing.com/th/id/OIP.csKI3mTv1bIwR80C3RhcAgHaE8?rs=1&pid=ImgDetMain", name: "Angélica ramos"}, email: "Angélica@gmail.com", phone: "8956-9717", tags: "lead", lastContact: "jul 22, 2022"},
    {client: {image: "https://th.bing.com/th/id/OIP.csKI3mTv1bIwR80C3RhcAgHaE8?rs=1&pid=ImgDetMain", name: "Angélica ramos"}, email: "Angélica@gmail.com", phone: "8956-9717", tags: "lead", lastContact: "jul 22, 2022"},
  ])

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className=" max-h-[700px] overflow-y-auto no-scroll-cursor">
        <Image src={image} alt="" className="w-full h-[250px] object-cover"></Image>

        <section className="p-[3%]">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Recurrentes</h1>
            <div className="flex gap-5">
              <button className="py-1 px-2 rounded-xl border-2 border-slate-400/50">Importar Lista</button>
              <button className="py-1 px-2 rounded-xl bg-[#139CFFFF] text-white hover:bg-[#007FDAFF]">Agregar cliente</button>
            </div>
          </div>
          <div>
            <div>
              <input type="search" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <DataTable value={data} stripedRows  className="w-full" showHeaders  rowsPerPageOptions={[5, 10, 20]} >
              <Column selectionMode='multiple'></Column>
              <Column field="client" body={UserTable} header="Rodos los clientes (4618)"></Column>
              <Column field="email" header="Email"></Column>
              <Column field="phone" header="Teléfono"></Column>
              <Column field="tags" header="Etiquetas"></Column>
              <Column field="lastContact" header="Último contácto"></Column>
              </DataTable>
              <button className="text-[#139CFFFF]">see more</button>
          </div>
        </section>
      </main>
    </>
  );
}
