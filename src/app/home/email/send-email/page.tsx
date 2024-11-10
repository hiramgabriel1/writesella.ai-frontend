"use client";
import React from "react";
import { useRef } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import { Avatar } from "@mui/material";
import { TabView, TabPanel } from "primereact/tabview";
import { BiNote } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { Chips } from "primereact/chips";
import { SplitButton } from "primereact/splitbutton";
import { Toast } from "primereact/toast";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineTextFields } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import { TbLink } from "react-icons/tb";




export default function SendEmail() {
  const toast = useRef<any | null>(null);
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Updated",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {
        toast.current.show({
          severity: "warn",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/";
      },
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {
        //router.push('/fileupload');
      },
    },
  ];
  const save = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Data Saved",
    });
  };

  return (
    <section className="max-h-[700px]  overflow-y-auto no-scroll-cursor">
      <div className="container  relative flex flex-col bg-white px-5">
        <header className="py-10 px-[3%]">
          <h1 className="text-3xl font-bold">Enviar nuevo correo</h1>
        </header>
        <main>
          <form action="">
            <section className="px-[3%]">
              <div className="flex flex-col gap-10 border-b-2 py-10">
                <div className="flex gap-4 items-center">
                  <label htmlFor="">Tipo:</label>

                  <select
                    name=""
                    id=""
                    className="bg-[#f2f3f5ff] py-1 px-3 rounded-xl outline-none"
                  >
                    <option value="1">Correo</option>
                    <option value="2">Correo masivo </option>
                    <option value="3">Seguimiento de envíos</option>
                  </select>
                </div>
                <div className="flex gap-4 items-center ">
                  <label htmlFor="">Solicitante</label>
                  <div className="flex gap-3 items-center">
                    <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                    <input
                      placeholder="myaccount@gmail.com"
                      className="outline-none"
                      type="search"
                    />
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <label htmlFor="">Asunto</label>

                  <input
                    placeholder="Seguimiento de envíos al extranjero"
                    type="text"
                    className="outline-blue-400 py-2 px-2 w-72 rounded-xl p"
                  />
                </div>
              </div>
            </section>

            <section className="px-[3%]">
              <div className="flex flex-col gap-10 border-b-2 py-10">
                <div className="flex gap-4 items-center">
                  <label htmlFor="">Grupo</label>

                  <Chips value={["Apoyo al cliente"]} />
                </div>
                <div className="flex gap-4 items-center ">
                  <label htmlFor="">Cesionario</label>
                  <div className="flex gap-3 items-center">
                    <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                    <input
                      placeholder="myaccount@gmail.com"
                      className="outline-none"
                      type="search"
                    />
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <label htmlFor="">Seguidores</label>
                  <div className="flex gap-3 items-center">
                    <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                    <input
                      placeholder="myaccount@gmail.com"
                      className="outline-none"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="flex gap-10 py-10 px-[3%] items-center">
              <label htmlFor="">Prioridad</label>
              <Chips value={["Normal"]} />
            </div>

            <footer className="sticky bottom-0 left-0 right-0 bg-white ">
              <TabView>
                <TabPanel header="Repuesta pública" leftIcon={<BiShare />}>
                  <div className="flex flex-col gap-10 py-10 m-0">
                    <div className="flex gap-4 items-center">
                      <input
                        placeholder="send text email"
                        type="text"
                        className="outline-none py-2 px-2  rounded-xl w-full bg-slate-50"
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Nota interna" leftIcon={<BiNote />}>
                  <div className="flex flex-col gap-10 py-10">
                    <div className="flex gap-4 items-center">
                      <input
                        placeholder="send note email"
                        type="text"
                        className="outline-none py-2 px-2 w-72 rounded-xl p"
                      />
                    </div>
                  </div>
                </TabPanel>
              </TabView>

              <div className="flex justify-between px-[3%]">
                <div className="flex items-center gap-5 text-xl">
                  <button>
                    <MdOutlineTextFields />
                  </button>
                  <button>
                    <BsEmojiSmile />
                  </button>
                  <button>
                    <BsPaperclip />
                  </button>
                  <button>
                    <TbLink />
                  </button>
                </div>
                <div>
                  <Toast ref={toast} />
                  <SplitButton
                    label="Enviar como nuevo"
                    className="bg-blue-500 text-white py-2 outline-none  pl-5 pr-3 rounded-xl"
                    onClick={save}
                    model={items}
                  >
                    Enviar
                  </SplitButton>
                </div>
              </div>
            </footer>
          </form>
        </main>
      </div>
    </section>
  );
}
