"use client";
import CardChartOne from "../../public/img/cardChartOne";
import Bulb from "../../public/img/Bulb";
import Money from "../../public/img/Money";
import FileVerify from "../../public/img/FIleVerify";
import { WiCloudDown } from "react-icons/wi";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import React, { use, useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const dataAcordion = [
  {
    title: "¿Cómo puedo cancelar mi suscripción?",
    content: "Puedes cancelar tu suscripción en cualquier momento. No hay cargos de cancelación. Simplemente ve a tu página de cuenta y haz clic en 'Cancelar mi suscripción'."
  },
  {
    title: "¿Cómo puedo cancelar mi suscripción?",
    content: "Puedes cancelar tu suscripción en cualquier momento. No hay cargos de cancelación. Simplemente ve a tu página de cuenta y haz clic en 'Cancelar mi suscripción'."
  },
  {
    title: "¿Cómo puedo cancelar mi suscripción?",
    content: "Puedes cancelar tu suscripción en cualquier momento. No hay cargos de cancelación. Simplemente ve a tu página de cuenta y haz clic en 'Cancelar mi suscripción'."
  }
]

export default function HomePage() {

  const [acordionOpen, setAcordionOpen] = useState<null | number>(null);

  const toggleAcordion = (i: number) => {
    if (acordionOpen === i) {
      setAcordionOpen(null)
    } else {
      setAcordionOpen(i)
    }
  };

  const [value, setValue] = useState<any>(null);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main>
        <section className="relative ">

          <div className="z-0 relative hidden sm:flex  justify-start items-start  px-20 h-full w-full ">
            <div className="absolute -translate-y-24  bg-[#120b40ff]  size-[500px] opacity-85  rounded-full filter blur-3xl    "></div>
            <div className="absolute top-20 translate-x-72 bg-[#120b40ff] size-[500px] opacity-85 rounded-full filter blur-3xl   "></div>
          </div>

          <section className="relative container py-20">
            <div className="  flex flex-col justify-center items-center gap-10 pb-36">

              <header className="flex text-white/80">
                <h1 className="flex bg-[#1D064F] py-1 px-5 rounded-md text-sm font-medium items-center gap-3">
                  <GoDotFill className="size-3 text-white" />
                  BETA 1.5 Disponible ahora
                </h1>
              </header >

              <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-white font-semibold  text-4xl sm:text-6xl text-center sm:max-w-[900px]">Escribe, Optimiza, Vende: Tu IA para Correos Personalizados y Efectivos</h1>


                <p className="text-[#978AA1] text-xl max-w-[600px] text-center">Una herramienta inteligente que transforma la manera en que gestionas tus campañas de email marketing.</p>

                <div className="flex text-white gap-6">
                  <button className="flex justify-center items-center gap-2 bg-[#3E3AF2] px-5 py-2 rounded-lg">
                    Demo
                    < FiArrowUpRight className="size-5" />
                  </button>
                  <button className="border border-white/40 px-5 py-2 rounded-lg">Ver planes</button>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="relative">
          <div className=" py-32 bg-white w-full ">
            <div className="container flex flex-col justify-center items-center gap-10">
              <h1 className="text-[#6B5E75] font-semibold text-4xl sm:text-6xl text-center sm:max-w-[900px]">
                Lanza tus campañas de email sin esfuerzo, maximiza tus resultados
              </h1>
              <p className="font- text-xl text-center text-slate-500/90 max-w-[600px]">
                WriteAndSell.IA está diseñado pensando en tus objetivos de marketing, facilitando la creación, personalización y envío de campañas de correo electrónico. Concéntrate en lo que realmente importa: tus resultados de ventas.
              </p>
              <button className="bg-white text-[#7C3AED] border border-[#E1DDE4] p-3 rounded-xl">
                Comenzar
              </button>
            </div>

            <article className=" hidden px-[5%] gap-6 py-24 xl:flex ">

              <aside className="flex flex-col">
                <ul className="flex flex-col gap-3 ">
                  <div className="flex flex-col p-6 pl-10 pr-20 hover:bg-[#E1DDE4] justify-start   rounded-xl gap-5 ">
                    <header className="">
                      <h2 className="text-xl text-[#1D054F]">
                        Adaptable a Todo Tipos de Empresas
                      </h2>
                    </header>
                    <p className="text-[#6B5E75] max-w-[500px] ">
                      Ya sea que manejes un equipo pequeño o una gran corporación, nuestra interfaz intuitiva mantiene a todos coordinados y actualizados. Integra fácilmente con tu CRM y plataformas de marketing.
                    </p>
                    <div className="flex gap-3 items-center hover:text-[#7C3AED]">
                      <a href="/" className=" border-[#6B7280] border-b-2">
                        ver más
                      </a>
                      <FaArrowRight className="size-4" />
                    </div>
                  </div>

                  <div className="flex flex-col p-6 pl-10 pr-20 hover:bg-[#E1DDE4] justify-start   rounded-xl gap-5 ">
                    <header className="">
                      <h2 className="text-xl text-[#1D054F]">
                        Adaptable a Todo Tipos de Empresas
                      </h2>
                    </header>
                    <p className="text-[#6B5E75] max-w-[500px] ">
                      Ya sea que manejes un equipo pequeño o una gran corporación, nuestra interfaz intuitiva mantiene a todos coordinados y actualizados. Integra fácilmente con tu CRM y plataformas de marketing.
                    </p>
                    <div className="flex gap-3 items-center hover:text-[#7C3AED]">
                      <a href="/" className=" border-[#6B7280] border-b-2">
                        ver más
                      </a>
                      <FaArrowRight className="size-4" />
                    </div>
                  </div>

                  <div className="flex flex-col p-6 pl-10 pr-20 hover:bg-[#E1DDE4] justify-start   rounded-xl gap-5 ">
                    <header className="">
                      <h2 className="text-xl text-[#1D054F]">
                        Adaptable a Todo Tipos de Empresas
                      </h2>
                    </header>
                    <p className="text-[#6B5E75] max-w-[500px] ">
                      Ya sea que manejes un equipo pequeño o una gran corporación, nuestra interfaz intuitiva mantiene a todos coordinados y actualizados. Integra fácilmente con tu CRM y plataformas de marketing.
                    </p>
                    <div className="flex gap-3 items-center hover:text-[#7C3AED]">
                      <a href="/" className=" border-[#6B7280] border-b-2">
                        ver más
                      </a>
                      <FaArrowRight className="size-4" />
                    </div>
                  </div>

                </ul>
              </aside>

              <div className="relative flex flex-col flex-auto  justify-center  items-center rounded-2xl ">

                <div className="relative  hidden sm:flex justify-center items-center      ">
                  <div className=" animate-blob absolute m-auto bg-green-500  size-40 opacity-55  rounded-full filter blur-3xl mix-blend-multiply left-8 "></div>
                  <div className=" animate-blob absolute m-auto bg-orange-500 size-40 opacity-55 rounded-full filter blur-xl  mix-blend-multiply top-5 "></div>
                  <div className=" animate-blob absolute m-auto bg-violet-800 size-40 opacity-55 rounded-full filter blur-xl  mix-blend-multiply right-8 "></div>
                </div>

                <div className="relative  bg-white/50 opacity-50 rounded-xl p-5 filter backdrop-blur-2xl border-2 ">
                  <h1 className="text-sm font-medium">cargando...</h1>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="relative">

          <div className="z-0 relative hidden sm:flex  justify-start items-start  px-20 h-full w-full ">
            <div className="absolute top-16  bg-[#120b40ff]  size-[500px] opacity-85  rounded-full filter blur-3xl    "></div>
            <div className="absolute top-56 translate-x-72 bg-[#120b40ff] size-[500px] opacity-85 rounded-full filter blur-3xl   "></div>
          </div>

          <section className="relative container py-32 ">
            <div className="  flex flex-col justify-center items-center gap-10">

              <header className="text-white/80">
                <h1 className="flex bg-[#1D064F] py-1 px-5 rounded-md text-sm font-medium items-center gap-3">
                  <GoDotFill className="size-3 text-white" />
                  BENEFICIOS
                </h1>
              </header >

              <h1 className="text-white font-semibold  text-4xl sm:text-6xl text-center sm:max-w-[900px]">
                Maximiza tu efectividad con IA WriteAndSell.IA está aquí para revolucionar cómo interactúas con tus clientes.
              </h1>

              <p className="text-white/50  text-center">
                WriteAndSell.IA está aquí para ayudarte a conquistar el mercado con estilo.
              </p>

              <div className="flex text-white gap-6">
                <button className="flex justify-center items-center gap-2 bg-[#3E3AF2] px-5 py-2 rounded-lg">
                  Empieza de forma gratuita
                  < FiArrowUpRight className="size-5" />
                </button>
              </div>

            </div>
          </section>
        </section>

        <article className="relative pb-24">
          <div className="flex flex-col justify-center items-center m-10 gap-20">

            <section className=" w-full py-[20%] mx-[5%] border-2 border-slate-600 rounded-2xl">

              <div className="flex flex-col-reverse gap-10  justify-around items-center lg:flex-row">

                <div className="flex flex-col text-white gap-5 px-5">
                  <h1 className="text-xl text-center sm:text-start lg:text-2xl xl:text-4xl max-w-[500px]">
                    Insights Instantáneos y Profundos. Sin Limitaciones de Presupuesto.
                  </h1>
                  <div className="flex justify-center sm:justify-start ">
                    <a href="" className="flex items-center gap-3 border-2 px-4 rounded-xl border-[#3B3242] py-2">
                      Aprende más
                      <FiArrowUpRight className="size-5" />
                    </a>
                  </div>
                </div>

                <div className="px-5">
                  <CardChartOne />
                </div>

              </div>
            </section>

            <section className=" w-full py-[20%] mx-[5%] border-2 border-slate-600 rounded-2xl">

              <div className="flex flex-col gap-10  justify-around items-center lg:flex-row">

                <div className="px-5">
                  <CardChartOne />
                </div>

                <div className="flex flex-col text-white gap-5 px-5">
                  <h1 className="text-xl text-center sm:text-start lg:text-2xl xl:text-4xl max-w-[500px]">
                    Insights Instantáneos y Profundos. Sin Limitaciones de Presupuesto.
                  </h1>
                  <div className="flex justify-center sm:justify-start ">
                    <a href="" className="flex items-center gap-3 border-2 px-4 rounded-xl border-[#3B3242] py-2">
                      Aprende más
                      <FiArrowUpRight className="size-5" />
                    </a>
                  </div>
                </div>

              </div>
            </section>

            <section className=" w-full py-[20%] mx-[5%] border-2 border-slate-600 rounded-2xl">

              <div className="flex flex-col-reverse gap-10  justify-around items-center lg:flex-row">

                <div className="flex flex-col text-white gap-5 px-5">
                  <h1 className="text-xl text-center sm:text-start lg:text-2xl xl:text-4xl max-w-[500px]">
                    Insights Instantáneos y Profundos. Sin Limitaciones de Presupuesto.
                  </h1>
                  <div className="flex justify-center sm:justify-start ">
                    <a href="" className="flex items-center gap-3 border-2 px-4 rounded-xl border-[#3B3242] py-2">
                      Aprende más
                      <FiArrowUpRight className="size-5" />
                    </a>
                  </div>
                </div>

                <div className="px-5">
                  <CardChartOne />
                </div>

              </div>
            </section>

          </div>
        </article>

        <section className=" relative pb-40">

          <header className="flex px-[10%] pb-5 ">
            <h3 className="text-white text-3xl ">
              Todas las herramientas que necesitas
            </h3>
          </header>

          <div className="px-[10%]">
            <ul className="flex flex-col lg:flex-row py-10 gap-16">

              <section className="flex flex-col gap-5">
                <div>
                  <Bulb />
                </div>

                <div className="flex flex-col text-white gap-5 ">
                  <h2 className="text-xl font-medium">
                    Personaliza tus plantillas
                  </h2>
                  <p className="lg:max-w-[400px] text-[#978AA1]">
                    Para cualquier empresa que desee mejorar su comunicación por correo electrónico, sin importar su tamaño.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="" className="text-white border-b-2">
                    Ver más
                  </a>
                  < FaArrowRight className="size-5 text-white" />
                </div>
              </section>

              <section className="flex flex-col gap-5">
                <div>
                  <Money />
                </div>

                <div className="flex flex-col text-white gap-5 ">
                  <h2 className="text-xl font-medium">
                    Personaliza tus plantillas
                  </h2>
                  <p className="lg:max-w-[400px] text-[#978AA1]">
                    Para cualquier empresa que desee mejorar su comunicación por correo electrónico, sin importar su tamaño.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="" className="text-white border-b-2">
                    Ver más
                  </a>
                  < FaArrowRight className="size-5 text-white" />
                </div>
              </section>

              <section className="flex flex-col gap-5">
                <div>
                  <FileVerify />
                </div>

                <div className="flex flex-col text-white gap-5 ">
                  <h2 className="text-xl font-medium">
                    Personaliza tus plantillas
                  </h2>
                  <p className="lg:max-w-[400px] text-[#978AA1]">
                    Para cualquier empresa que desee mejorar su comunicación por correo electrónico, sin importar su tamaño.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="" className="text-white border-b-2">
                    Ver más
                  </a>
                  < FaArrowRight className="size-5 text-white" />
                </div>
              </section>


            </ul>
          </div>

        </section>

        <section className="relative bg-white">
          <div className="  flex flex-col justify-center items-center gap-10 pt-32 ">

            <header className="text-[#7C3AED]">
              <h1 className="flex bg-[#F4F3FB] py-1 px-5 rounded-md text-sm font-medium items-center gap-3">
                <GoDotFill className="size-3 text-[#7C3AED]" />
                BETA 1.5 Disponible ahora
              </h1>
            </header >

            <h1 className="font-semibold text-4xl sm:text-6xl text-[#070018] text-center sm:max-w-[1100px]">
              Planes para todo tipo empresa o clientes
            </h1>

            <p className="text-[#6B5E75] text-xl max-w-[600px] text-center px-10 sm:px-0">
              Comienza con el plan que mejor se adapte a tus necesidades
            </p>
          </div>
        </section>

        <section className="relative py-10 pb-32 bg-white">
          <div className="flex flex-col ">
            <ul className="flex flex-col  justify-center px-[5%] lg:flex-row lg:flex-wrap gap-8 py-6">

              <div className="flex flex-col  border rounded-2xl  ">
                <header className="flex flex-col border-b-2 gap-5 px-[5%] py-10 ">
                  <h1 className="text-3xl font-semibold text-[#3B3242]">
                    Plan gratuito
                  </h1>
                  <p className=" font-medium text-[#6B5E75] max-w-[300px]">
                    orientado a pequeños negocios o pruebas del sistema
                  </p>
                </header>
                <div className="flex flex-col px-[5%] py-5 gap-10">
                  <h1 className="text-5xl font-semibold">
                    Gratis
                  </h1>
                  <ul>
                    <div className="flex gap-2 items-center">
                      <WiCloudDown className="size-7 text-[#7C3AED]" />
                      <p className="text-[#6B5E75]">
                        Hasta 10 correos mensuales
                      </p>
                    </div>
                  </ul>
                </div>
                <footer className=" flex flex-col h-full justify-end px-[5%] py-10">
                  <a href="/" className="flex text-[#7C3AED] justify-center items-center border border-[#E1DDE4] rounded-xl w-full py-3 gap-3 ">
                    Crear una cuenta gratuita
                    <FaArrowRight className="size-5" />
                  </a>
                </footer>
              </div>

              <div className="flex flex-col  border rounded-2xl  ">
                <header className="flex flex-col border-b-2 gap-5 px-[5%] py-10 ">
                  <h1 className="text-3xl font-semibold text-[#3B3242] max-w-[300px]">
                    Plan Básico
                  </h1>
                  <p className=" font-medium text-[#6B5E75]">
                    ideal para pequeñas empresas o freelancers
                  </p>
                </header>
                <main className="flex flex-col px-[5%] py-5 gap-10">
                  <div className="flex items-end">
                    <h1 className="text-5xl font-semibold">
                      $17
                    </h1>
                    <h2 className="text-xl font-semibold">/mo</h2>
                  </div>
                  <ul>
                    <div className="flex gap-2 items-center">
                      <WiCloudDown className="size-7 text-[#7C3AED]" />
                      <p className="text-[#6B5E75]">
                        Hasta 50 correos mensuales
                      </p>
                    </div>
                  </ul>
                </main>
                <footer className="flex flex-col h-full justify-end px-[5%] py-10">
                  <a href="/" className="flex bg-[#7C3AED] text-white justify-center items-center  rounded-xl w-full py-3 gap-3 ">
                    Iniciar una cuenta gratuita
                    <FaArrowRight className="size-5" />
                  </a>
                </footer>
              </div>

              <div className="flex flex-col  border rounded-2xl  ">
                <header className="flex flex-col border-b-2 gap-5 px-[5%] py-10 ">
                  <h1 className="text-3xl font-semibold text-[#3B3242] ">
                    Plan Intermedio
                  </h1>
                  <p className=" font-medium text-[#6B5E75] max-w-[300px]">
                    Diseñado para pequeñas y medianas empresas
                  </p>
                </header>
                <main className="flex flex-col px-[5%] py-5 gap-10">
                  <div className="flex items-end">
                    <h1 className="text-5xl font-semibold">
                      $27
                    </h1>
                    <h2 className="text-xl font-semibold">/mo</h2>
                  </div>
                  <ul>
                    <div className="flex gap-2 items-center">
                      <WiCloudDown className="size-7 text-[#7C3AED]" />
                      <p className="text-[#6B5E75]">
                        Hasta 500 correos mensuales
                      </p>
                    </div>
                  </ul>
                </main>
                <footer className="flex flex-col h-full justify-end px-[5%] py-10">
                  <a href="/" className="flex text-[#7C3AED] border justify-center items-center  rounded-xl w-full py-3 gap-3 ">
                    Iniciar una cuenta gratuita
                    <FaArrowRight className="size-5" />
                  </a>
                </footer>
              </div>

              <div className="flex flex-col  border rounded-2xl  ">
                <header className="flex flex-col border-b-2 gap-5 px-[5%] py-10 ">
                  <h1 className="text-3xl font-semibold text-[#3B3242]">
                    Plan Avanzado
                  </h1>
                  <p className=" font-medium text-[#6B5E75] max-w-[300px]">
                    Diseñado para grandes empresas con necesidades continuas de email marketing
                  </p>
                </header>
                <main className="flex flex-col px-[5%] py-5 gap-10">
                  <div className="flex items-end">
                    <h1 className="text-5xl font-semibold">
                      $
                    </h1>
                    <h2 className="text-xl font-semibold">/mo</h2>
                  </div>
                  <ul>
                    <div className="flex gap-2 items-center">
                      <WiCloudDown className="size-7 text-[#7C3AED]" />
                      <p className="text-[#6B5E75]">
                        Correos ilimitados
                      </p>
                    </div>
                  </ul>
                </main>
                <footer className="flex justify-end h-full px-[5%] py-10">
                  <a href="/" className="flex bg-[#7C3AED] justify-center items-center text-white rounded-xl w-full py-3 gap-3 ">
                    contáctanos
                    <FaArrowRight className="size-5" />
                  </a>
                </footer>
              </div>


            </ul>

            <div className="flex flex-col gap-3 justify-center items-center w-full lg:flex-row lg:gap-10 py-5 text-[#7C3AED]">

              <a href="/" className="flex items-center gap-2">
                <MdOutlineCancel className="size-5" />
                Cancelar en cualquier momento
              </a>
              <a href="/" className="flex gap-2 items-center">
                <CiHeart className="size-5" />
                Prueba gratuita
              </a>
              <a href="/" className="flex items-center gap-2">
                <RiMoneyDollarCircleLine className="size-5" />
                Garantía de devolución de dinero
              </a>
            </div>
          </div>
        </section>

        <section className="relative">

          <div className="flex flex-col justify-center items-center gap-10 pt-32">

            <header className="text-white/80 pb-16">
              <h1 className="flex bg-[#1D064F] py-1 px-5 rounded-md text-sm font-medium items-center gap-3">
                <GoDotFill className="size-3 text-white" />
                FAQ
              </h1>
            </header >

            <h1 className="font-semibold  text-4xl sm:text-6xl py-5 text-white text-center sm:max-w-[1000px]">
              Preguntas Frecuentes
            </h1>

            <section className="container relative py-3 w-full ">
              <div className="flex flex-col gap-3 justify-center items-center  w-auto px-[10%] ">
                {dataAcordion.map((data, i) => {
                  return (
                    <div key={i} className="flex flex-col w-full ">

                      <div className={`flex justify-between items-center cursor-pointer gap-5 px-5 py-5  bg-[#140F21] rounded-t-xl
                        ${acordionOpen === i ? 'rounded-b-none' : 'rounded-b-xl bg-transparent'}
                    `}
                        onClick={() => toggleAcordion(i)}
                      >
                        <h1 className="text-white font-medium">
                          {data.title}
                        </h1>
                        <span className="text-white">
                          {acordionOpen === i ? "-" : "+"}
                        </span>
                      </div>

                      <div className={`px-5 py-3 rounded-b-xl  ${acordionOpen === i ? 'block ' : 'hidden '} bg-[#140F21]`}>
                        <p className="text-[#6B5E75]">
                          {data.content}
                        </p>
                      </div>

                    </div>

                  );
                })}
              </div>

              <div className="relative pt-24">
                <div className=" flex  gap-3 justify-center items-center text-white border-t border-t-[#3B3242] border-opacity-30 py-7">
                  <h2 className="text-xl font-medium">
                    ¿Tienes más preguntas?
                  </h2>
                  <a href="/"
                    className="px-3 py-2 font-medium rounded-xl border border-[#3B3242]">
                    Contáctanos
                  </a>
                </div>
              </div>
            </section>

          </div>
        </section>

        <section className="relative py-32">

          <div className="z-0 relative hidden sm:flex  justify-start items-start   h-full w-full ">
            <div className="absolute -translate-y-36  bg-[#120b40ff]  size-[500px] opacity-85  rounded-full filter blur-3xl    "></div>
            <div className="absolute  translate-x-80 bg-[#120b40ff] size-[500px] opacity-85 rounded-full filter blur-3xl   "></div>
          </div>

          <div className="relative flex flex-col flex-auto gap-10 items-start px-[5%] py-32 lg:flex-row   ">

            <h1 className="w-full text-white text-2xl lg:text-5xl xl:text-6xl font-semibold">
              Impulsa tu negocio con WriteAndSell.IA
            </h1>

            <div className="flex flex-col w-full flex-auto justify-center items-start gap-8   ">
              <h3 className="text-[#978AA1]  lg:max-w-[400px]">
                Prepara tu negocio para el éxito con WriteAndSell.IA, diseñado específicamente para mejorar tu marketing por correo electrónico.
              </h3>
              <form className="flex flex-col gap-6 pr-2 py-2 pl-4 lg:flex-row lg:border lg:border-[#3B3242] w-full justify-between rounded-xl  ">
                <input placeholder="example@gmail.com" type="text"
                  className="bg-transparent border-2 border-[#3B3242] p-3 rounded-xl outline-none pr-3 w-full text-white lg:border-none lg:py-0"
                />
                <button className="text-white px-10 py-3 rounded-xl w-full bg-[#3E3AF2]">
                  Crear cuenta
                </button>
              </form>

            </div>
          </div>

        </section>
      </main>

      <Footer />

    </>
  );

}
