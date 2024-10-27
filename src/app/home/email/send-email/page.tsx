"use client"
import "primereact/resources/themes/saga-blue/theme.css";
import Table from "@/app/components/Table";
import { Paginator } from "primereact/paginator";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";

export default function SendEmail(){
    return(
        <section>
            <div className="container relative flex flex-col bg-white px-5">
                <header className="py-10">
                    <h1 className="text-2xl font-bold">Enviar nuevo correo</h1>
                </header>
                <main>
                  {/*}
                  <form action="">
                      <section>
                          <div>
                            <div>

                              <label htmlFor="">cvb</label>
                            
                            </div>
                            <div></div>
                            <div></div>
                          </div>
                      </section>
                  </form>
                  {*/}
                </main>
            </div>
        </section>
    );
}
