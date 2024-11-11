import { TbInvoice } from "react-icons/tb";


export default function Purchase() {
    return (
        <div className="flex justify-between border-2 rounded-xl p-2">
            <div className="flex gap-3">
                <span className="flex items-center">
                    <TbInvoice className="text-[#129cffff] p-2 rounded-full bg-[#f0f9ffff] text-4xl" />
                </span>
                <div className="flex flex-col gap-1">
                    <h1 className="font-semibold ">orden #120384</h1>
                    <p className="text-sm text-slate-500/70">Fecha de la factura: May 29, 2022</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <span className="flex items-center justify-center py-1 px-2 bg-[#f0f9ffff] text-[#379ae6ff] rounded-xl">
                    .Entrega.
                </span>
            </div>
        </div>
    )
}