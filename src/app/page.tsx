
import { FiArrowUpRight } from "react-icons/fi";

export default function HomePage() {
  return (
    <main>

      <section className="relative ">
        <div className="z-1 hidden sm:flex sm:flex-col  justify-start   ">
          <div className="absolute  m-auto   bg-blue-950/50  size-[500px] opacity-55  rounded-full filter blur-3xl mix "></div>
          <div className="absolute  m-auto  bg-blue-950/50 size-[500px] opacity-55 rounded-full filter blur-3xl -bottom-20 right-[610px]"></div>
        </div>

        <section className="container py-20">
          <div className="flex flex-col justify-center items-center gap-10">
            <header className="text-white/80">
              <h1 className="bg-purple-900/50 px-5 rounded-xl font-light">° Beta 1.5 Disponible ahora</h1>
            </header >
            <h1 className="font-semibold text-6xl sm:text-[70px] text-white text-center sm:max-w-[900px]">Escribe, Optimiza, Vende: Tu IA para Correos Personalizados y Efectivos</h1>
            <p className="text-white/50 max-w-80 text-center">Una herramienta inteligente que transforma la manera en que gestionas tus campañas de email marketing.</p>
            <div className="flex text-white gap-6">
              <button className="flex justify-center items-center gap-2 bg-[#3E3AF2] px-5 py-2 rounded-lg">
                Demo
                < FiArrowUpRight className="size-5" />
                </button>
              <button className="border border-white/40 px-5 py-2 rounded-lg">Ver planes</button>
            </div>
          </div>
        </section>
      </section>
    </main>);
}
