import { HiOutlineHome } from "react-icons/hi";
import { FaInbox } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { GoGear } from "react-icons/go";
import { Logo } from "../../../public/img/logo";
import { BiSearchAlt } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";




export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div className="flex flex-auto h-full w-full ">

                <aside className="flex flex-col items-center py-3 bg-white h-screen ">
                    <div className="pb-8">
                        <Logo size={"8"} />
                    </div>
                    <ul className="flex flex-col p-3 gap-3">
                       
                        <Link  href={"/home"} className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                            <HiOutlineHome className="size-6" />
                        </Link>

                            <Link href={"/home/email"} className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                                <FaInbox className="size-6" />
                            </Link>
                       
                            <Link href="/" className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl" >
                                <LuUsers2 className="size-6" />
                            </Link >
                        
                            <Link href="" className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                                <GoShareAndroid className="size-6" />
                            </Link>
                        

                            <Link href="" className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                                <FaRegChartBar className="size-6" />
                            </Link>
                            <Link href="" className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                                <GoGear className="size-6" />
                            </Link>
                        
                    </ul>
                </aside>

                <div className="flex flex-auto flex-col w-full h-full bg-[#dfe1e6ff]">

                    <header className="bg-white" >
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
                                {/* Avatar*/}
                                <div className="pl-10">
                                    <div className="flex justify-center items-center rounded-full">
                                        <RxAvatar className="size-7" />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>

                    <main className=" w-full h-full col-span-6 md:col-span-4  ">
                        {children}
                    </main>

                </div>

            </div>
        </>
    );
}