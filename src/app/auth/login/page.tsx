"use client";
import { Logo } from "../../../../public/img/logo";
import { FaGoogle } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import { Redirect } from "next";
import { redirect } from "next/navigation";
import { title } from "process";

export default function login() {
  return (
    <section>
      <section className="relative flex justify-center w-full bg-white">
        <div className="max-h-screen overflow-y-auto w-full no-scroll-cursor">
          <header className="p-5 top-0 sticky z-10 bg-slate-50/50 backdrop-blur-xl">
            <div className="flex gap-2 items-center">
              <Logo size="7" />
              <h3>WrittesellAi</h3>
            </div>
          </header>
          <main className="flex flex-col items-center py-20">
            <div className="flex flex-col gap-6 text-center ">
              <h1 className="text-3xl font-bold">Login</h1>
              <div className="flex mx-5 bg-sky-500 text-white border-2 border-slate-400 rounded-2xl  justify-between  ">
                <div className="flex h-full items-center bg-white p-2 rounded-l-2xl border-r-2 border-slate-400 px-3">
                  <FaGoogle className="text-slate-500" />
                </div>
                <button className="flex items-center justify-center gap-5 text-center  w-full px-10">
                  Inicia sesión con Google
                  <BsArrowRight />
                </button>
              </div>
            </div>

            <form action={() => {redirect("/home")}} onClick={() => {redirect("/home")}} className="flex flex-col gap-5 py-16">
              <div className="flex flex-col ">
                <label htmlFor="">Correo electrónico</label>
                <input
                  type="text"
                  placeholder="youremail@company.com"
                  className="rounded-2xl border-2 p-2 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Contraseña</label>
                <input
                  type="password"
                  placeholder="Al menos 12 caracteres"
                  className="rounded-2xl border-2 p-2 outline-none"
                />
              </div>

              <div className="flex gap-3 p-3 bg-sky-200/50 rounded-2xl">
                <div>
                  <BiInfoCircle className="text-sky-500 text-lg" />
                </div>
                <div className="flex max-w-[400px]">
                  <p className="font-light">
                    Utilice su correo electrónico corporativo para integrar los
                    correos electrónicos de los clientes, las aplicaciones
                    existentes e invitar a los miembros de su equípo
                  </p>
                </div>
              </div>

              <button className="bg-sky-500 text-white font-semibold rounded-2xl py-2">
                Iniciar Sesión
              </button>
            </form>
          </main>
          <footer>
            <div className="flex justify-center items-center gap-5 py-5">
              <p>@2022 Marca, Inc</p>
              <a href="">Privacidad</a>
              <a href="">Términos</a>
              <a href="">Mapa del sitio</a>
            </div>
          </footer>
        </div>
      </section>
    </section>
  );
}
