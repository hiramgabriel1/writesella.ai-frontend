"use client";
import Image from "next/image";
import { TfiClip } from "react-icons/tfi";
import imagePerfil from "@public/img/imagePerfil.jpg"

type State = "open" | "closed";

export default function TicketOpen({img , title, description, state}: {img?: any, title: string, description: string, state: State | string}) {


    return (
        <div className="flex gap-3 hover:bg-slate-100 p-2">
            
            <Image src={imagePerfil} alt="image" className="h-50 w-20 object-cover rounded-lg" placeholder="blur"/>
            <section className="flex flex-col gap-2">
                <header className="flex items-center justify-between pr-5">
                    <p className="font-normal text-sm">Plantilla</p>
                    <div className="flex  items-center">
                        {state === "closed" && <span className="size-2 bg-blue-500 rounded-full"></span>}
                        <TfiClip className="text-xl" />
                        <p className="text-xs">45s</p>
                    </div>
                </header>
                <main className="flex">
                    <h2 className={`${state === "closed" ? "font-semibold" : "font-normal"}`}>{title}</h2>
                </main>
                <footer className="text-sm">{description}</footer>
            </section>
        </div>
    );
}