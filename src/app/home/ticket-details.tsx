import React, { useState } from 'react';
import HomeLayout from '../home/email/layout'; // Asegúrate de importar HomeLayout
import Navbar from '../components/navbar';
import { FaReply } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { UserIcon, PhoneIcon, MailIcon  } from "@heroicons/react/outline";
import { Calendar } from "primereact/calendar";
import { LiaThumbtackSolid, LiaBullhornSolid } from "react-icons/lia";
import { AiOutlineEllipsis, AiOutlineUserAdd } from "react-icons/ai";
import { TfiClip } from "react-icons/tfi";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Avatar } from "primereact/avatar";
import { Paginator } from "primereact/paginator";
import { IoMdInformationCircleOutline,} from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { PiLineVerticalLight } from "react-icons/pi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PlusIcon, FolderOpenIcon, ClockIcon, SaveAsIcon, TrashIcon } from "@heroicons/react/outline";

type Status = 'Nuevo' | 'Abrir' | 'Pendiente' | 'Guardar y Cerrar' | 'Spam';

const TicketDetails: React.FC = () => {
  const [status, setStatus] = useState<Status>('Nuevo');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'Respuesta pública' | 'Nota interna'>('Respuesta pública');

  const handleStatusChange = (newStatus: Status) => {
    setStatus(newStatus);
    setDropdownOpen(false);
  };

  return (
  
<HomeLayout>
    <div>
      <Navbar />
      
      <main className="bg-white min-h-screen">

        <div className="flex flex-auto">
          <aside className="relative flex flex-col p-5 bg-[#f7f9faff] rounded-t-xl gap-5">
            <section>
              <header className="flex justify-between items-center">
                <h2 className="flex gap-3 items-center text-xl font-bold">
                  <LiaThumbtackSolid className="size-6" />
                  Fijados
                </h2>
                <button>
                  <AiOutlineEllipsis className="size-5" />
                </button>
              </header>
              <article className="p-3">
                <section className="flex gap-3 bg-white rounded-xl px-5 py-3">
                  <Avatar className="bg-blue-600 text-white" label="JO" shape="circle" />
                  <main className="flex flex-col gap-2">
                    <div className="flex justify-between gap-5">
                      <div className="flex gap-3 items-center text-sm">
                        <p>Javier Ortiz</p>
                        <p className="text-black/50">Reply to you</p>
                      </div>
                      <div className="flex gap-2">
                        <TfiClip className="size-5" />
                        <p className="text-black/50">45s</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">Hey, how are you doing?</p>
                      <div className="bg-blue-400 rounded-full size-4" />
                    </div>
                    <p className="text-sm">Email all sent through but ...</p>
                  </main>
                </section>
              </article>
            </section>

            <section>
              <header className="flex justify-between items-center">
                <h2 className="flex gap-3 items-center text-xl font-bold">
                  <LiaBullhornSolid className="flex size-6" />
                  Recientes
                </h2>
                <button>
                  <AiOutlineEllipsis className="size-5" />
                </button>
              </header>
              <article className="p-3">
                <section className="flex gap-3 bg-white rounded-xl px-5 py-3">
                  <Avatar className="bg-blue-600 text-white" label="JO" shape="circle" />
                  <main className="flex flex-col gap-2">
                    <div className="flex justify-between gap-5">
                      <div className="flex gap-3 items-center text-sm">
                        <p>Javier Ortiz</p>
                        <p className="text-black/50">Reply to you</p>
                      </div>
                      <div className="flex gap-2">
                        <TfiClip className="size-5" />
                        <p className="text-black/50">45s</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-bold">Hey, how are you doing?</p>
                      <div className="bg-blue-400 rounded-full size-4" />
                    </div>
                    <p className="text-sm">Email all sent through but ...</p>
                  </main>
                </section>
              </article>
            </section>
          </aside>

        {/* Main Content */}
<main className="flex-1 p-5 bg-gray-100 relative min-h-screen">
  <header className="flex items-center justify-between mb-4">
    <div className="flex items-center space-x-3">
      <h2 className="text-l font-semibold text-gray-800">
        #1126 - Verificación de la deficiencia del código
        <span className="block text-gray-500 text-sm">A través del widget de chat</span>
      </h2>
      <div className="relative">
      <div className="flex justify-end">
      <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4.293 7.293a1 1 0 011.414 0L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" />
        </svg>
      </button>
      <button className="p-1 rounded-full hover:bg-gray-100 focus:outline-none">
        <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
      </button>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center focus:outline-none hover:bg-blue-600"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Nuevo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06 0L10 10.92l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

</div>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded w-40">
            {['Nuevo', 'Abrir', 'Pendiente', 'Guardar y Cerrar', 'Spam'].map((item) => (
              <p
                key={item}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleStatusChange}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  </header>

  <div className="grid grid-cols-3 gap-1 min-h-screen">
  <div className="col-span-2 bg-white min-h-screen p-4 rounded shadow h-[250px]">
    <div className="flex flex-col justify-end h-[510px]">
      <div className="flex items-center space-x-4 border-b border-gray-200 pb-2">

      <button
        onClick={() => setActiveTab('Respuesta pública')}
        className={`flex items-center ${
            activeTab === 'Respuesta pública'
                ? 'text-blue-500 font-semibold border-b-2 border-blue-500'
                : 'text-gray-500'
        } pb-2`}
    >
        <FaReply className="mr-1" /> {/* Ícono de Respuesta */}
        Respuesta pública
    </button>
        <button
        onClick={() => setActiveTab('Nota interna')}
        className={`flex items-center ${
            activeTab === 'Nota interna'
                ? 'text-blue-500 font-semibold border-b-2 border-blue-500'
                : 'text-gray-500'
        } pb-2`}
    >
        <MdEdit className="mr-1" /> {/* Ícono de Nota */}
        Nota interna
    </button>
</div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded resize-none min-h-[50px] mb-2 focus:outline-none focus:border-blue-400"
      ></textarea>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-gray-500">
          <span className="cursor-pointer hover:text-gray-700">T</span>
        {/*<span className="cursor-pointer hover:text-gray-700" style={{ filter: 'grayscale(100%)' }}>🙂</span>*/}
          <span className="cursor-pointer hover:text-gray-700">🔗</span>
        </div>
        <button className="px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
          Enviar
        </button>
      </div>
    </div>
</div>




<aside className="bg-white p-6 rounded shadow h-full text-base space-y-4">
      {/* Ticket Information */}
      <div className="space-y-2 mb-4">
        <p className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium">ID:</span> 
          <span className="text-lg text-gray-800 font-semibold">#1126</span>
        </p>
        <p className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium">Asunto:</span> 
          <span className="text-gray-800 font-semibold">Verificación del código...</span>
        </p>
        <p className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium">Tipo:</span> 
          <span className="flex items-center text-blue-600 bg-blue-100 px-0.5 py-0.5 rounded">
            <svg className="w-1 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="..."></path></svg>
            Problema técnico
          </span>
        </p>
        <p className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium">Prioridad:</span> 
          <span className="text-red-600 bg-red-100 px-2 py-0.5 rounded">Alta</span>
        </p>
      </div>
      
      <hr className="border-gray-200" />

      {/* Contact Information */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">Información principal</h3>
        
        <div className="flex items-center space-x-2 text-gray-600 mb-2">
          <UserIcon className="w-5 h-5" />
          <p className="font-semibold text-gray-800">Javier Ortiz</p>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600 mb-2">
          <MailIcon className="w-5 h-5" />
          <p className="text-gray-800">javiero219@hotmail.com</p>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <PhoneIcon className="w-5 h-5" />
          <p className="text-gray-800">(719) 810-9073</p>
        </div>
      </div>
      
      <a href="#" className="text-blue-500 mt-4 block">Ver todo</a>
    </aside>
            </div>
          </main>
        </div>
      </main>
    </div>
    </HomeLayout>
  );
  
};

export default TicketDetails;
