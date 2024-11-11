import { BiSearchAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';

export default function Navbar() {
    return (
        <header className="relative z-10 bg-white backdrop-blur-xl " >
            <nav className="flex justify-between py-4 items-center px-5 ">
                <div>
                    <button className="flex bg-[#129cffff] py-2 px-3 gap-3 justify-center items-center text-white rounded-xl">
                        <FaPlus className="size-5" />
                        Nuevo correo
                    </button>
                </div>
                <div className="flex justify-center items-center gap-5 ">
                    <button>
                        <BiSearchAlt className="size-5" />
                    </button>
                    <span className="border-l-2 border-slate-400/50 h-5" />
                    <div className="flex gap-3">
                        <button>
                            <IoNotificationsOutline className="size-5" />
                        </button>
                        <button>
                            <BiMessageSquareDetail className="size-5" />
                        </button>
                    </div>
                    <div className="pl-10">
                        <div className="flex justify-center items-center rounded-full">
                            <RxAvatar className="size-7" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
}