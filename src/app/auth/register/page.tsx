import { Logo } from "../../../../public/img/logo";
import { FaGoogle } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";

export default function register () {
  return (
    <section>
      <div className="flex flex-auto">

        <section className="relative flex justify-center w-full bg-white">
          <div className="max-h-screen overflow-y-auto w-full no-scroll-cursor">
          <header className="p-5">
            <div className="flex gap-2 items-center">
              <Logo size="7" />
              <h3>WrittesellAi</h3>
            </div>
          </header>
          <main className="flex flex-col items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold">
                Comience su prueba gratuita
              </h1>
              <div className="flex mx-5 bg-sky-500 text-white border-2 border-slate-400 rounded-2xl ">
                <div className="flex h-full items-center bg-white p-2 rounded-l-2xl border-r-2 border-slate-400">
                  <FaGoogle className="text-slate-500" />
                </div>
                <button className="flex items-center justify-center gap-5 text-center  w-full">
                  Registrate en Google
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <form action="POST" className="flex flex-col gap-5 py-5">
              <div className="flex flex-col ">
                <label htmlFor="">Nombre Completo</label>
                <input type="text" placeholder="Nombre y apellidos" className="rounded-2xl border-2 p-2 outline-none" />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="">Nombre de la empresa</label>
                <input type="text" placeholder="El nombre de su empresa" className="rounded-2xl border-2 p-2 outline-none" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Correo electrónico del trabajo</label>
                <input type="text" placeholder="youremail@company.com" className="rounded-2xl border-2 p-2 outline-none" />
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

              <label htmlFor="">Contraseña</label>
              <input type="password" placeholder="Al menos 12 caracteres" className="rounded-2xl border-2 p-2 outline-none" />

              <button className="bg-sky-500 text-white font-semibold rounded-2xl py-2">Únete</button>
            </form>
            <div className="flex py-3 gap-5">
              <p>¿Ya utilizas WrittesellAi?</p>
              <a href="/auth/login" className="text-sky-500">Inicia sección</a>
            </div>
          </main>
          <footer >
            <div className="flex justify-center items-center gap-5 py-5">
              <p>@2022 Marca, Inc</p>
              <a href="">Privacidad</a>
              <a href="">Términos</a>
              <a href="">Mapa del sitio</a>
            </div>
          </footer>
          </div>
        </section>
        <section className="relative hidden  justify-center container  items-center bg-sky-200 xl:flex  ">
          <div className=" bg-white flex flex-col p-5 rounded-2xl ">
            <header className="border-b-2">
              <h3 className="text-sm font-bold text-sky-500">
                Paquete de bienvenida
              </h3>
              <h1 className="text-lg font-bold">Prueba gratuita de 1 mes</h1>
            </header>
            <main className="flex flex-col">
              <ul className="flex flex-col gap-3 py-3">
                <li>
                  <div>
                    <h3 className="text-slate-500">EQUIPO</h3>
                    <p className="font-semibold">5 miembros</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="text-slate-500">BENEFICIOS</h3>
                    <p className="font-semibold">200 correos</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="text-slate-500">SALIDA</h3>
                    <p className="font-semibold">
                      100 clientes / clientes por mes
                    </p>
                  </div>
                </li>
              </ul>
            </main>
            <footer className="flex justify-between py-3">
              <h3 className="font-bold">FACTURA</h3>
              <p className="text-sky-500 font-bold">$0.00</p>
            </footer>
          </div>
        </section>
      </div>
    </section>
  );
}
