import { HiOutlineHome } from "react-icons/hi";
import { FaInbox } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { FaRegChartBar } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { GoGear } from "react-icons/go";
import { Logo } from "../../../public/img/logo";
import Link from "next/link";


export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <div className="flex flex-auto h-auto bg-white ">

                <aside className="h-auto border-r-2 border-r-slate-100/50">
                    <div className="flex flex-col items-center py-3 bg-white h-full min-h-svh ">
                        <div className="pb-8">
                            <Logo size={"8"} />
                        </div>
                        <ul className="flex flex-col p-3 gap-3">

                            <Link href={"/home"} className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                                <HiOutlineHome className="size-6" />
                            </Link>

							<Link
								href={"/home/email/send-email"}
								className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl"
							>
								<FaInbox className="size-6" />
							</Link>

                            <Link href="/home/recurrent" className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl" >
                                <LuUsers2 className="size-6" />
                            </Link >

                            <Link href="/home/dashboard" className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                                <FaRegChartBar className="size-6" />
                            </Link>

                            <Link href="#" className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl">
                                <GoShareAndroid className="size-6" />
                            </Link>

							<Link
								href="#"
								className="hover:bg-[#dfe1e6ff] py-2 px-4 rounded-xl"
							>
								<GoGear className="size-6" />
							</Link>
						</ul>
					</div>
				</aside>

				<main className="flex flex-auto flex-col ">{children}</main>
			</div>
		</div>
	);
}
