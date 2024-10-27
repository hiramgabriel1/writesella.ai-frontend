import Link from "next/link";

export default function ButtonNotify({ icon, tittle, numberNotify }: { icon: any, tittle: string, numberNotify: number }) {
    return (
        <Link href="" className="flex justify-between items-center 
        hover:bg-sky-500/20 hover:text-sky-500 font-semibold px-3 py-2 rounded-2xl">
            <div className="flex items-center gap-3">
                {icon}
                {tittle}
            </div>
            {numberNotify}
        </Link>
    );
}